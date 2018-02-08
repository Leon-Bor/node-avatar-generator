import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from "../../../../environments/environment" 
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-generated-avatar',
  templateUrl: './generated-avatar.component.html',
  styleUrls: ['./generated-avatar.component.scss']
})
export class GeneratedAvatarComponent implements OnInit {

  public hash: string;
  public baseUrl = environment.serverUrl;
  public generatorVersion = environment.version;
  public link;
  public isLoading = true;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.hash = params['hash'];
      this.link = this.baseUrl + '/bavatar/'+ this.generatorVersion+'/'+this.hash+".jpg";
   });

  }

  hideLoader(): void {
    this.isLoading = false;
  }

}
