// ===== SHOPPING LIST SCREEN =====

function renderShoppingListScreen() {
    loadShoppingList();

    const totalItems = shoppingList.items.length;
    const completedCount = shoppingList.completed.length;
    const progressPercentage = totalItems > 0 ? (completedCount / totalItems) * 100 : 0;
    const today = formatDate(new Date());

    const categorizedItems = categorizeShoppingList(shoppingList.items);

    const app = document.getElementById('app');
    app.innerHTML = `
        ${createHeader('Lista Zakupów')}
        
        <div class="container">
                <div class="flex-between mb-sm">
                    <span class="text-secondary">Twój postęp</span>
                    <span class="font-semibold">${completedCount} z ${totalItems}</span>
                </div>
                <div class="progress-bar">
                    <div class="progress-bar-fill" style="width: ${progressPercentage}%"></div>
                </div>
                <p class="text-tertiary" style="font-size: var(--font-size-xs); margin-top: var(--spacing-sm);">
                    ${today}
                </p>
            </div>
            
            <div class="search-bar mb-lg">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.35-4.35"></path>
                </svg>
                <input type="text" placeholder="Szukaj w liście..." id="shopping-search">
            </div>
            
            ${totalItems === 0 ? `
                <div class="card" style="padding: var(--spacing-xl); text-align: center;">
                    <svg viewBox="0 0 24 24" fill="none" stroke="var(--text-tertiary)" stroke-width="2" style="width: 64px; height: 64px; margin: 0 auto var(--spacing-md);">
                        <circle cx="9" cy="21" r="1"></circle>
                        <circle cx="20" cy="21" r="1"></circle>
                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                    </svg>
                    <h3 class="mb-sm">Twoja lista jest pusta</h3>
                    <p class="text-secondary mb-lg">Dodaj przepisy do planu posiłków, aby automatycznie wygenerować listę zakupów.</p>
                    <button class="btn-primary" id="go-to-planner">Przejdź do planera</button>
                </div>
            ` : `
                <div id="shopping-categories">
                    ${categorizedItems.map(category =>
        createShoppingCategory(category, category.items, shoppingList.completed)
    ).join('')}
                </div>
                
                <p class="text-secondary text-center mb-lg" style="font-size: var(--font-size-sm);">
                    To już wszystkie składniki z Twoich przepisów na dziś
                </p>
            `}
            
            <button class="btn-primary" id="add-custom-ingredient">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width: 20px; height: 20px;">
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
                Dodaj własny składnik
            </button>
        </div>
    `;

    attachShoppingListEventListeners();
}

function attachShoppingListEventListeners() {
    // Checkbox functionality
    document.querySelectorAll('.checkbox-item input[type="checkbox"]').forEach(checkbox => {
        checkbox.addEventListener('change', (e) => {
            const parent = e.target.closest('.checkbox-item');
            const itemName = parent.dataset.itemName;

            if (e.target.checked) {
                parent.classList.add('checked');
                if (!shoppingList.completed.includes(itemName)) {
                    shoppingList.completed.push(itemName);
                }
            } else {
                parent.classList.remove('checked');
                shoppingList.completed = shoppingList.completed.filter(name => name !== itemName);
            }

            saveShoppingList();
            renderShoppingListScreen();
        });
    });

    // Add custom ingredient
    const addButton = document.getElementById('add-custom-ingredient');
    if (addButton) {
        addButton.addEventListener('click', () => {
            const itemName = prompt('Nazwa składnika:');
            const quantity = prompt('Ilość:');

            if (itemName && quantity) {
                shoppingList.items.push({
                    name: itemName,
                    quantity: quantity,
                    category: 'produkty-sypkie',
                    count: 1
                });
                saveShoppingList();
                renderShoppingListScreen();
            }
        });
    }

    // Go to planner button
    const plannerButton = document.getElementById('go-to-planner');
    if (plannerButton) {
        plannerButton.addEventListener('click', () => {
            navigateToScreen('planner');
        });
    }

    // Search functionality
    const searchInput = document.getElementById('shopping-search');
    if (searchInput) {
        searchInput.addEventListener('input', debounce((e) => {
            const query = e.target.value.toLowerCase().trim();

            document.querySelectorAll('.checkbox-item').forEach(item => {
                const label = item.querySelector('label').textContent.toLowerCase();
                if (query === '' || label.includes(query)) {
                    item.style.display = 'flex';
                } else {
                    item.style.display = 'none';
                }
            });
        }, 200));
    }
}
