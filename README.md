# 🥗 FitSmak - Twoja spersonalizowana kuchnia

A modern, fully-featured dietary and meal planning application built with vanilla JavaScript. Features personalized recipe recommendations, shopping list management, and comprehensive user preference configuration with a beautiful Polish-language interface.

![App Preview](https://img.shields.io/badge/Status-Production%20Ready-success)
![License](https://img.shields.io/badge/License-MIT-blue)
![JavaScript](https://img.shields.io/badge/JavaScript-Vanilla-yellow)

## ✨ Features

### 🏠 Home Screen
- Personalized recipe recommendations based on user preferences
- Real-time search functionality with debouncing
- Category filtering (Breakfast, Lunch, Dinner)
- Favorite recipes system with localStorage persistence

### Konfiguracja Firebase

Aby autoryzacja i baza danych działały poprawnie, wykonaj poniższe kroki:

### 1. Dane API
Wklej swój obiekt `firebaseConfig` do pliku `js/firebase-config.js`. 
Znajdziesz go w: **Firebase Console** -> **Project Settings** -> **General** -> Sekcja **Your apps**.

### 2. Włączenie Autoryzacji Email
1. W Firebase Console przejdź do **Authentication** -> **Sign-in method**.
2. Włącz dostawcę **Email/Password**.

### 3. Włączenie Bazy Danych
1. Przejdź do **Firestore Database** i kliknij **Create database**.
2. Wybierz lokalizację i zacznij w **Production mode** (bezpieczniej) lub **Test mode** (na start).
3. Jeśli wybierzesz Production mode, dodaj reguły (Rules):
```text
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

### 4. Resetowanie hasła
Firebase wysyła link do resetowania hasła na swoją wbudowaną stronę. Możesz dostosować jej wygląd w zakładce **Authentication** -> **Templates**.

### 📖 Recipe Details
- Full nutritional breakdown with macros (protein, carbs, fats)
- Interactive ingredient checklists
- Step-by-step cooking instructions
- Add to meal plan functionality

### 🛒 Shopping List
- Auto-generated from weekly meal plans
- Categorized ingredients (Vegetables, Dairy, Dry Goods)
- Progress tracking with visual indicators
- Custom ingredient addition

### 👤 User Preferences
- Goal selection (Weight Loss, Muscle Building)
- Diet type configuration (Keto, Vegetarian, Vegan, Paleo, Gluten-free)
- Allergy and exclusion management
- Persistent settings via localStorage

### 📅 Meal Planner
- Weekly calendar view
- Daily calorie tracking
- Easy meal scheduling
- One-click shopping list generation

### 🔍 Discover
- Browse recipes by category
- View favorite recipes
- Search across all recipes

## 🎨 Design

- **Primary Color**: Bright green (#00FF66)
- **UI Language**: Polish
- **Design System**: Modern, clean, with smooth animations
- **Responsive**: Mobile-first approach
- **Accessibility**: Semantic HTML and ARIA labels

## 🚀 Quick Start

### Prerequisites
- Python 3 (for local server) or any static file server
- Modern web browser (Chrome, Firefox, Safari, Edge)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/YOUR_USERNAME/dietery-app.git
cd dietery-app
```

2. Start a local server:
```bash
python3 -m http.server 8080
```

3. Open your browser:
```
http://localhost:8080
```

## 📁 Project Structure

```
dietery-app/
├── index.html              # Main HTML file
├── styles.css              # Complete design system
├── js/
│   ├── app.js             # Main application controller
│   ├── data.js            # Recipe database & state management
│   ├── utils.js           # Helper functions
│   ├── components.js      # Reusable UI components
│   └── screens/
│       ├── home.js        # Home screen logic
│       ├── recipe-detail.js
│       ├── shopping-list.js
│       ├── preferences.js
│       ├── planner.js
│       └── discover.js
└── .agent/
    └── workflows/
        └── debug-recipes.md  # Debug workflow
```

## 🛠️ Technology Stack

- **HTML5**: Semantic markup
- **CSS3**: Custom properties, Grid, Flexbox
- **JavaScript (ES6+)**: Vanilla JS, no frameworks
- **LocalStorage**: Client-side data persistence

## 📊 Sample Data

The app includes 5 sample Polish recipes:
- Bowl z pieczoną ciecierzycą (520 kcal)
- Omlet z warzywami (320 kcal)
- Sałatka z kurczakiem i quinoa (450 kcal)
- Smoothie bowl z jagodami (280 kcal)
- Łosoś z brokułami (480 kcal)

## 🐛 Debugging

Use the `/debug-recipes` workflow for common troubleshooting:

```bash
# Check if all elements are loaded
# Verify localStorage data
# Test navigation flows
```

See `.agent/workflows/debug-recipes.md` for detailed debugging steps.

## 🔧 Configuration

### Adding New Recipes

Edit `js/data.js` and add to `RECIPES_DB`:

```javascript
{
    id: 'unique-id',
    title: 'Recipe Name',
    category: 'sniadanie', // or 'obiad', 'kolacja'
    image: 'https://images.unsplash.com/...',
    time: 30,
    difficulty: 'łatwe',
    servings: 2,
    calories: 450,
    nutrition: {
        protein: 25,
        carbs: 40,
        fats: 15
    },
    ingredients: [
        { name: 'Ingredient', quantity: '100g', category: 'warzywa' }
    ],
    instructions: [
        'Step 1...',
        'Step 2...'
    ],
    tags: ['fit', 'szybkie'],
    dietTypes: ['keto', 'wegetarianska']
}
```

## 📱 Browser Support

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Recipe images from [Unsplash](https://unsplash.com)
- Icons: Custom SVG icons
- Built with ❤️ using vanilla JavaScript

## 📧 Contact

For questions or feedback, please open an issue on GitHub.

---

**Made with 🥗 for healthy eating**
