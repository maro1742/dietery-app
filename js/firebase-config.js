// ===== FIREBASE CONFIGURATION =====

// Automatycznie wygenerowana konfiguracja
const firebaseConfig = {
    apiKey: "AIzaSyD6D5dUjmdfceIuAAqFBaiyrWd21X3DYM8",
    authDomain: "gen-lang-client-0200051639.firebaseapp.com",
    projectId: "gen-lang-client-0200051639",
    storageBucket: "gen-lang-client-0200051639.firebasestorage.app",
    messagingSenderId: "489801591128",
    appId: "1:489801591128:web:b6f27c1ffc215a7b611d2d",
    measurementId: "G-0Z1T7Q8LC4"
};

// Inicjalizacja Firebase
firebase.initializeApp(firebaseConfig);

// Inicjalizacja usług
const auth = firebase.auth();
const db = firebase.firestore();

// Export do globalnego zasięgu (dla zachowania prostoty w tym projekcie)
window.auth = auth;
window.db = db;
