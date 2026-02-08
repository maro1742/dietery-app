// ===== REUSABLE UI COMPONENTS =====

// Recipe Card Component
function createRecipeCard(recipe) {
    const isFav = isFavorite(recipe.id);

    return `
        <div class="recipe-card" data-recipe-id="${recipe.id}">
            <div style="position: relative;">
                <img src="${recipe.image}" alt="${escapeHtml(recipe.title)}" class="recipe-card-image">
                ${recipe.isNew ? '<div class="recipe-card-badge">NOWOŚĆ</div>' : ''}
                <button class="recipe-card-favorite ${isFav ? 'active' : ''}" data-recipe-id="${recipe.id}">
                    <svg viewBox="0 0 24 24" fill="${isFav ? 'var(--primary-green)' : 'none'}" stroke="currentColor" stroke-width="2">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                </button>
            </div>
            <div class="recipe-card-content">
                <h3 class="recipe-card-title">${escapeHtml(recipe.title)}</h3>
                <div class="recipe-card-meta">
                    <div class="recipe-card-meta-item">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="12" cy="12" r="10"></circle>
                            <polyline points="12 6 12 12 16 14"></polyline>
                        </svg>
                        <span>${recipe.time} min</span>
                    </div>
                    <div class="recipe-card-meta-item">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                        </svg>
                        <span>${recipe.calories} kcal</span>
                    </div>
                </div>
                <div class="recipe-card-tags">
                    ${recipe.tags.map(tag => `<span class="recipe-tag">${tag}</span>`).join('')}
                </div>
            </div>
        </div>
    `;
}

// Ingredient Item Component
function createIngredientItem(ingredient, index, isChecked = false) {
    return `
        <div class="checkbox-item ${isChecked ? 'checked' : ''}" data-index="${index}">
            <input type="checkbox" id="ingredient-${index}" ${isChecked ? 'checked' : ''}>
            <label for="ingredient-${index}">${escapeHtml(ingredient.name)}</label>
            <span class="checkbox-item-quantity">${escapeHtml(ingredient.quantity)}</span>
        </div>
    `;
}

// Nutrition Card Component
function createNutritionCard(label, value, unit, percentage) {
    return `
        <div class="card" style="padding: var(--spacing-md);">
            <div style="text-align: center;">
                <div style="font-size: var(--font-size-xl); font-weight: 700; color: var(--primary-green);">
                    ${value}${unit}
                </div>
                <div style="font-size: var(--font-size-sm); color: var(--text-secondary); margin-top: 4px;">
                    ${label}
                </div>
            </div>
            <div class="progress-bar" style="margin-top: var(--spacing-sm);">
                <div class="progress-bar-fill" style="width: ${percentage}%"></div>
            </div>
        </div>
    `;
}

// Toggle Switch Component
function createToggleSwitch(id, icon, title, description, isChecked = false) {
    return `
        <div class="toggle-item">
            <div class="toggle-icon" style="background: ${getIconBackground(id)};">
                ${icon}
            </div>
            <div class="toggle-content">
                <div class="toggle-title">${title}</div>
                <div class="toggle-description">${description}</div>
            </div>
            <label class="toggle-switch">
                <input type="checkbox" data-allergy="${id}" ${isChecked ? 'checked' : ''}>
                <span class="toggle-slider"></span>
            </label>
        </div>
    `;
}

function getIconBackground(allergyType) {
    const backgrounds = {
        'orzechy': '#FFE5E5',
        'laktoza': '#E5F0FF',
        'gluten': '#FFF5E5',
        'skorupiaki': '#FFE5F0'
    };
    return backgrounds[allergyType] || '#F0F0F0';
}

// Pill Button Component
function createPillButton(label, value, isActive = false) {
    return `
        <button class="btn-secondary ${isActive ? 'active' : ''}" data-diet="${value}">
            ${label}
        </button>
    `;
}

// Goal Card Component
function createGoalCard(id, title, image, isSelected = false) {
    return `
        <div class="card goal-card ${isSelected ? 'selected' : ''}" data-goal="${id}" style="cursor: pointer; position: relative; padding: var(--spacing-lg); text-align: center; ${isSelected ? 'border: 3px solid var(--primary-green);' : ''}">
            ${isSelected ? `
                <div style="position: absolute; top: 10px; right: 10px; width: 28px; height: 28px; background: var(--primary-green); border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                    <svg viewBox="0 0 24 24" fill="none" stroke="var(--text-primary)" stroke-width="3" style="width: 16px; height: 16px;">
                        <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                </div>
            ` : ''}
            <img src="${image}" alt="${title}" style="width: 120px; height: 120px; border-radius: 50%; margin: 0 auto var(--spacing-md);">
            <h3 style="font-size: var(--font-size-lg);">${title}</h3>
        </div>
    `;
}

// Shopping List Category Component
function createShoppingCategory(category, items, completedItems) {
    return `
        <div class="shopping-category" style="margin-bottom: var(--spacing-lg);">
            <div class="flex-between mb-md">
                <h3 style="font-size: var(--font-size-base); font-weight: 700;">${category.label}</h3>
                <span class="recipe-tag">${items.length} SZT.</span>
            </div>
            <div class="shopping-items">
                ${items.map((item, index) => {
        const isCompleted = completedItems.includes(item.name);
        return `
                        <div class="checkbox-item ${isCompleted ? 'checked' : ''}" data-item-name="${escapeHtml(item.name)}">
                            <input type="checkbox" id="shop-${category.label}-${index}" ${isCompleted ? 'checked' : ''}>
                            <label for="shop-${category.label}-${index}">${escapeHtml(item.name)}</label>
                            <span class="checkbox-item-quantity">${escapeHtml(item.quantity)}</span>
                        </div>
                    `;
    }).join('')}
            </div>
        </div>
    `;
}

// Header Component
function createHeader(title, subtitle = '') {
    return `
        <div class="screen-header">
            <div class="brand-header-top" onclick="navigateToScreen('home')" style="cursor: pointer;">
                <img src="assets/logo.svg" alt="FitSmak Logo" class="app-logo">
                <div class="brand-name">
                    <span class="brand-fit">Fit</span><span class="brand-smak">Smak</span>
                </div>
            </div>
            <div class="flex-between">
                <div>
                    <h1 style="font-size: var(--font-size-xl);">${title}</h1>
                    ${subtitle ? `<p class="text-secondary" style="font-size: var(--font-size-sm); margin-top: 2px;">${subtitle}</p>` : ''}
                </div>
                <button class="nav-item" style="padding: var(--spacing-sm); color: var(--text-secondary);">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width: 24px; height: 24px;">
                        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                        <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                    </svg>
                </button>
            </div>
        </div>
    `;
}

// Search Bar Component
function createSearchBar(placeholder = "Szukaj przepisów lub składników...") {
    return `
        <div class="container mb-md">
            <div class="search-bar">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.35-4.35"></path>
                </svg>
                <input type="text" placeholder="${placeholder}" id="search-input">
            </div>
        </div>
    `;
}

// Back Button Component
function createBackButton() {
    return `
        <button class="back-button" style="position: absolute; top: var(--spacing-lg); left: var(--spacing-lg); width: 40px; height: 40px; border-radius: 50%; background: var(--surface); display: flex; align-items: center; justify-content: center; z-index: 10; box-shadow: 0 2px 8px var(--shadow);">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width: 20px; height: 20px;">
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
        </button>
    `;
}
