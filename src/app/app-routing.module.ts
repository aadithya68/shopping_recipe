import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipeComponent } from './recipe/recipe.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeDetailComponent } from './recipe/recipe-detail/recipe-detail.component';
import { RecipeStartComponent } from './recipe/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipe/recipe-edit/recipe-edit.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthGuard } from './auth/auth-guard.service';


const appRoutes: Routes = [
    {path: '', redirectTo: '/recipes', pathMatch: 'full'},   // Intial emtpy domain needs a empty route,can be redirect if needed
    {path: 'recipes', component: RecipeComponent, children: [       // Adding child routed inside recipe to display recipe detail
        {path: '', component: RecipeStartComponent},
        // This route with path 'new' shud be above path 'id' or new will parsed as id
        {path: 'new', component: RecipeEditComponent, canActivate: [AuthGuard]},
        {path: ':id', component: RecipeDetailComponent},
        {path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGuard]}
    ]},
    {path: 'shopping-list', component: ShoppingListComponent},
    {path: 'signup', component: SignupComponent},
    {path: 'signin', component: SigninComponent}
];
@NgModule({                                                 // NgModule converts typescript to angular module
    imports: [RouterModule.forRoot(appRoutes)],             // RouterModule creates a module with all defined routes
    exports: [RouterModule]
})
export class AppRoutingModule {                             // This class to be added in app.module.ts

}
