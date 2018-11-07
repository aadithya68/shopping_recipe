import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

export class RecipeService {
    recipesChanged = new Subject<Recipe[]>();
    private recipes: Recipe[] = [
        new Recipe('Bun Berries',
         'Berries and buns',
          'https://blog.bufferapp.com/wp-content/uploads/2014/05/1443725_58313555.jpg',
          [new Ingredient('Berries', 10), new Ingredient('Buns', 1)]),
        new Recipe('Nut Cake',
         'Cake and Nuts',
          'https://blog.bufferapp.com/wp-content/uploads/2014/05/IMG_6424-1300x866.jpg',
          [new Ingredient('Nuts', 10), new Ingredient('Cake', 1)])
];
setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
}
getRecipes() {
    return this.recipes.slice();
}

getRecipe(index: number) {
    return this.recipes[index];
}

addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
}

updateRecipe(index: number, recipe: Recipe) {
    this.recipes[index] = recipe;
    this.recipesChanged.next(this.recipes.slice());
}

onDeleteRecipe(index: number) {
    if (index > -1) {
        this.recipes.splice(index, 1);
     }
     this.recipesChanged.next(this.recipes.slice());
}

}
