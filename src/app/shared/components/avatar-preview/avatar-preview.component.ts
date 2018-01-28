import { Component, OnInit, Input } from '@angular/core';
import { environment } from "../../../../environments/environment" 
import Image from "../../../../../server/models/image.model";
import Directory from "../../../../../server/models/directory.model";
import {version} from "../../../../../server/config"

@Component({
  selector: 'app-avatar-preview',
  templateUrl: './avatar-preview.component.html',
  styleUrls: ['./avatar-preview.component.scss']
})
export class AvatarPreviewComponent implements OnInit {

  @Input() dirs;

  @Input() md5Hash;
  baseUrl = environment.serverUrl;
  generatorVersion = version;
  constructor() { }

  ngOnInit() {


  }

}
