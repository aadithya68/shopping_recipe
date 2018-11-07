import { NgClass } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RecipeComponent } from './recipe.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { AuthGuard } from '../auth/auth-guard.service';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { NgModule } from '@angular/core';

const recipeRoutes: Routes = [
    {path: '', component: RecipeComponent, children: [       // Adding child routed inside recipe to display recipe detail
        {path: '', component: RecipeStartComponent},
        // This route with path 'new' shud be above path 'id' or new will parsed as id
        {path: 'new', component: RecipeEditComponent, canActivate: [AuthGuard]},
        {path: ':id', component: RecipeDetailComponent},
        {path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGuard]}
    ]},
];
@NgModule({
    imports: [RouterModule.forChild(recipeRoutes)],
    exports: [RouterModule]
})
export class RecipeRoutingModule {

}
