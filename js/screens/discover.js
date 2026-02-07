// ===== DISCOVER SCREEN =====

function renderDiscoverScreen() {
    const preferences = loadPreferences();
    const allRecipes = getPersonalizedRecommendations(preferences, 20);

    const app = document.getElementById('app');
    app.innerHTML = `
        ${createHeader('Odkrywaj', 'Znajdź nowe przepisy')}
        ${createSearchBar()}
        
        <div class="container">
            <h3 class="mb-md">Popularne kategorie</h3>
            <div class="grid grid-2 gap-md mb-lg">
                ${createCategoryCard('Śniadania', 'sniadanie', '🍳')}
                ${createCategoryCard('Obiady', 'obiad', '🍽️')}
                ${createCategoryCard('Kolacje', 'kolacja', '🌙')}
                ${createCategoryCard('Ulubione', 'favorites', '❤️')}
            </div>
            
            <h3 class="mb-md">Wszystkie przepisy</h3>
            <div class="grid" id="discover-recipe-grid">
                ${allRecipes.map(recipe => createRecipeCard(recipe)).join('')}
            </div>
        </div>
    `;

    attachDiscoverEventListeners();
}

function createCategoryCard(title, category, emoji) {
    return `
        <div class="card category-card" data-category="${category}" style="padding: var(--spacing-lg); text-align: center; cursor: pointer;">
            <div style="font-size: 48px; margin-bottom: var(--spacing-sm);">${emoji}</div>
            <h3>${title}</h3>
        </div>
    `;
}

function attachDiscoverEventListeners() {
    // Category card clicks
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', (e) => {
            const category = e.currentTarget.dataset.category;

            if (category === 'favorites') {
                showFavorites();
            } else {
                window.currentCategory = category;
                navigateToScreen('home');
            }
        });
    });

    // Recipe card clicks
    document.querySelectorAll('.recipe-card').forEach(card => {
        card.addEventListener('click', (e) => {
            if (e.target.closest('.recipe-card-favorite')) return;
            const recipeId = parseInt(card.dataset.recipeId);
            navigateToRecipe(recipeId);
        });
    });

    // Favorite buttons
    document.querySelectorAll('.recipe-card-favorite').forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopPropagation();
            const recipeId = parseInt(button.dataset.recipeId);
            toggleFavorite(recipeId);

            const svg = button.querySelector('svg');
            if (isFavorite(recipeId)) {
                svg.setAttribute('fill', 'var(--primary-green)');
            } else {
                svg.setAttribute('fill', 'none');
            }
        });
    });

    // Search functionality
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', debounce((e) => {
            const query = e.target.value.trim();
            if (query.length > 0) {
                const preferences = loadPreferences();
                let recipes = searchRecipes(query);
                recipes = filterRecipesByPreferences(recipes, preferences);

                const grid = document.getElementById('discover-recipe-grid');
                grid.innerHTML = recipes.map(recipe => createRecipeCard(recipe)).join('');

                // Re-attach listeners
                attachDiscoverEventListeners();
            } else {
                renderDiscoverScreen();
            }
        }, 300));
    }
}

function showFavorites() {
    const favoriteRecipes = favorites.map(id => getRecipeById(id)).filter(r => r);

    const grid = document.getElementById('discover-recipe-grid');
    if (favoriteRecipes.length === 0) {
        grid.innerHTML = '<p class="text-secondary" style="text-align: center; padding: var(--spacing-xl);">Nie masz jeszcze ulubionych przepisów.</p>';
    } else {
        grid.innerHTML = favoriteRecipes.map(recipe => createRecipeCard(recipe)).join('');
        attachDiscoverEventListeners();
    }
}
