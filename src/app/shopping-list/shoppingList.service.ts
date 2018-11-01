import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

export class ShoppingListService {
    ingredientsChanged = new Subject<Ingredient[]>();
    startedEditing = new Subject<number>();
    ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Orange', 10)
      ];

    getIngredient() {
        return this.ingredients.slice();                        // To return just a copy of the array and not original array
    }

    getIngredients(index: number) {
        return this.ingredients[index];
    }

    addIngredients(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.ingredients.slice());  // To pass a updated copy of the Ingredient array when it changes
    }

    updateIngredient(index: number, newIngredient: Ingredient) {
        this.ingredients[index] = newIngredient;
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    deleteIngredient(index: number) {
        if (index > -1) {
            this.ingredients.splice(index, 1);
         }
         this.ingredientsChanged.next(this.ingredients.slice());
    }

    receiveIngredients(ingredient: Ingredient[]) {
        // for (const item of ingredient) {                      // This method can be used but less efficient
        //     this.addIngredients(item);
        // }
        this.ingredients.push(...ingredient);                  // ... is  spread operater that pushes entire array by coberting to list
        this.ingredientsChanged.next(this.ingredients.slice());   // Then we can emit that the ingredient array has a change
    }
}
