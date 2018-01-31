import { Component, OnInit, Input } from '@angular/core';
import { environment } from "../../../../environments/environment" 
import Image from "../../../../../server/models/image.model";
import Directory from "../../../../../server/models/directory.model";
import { Router,ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-avatar-preview',
  templateUrl: './avatar-preview.component.html',
  styleUrls: ['./avatar-preview.component.scss']
})
export class AvatarPreviewComponent implements OnInit {

  @Input() dirs;
  @Input() md5Hash;
  baseUrl = environment.serverUrl;
  generatorVersion = environment.version;
  
  constructor(private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {


  }

  showAvatarModal(): void {
    console.log('show modal')
      // baseUrl + '/bavatar/'+generatorVersion+'/'+md5Hash
      this.router.navigate(['generator',{ outlets: { modal: ['generated-avatar', this.md5Hash] } }]);
  }
  

}
