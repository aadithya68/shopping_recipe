import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipeComponent } from './recipe/recipe.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeDetailComponent } from './recipe/recipe-detail/recipe-detail.component';
import { RecipeStartComponent } from './recipe/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipe/recipe-edit/recipe-edit.component';


const appRoutes: Routes = [
    {path: '', redirectTo: '/recipes', pathMatch: 'full'},   // Intial emtpy domain needs a empty route,can be redirect if needed
    {path: 'recipes', component: RecipeComponent, children: [       //Adding child routed inside recipe to display recipe detail 
        {path: '', component: RecipeStartComponent},
        {path: 'new', component: RecipeEditComponent},       // This route with path 'new' shud be above path 'id' or new will parsed as id
        {path: ':id', component: RecipeDetailComponent},
        {path: ':id/edit', component: RecipeEditComponent}
    ]},
    {path: 'shopping-list', component: ShoppingListComponent}
];
@NgModule({                                                 // NgModule converts typescript to angular module
    imports: [RouterModule.forRoot(appRoutes)],             // RouterModule creates a module with all defined routes
    exports: [RouterModule]
})
export class AppRoutingModule {                             // This class to be added in app.module.ts

}
