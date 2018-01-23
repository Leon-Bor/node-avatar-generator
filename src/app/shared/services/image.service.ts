
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable'; 
import { serverUrl } from "../../../../server/config";

@Injectable()
export class ImageService {

  baseUrl = serverUrl;
  dirs: Observable<Object>;

  constructor(private http: HttpClient) {
    this.dirs = this.http.get(`${this.baseUrl}/bavatar/images`)
  }

}