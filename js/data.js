// ===== DATA LAYER =====
// Recipe Database with Polish recipes
const RECIPES_DB = [
    {
        id: 1,
        title: "Bowl z pieczoną ciecierzycą",
        category: "kolacja",
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&h=600&fit=crop",
        time: 20,
        calories: 520,
        difficulty: "łatwe",
        servings: 2,
        isNew: true,
        tags: ["ŁATWE", "BEZ GLUTENU"],
        nutrition: {
            protein: 32,
            carbs: 12,
            fats: 24
        },
        ingredients: [
            { name: "Ciecierzyca", quantity: "200g", category: "produkty-sypkie" },
            { name: "Awokado", quantity: "1 szt.", category: "warzywa" },
            { name: "Pomidorki koktajlowe", quantity: "150g", category: "warzywa" },
            { name: "Rukola", quantity: "50g", category: "warzywa" },
            { name: "Oliwa z oliwek", quantity: "2 łyżki", category: "produkty-sypkie" },
            { name: "Sok z cytryny", quantity: "1 łyżka", category: "warzywa" }
        ],
        instructions: [
            "Rozgrzej piekarnik do 200°C.",
            "Osusz ciecierzycę i wymieszaj z oliwą, solą i przyprawami.",
            "Piecz przez 25 minut do złocistości.",
            "Pokrój awokado i pomidorki.",
            "Ułóż wszystkie składniki w misce i polej sokiem z cytryny."
        ]
    },
    {
        id: 2,
        title: "Omlet z warzywami",
        category: "sniadanie",
        image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=800&h=600&fit=crop",
        time: 15,
        calories: 320,
        difficulty: "łatwe",
        servings: 1,
        isNew: false,
        tags: ["ŁATWE", "KETO"],
        nutrition: {
            protein: 24,
            carbs: 8,
            fats: 18
        },
        ingredients: [
            { name: "Jajka", quantity: "3 szt.", category: "nabial" },
            { name: "Papryka", quantity: "1/2 szt.", category: "warzywa" },
            { name: "Szpinak", quantity: "50g", category: "warzywa" },
            { name: "Ser feta", quantity: "30g", category: "nabial" },
            { name: "Masło", quantity: "1 łyżka", category: "nabial" }
        ],
        instructions: [
            "Rozbij jajka do miski i ubij widelcem.",
            "Pokrój paprykę w kostkę.",
            "Rozgrzej masło na patelni.",
            "Wlej jajka i dodaj warzywa.",
            "Smaż 3-4 minuty, posyp fetą i złóż na pół."
        ]
    },
    {
        id: 3,
        title: "Sałatka z kurczakiem i quinoa",
        category: "obiad",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=600&fit=crop",
        time: 30,
        calories: 450,
        difficulty: "średnie",
        servings: 2,
        isNew: true,
        tags: ["BEZ GLUTENU", "WYSOKOBIAŁKOWE"],
        nutrition: {
            protein: 38,
            carbs: 35,
            fats: 15
        },
        ingredients: [
            { name: "Pierś z kurczaka", quantity: "300g", category: "mieso" },
            { name: "Quinoa", quantity: "100g", category: "produkty-sypkie" },
            { name: "Ogórek", quantity: "1 szt.", category: "warzywa" },
            { name: "Pomidor", quantity: "2 szt.", category: "warzywa" },
            { name: "Sałata", quantity: "100g", category: "warzywa" },
            { name: "Oliwa", quantity: "2 łyżki", category: "produkty-sypkie" }
        ],
        instructions: [
            "Ugotuj quinoa według instrukcji na opakowaniu.",
            "Pokrój kurczaka i usmaż na patelni.",
            "Pokrój warzywa w kostkę.",
            "Wymieszaj wszystkie składniki.",
            "Polej oliwą i dopraw do smaku."
        ]
    },
    {
        id: 4,
        title: "Smoothie bowl z jagodami",
        category: "sniadanie",
        image: "https://images.unsplash.com/photo-1590301157890-4810ed352733?w=800&h=600&fit=crop",
        time: 10,
        calories: 280,
        difficulty: "łatwe",
        servings: 1,
        isNew: false,
        tags: ["WEGAŃSKIE", "ŁATWE"],
        nutrition: {
            protein: 12,
            carbs: 45,
            fats: 8
        },
        ingredients: [
            { name: "Jagody mrożone", quantity: "150g", category: "owoce" },
            { name: "Banan", quantity: "1 szt.", category: "owoce" },
            { name: "Mleko migdałowe", quantity: "100ml", category: "nabial" },
            { name: "Granola", quantity: "30g", category: "produkty-sypkie" },
            { name: "Nasiona chia", quantity: "1 łyżka", category: "produkty-sypkie" }
        ],
        instructions: [
            "Zmiksuj jagody, banana i mleko na gładką masę.",
            "Przelej do miski.",
            "Posyp granolą i nasionami chia.",
            "Udekoruj świeżymi owocami."
        ]
    },
    {
        id: 5,
        title: "Łosoś z brokułami",
        category: "kolacja",
        image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800&h=600&fit=crop",
        time: 25,
        calories: 480,
        difficulty: "średnie",
        servings: 2,
        isNew: false,
        tags: ["KETO", "WYSOKOBIAŁKOWE"],
        nutrition: {
            protein: 42,
            carbs: 10,
            fats: 28
        },
        ingredients: [
            { name: "Filet z łososia", quantity: "300g", category: "ryby" },
            { name: "Brokuły", quantity: "300g", category: "warzywa" },
            { name: "Czosnek", quantity: "2 ząbki", category: "warzywa" },
            { name: "Oliwa", quantity: "2 łyżki", category: "produkty-sypkie" },
            { name: "Cytryna", quantity: "1/2 szt.", category: "owoce" }
        ],
        instructions: [
            "Rozgrzej piekarnik do 180°C.",
            "Posmaruj łososia oliwą i przyprawami.",
            "Piecz 15-18 minut.",
            "Ugotuj brokuły na parze.",
            "Podawaj z plasterkiem cytryny."
        ]
    },
    {
        id: 6,
        title: "Puszysta jajecznica",
        category: "sniadanie",
        image: "assets/images/scrambled-eggs.png",
        time: 10,
        calories: 350,
        difficulty: "łatwe",
        servings: 1,
        isNew: true,
        tags: ["ŁATWE", "WYSOKOBIAŁKOWE"],
        nutrition: {
            protein: 26,
            carbs: 4,
            fats: 22
        },
        ingredients: [
            { name: "Jajka", quantity: "3 szt.", category: "nabial" },
            { name: "Masło", quantity: "1 łyżka", category: "nabial" },
            { name: "Szczypiorek", quantity: "pęczek", category: "warzywa" },
            { name: "Sól i pieprz", quantity: "do smaku", category: "przyprawy" }
        ],
        instructions: [
            "Rozbij jajka do miseczki i lekką wymieszaj.",
            "Rozgrzej masło na patelni na małym ogniu.",
            "Wlej jajka i smaż powoli, ciągle mieszając.",
            "Zdejmij z ognia, gdy jajka są jeszcze lekko wilgotne.",
            "Posyp posiekanym szczypiorkiem przed podaniem."
        ]
    }
];

// User Preferences Model
const DEFAULT_PREFERENCES = {
    goal: "utrata-wagi", // "utrata-wagi" | "budowa-miesni"
    dietType: "keto", // "keto" | "wegetarianska" | "weganska" | "paleo" | "bez-glutenu"
    allergies: {
        orzechy: true,
        laktoza: false,
        gluten: false,
        skorupiaki: true
    }
};

// Shopping List State
let shoppingList = {
    items: [],
    completed: []
};

// Meal Plan State
let mealPlan = {
    // Format: { date: { breakfast: recipeId, lunch: recipeId, dinner: recipeId } }
};

// Favorites
let favorites = [];

// User Preferences State
let userPreferences = DEFAULT_PREFERENCES;

// ===== DATA LAYER WITH FIREBASE SYNC =====

// Helper to get user document reference
function getUserDocRef() {
    if (!AuthService.user) return null;
    return typeof db !== 'undefined' ? db.collection('users').doc(AuthService.user.uid) : null;
}

// ===== LOCAL STORAGE HELPERS (with Firestore sync) =====
async function loadPreferences() {
    let prefs = null;
    const userDoc = getUserDocRef();
    if (userDoc) {
        try {
            const doc = await userDoc.get();
            if (doc.exists && doc.data().preferences) {
                prefs = doc.data().preferences;
            }
        } catch (e) { console.error('Error loading preferences from Firestore:', e); }
    }

    if (!prefs) {
        const stored = localStorage.getItem('userPreferences');
        prefs = stored ? JSON.parse(stored) : DEFAULT_PREFERENCES;
    }

    userPreferences = prefs;
    return userPreferences;
}

function getPreferences() {
    return userPreferences;
}

async function savePreferences(preferences) {
    userPreferences = preferences;
    localStorage.setItem('userPreferences', JSON.stringify(preferences));
    const userDoc = getUserDocRef();
    if (userDoc) {
        try {
            await userDoc.set({ preferences }, { merge: true });
        } catch (e) { console.error('Error saving preferences to Firestore:', e); }
    }
}

async function loadFavorites() {
    const userDoc = getUserDocRef();
    if (userDoc) {
        try {
            const doc = await userDoc.get();
            if (doc.exists && doc.data().favorites) {
                favorites = doc.data().favorites;
                return favorites;
            }
        } catch (e) { console.error('Error loading favorites from Firestore:', e); }
    }
    const stored = localStorage.getItem('favorites');
    favorites = stored ? JSON.parse(stored) : [];
    return favorites;
}

async function saveFavorites() {
    localStorage.setItem('favorites', JSON.stringify(favorites));
    const userDoc = getUserDocRef();
    if (userDoc) {
        try {
            await userDoc.set({ favorites }, { merge: true });
        } catch (e) { console.error('Error saving favorites to Firestore:', e); }
    }
}

async function toggleFavorite(recipeId) {
    const index = favorites.indexOf(recipeId);
    if (index > -1) {
        favorites.splice(index, 1);
    } else {
        favorites.push(recipeId);
    }
    await saveFavorites();
}

function isFavorite(recipeId) {
    return favorites.includes(recipeId);
}

async function loadShoppingList() {
    const userDoc = getUserDocRef();
    if (userDoc) {
        try {
            const doc = await userDoc.get();
            if (doc.exists && doc.data().shoppingList) {
                shoppingList = doc.data().shoppingList;
                return shoppingList;
            }
        } catch (e) { console.error('Error loading shopping list from Firestore:', e); }
    }
    const stored = localStorage.getItem('shoppingList');
    shoppingList = stored ? JSON.parse(stored) : { items: [], completed: [] };
    return shoppingList;
}

async function saveShoppingList() {
    localStorage.setItem('shoppingList', JSON.stringify(shoppingList));
    const userDoc = getUserDocRef();
    if (userDoc) {
        try {
            await userDoc.set({ shoppingList }, { merge: true });
        } catch (e) { console.error('Error saving shopping list to Firestore:', e); }
    }
}

async function loadMealPlan() {
    const userDoc = getUserDocRef();
    if (userDoc) {
        try {
            const doc = await userDoc.get();
            if (doc.exists && doc.data().mealPlan) {
                mealPlan = doc.data().mealPlan;
                return mealPlan;
            }
        } catch (e) { console.error('Error loading meal plan from Firestore:', e); }
    }
    const stored = localStorage.getItem('mealPlan');
    mealPlan = stored ? JSON.parse(stored) : {};
    return mealPlan;
}

async function saveMealPlan() {
    localStorage.setItem('mealPlan', JSON.stringify(mealPlan));
    const userDoc = getUserDocRef();
    if (userDoc) {
        try {
            await userDoc.set({ mealPlan }, { merge: true });
        } catch (e) { console.error('Error saving meal plan to Firestore:', e); }
    }
}

// ===== DATA QUERIES =====
function getRecipeById(id) {
    return RECIPES_DB.find(recipe => recipe.id === id);
}

function getRecipesByCategory(category) {
    if (category === 'wszystkie') return RECIPES_DB;
    return RECIPES_DB.filter(recipe => recipe.category === category);
}

function searchRecipes(query) {
    const lowerQuery = query.toLowerCase();
    return RECIPES_DB.filter(recipe =>
        recipe.title.toLowerCase().includes(lowerQuery) ||
        recipe.ingredients.some(ing => ing.name.toLowerCase().includes(lowerQuery))
    );
}

// Data initialization is handled in app.js after auth check
