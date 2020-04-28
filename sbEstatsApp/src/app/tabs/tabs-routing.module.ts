import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../home/home.module').then(m => m.HomePageModule)
          }
        ]
      },
      {
        path: 'cart',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../cart/cart.module').then(m => m.CartPageModule)
          }
        ]
      },
      {
        path: 'tab3',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab3/tab3.module').then(m => m.Tab3PageModule)
          }
        ]
      },
      {
        path: 'add-estate',
        children: [
          {
            path: '',
            loadChildren: () =>
            import('../add-estate/add-estate.module').then( m => m.AddEstatePageModule)
          }
        ]
      },
      {
        path: 'nearby',
        children: [
          {
            path: '',
            loadChildren: () =>
            import('../nearby/nearby.module').then( m => m.NearbyPageModule)
          }
        ]
      },
      {
        path: 'my-estate',
        children: [
          {
            path: '',
            loadChildren: () =>
            import('../my-estate/my-estate.module').then( m => m.MyEstatePageModule)
          }
        ]
      },
      {
        path: 'edit-estate',
        children: [
          {
            path: '',
            loadChildren: () =>
            import('../edit-estate/edit-estate.module').then( m => m.EditEstatePageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
