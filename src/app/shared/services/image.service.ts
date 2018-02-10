
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable'; 
import { environment } from "../../../environments/environment"
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ImageService {

  dirs: Observable<Object>;
  statsObserver: Observable<Object>;
  stats: Subject<any> = new Subject();


  constructor(private http: HttpClient) {
    this.dirs = this.http.get(`${environment.serverUrl}/bavatar/images`)
    this.statsObserver = this.http.get(`${environment.serverUrl}/bavatar/count`)
    
    this.statsObserver.subscribe( (stats) => {
      this.stats.next(stats)
    })

  }

  getStats(){
    this.statsObserver = this.http.get(`${environment.serverUrl}/bavatar/count`)
  }

}