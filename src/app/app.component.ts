import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";
import * as locale from "browser-locale";
import { Observable } from "rxjs";
import { ISimpleResponse } from "./shared/interfaces/simple.interface";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  observable$: Observable<ISimpleResponse>;

  constructor(
    private http: HttpClient,
    translate: TranslateService,
    private _router: Router
  ) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang("en");
    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use(locale().substring(0, 2));
  }

  ngOnInit() {
    this.observable$ = this.http.get<ISimpleResponse>("/api/public/simple");
  }
}
