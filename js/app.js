// ===== MAIN APP CONTROLLER =====

// Current screen state
let currentScreen = 'home';
let currentRecipeId = null;

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
});

function initializeApp() {
    // Load initial screen
    navigateToScreen('home');

    // Attach bottom navigation listeners
    attachBottomNavListeners();

    // Attach FAB listener
    attachFABListener();
}

// Navigation functions
function navigateToScreen(screenName) {
    currentScreen = screenName;

    // Update bottom nav active state
    updateBottomNavState(screenName);

    // Render appropriate screen
    switch (screenName) {
        case 'home':
            renderHomeScreen();
            break;
        case 'discover':
            renderDiscoverScreen();
            break;
        case 'planner':
            renderPlannerScreen();
            break;
        case 'preferences':
            renderPreferencesScreen();
            break;
        case 'shopping-list':
            renderShoppingListScreen();
            break;
        default:
            renderHomeScreen();
    }

    // Scroll to top
    window.scrollTo(0, 0);
}

function navigateToRecipe(recipeId) {
    currentRecipeId = recipeId;
    currentScreen = 'recipe-detail';
    renderRecipeDetailScreen(recipeId);
    window.scrollTo(0, 0);
}

function updateBottomNavState(screenName) {
    // Remove active class from all nav items
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });

    // Add active class to current screen
    const activeItem = document.querySelector(`.nav-item[data-screen="${screenName}"]`);
    if (activeItem) {
        activeItem.classList.add('active');
    }
}

function attachBottomNavListeners() {
    document.querySelectorAll('.nav-item[data-screen]').forEach(button => {
        button.addEventListener('click', (e) => {
            const screen = e.currentTarget.dataset.screen;
            navigateToScreen(screen);
        });
    });
}

function attachFABListener() {
    const fab = document.querySelector('.nav-fab');
    if (fab) {
        fab.addEventListener('click', () => {
            // Open quick add menu or navigate to planner
            navigateToScreen('planner');
        });
    }
}

// Utility function to go back
function goBack() {
    if (currentScreen === 'recipe-detail') {
        navigateToScreen('home');
    } else {
        navigateToScreen('home');
    }
}

// Export navigation functions to global scope
window.navigateToScreen = navigateToScreen;
window.navigateToRecipe = navigateToRecipe;
window.goBack = goBack;
