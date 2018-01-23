import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ImageService } from "../shared/services/image.service";
import Image from "../../../server/models/image.model";
import { serverUrl } from "../../../server/config";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent {
  form: FormGroup;
  dirs: Array<Array<Image>>;
  baseUrl;

  constructor(public imageService: ImageService) {
    this.baseUrl = serverUrl;
    this.imageService.dirs.subscribe( (data: Array<any>) =>{
      this.dirs = data;
    } )
  }


}
