import { Component, HostListener } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ImageService } from "../shared/services/image.service";
import Image from "../../../server/models/image.model";
import Directory from "../../../server/models/directory.model";
import { environment } from "../../environments/environment" 
import { AfterContentInit } from '@angular/core/src/metadata/lifecycle_hooks';
let twttr;

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
  verticalOffset: number = 0;
  minusMargin: number = 250;
  interval;

  constructor(public imageService: ImageService) {
    this.imageService.dirs.subscribe( (dirs: Array<any>) =>{
      this.dirs = dirs.map( (d) => { 
        d.images = d.images.map( (i) => new Image(i) )
        return new Directory(d)
      });
      this.generateHash();
    } )
  }

  @HostListener('window:scroll', ['$event']) onScrollEvent($event){
    let vo = window.pageYOffset ||document.documentElement.scrollTop || document.body.scrollTop || 0;


    if(vo > this.minusMargin && window.innerHeight > 700 && !this.isMobile()){
      this.marginInterval(vo - this.minusMargin)
    }else{
      this.marginInterval(0)
    }

  } 

  isMobile() {
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
      return true;
    }
    return false;
  }

  marginInterval(value) {

    clearInterval(this.interval);
    this.interval = setInterval(() => {

      if(value > this.verticalOffset){
        this.verticalOffset++;
      }else{
        this.verticalOffset--;
      }

      if (value == this.verticalOffset) {
          clearInterval(this.interval);
        return;
      }
    }, 5);
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
        this.md5Hash = this.md5Hash + d.selectedImage.hashChar
      }else{
        this.md5Hash += "00";
      }
    }) 
  }

}
