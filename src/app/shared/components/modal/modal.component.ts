import { Component, OnInit, Directive, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-ui-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  constructor(private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {}


  onClose() {
    this.router.navigate(['generator',{ outlets: { modal: null } }]);
  }

}

@Directive({
  selector: 'app-modal-header, app-modal-body, app-modal-footer' // tslint:disable-line
})
export class ModalDirectivesDirective {}
