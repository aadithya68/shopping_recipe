import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { RecipeService } from '../recipe/recipe.service';
import { Recipe } from '../recipe/recipe.model';
import { map } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';


@Injectable()
export class DataStorageService {

    constructor(private http: Http,
        private recipeService: RecipeService,
        private authService: AuthService) {
    }

    storeRecipes() {
        const token = this.authService.getToken();
        return this.http.put('https://ng-shopping-recipe.firebaseio.com/recipe.json?auth=' + token, this.recipeService.getRecipes());
    }
    fetchRecipes() {
        const token = this.authService.getToken();
        return this.http.get('https://ng-shopping-recipe.firebaseio.com/recipe.json?auth=' + token)
        .pipe(map(
            (response: Response) => {
                const recipes: Recipe[] = response.json();
                for (const recipe of recipes) {
                    if (!recipe['ingredients']) {
                        console.log(recipe);
                        recipe['ingredients'] = [];
                    }
                }
                return recipes;
            }
        ))
        .subscribe(
            (recipes: Recipe[]) => {
                this.recipeService.setRecipes(recipes);
            }
        );
    }
}
