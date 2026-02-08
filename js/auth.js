// ===== AUTH SERVICE LAYER (FIREBASE) =====

const AuthService = {
    // Current user state
    user: null,

    /**
     * Rejestracja nowego użytkownika
     */
    async signUp(email, password) {
        try {
            const userCredential = await auth.createUserWithEmailAndPassword(email, password);
            return { data: userCredential, error: null };
        } catch (error) {
            console.error('Signup error:', error.message);
            return { data: null, error };
        }
    },

    /**
     * Logowanie
     */
    async signIn(email, password) {
        try {
            const userCredential = await auth.signInWithEmailAndPassword(email, password);
            return { data: userCredential, error: null };
        } catch (error) {
            console.error('Login error:', error.message);
            return { data: null, error };
        }
    },

    /**
     * Wylogowanie
     */
    async signOut() {
        try {
            await auth.signOut();
            this.user = null;
            return { error: null };
        } catch (error) {
            console.error('Logout error:', error.message);
            return { error };
        }
    },

    /**
     * Odzyskiwanie hasła - wysyłka linku
     */
    async resetPassword(email) {
        try {
            await auth.sendPasswordResetEmail(email);
            return { error: null };
        } catch (error) {
            console.error('Reset password error:', error.message);
            return { error };
        }
    },

    /**
     * Pobranie aktualnego użytkownika
     */
    getCurrentUser() {
        return new Promise((resolve) => {
            const unsubscribe = auth.onAuthStateChanged((user) => {
                this.user = user;
                unsubscribe();
                resolve(user);
            });
        });
    },

    /**
     * Sprawdzenie czy użytkownik jest zalogowany
     */
    isAuthenticated() {
        return !!this.user;
    }
};

window.AuthService = AuthService;
