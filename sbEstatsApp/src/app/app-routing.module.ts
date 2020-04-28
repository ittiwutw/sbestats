import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./cart/cart.module').then( m => m.CartPageModule)
  },
  {
    path: 'estate-detail',
    loadChildren: () => import('./estate-detail/estate-detail.module').then( m => m.EstateDetailPageModule)
  },
  {
    path: 'add-estate',
    loadChildren: () => import('./add-estate/add-estate.module').then( m => m.AddEstatePageModule)
  },  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'modal',
    loadChildren: () => import('./modal/modal.module').then( m => m.ModalPageModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./chat/chat.module').then( m => m.ChatPageModule)
  },
  {
    path: 'edit-profile',
    loadChildren: () => import('./edit-profile/edit-profile.module').then( m => m.EditProfilePageModule)
  },
  {
    path: 'about-us',
    loadChildren: () => import('./about-us/about-us.module').then( m => m.AboutUsPageModule)
  },
  {
    path: 'tax-calculator',
    loadChildren: () => import('./tax-calculator/tax-calculator.module').then( m => m.TaxCalculatorPageModule)
  },
  {
    path: 'nearby',
    loadChildren: () => import('./nearby/nearby.module').then( m => m.NearbyPageModule)
  },
  {
    path: 'edit-estate',
    loadChildren: () => import('./edit-estate/edit-estate.module').then( m => m.EditEstatePageModule)
  },
  {
    path: 'my-estate',
    loadChildren: () => import('./my-estate/my-estate.module').then( m => m.MyEstatePageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
