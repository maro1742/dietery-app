// ===== PREFERENCES SCREEN =====

function renderPreferencesScreen() {
    const preferences = getPreferences();
    const user = AuthService.user;

    const app = document.getElementById('app');
    app.innerHTML = `
        <div class="container" style="padding-top: var(--spacing-xl);">
            <div class="flex-between mb-lg">
                <div>
                    <h1 class="mb-xs">Preferencje</h1>
                    <p class="text-secondary" style="font-size: var(--font-size-sm);">${user ? `Zalogowany jako: <strong>${user.email}</strong>` : 'Tryb gościa'}</p>
                </div>
                ${user ? `<button class="btn-secondary" id="logout-btn" style="color: #FF5252; border-color: #FF5252;">Wyloguj</button>` : ''}
            </div>
            
            <h3 class="mb-sm">Twoje Cele</h3>
            <p class="text-secondary mb-md" style="font-size: var(--font-size-sm);">
                <span class="text-green font-semibold">WYBIERZ JEDEN</span>
            </p>
            
            <div class="grid grid-2 gap-md mb-xl">
                ${createGoalCard('utrata-wagi', 'Utrata wagi', 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=200&h=200&fit=crop', preferences.goal === 'utrata-wagi')}
                ${createGoalCard('budowa-miesni', 'Budowa mięśni', 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=200&h=200&fit=crop', preferences.goal === 'budowa-miesni')}
            </div>
            
            <h3 class="mb-md">Diety</h3>
            <div class="flex gap-sm mb-xl" style="flex-wrap: wrap;">
                ${createPillButton('🥑 Keto', 'keto', preferences.dietType === 'keto')}
                ${createPillButton('🥗 Wegetariańska', 'wegetarianska', preferences.dietType === 'wegetarianska')}
                ${createPillButton('🌱 Wegańska', 'weganska', preferences.dietType === 'weganska')}
                ${createPillButton('🥩 Paleo', 'paleo', preferences.dietType === 'paleo')}
                ${createPillButton('🌾 Bez glutenu', 'bez-glutenu', preferences.dietType === 'bez-glutenu')}
            </div>
            
            <h3 class="mb-md">Alergie i Wykluczenia</h3>
            <div class="allergies-list mb-xl">
                ${createToggleSwitch('orzechy', '🥜', 'Orzechy', 'Wszystkie rodzaje orzechów', preferences.allergies.orzechy)}
                ${createToggleSwitch('laktoza', '🥛', 'Laktoza', 'Mleko i przetwory', preferences.allergies.laktoza)}
                ${createToggleSwitch('gluten', '🌾', 'Gluten', 'Produkty zbożowe', preferences.allergies.gluten)}
                ${createToggleSwitch('skorupiaki', '🦐', 'Skorupiaki', 'Owoce morza', preferences.allergies.skorupiaki)}
            </div>
            
            <button class="btn-primary" id="save-preferences">
                Zapisz zmiany
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width: 20px; height: 20px;">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
            </button>
        </div>
    `;

    attachPreferencesEventListeners();
}

function attachPreferencesEventListeners() {
    const preferences = getPreferences();

    // Goal selection
    document.querySelectorAll('.goal-card').forEach(card => {
        card.addEventListener('click', (e) => {
            const goal = e.currentTarget.dataset.goal;
            preferences.goal = goal;

            // Update UI
            document.querySelectorAll('.goal-card').forEach(c => c.classList.remove('selected'));
            e.currentTarget.classList.add('selected');
            renderPreferencesScreen();
        });
    });

    // Diet type selection
    document.querySelectorAll('[data-diet]').forEach(button => {
        button.addEventListener('click', (e) => {
            const diet = e.target.dataset.diet;
            preferences.dietType = diet;

            // Update UI
            document.querySelectorAll('[data-diet]').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
        });
    });

    // Allergy toggles
    document.querySelectorAll('[data-allergy]').forEach(toggle => {
        toggle.addEventListener('change', (e) => {
            const allergy = e.target.dataset.allergy;
            preferences.allergies[allergy] = e.target.checked;
        });
    });

    // Logout button
    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', async () => {
            const confirmed = confirm('Czy na pewno chcesz się wylogować?');
            if (confirmed) {
                await AuthService.signOut();
            }
        });
    }

    // Save button
    const saveButton = document.getElementById('save-preferences');
    if (saveButton) {
        saveButton.addEventListener('click', () => {
            savePreferences(preferences);

            // Show feedback
            saveButton.innerHTML = `
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width: 20px; height: 20px;">
                    <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                Zapisano!
            `;

            setTimeout(() => {
                saveButton.innerHTML = `
                    Zapisz zmiany
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width: 20px; height: 20px;">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                `;
            }, 2000);
        });
    }
}
