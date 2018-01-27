import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ImageService } from "../shared/services/image.service";
import Image from "../../../server/models/image.model";

import { environment } from "../../environments/environment" 

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent {
  form: FormGroup;
  dirs: Array<Array<Image>>;
  baseUrl = environment.serverUrl;

  constructor(public imageService: ImageService) {
    this.imageService.dirs.subscribe( (data: Array<any>) =>{
      this.dirs = data;
    } )
  }


}
