import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from "../../../../environments/environment" 

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

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.hash = params['hash'];
      this.link = this.baseUrl + '/bavatar/'+ this.generatorVersion+'/'+this.hash;
   });
  }


  copztoClipboard() {

  }


}
