/**
 * Created by bmooreii on 7/15/16.
 */
import { provideRouter, RouterConfig } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

const routes: RouterConfig = [
  {
    path: '',
    redirectTo: 'dashboard'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'heroes',
    component: HeroesComponent
  },
  {
    path: 'detail/:id',
    component: HeroDetailComponent
  }
];

export const appRouterProviders = [
  provideRouter(routes)
];
