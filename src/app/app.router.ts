import { Route } from '@angular/router';

export const routes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'generator'},
  { loadChildren: 'app/dashboard/dashboard.module#DashboardModule', path: 'generator' }
];
