// ===== PLANNER SCREEN =====

function renderPlannerScreen() {
    loadMealPlan();
    const preferences = loadPreferences();

    // Get current week
    const today = new Date();
    const weekDays = [];
    for (let i = 0; i < 7; i++) {
        const date = new Date(today);
        date.setDate(today.getDate() + i);
        weekDays.push(date);
    }

    const app = document.getElementById('app');
    app.innerHTML = `
        <div class="container" style="padding-top: var(--spacing-xl);">
            <h1 class="mb-lg">Planer Posiłków</h1>
            
            <div class="week-view mb-lg">
                ${weekDays.map(date => renderDayCard(date, preferences)).join('')}
            </div>
            
            <button class="btn-primary" id="generate-shopping-list">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width: 20px; height: 20px;">
                    <circle cx="9" cy="21" r="1"></circle>
                    <circle cx="20" cy="21" r="1"></circle>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                </svg>
                Wygeneruj listę zakupów
            </button>
        </div>
    `;

    attachPlannerEventListeners();
}

function renderDayCard(date, preferences) {
    const dateString = date.toISOString().split('T')[0];
    const dayPlan = mealPlan[dateString] || {};

    const dayName = date.toLocaleDateString('pl-PL', { weekday: 'short' });
    const dayNumber = date.getDate();
    const isToday = dateString === getCurrentDateString();

    let totalCalories = 0;
    ['breakfast', 'lunch', 'dinner'].forEach(mealType => {
        if (dayPlan[mealType]) {
            const recipe = getRecipeById(dayPlan[mealType]);
            if (recipe) totalCalories += recipe.calories;
        }
    });

    return `
        <div class="card mb-md" style="padding: var(--spacing-md); ${isToday ? 'border: 2px solid var(--primary-green);' : ''}">
            <div class="flex-between mb-md">
                <div>
                    <div class="font-bold">${dayName}</div>
                    <div class="text-secondary" style="font-size: var(--font-size-sm);">${dayNumber}</div>
                </div>
                <div class="text-green font-semibold">${totalCalories} kcal</div>
            </div>
            
            ${renderMealSlot('Śniadanie', 'breakfast', dateString, dayPlan.breakfast)}
            ${renderMealSlot('Obiad', 'lunch', dateString, dayPlan.lunch)}
            ${renderMealSlot('Kolacja', 'dinner', dateString, dayPlan.dinner)}
        </div>
    `;
}

function renderMealSlot(label, mealType, dateString, recipeId) {
    if (recipeId) {
        const recipe = getRecipeById(recipeId);
        if (recipe) {
            return `
                <div class="meal-slot" draggable="true" style="padding: var(--spacing-sm); background: var(--background); border-radius: var(--radius-sm); margin-bottom: var(--spacing-sm); cursor: pointer; position: relative;" data-date="${dateString}" data-meal-type="${mealType}">
                    <div class="text-tertiary" style="font-size: var(--font-size-xs); margin-bottom: 4px;">${label}</div>
                    <div class="font-semibold" style="font-size: var(--font-size-sm);">${escapeHtml(recipe.title)}</div>
                    <div class="text-secondary" style="font-size: var(--font-size-xs);">${recipe.calories} kcal</div>
                    <button class="remove-meal" style="position: absolute; top: 4px; right: 4px; background: none; border: none; color: var(--text-tertiary); padding: 4px; cursor: pointer; display: flex; align-items: center; justify-content: center;" title="Usuń posiłek">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width: 14px; height: 14px;">
                            <path d="M18 6L6 18M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>
            `;
        }
    }

    return `
        <div class="meal-slot empty" style="padding: var(--spacing-sm); background: var(--background); border-radius: var(--radius-sm); margin-bottom: var(--spacing-sm); border: 2px dashed var(--border); cursor: pointer;" data-date="${dateString}" data-meal-type="${mealType}">
            <div class="text-tertiary" style="font-size: var(--font-size-xs); margin-bottom: 4px;">${label}</div>
            <div class="text-secondary" style="font-size: var(--font-size-sm);">+ Dodaj posiłek</div>
        </div>
    `;
}

function attachPlannerEventListeners() {
    // Meal slot clicks
    document.querySelectorAll('.meal-slot').forEach(slot => {
        const removeBtn = slot.querySelector('.remove-meal');

        if (removeBtn) {
            removeBtn.addEventListener('click', (e) => {
                e.stopPropagation(); // Don't trigger slot click
                const date = slot.dataset.date;
                const mealType = slot.dataset.mealType;

                if (mealPlan[date]) {
                    delete mealPlan[date][mealType];
                    saveMealPlan();
                    renderPlannerScreen();
                }
            });
        }

        slot.addEventListener('click', (e) => {
            const date = e.currentTarget.dataset.date;
            const mealType = e.currentTarget.dataset.mealType;

            // Show recipe picker (simplified - just pick first available)
            const preferences = loadPreferences();
            const recipes = getPersonalizedRecommendations(preferences, 5);

            if (recipes.length > 0) {
                // For demo, just add first recipe
                if (!mealPlan[date]) mealPlan[date] = {};
                mealPlan[date][mealType] = recipes[0].id;
                saveMealPlan();
                renderPlannerScreen();
            }
        });

        // Drag and Drop listeners
        slot.addEventListener('dragstart', (e) => {
            e.dataTransfer.setData('sourceDate', e.currentTarget.dataset.date);
            e.dataTransfer.setData('sourceMealType', e.currentTarget.dataset.mealType);
            e.currentTarget.style.opacity = '0.4';
        });

        slot.addEventListener('dragend', (e) => {
            e.currentTarget.style.opacity = '1';
        });

        slot.addEventListener('dragover', (e) => {
            e.preventDefault(); // Allow drop
            e.currentTarget.style.background = 'var(--border)';
        });

        slot.addEventListener('dragleave', (e) => {
            e.currentTarget.style.background = 'var(--background)';
        });

        slot.addEventListener('drop', (e) => {
            e.preventDefault();
            e.currentTarget.style.background = 'var(--background)';

            const sourceDate = e.dataTransfer.getData('sourceDate');
            const sourceMealType = e.dataTransfer.getData('sourceMealType');
            const targetDate = e.currentTarget.dataset.date;
            const targetMealType = e.currentTarget.dataset.mealType;

            // Prevent self-drop
            if (sourceDate === targetDate && sourceMealType === targetMealType) return;

            // Get recipe from source
            if (mealPlan[sourceDate] && mealPlan[sourceDate][sourceMealType]) {
                const recipeId = mealPlan[sourceDate][sourceMealType];

                // If target already has a meal, we could swap, but for now let's just overwrite or move
                if (!mealPlan[targetDate]) mealPlan[targetDate] = {};

                // Move recipe
                mealPlan[targetDate][targetMealType] = recipeId;
                delete mealPlan[sourceDate][sourceMealType];

                saveMealPlan();
                renderPlannerScreen();
            }
        });
    });

    // Generate shopping list button
    const generateButton = document.getElementById('generate-shopping-list');
    if (generateButton) {
        generateButton.addEventListener('click', () => {
            const ingredients = generateShoppingList(mealPlan);
            shoppingList.items = ingredients;
            shoppingList.completed = [];
            saveShoppingList();

            // Navigate to shopping list
            navigateToScreen('shopping-list');
        });
    }
}
