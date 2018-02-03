import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DashboardComponent } from './dashboard.component';
import { routes } from './dashboard.router';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { GeneratedAvatarComponent } from './components/generated-avatar/generated-avatar.component';

import { ClipboardModule } from 'ngx-clipboard';
import { TranslateModule } from 'ng2-translate';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule.forChild(routes),
    ClipboardModule, TranslateModule
  ],
  declarations: [
    DashboardComponent,
    GeneratedAvatarComponent
  ],
  bootstrap: [
    DashboardComponent
  ]
})
export class DashboardModule {}
