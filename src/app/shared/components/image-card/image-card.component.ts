import { Component, OnInit } from '@angular/core';
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
  
  public baseUrl = environment.serverUrl;

  constructor() { }

  ngOnInit() {
  }

}
