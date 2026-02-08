// ===== MAIN APP CONTROLLER =====

// Current screen state
let currentScreen = 'home';
let currentRecipeId = null;

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
});

async function initializeApp() {
    // 1. Initialize Firebase Auth Listener
    setupAuthListener();

    // 2. Initial Auth Check
    await AuthService.getCurrentUser();

    // 3. Load user data
    await loadInitialData();

    // 4. Initial Navigation
    // We now always start at home (Guest Mode by default)
    navigateToScreen('home');

    // Attach bottom navigation listeners
    attachBottomNavListeners();

    // Attach FAB listener
    attachFABListener();
}

async function loadInitialData() {
    await loadPreferences();
    await loadFavorites();
    await loadShoppingList();
    await loadMealPlan();
}

function setupAuthListener() {
    auth.onAuthStateChanged((user) => {
        console.log('Firebase Auth state changed:', user ? user.email : 'No user');
        AuthService.user = user;

        if (user) {
            // Load fresh data for the user
            loadInitialData().then(() => {
                // Only redirect to home if we are currently on auth screens
                if (['login', 'signup', 'forgot-password'].includes(currentScreen)) {
                    navigateToScreen('home');
                } else {
                    // Refresh current screen to show user-specific data
                    navigateToScreen(currentScreen);
                }
            });
        } else {
            // If user logged out, refresh the current screen
            // Only force 'login' if we are on a protected screen
            const protectedScreens = ['planner', 'shopping-list', 'preferences'];
            if (protectedScreens.includes(currentScreen)) {
                navigateToScreen('login');
            } else {
                navigateToScreen(currentScreen);
            }
        }
    });
}


// Navigation functions
function navigateToScreen(screenName) {
    // --- NEW SELECTIVE AUTH GUARD ---
    const publicScreens = ['home', 'discover', 'recipe-detail', 'login', 'signup', 'forgot-password', 'reset-password'];
    const isAuthRequired = !publicScreens.includes(screenName);

    if (isAuthRequired && !AuthService.isAuthenticated()) {
        // Instead of forcing login screen instantly, we could show a prompt,
        // but for now, navigating to 'login' is the clearest way to "require auth"
        // for private areas like Planner or Shopping List.
        currentScreen = 'login';
        renderLoginScreen();
        updateBottomNavState('login');
        return;
    }

    // Redirect logged in users away from auth screens (except reset-password)
    if (AuthService.isAuthenticated() && ['login', 'signup', 'forgot-password'].includes(screenName)) {
        screenName = 'home';
    }
    // ------------------

    currentScreen = screenName;

    // Update bottom nav active state
    updateBottomNavState(screenName);

    // Render appropriate screen
    switch (screenName) {
        case 'home':
            document.getElementById('bottom-nav').style.display = 'flex';
            renderHomeScreen();
            break;
        case 'discover':
            document.getElementById('bottom-nav').style.display = 'flex';
            renderDiscoverScreen();
            break;
        case 'planner':
            document.getElementById('bottom-nav').style.display = 'flex';
            renderPlannerScreen();
            break;
        case 'preferences':
            document.getElementById('bottom-nav').style.display = 'flex';
            renderPreferencesScreen();
            break;
        case 'shopping-list':
            document.getElementById('bottom-nav').style.display = 'flex';
            renderShoppingListScreen();
            break;
        case 'login':
            renderLoginScreen();
            break;
        case 'signup':
            renderSignupScreen();
            break;
        case 'forgot-password':
            renderForgotPasswordScreen();
            break;
        case 'reset-password':
            renderResetPasswordScreen();
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
