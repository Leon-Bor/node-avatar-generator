import { Route } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { GeneratedAvatarComponent } from './components/generated-avatar/generated-avatar.component';

export const routes: Route[] = [
  {
    path: '',
    pathMatch: "full",
    redirectTo: 'bavatar',
  }, 
  {
    path: 'bavatar',
    component: DashboardComponent
  },
  {
    path: 'generated-avatar/:hash',
    component: GeneratedAvatarComponent,
    outlet: 'modal'
  }

];
