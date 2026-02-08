// ===== SIGNUP SCREEN =====

function renderSignupScreen() {
    const app = document.getElementById('app');
    app.innerHTML = `
        <div class="container fade-in" style="padding-top: var(--spacing-xl); text-align: center;">
            <div class="brand-header-top" style="margin: 0 auto var(--spacing-xl);">
                <img src="assets/logo.svg" alt="FitSmak Logo" class="app-logo">
                <div class="brand-name">
                    <span class="brand-fit">Fit</span><span class="brand-smak">Smak</span>
                </div>
            </div>
            
            <h1 class="mb-sm">Dołącz do FitSmak</h1>
            <p class="text-secondary mb-xl">Stwórz konto, aby synchronizować swoje plany.</p>
            
            <form id="signup-form" class="auth-box">
                <div class="form-group mb-md">
                    <label for="email" class="form-label">Email</label>
                    <input type="email" id="email" class="form-input" placeholder="twoj@email.com" required>
                </div>
                
                <div class="form-group mb-md">
                    <label for="password" class="form-label">Hasło (min. 8 znaków)</label>
                    <input type="password" id="password" class="form-input" placeholder="••••••••" required minlength="8">
                </div>
                
                <div class="form-group mb-xl">
                    <label for="confirm-password" class="form-label">Powtórz hasło</label>
                    <input type="password" id="confirm-password" class="form-input" placeholder="••••••••" required minlength="8">
                </div>
                
                <div id="signup-error" class="error-message mb-md hidden"></div>
                <div id="signup-success" class="success-message mb-md hidden"></div>
                
                <button type="submit" class="btn-primary" id="signup-submit">
                    Zarejestruj się
                </button>
            </form>
            
            <p class="text-secondary mt-xl">
                Masz już konto? 
                <button class="text-green font-semibold" id="go-to-login" style="background: none; padding: 0;">Zaloguj się</button>
            </p>
        </div>
    `;

    attachSignupEventListeners();
}

function attachSignupEventListeners() {
    const form = document.getElementById('signup-form');
    const signupSubmit = document.getElementById('signup-submit');
    const errorMsg = document.getElementById('signup-error');
    const successMsg = document.getElementById('signup-success');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;

        if (password !== confirmPassword) {
            errorMsg.textContent = 'Hasła nie są identyczne.';
            errorMsg.classList.remove('hidden');
            return;
        }

        signupSubmit.disabled = true;
        signupSubmit.innerHTML = '<span class="loader"></span> Trwa rejestracja...';
        errorMsg.classList.add('hidden');

        const { data, error } = await AuthService.signUp(email, password);

        if (error) {
            let message = error.message;
            if (error.code === 'auth/email-already-in-use') {
                message = 'Ten adres email jest już zajęty.';
            } else if (error.code === 'auth/weak-password') {
                message = 'Hasło jest zbyt słabe.';
            } else if (error.code === 'auth/invalid-email') {
                message = 'Nieprawidłowy format adresu email.';
            }
            errorMsg.textContent = message;
            errorMsg.classList.remove('hidden');
            signupSubmit.disabled = false;
            signupSubmit.innerHTML = 'Zarejestruj się';
        } else {
            successMsg.textContent = 'Konto utworzone pomyślnie! Zaraz zostaniesz zalogowany.';
            successMsg.classList.remove('hidden');
            form.reset();
            signupSubmit.innerHTML = 'Sukces!';
        }
    });

    document.getElementById('go-to-login').addEventListener('click', () => {
        navigateToScreen('login');
    });
}
