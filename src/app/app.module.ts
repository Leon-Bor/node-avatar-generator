import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { RouterModule } from "@angular/router";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";

import { AppComponent } from "./app.component";
import { routes } from "./app.router";
import { SharedModule } from "./shared/shared.module";
import { environment } from "../environments/environment";

import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";

// export function createTranslateLoader(http: Http) {
//   return new TranslateStaticLoader(http, './assets/i18n', '.json');
// }

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    SharedModule,
    FormsModule,
    HttpClientModule,
    !environment.production
      ? StoreDevtoolsModule.instrument({ maxAge: 50 })
      : [],
    HttpClientModule,
    RouterModule.forRoot(routes, {
      useHash: true,
    }),
    //   TranslateModule.forRoot({
    //     provide: TranslateLoader,
    //     useFactory: (createTranslateLoader),
    //     deps: [Http]
    // })

    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
