import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from "../../../../environments/environment" 
import { OnDestroy, AfterContentInit, AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Meta } from '@angular/platform-browser';

import { Router } from '@angular/router';
import { ImageService } from '../../../shared/services/image.service';
@Component({
  selector: 'app-generated-avatar',
  templateUrl: './generated-avatar.component.html',
  styleUrls: ['./generated-avatar.component.scss']
})
export class GeneratedAvatarComponent implements OnInit, AfterContentInit, AfterViewInit {

  public hash: string;
  public baseUrl = environment.serverUrl;
  public generatorVersion = environment.version;
  public link;
  public isLoading = true;
  public href;
  public loadTwitterButton = false;

  constructor(private route: ActivatedRoute, private meta: Meta, public router: Router, private imageService: ImageService) {    

  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.hash = params['hash'];
      this.link = this.baseUrl + '/bavatar/'+ this.generatorVersion+'/'+this.hash+".jpg";

      this.href = this.baseUrl + '/bavatar/'+ this.generatorVersion+'/'+this.hash+ "/twitter";
      this.href = 'https://twitter.com/intent/tweet?button_hashtag=BohnenGenerator&hashtags=rbtv&ref_src=twsrc%5Etfw&url=' + this.href;
   });
   
   this.meta.addTag({ property: 'og:description', content: 'Erstelle deinen eigenen Bohnen-Avatar' });
   this.meta.addTag({ property: 'og:image', content: this.link });
   this.meta.addTag({ property: 'og:title', content: 'Bohnen Avatar Generator'});
   this.meta.addTag({ property: 'og:url', content: this.baseUrl});
   this.meta.addTag({ name: 'twitter:creator', content: '@kenny661_' }, true);
   this.meta.addTag({ name: 'twitter:card', content: 'Bohnen-Avatar' }, true);

  }

  ngAfterContentInit(){
    this.loadTwitterButton = true;
  }

  ngAfterViewInit() {
      (<any>window).twttr.widgets.load();
  }

  hideLoader(): void {
    this.isLoading = false;
    this.imageService.getStats();
  }

}
