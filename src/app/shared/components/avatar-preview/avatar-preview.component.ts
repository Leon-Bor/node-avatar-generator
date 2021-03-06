import { Component, OnInit, Input } from '@angular/core';
import { environment } from "../../../../environments/environment" 
import Image from "../../../../../server/models/image.model";
import Directory from "../../../../../server/models/directory.model";
import { Router,ActivatedRoute } from "@angular/router";
import { AfterContentInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-avatar-preview',
  templateUrl: './avatar-preview.component.html',
  styleUrls: ['./avatar-preview.component.scss']
})
export class AvatarPreviewComponent implements OnInit, AfterContentInit {

  @Input() dirs;
  @Input() md5Hash;
  baseUrl = environment.serverUrl;
  generatorVersion = environment.version;
  
  constructor(private router:Router,private route:ActivatedRoute) { }

  ngOnInit() { }

  showAvatarModal(): void {
      this.router.navigate(['generator',{ outlets: { modal: ['generated-avatar', this.md5Hash] } }]);
  }
  

  ngAfterContentInit(){
    (<any>window).twttr.widgets.load()
  }
}
