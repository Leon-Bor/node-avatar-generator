import { Route } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { GeneratedAvatarComponent } from './components/generated-avatar/generated-avatar.component';

export const routes: Route[] = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'generated-avatar',
        component: GeneratedAvatarComponent,
        outlet: 'modal'
      }
    ]
  }, 

];
