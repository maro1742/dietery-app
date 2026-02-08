// ===== UTILITY FUNCTIONS =====

// Filter recipes based on user preferences
function filterRecipesByPreferences(recipes, preferences) {
    if (!preferences || !preferences.allergies) return recipes;

    return recipes.filter(recipe => {
        // Filter by allergies
        if (preferences.allergies.orzechy && hasNuts(recipe)) return false;
        if (preferences.allergies.laktoza && hasDairy(recipe)) return false;
        if (preferences.allergies.gluten && hasGluten(recipe)) return false;
        if (preferences.allergies.skorupiaki && hasShellfish(recipe)) return false;

        return true;
    });
}

// Check if recipe contains nuts
function hasNuts(recipe) {
    const nutKeywords = ['orzech', 'migdał', 'nerkowiec', 'pistacja', 'orzeszek'];
    return recipe.ingredients.some(ing =>
        nutKeywords.some(keyword => ing.name.toLowerCase().includes(keyword))
    );
}

// Check if recipe contains dairy
function hasDairy(recipe) {
    const dairyKeywords = ['mleko', 'ser', 'jogurt', 'śmietana', 'masło', 'feta'];
    return recipe.ingredients.some(ing =>
        dairyKeywords.some(keyword => ing.name.toLowerCase().includes(keyword))
    );
}

// Check if recipe contains gluten
function hasGluten(recipe) {
    const glutenKeywords = ['mąka', 'chleb', 'makaron', 'pszen'];
    return recipe.ingredients.some(ing =>
        glutenKeywords.some(keyword => ing.name.toLowerCase().includes(keyword))
    );
}

// Check if recipe contains shellfish
function hasShellfish(recipe) {
    const shellfishKeywords = ['krewetka', 'krab', 'homar', 'małż', 'ostryga'];
    return recipe.ingredients.some(ing =>
        shellfishKeywords.some(keyword => ing.name.toLowerCase().includes(keyword))
    );
}

// Calculate total nutrition from multiple recipes
function calculateNutrition(recipes) {
    return recipes.reduce((total, recipe) => {
        total.protein += recipe.nutrition.protein;
        total.carbs += recipe.nutrition.carbs;
        total.fats += recipe.nutrition.fats;
        total.calories += recipe.calories;
        return total;
    }, { protein: 0, carbs: 0, fats: 0, calories: 0 });
}

// Generate shopping list from meal plan
function generateShoppingList(mealPlanData) {
    const ingredients = {};

    Object.values(mealPlanData).forEach(day => {
        ['breakfast', 'lunch', 'dinner'].forEach(mealType => {
            if (day[mealType]) {
                const recipe = getRecipeById(day[mealType]);
                if (recipe) {
                    recipe.ingredients.forEach(ing => {
                        const key = ing.name;
                        if (ingredients[key]) {
                            // Aggregate quantities (simplified - just count)
                            ingredients[key].count++;
                        } else {
                            ingredients[key] = {
                                name: ing.name,
                                quantity: ing.quantity,
                                category: ing.category,
                                count: 1
                            };
                        }
                    });
                }
            }
        });
    });

    return Object.values(ingredients);
}

// Categorize shopping list items
function categorizeShoppingList(items) {
    const categories = {
        'warzywa': { label: 'WARZYWA', items: [] },
        'nabial': { label: 'NABIAŁ', items: [] },
        'produkty-sypkie': { label: 'PRODUKTY SYPKIE', items: [] },
        'owoce': { label: 'OWOCE', items: [] },
        'mieso': { label: 'MIĘSO', items: [] },
        'ryby': { label: 'RYBY', items: [] }
    };

    items.forEach(item => {
        const category = item.category || 'produkty-sypkie';
        if (categories[category]) {
            categories[category].items.push(item);
        }
    });

    return Object.values(categories).filter(cat => cat.items.length > 0);
}

// Format time display
function formatTime(minutes) {
    if (minutes < 60) {
        return `${minutes} min`;
    }
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return mins > 0 ? `${hours}h ${mins}min` : `${hours}h`;
}

// Format calories display
function formatCalories(calories) {
    return `${calories} kcal`;
}

// Format date for display
function formatDate(date) {
    const options = { day: 'numeric', month: 'long' };
    return new Date(date).toLocaleDateString('pl-PL', options);
}

// Get current date string
function getCurrentDateString() {
    const now = new Date();
    return now.toISOString().split('T')[0];
}

// Debounce function for search
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Get personalized recipe recommendations
function getPersonalizedRecommendations(preferences, count = 10) {
    let recipes = [...RECIPES_DB];

    if (!preferences) return recipes.slice(0, count);

    // Filter by allergies
    recipes = filterRecipesByPreferences(recipes, preferences);

    // Prioritize recipes matching diet type
    const dietType = preferences.dietType;
    recipes.sort((a, b) => {
        const aMatch = matchesDietType(a, dietType);
        const bMatch = matchesDietType(b, dietType);
        if (aMatch && !bMatch) return -1;
        if (!aMatch && bMatch) return 1;

        // Prioritize new recipes
        if (a.isNew && !b.isNew) return -1;
        if (!a.isNew && b.isNew) return 1;

        return 0;
    });

    return recipes.slice(0, count);
}

// Check if recipe matches diet type
function matchesDietType(recipe, dietType) {
    const tags = recipe.tags.map(t => t.toLowerCase());

    switch (dietType) {
        case 'keto':
            return tags.includes('keto') || recipe.nutrition.carbs < 15;
        case 'wegetarianska':
            return !hasIngredient(recipe, ['kurczak', 'łosoś', 'mięso', 'ryba']);
        case 'weganska':
            return !hasIngredient(recipe, ['kurczak', 'łosoś', 'mięso', 'ryba', 'jajka', 'ser', 'mleko']);
        case 'paleo':
            return !hasIngredient(recipe, ['quinoa', 'chleb', 'makaron', 'ser']);
        case 'bez-glutenu':
            return tags.includes('bez glutenu') || !hasGluten(recipe);
        default:
            return true;
    }
}

// Check if recipe has specific ingredients
function hasIngredient(recipe, keywords) {
    return recipe.ingredients.some(ing =>
        keywords.some(keyword => ing.name.toLowerCase().includes(keyword))
    );
}

// Escape HTML to prevent XSS
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}
