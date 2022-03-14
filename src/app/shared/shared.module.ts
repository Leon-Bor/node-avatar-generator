import { NgModule } from "@angular/core";

import {
  ModalComponent,
  ModalDirectivesDirective,
} from "./components/modal/modal.component";
import { CommonModule } from "@angular/common";
import { TopNavigationComponent } from "./components/top-navigation/top-navigation.component";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { LoaderComponent } from "./components/loader/loader.component";

import { ImageService } from "./services/image.service";
import { ImageCardComponent } from "./components/image-card/image-card.component";
import { DirCardComponent } from "./components/dir-card/dir-card.component";
import { AvatarPreviewComponent } from "./components/avatar-preview/avatar-preview.component";
import { LoaderInlineComponent } from "./components/loader-inline/loader-inline.component";
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  declarations: [
    ModalComponent,
    TopNavigationComponent,
    ModalDirectivesDirective,
    LoaderComponent,
    ImageCardComponent,
    DirCardComponent,
    AvatarPreviewComponent,
    LoaderInlineComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
  ],
  exports: [
    ModalComponent,
    ModalDirectivesDirective,
    TopNavigationComponent,
    LoaderComponent,
    ImageCardComponent,
    AvatarPreviewComponent,
    DirCardComponent,
    LoaderInlineComponent,
  ],
  providers: [ImageService],
})
export class SharedModule {}
