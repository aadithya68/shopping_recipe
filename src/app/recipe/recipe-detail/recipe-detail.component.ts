import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingListService } from '../../shopping-list/shoppingList.service';
@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipeDetail: Recipe;


  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
  }

  onShopping() {                                                        // Instead of directly using ShoppingList service as here, we can
    this.slService.receiveIngredients(this.recipeDetail.ingredients);   // use Recipe Service and in turn inject it to Shopping List Service
  }

}
