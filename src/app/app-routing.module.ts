import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

import { RecipeComponent } from './recipe/recipe.component';
import { HomeComponent } from './core/header/home/home.component';


const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'recipes', loadChildren: './recipe/recipes.module#RecipesModule'},
    {path: 'shopping-list', component: ShoppingListComponent}
];
@NgModule({                                                 // NgModule converts typescript to angular module
    imports: [RouterModule.forRoot(appRoutes)],             // RouterModule creates a module with all defined routes
    exports: [RouterModule]
})
export class AppRoutingModule {                             // This class to be added in app.module.ts

}
