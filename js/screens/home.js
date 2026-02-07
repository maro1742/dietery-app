// ===== HOME SCREEN =====

function renderHomeScreen() {
    const preferences = loadPreferences();
    const currentCategory = window.currentCategory || 'wszystkie';

    const app = document.getElementById('app');
    app.innerHTML = `
        <div class="header-with-logo">
            <div class="logo-container">
                <img src="assets/logo.svg" alt="FitSmak Logo" class="app-logo">
                <div class="brand-name">
                    <span class="brand-fit">Fit</span><span class="brand-smak">Smak</span>
                </div>
                <p class="brand-tagline">Twoja spersonalizowana kuchnia w zasięgu ręki</p>
            </div>
        </div>
        ${createSearchBar()}
        
        <div class="container">
            <div class="tabs" id="category-tabs">
                <button class="tab-button ${currentCategory === 'wszystkie' ? 'active' : ''}" data-category="wszystkie">Wszystkie</button>
                <button class="tab-button ${currentCategory === 'sniadanie' ? 'active' : ''}" data-category="sniadanie">Śniadanie</button>
                <button class="tab-button ${currentCategory === 'obiad' ? 'active' : ''}" data-category="obiad">Obiady</button>
                <button class="tab-button ${currentCategory === 'kolacja' ? 'active' : ''}" data-category="kolacja">Kolacja</button>
            </div>
        </div>
        
        <div class="container">
            <div class="flex-between mb-md">
                <h2>Polecane dla Ciebie</h2>
                <button class="text-green font-semibold" style="background: none; font-size: var(--font-size-sm);">
                    Zobacz wszystko
                </button>
            </div>
            
            <div class="grid" id="recipe-grid">
                ${renderRecipeGrid(currentCategory, preferences)}
            </div>
        </div>
    `;

    attachHomeEventListeners();
}

function renderRecipeGrid(category, preferences) {
    let recipes = getRecipesByCategory(category);
    recipes = getPersonalizedRecommendations(preferences, 20);

    if (category !== 'wszystkie') {
        recipes = recipes.filter(r => r.category === category);
    }

    if (recipes.length === 0) {
        return '<p class="text-secondary" style="text-align: center; padding: var(--spacing-xl);">Brak przepisów spełniających Twoje preferencje.</p>';
    }

    return recipes.map(recipe => createRecipeCard(recipe)).join('');
}

function attachHomeEventListeners() {
    // Category tab navigation
    document.querySelectorAll('.tab-button').forEach(button => {
        button.addEventListener('click', (e) => {
            const category = e.target.dataset.category;
            window.currentCategory = category;
            renderHomeScreen();
        });
    });

    // Recipe card clicks
    document.querySelectorAll('.recipe-card').forEach(card => {
        card.addEventListener('click', (e) => {
            // Don't navigate if clicking favorite button
            if (e.target.closest('.recipe-card-favorite')) return;

            const recipeId = parseInt(card.dataset.recipeId);
            navigateToRecipe(recipeId);
        });
    });

    // Favorite button clicks
    document.querySelectorAll('.recipe-card-favorite').forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopPropagation();
            const recipeId = parseInt(button.dataset.recipeId);
            toggleFavorite(recipeId);

            // Update UI
            const svg = button.querySelector('svg');
            if (isFavorite(recipeId)) {
                svg.setAttribute('fill', 'var(--primary-green)');
                button.classList.add('active');
            } else {
                svg.setAttribute('fill', 'none');
                button.classList.remove('active');
            }
        });
    });

    // Search functionality
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', debounce((e) => {
            const query = e.target.value.trim();
            if (query.length > 0) {
                performSearch(query);
            } else {
                renderHomeScreen();
            }
        }, 300));
    }
}

function performSearch(query) {
    const preferences = loadPreferences();
    let recipes = searchRecipes(query);
    recipes = filterRecipesByPreferences(recipes, preferences);

    const recipeGrid = document.getElementById('recipe-grid');
    if (recipes.length === 0) {
        recipeGrid.innerHTML = '<p class="text-secondary" style="text-align: center; padding: var(--spacing-xl);">Nie znaleziono przepisów.</p>';
    } else {
        recipeGrid.innerHTML = recipes.map(recipe => createRecipeCard(recipe)).join('');

        // Re-attach event listeners for new cards
        document.querySelectorAll('.recipe-card').forEach(card => {
            card.addEventListener('click', (e) => {
                if (e.target.closest('.recipe-card-favorite')) return;
                const recipeId = parseInt(card.dataset.recipeId);
                navigateToRecipe(recipeId);
            });
        });

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
    }
}
