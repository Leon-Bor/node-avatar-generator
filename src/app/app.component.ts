import { Component, OnInit, LOCALE_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Store } from '@ngrx/store';
import { ISimpleResponse } from './shared/interfaces/simple.interface';
import { TranslateService } from 'ng2-translate';
import * as locale from 'browser-locale';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  observable$: Observable<ISimpleResponse>;

  constructor(private http: HttpClient, translate: TranslateService) {
        // this language will be used as a fallback when a translation isn't found in the current language
        translate.setDefaultLang('en');
         // the lang to use, if the lang isn't available, it will use the current loader to get them
        translate.use(locale().substring(0,2));
  }

  ngOnInit() {

    this.observable$ = this.http.get<ISimpleResponse>('/api/public/simple');

  }
}
