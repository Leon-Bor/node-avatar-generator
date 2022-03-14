import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { Observable, Subject } from "rxjs";

@Injectable()
export class ImageService {
  dirs: Observable<Object>;
  statsObserver: Observable<Object>;
  stats: Subject<any> = new Subject();

  constructor(private http: HttpClient) {
    this.dirs = this.http.get(`${environment.serverUrl}/bavatar/images`);

    this.getStats();
  }

  getStats() {
    this.statsObserver = this.http.get(
      `${environment.serverUrl}/bavatar/count`
    );

    this.statsObserver.subscribe((stats) => {
      this.stats.next(stats);
    });
  }
}
