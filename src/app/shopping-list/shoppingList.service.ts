import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService {
    ingredientsChanged = new EventEmitter<Ingredient[]>();
    ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Orange', 10)
      ];

    getIngredient() {
        return this.ingredients.slice();                        // To return just a copy of the array and not original array
    }

    addIngredients(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice());  // To pass a updated copy of the Ingredient array when it changes
    }

    receiveIngredients(ingredient: Ingredient[]) {
        // for (const item of ingredient) {                      // This method can be used but less efficient
        //     this.addIngredients(item);
        // }
        this.ingredients.push(...ingredient);                  // ... is  spread operater that pushes entire array by coberting to list
        this.ingredientsChanged.emit(this.ingredients.slice());   // Then we can emit that the ingredient array has a change
    }
}
