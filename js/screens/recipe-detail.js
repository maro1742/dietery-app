// ===== RECIPE DETAIL SCREEN =====

let checkedIngredients = [];

function renderRecipeDetailScreen(recipeId) {
    const recipe = getRecipeById(recipeId);
    if (!recipe) {
        renderHomeScreen();
        return;
    }

    const app = document.getElementById('app');
    const activeTab = window.recipeDetailTab || 'skladniki';

    // Calculate nutrition percentages (based on 2000 kcal diet)
    const proteinPercentage = (recipe.nutrition.protein * 4 / 2000) * 100;
    const carbsPercentage = (recipe.nutrition.carbs * 4 / 2000) * 100;
    const fatsPercentage = (recipe.nutrition.fats * 9 / 2000) * 100;

    app.innerHTML = `
        <div style="position: relative;">
            <img src="${recipe.image}" alt="${escapeHtml(recipe.title)}" style="width: 100%; height: 300px; object-fit: cover;">
            ${createBackButton()}
            <div style="position: absolute; top: var(--spacing-lg); right: var(--spacing-lg); display: flex; gap: var(--spacing-sm);">
                <button class="recipe-card-favorite" style="box-shadow: 0 2px 8px var(--shadow);">
                    <svg viewBox="0 0 24 24" fill="${isFavorite(recipeId) ? 'var(--primary-green)' : 'none'}" stroke="currentColor" stroke-width="2">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                </button>
            </div>
        </div>
        
        <div class="container">
            <div style="margin-top: var(--spacing-lg);">
                <div class="recipe-tag mb-sm">${recipe.category.toUpperCase()} • FIT</div>
                <h1 class="mb-md">${escapeHtml(recipe.title)}</h1>
                
                <div class="grid grid-2 gap-sm mb-lg">
                    <div class="card" style="padding: var(--spacing-md); display: flex; align-items: center; gap: var(--spacing-sm);">
                        <svg viewBox="0 0 24 24" fill="none" stroke="var(--primary-green)" stroke-width="2" style="width: 20px; height: 20px;">
                            <circle cx="12" cy="12" r="10"></circle>
                            <polyline points="12 6 12 12 16 14"></polyline>
                        </svg>
                        <div>
                            <div class="font-semibold">${recipe.time} min</div>
                            <div class="text-secondary" style="font-size: var(--font-size-xs);">Czas</div>
                        </div>
                    </div>
                    <div class="card" style="padding: var(--spacing-md); display: flex; align-items: center; gap: var(--spacing-sm);">
                        <svg viewBox="0 0 24 24" fill="none" stroke="var(--primary-green)" stroke-width="2" style="width: 20px; height: 20px;">
                            <line x1="12" y1="20" x2="12" y2="10"></line>
                            <line x1="18" y1="20" x2="18" y2="4"></line>
                            <line x1="6" y1="20" x2="6" y2="16"></line>
                        </svg>
                        <div>
                            <div class="font-semibold">${recipe.difficulty}</div>
                            <div class="text-secondary" style="font-size: var(--font-size-xs);">Poziom</div>
                        </div>
                    </div>
                    <div class="card" style="padding: var(--spacing-md); display: flex; align-items: center; gap: var(--spacing-sm);">
                        <svg viewBox="0 0 24 24" fill="none" stroke="var(--primary-green)" stroke-width="2" style="width: 20px; height: 20px;">
                            <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2M7 2v20M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"></path>
                        </svg>
                        <div>
                            <div class="font-semibold">${recipe.servings} porcje</div>
                            <div class="text-secondary" style="font-size: var(--font-size-xs);">Porcje</div>
                        </div>
                    </div>
                    <div class="card" style="padding: var(--spacing-md); display: flex; align-items: center; gap: var(--spacing-sm);">
                        <svg viewBox="0 0 24 24" fill="none" stroke="var(--primary-green)" stroke-width="2" style="width: 20px; height: 20px;">
                            <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path>
                        </svg>
                        <div>
                            <div class="font-semibold">${recipe.calories} kcal</div>
                            <div class="text-secondary" style="font-size: var(--font-size-xs);">Kalorie</div>
                        </div>
                    </div>
                </div>
                
                <h3 class="mb-md">Wartości Odżywcze</h3>
                <div class="grid grid-3 gap-md mb-lg" style="grid-template-columns: repeat(3, 1fr);">
                    ${createNutritionCard('BIAŁKO', recipe.nutrition.protein, 'g', proteinPercentage)}
                    ${createNutritionCard('WĘGLOWODANY', recipe.nutrition.carbs, 'g', carbsPercentage)}
                    ${createNutritionCard('TŁUSZCZE', recipe.nutrition.fats, 'g', fatsPercentage)}
                </div>
                
                <div class="tabs mb-md">
                    <button class="tab-button ${activeTab === 'skladniki' ? 'active' : ''}" data-tab="skladniki">Składniki</button>
                    <button class="tab-button ${activeTab === 'instrukcje' ? 'active' : ''}" data-tab="instrukcje">Instrukcje</button>
                </div>
                
                <div id="tab-content">
                    ${renderTabContent(recipe, activeTab)}
                </div>
                
                <button class="btn-primary" id="add-to-meal-plan">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width: 20px; height: 20px;">
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                    Dodaj do planu posiłków
                </button>
            </div>
        </div>
    `;

    attachRecipeDetailEventListeners(recipe);
}

function renderTabContent(recipe, activeTab) {
    if (activeTab === 'skladniki') {
        return `
            <div class="ingredients-list">
                ${recipe.ingredients.map((ing, index) =>
            createIngredientItem(ing, index, checkedIngredients.includes(index))
        ).join('')}
            </div>
        `;
    } else {
        return `
            <div class="instructions-list">
                ${recipe.instructions.map((instruction, index) => `
                    <div class="card mb-md" style="padding: var(--spacing-md); display: flex; gap: var(--spacing-md);">
                        <div style="width: 32px; height: 32px; border-radius: 50%; background: var(--primary-green); display: flex; align-items: center; justify-content: center; font-weight: 700; flex-shrink: 0;">
                            ${index + 1}
                        </div>
                        <p>${escapeHtml(instruction)}</p>
                    </div>
                `).join('')}
            </div>
        `;
    }
}

function attachRecipeDetailEventListeners(recipe) {
    // Back button
    const backButton = document.querySelector('.back-button');
    if (backButton) {
        backButton.addEventListener('click', () => {
            checkedIngredients = [];
            renderHomeScreen();
        });
    }

    // Favorite button
    const favoriteButton = document.querySelector('.recipe-card-favorite');
    if (favoriteButton) {
        favoriteButton.addEventListener('click', () => {
            toggleFavorite(recipe.id);
            const svg = favoriteButton.querySelector('svg');
            if (isFavorite(recipe.id)) {
                svg.setAttribute('fill', 'var(--primary-green)');
            } else {
                svg.setAttribute('fill', 'none');
            }
        });
    }

    // Tab switching
    document.querySelectorAll('[data-tab]').forEach(button => {
        button.addEventListener('click', (e) => {
            window.recipeDetailTab = e.target.dataset.tab;
            renderRecipeDetailScreen(recipe.id);
        });
    });

    // Ingredient checkboxes
    document.querySelectorAll('.checkbox-item input[type="checkbox"]').forEach((checkbox, index) => {
        checkbox.addEventListener('change', (e) => {
            const parent = e.target.closest('.checkbox-item');
            if (e.target.checked) {
                parent.classList.add('checked');
                if (!checkedIngredients.includes(index)) {
                    checkedIngredients.push(index);
                }
            } else {
                parent.classList.remove('checked');
                checkedIngredients = checkedIngredients.filter(i => i !== index);
            }
        });
    });

    // Add to meal plan button
    const addButton = document.getElementById('add-to-meal-plan');
    if (addButton) {
        addButton.addEventListener('click', () => {
            addRecipeToMealPlan(recipe.id);

            // Show feedback
            addButton.innerHTML = `
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width: 20px; height: 20px;">
                    <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                Dodano do planu!
            `;
            addButton.style.background = 'var(--text-primary)';
            addButton.style.color = 'var(--surface)';

            setTimeout(() => {
                addButton.innerHTML = `
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width: 20px; height: 20px;">
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                    Dodaj do planu posiłków
                `;
                addButton.style.background = 'var(--primary-green)';
                addButton.style.color = 'var(--text-primary)';
            }, 2000);
        });
    }
}

function addRecipeToMealPlan(recipeId) {
    const today = getCurrentDateString();
    const recipe = getRecipeById(recipeId);

    if (!mealPlan[today]) {
        mealPlan[today] = {};
    }

    // Add to appropriate meal slot based on category
    const mealType = recipe.category === 'sniadanie' ? 'breakfast' :
        recipe.category === 'obiad' ? 'lunch' : 'dinner';

    mealPlan[today][mealType] = recipeId;
    saveMealPlan();

    // Regenerate shopping list
    const ingredients = generateShoppingList(mealPlan);
    shoppingList.items = ingredients;
    saveShoppingList();
}
