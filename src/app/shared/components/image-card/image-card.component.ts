import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Input } from '@angular/core';
import {environment} from '../../../../environments/environment'

@Component({
  selector: 'app-image-card',
  templateUrl: './image-card.component.html',
  styleUrls: ['./image-card.component.scss']
})
export class ImageCardComponent implements OnInit {

  @Input() image;
  @Input() dir;
  @Input() selected;
  @Output() onClick = new EventEmitter();
  @Input() index = 0;
  
  public isLoading = true;
  public baseUrl = environment.serverUrl;

  constructor() { }

  ngOnInit() {
  }

  selectImage(): void {
    this.onClick.emit(this.image);
  }

  hideLoader(): void {
    console.log("image loaded");
    this.isLoading = false;
  }

  getImageLink(): string {
    if( this.index == 0 && this.dir.allowNoImage == true){
      return this.baseUrl + "/images/no-image.png";
    }else{
      return this.baseUrl + '/images/bimages/' + this.dir.directoryName + '/' + this.image.fileName;
    }
  }

}
