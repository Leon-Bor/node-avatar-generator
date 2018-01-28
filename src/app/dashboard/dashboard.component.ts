import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ImageService } from "../shared/services/image.service";
import Image from "../../../server/models/image.model";
import Directory from "../../../server/models/directory.model";
import { environment } from "../../environments/environment" 

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent {
  form: FormGroup;
  dirs: Array<Directory>;
  baseUrl = environment.serverUrl;
  currentDirIndex: number = null;
  selectedImage = null;

  constructor(public imageService: ImageService) {
    this.imageService.dirs.subscribe( (dirs: Array<any>) =>{
      this.dirs = dirs.map( (d) => { 
        d.images = d.images.map( (i) => new Image(i) )
        return new Directory(d)
      });
      console.log(this.dirs)
    } )
  }

  setCurrentDir(index): void {
    this.currentDirIndex = index;
  }

  setSelectedImage(image): void {
    this.dirs[this.currentDirIndex].selectedImage = image;
  }

}
