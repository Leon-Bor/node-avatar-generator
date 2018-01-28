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
  currentDirIndex: number = 0;
  md5Hash: String = "";

  constructor(public imageService: ImageService) {
    this.imageService.dirs.subscribe( (dirs: Array<any>) =>{
      this.dirs = dirs.map( (d) => { 
        d.images = d.images.map( (i) => new Image(i) )
        return new Directory(d)
      });
      this.generateHash();
    } )
  }

  setCurrentDir(index): void {
    this.currentDirIndex = index;
  }

  setSelectedImage(image): void {
    this.dirs[this.currentDirIndex].selectedImage = image;
    this.generateHash();
  }

  generateHash(): void {
    this.md5Hash = "";
    this.dirs.map( (d: Directory)=>{
      if(d.selectedImage){
        console.log(d.selectedImage.hashChar)
        this.md5Hash = this.md5Hash + d.selectedImage.hashChar
      }else{
        this.md5Hash += "00";
      }
    }) 
  }

}
