import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from "../../../../environments/environment" 
import { OnDestroy, AfterContentInit, AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Meta } from '@angular/platform-browser';

import { Router } from '@angular/router';
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

  constructor(private route: ActivatedRoute, private meta: Meta, public router: Router) {    
    this.href = this.baseUrl + '/#' + this.router.url;
    this.href = 'https://twitter.com/intent/tweet?button_hashtag=BohnenGenerator&hashtags=RBTV&ref_src=twsrc%5Etfw&url=' + this.href;
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.hash = params['hash'];
      this.link = this.baseUrl + '/bavatar/'+ this.generatorVersion+'/'+this.hash+".jpg";
   });

  //  <meta name="twitter:card" content="summary" />
  //  <meta name="twitter:site" content="@nytimesbits" />
  //  <meta name="twitter:creator" content="@nickbilton" />
  //  <meta property="og:url" content="http://bits.blogs.nytimes.com/2011/12/08/a-twitter-for-my-sister/" />
  //  <meta property="og:title" content="A Twitter for My Sister" />
  //  <meta property="og:description" content="In the early days, Twitter grew so quickly that it was almost impossible to add new features because engineers spent their time trying to keep the rocket ship from stalling." />
  //  <meta property="og:image" content="http://graphics8.nytimes.com/images/2011/12/08/technology/bits-newtwitter/bits-newtwitter-tmagArticle.jpg" />
   

   this.meta.addTag({ property: 'og:description', content: 'Erstelle deinen eigenen Bohnen-Avatar' });
   this.meta.addTag({ property: 'og:image', content: this.link });
   this.meta.addTag({ property: 'og:title', content: 'Bohnen Generator'});
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
  }

}
