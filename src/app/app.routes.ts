/**
 * Created by bmooreii on 7/15/16.
 */
import { provideRouter, RouterConfig } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';

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
  }
];

export const appRouterProviders = [
  provideRouter(routes)
];
