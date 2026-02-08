// ===== LOGIN SCREEN =====

function renderLoginScreen() {
    const app = document.getElementById('app');
    app.innerHTML = `
        <div class="container fade-in" style="padding-top: var(--spacing-xl);">
            <div class="brand-header-top mb-xl" onclick="navigateToScreen('home')" style="cursor: pointer;">
                <img src="assets/logo.svg" alt="FitSmak Logo" class="app-logo">
                <div class="brand-name">
                    <span class="brand-fit">Fit</span><span class="brand-smak">Smak</span>
                </div>
            </div>
            
            <h1 class="mb-sm">Witaj ponownie!</h1>
            <p class="text-secondary mb-xl">Zaloguj się, aby kontynuować planowanie posiłków.</p>
            
            <form id="login-form" class="auth-box">
                <div class="form-group mb-md">
                    <label for="email" class="form-label">Email</label>
                    <input type="email" id="email" class="form-input" placeholder="twoj@email.com" required>
                </div>
                
                <div class="form-group mb-md">
                    <label for="password" class="form-label">Hasło</label>
                    <input type="password" id="password" class="form-input" placeholder="••••••••" required minlength="8">
                </div>
                
                <div class="flex-between mb-xl">
                    <button type="button" class="text-green font-semibold" id="go-to-forgot-password" style="background: none; font-size: var(--font-size-sm);">
                        Zapomniałeś hasła?
                    </button>
                </div>
                
                <div id="login-error" class="error-message mb-md hidden"></div>
                
                <button type="submit" class="btn-primary" id="login-submit">
                    Zaloguj się
                </button>
            </form>
            
            <p class="text-secondary mt-xl">
                Nie masz konta? 
                <button class="text-green font-semibold" id="go-to-signup" style="background: none; padding: 0;">Zarejestruj się</button>
            </p>
            
            <div class="mt-xl">
                <button class="btn-secondary" id="continue-as-guest">Kontynuuj jako gość</button>
            </div>
        </div>
    `;

    // Hide bottom nav for auth screens
    document.getElementById('bottom-nav').style.display = 'none';

    attachLoginEventListeners();
}

function attachLoginEventListeners() {
    const form = document.getElementById('login-form');
    const loginSubmit = document.getElementById('login-submit');
    const errorMsg = document.getElementById('login-error');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Loading state
        loginSubmit.disabled = true;
        loginSubmit.innerHTML = '<span class="loader"></span> Logowanie...';
        errorMsg.classList.add('hidden');

        const { data, error } = await AuthService.signIn(email, password);

        if (error) {
            let message = 'Wystąpił błąd podczas logowania.';
            if (error.code === 'auth/invalid-credential' || error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
                message = 'Nieprawidłowy email lub hasło.';
            } else if (error.code === 'auth/too-many-requests') {
                message = 'Zbyt wiele nieudanych prób. Spróbuj później.';
            }
            errorMsg.textContent = message;
            errorMsg.classList.remove('hidden');
            loginSubmit.disabled = false;
            loginSubmit.innerHTML = 'Zaloguj się';
        }
        else {
            // Success - app.js will handle onAuthStateChange
        }
    });

    document.getElementById('go-to-signup').addEventListener('click', () => {
        navigateToScreen('signup');
    });

    document.getElementById('go-to-forgot-password').addEventListener('click', () => {
        navigateToScreen('forgot-password');
    });

    document.getElementById('continue-as-guest').addEventListener('click', () => {
        // Just go to home, the app already uses localStorage for guest data
        navigateToScreen('home');
    });
}
