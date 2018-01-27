
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable'; 
import { environment } from "../../../environments/environment"

@Injectable()
export class ImageService {

  dirs: Observable<Object>;

  constructor(private http: HttpClient) {
    this.dirs = this.http.get(`${environment.serverUrl}/bavatar/images`)
  }

}