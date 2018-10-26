import { Component, OnInit} from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingListService } from '../../shopping-list/shoppingList.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';
@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipeDetail: Recipe;
  id: number;

  constructor(private slService: ShoppingListService,
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private router: Router) {                  // Idea is to bind the id from routes to id here by using AcivatedRoute
    }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];                      // params['id'] will return a string so cast to int by adding +
        this.recipeDetail = this.recipeService.getRecipe(this.id);
      }
    );
  }

  onShopping() {                                                        // Instead of directly using ShoppingList service as here, we can
    this.slService.receiveIngredients(this.recipeDetail.ingredients);   // use Recipe Service and in turn inject it to Shopping List Service
  }

  onEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

}
