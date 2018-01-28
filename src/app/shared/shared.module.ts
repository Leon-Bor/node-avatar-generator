import { NgModule } from '@angular/core';

import { ModalComponent, ModalDirectivesDirective } from './components/modal/modal.component';
import { CommonModule } from '@angular/common';
import { TopNavigationComponent } from './components/top-navigation/top-navigation.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LoaderComponent } from './components/loader/loader.component';

import { ImageService } from "./services/image.service";
import { ImageCardComponent } from './components/image-card/image-card.component';
import { DirCardComponent } from './components/dir-card/dir-card.component';
@NgModule({
  declarations: [
    ModalComponent,
    TopNavigationComponent,
    ModalDirectivesDirective,
    LoaderComponent,
    ImageCardComponent,
    DirCardComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ModalComponent,
    ModalDirectivesDirective,
    TopNavigationComponent,
    LoaderComponent,
    ImageCardComponent,

    DirCardComponent,
  ],
  providers: [
    ImageService
  ]
})
export class SharedModule {}
