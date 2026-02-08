// ===== FORGOT PASSWORD SCREEN =====

function renderForgotPasswordScreen() {
    const app = document.getElementById('app');
    app.innerHTML = `
        <div class="container fade-in" style="padding-top: var(--spacing-xl);">
            <div class="brand-header-top mb-xl" onclick="navigateToScreen('home')" style="cursor: pointer;">
                <img src="assets/logo.svg" alt="FitSmak Logo" class="app-logo">
                <div class="brand-name">
                    <span class="brand-fit">Fit</span><span class="brand-smak">Smak</span>
                </div>
            </div>
            <h1 class="mb-sm">Zresetuj hasło</h1>
            <p class="text-secondary mb-xl">Wyślemy Ci link do zmiany hasła na podany adres email.</p>
            
            <form id="forgot-password-form" class="auth-box">
                <div class="form-group mb-xl">
                    <label for="email" class="form-label">Twój email</label>
                    <input type="email" id="email" class="form-input" placeholder="twoj@email.com" required>
                </div>
                
                <div id="forgot-error" class="error-message mb-md hidden"></div>
                <div id="forgot-success" class="success-message mb-md hidden"></div>
                
                <button type="submit" class="btn-primary" id="forgot-submit">
                    Wyślij link
                </button>
            </form>
            
            <p class="text-secondary mt-xl">
                Wróć do 
                <button class="text-green font-semibold" id="go-to-login" style="background: none; padding: 0;">Logowania</button>
            </p>
        </div>
    `;

    attachForgotPasswordEventListeners();
}

function attachForgotPasswordEventListeners() {
    const form = document.getElementById('forgot-password-form');
    const submitBtn = document.getElementById('forgot-submit');
    const errorMsg = document.getElementById('forgot-error');
    const successMsg = document.getElementById('forgot-success');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;

        submitBtn.disabled = true;
        submitBtn.innerHTML = 'Wysyłanie...';
        errorMsg.classList.add('hidden');

        const { error } = await AuthService.resetPassword(email);

        if (error) {
            let message = 'Wystąpił błąd podczas wysyłania linku.';
            if (error.code === 'auth/user-not-found') {
                message = 'Nie znaleziono użytkownika o tym adresie email.';
            } else if (error.code === 'auth/invalid-email') {
                message = 'Nieprawidłowy format adresu email.';
            }
            errorMsg.textContent = message;
            errorMsg.classList.remove('hidden');
            submitBtn.disabled = false;
            submitBtn.innerHTML = 'Wyślij link';
        }
        else {
            successMsg.textContent = 'Link został wysłany! Sprawdź skrzynkę odbiorczą.';
            successMsg.classList.remove('hidden');
            submitBtn.innerHTML = 'Wysłano!';
        }
    });

    document.getElementById('go-to-login').addEventListener('click', () => {
        navigateToScreen('login');
    });
}
