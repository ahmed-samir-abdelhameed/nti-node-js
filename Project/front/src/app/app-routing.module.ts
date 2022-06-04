import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './pages/cart/cart.component';
import { EditProfileImgComponent } from './pages/edit-profile-img/edit-profile-img.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProductsComponent } from './pages/products/products.component';
import { RegisterComponent } from './pages/register/register.component';
import { ProvidersComponent } from './pages/providers/providers.component';
import { CanActivateGuard } from './guards/can-activate.guard';
import { CanDeactivateGuard } from './guards/can-deactivate.guard';
const routes: Routes = [
  {path:"" , component:HomeComponent},
  {path:"login" , component:LoginComponent , canActivate:[CanActivateGuard] , 
  canDeactivate:[CanDeactivateGuard},
  {path:"products" , component:ProductsComponent},
  {path:"cart" , component:CartComponent},
  {path:"register" , component:RegisterComponent},
  {path:"edit-profile",component:EditProfileImgComponent},
  {path:"provider/:slug" , component:ProvidersComponent },
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
