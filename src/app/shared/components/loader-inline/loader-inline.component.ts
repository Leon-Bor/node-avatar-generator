import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-ui-loader-inline',
  templateUrl: './loader-inline.component.html',
  styleUrls: ['./loader-inline.component.scss']
})
export class LoaderInlineComponent {
  @Input() visible: string;
  @Input() small: boolean = false;
}
