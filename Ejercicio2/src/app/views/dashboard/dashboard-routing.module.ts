import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'profile',
        loadChildren: () =>
          import('src/app/views/profile/profile.module').then(m => m.ProfileModule),
        data: { title: 'Profile', breadcrumb: 'PROFILE' }
      },
      {
        path: 'favorites',
        loadChildren: () =>
          import('src/app/views/favorites/favorites.module').then(
            m => m.FavoritesModule
          ),

        data: { title: 'Favorites', breadcrumb: 'FAVORITES' }
      },
      {
        path: 'offers',
        loadChildren: () =>
          import('src/app/views/offers/offers.module').then(m => m.OffersModule),
        data: { title: 'Offers', breadcrumb: 'Offers' }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
