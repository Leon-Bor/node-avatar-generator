import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import {environment} from '../../../../environments/environment'

@Component({
  selector: 'app-dir-card',
  templateUrl: './dir-card.component.html',
  styleUrls: ['./dir-card.component.scss']
})
export class DirCardComponent implements OnInit {

  @Input() dir;
  @Input() selected;
  @Output() onClick = new EventEmitter();
  
  public isLoading = true;
  public baseUrl = environment.serverUrl;

  constructor() {
    console.log(this.dir)
   }

  ngOnInit() {
  }

  selectDir(): void {
    this.onClick.emit();
  }

  hideLoader(): void {
    console.log("image loaded");
    this.isLoading = false;
  }

}
