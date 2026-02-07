---
description: Debug common recipe app issues
---

# Debug Recipes Workflow

This workflow helps diagnose and fix common issues in the dietary recipe app.

## Common Issues and Solutions

### 1. Recipe Detail Content Not Visible

**Symptoms:**
- Ingredients list not showing
- "Add to meal plan" button hidden
- Content cuts off after nutritional values

**Diagnosis:**
```bash
# Open browser console and check:
document.getElementById('tab-content')?.innerHTML.length > 0
document.getElementById('add-to-meal-plan') !== null
```

**Solution:**
- Check `#app` bottom padding in `styles.css` (should be 120px minimum)
- Verify no `overflow: hidden` on body or #app
- Ensure content height doesn't exceed viewport without scrolling

### 2. Recipes Not Loading

**Symptoms:**
- Empty recipe cards
- No personalized recommendations

**Diagnosis:**
```bash
# Check browser console for errors
# Verify data.js is loaded
```

**Solution:**
- Check `RECIPES_DB` in `js/data.js`
- Verify `getPersonalizedRecommendations()` is working
- Check user preferences in localStorage

### 3. Shopping List Not Generating

**Symptoms:**
- Shopping list empty after adding meals
- Items not categorized

**Diagnosis:**
```bash
# Check localStorage
localStorage.getItem('mealPlan')
localStorage.getItem('shoppingList')
```

**Solution:**
- Verify `generateShoppingList()` in `utils.js`
- Check meal plan has recipes assigned
- Ensure ingredients have category property

### 4. Navigation Not Working

**Symptoms:**
- Bottom nav buttons don't respond
- Screens don't change

**Diagnosis:**
```bash
# Check if app.js is loaded
typeof navigateToScreen === 'function'
```

**Solution:**
- Verify `js/app.js` is included in `index.html`
- Check event listeners are attached
- Look for JavaScript errors in console

## Testing Checklist

// turbo
1. Start local server:
```bash
cd /Users/marekgraniszewski/Documents/code/dietery-app
python3 -m http.server 8080
```

2. Open http://localhost:8080 in browser

3. Test each screen:
   - [ ] Home screen loads with recipes
   - [ ] Recipe detail shows all content (scroll to bottom)
   - [ ] Preferences save correctly
   - [ ] Meal planner adds recipes
   - [ ] Shopping list generates from meal plan
   - [ ] Discover screen shows categories
   - [ ] Bottom navigation works

4. Check browser console for errors

5. Verify localStorage persistence:
   - Close and reopen browser
   - Check if preferences persist
   - Verify favorites are saved

## Quick Fixes

### Clear localStorage (reset app state):
```javascript
localStorage.clear();
location.reload();
```

### Force regenerate shopping list:
```javascript
const ingredients = generateShoppingList(mealPlan);
shoppingList.items = ingredients;
saveShoppingList();
renderShoppingListScreen();
```

### Check current state:
```javascript
console.log('Preferences:', getUserPreferences());
console.log('Meal Plan:', mealPlan);
console.log('Shopping List:', shoppingList);
console.log('Favorites:', favorites);
```
