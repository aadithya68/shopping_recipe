import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
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

getRecipes() {
    return this.recipes.slice();
}

getRecipe(index: number) {
    return this.recipes[index];
}


}
