import { Component, OnInit, Input } from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {

  @Input() alignment = 'center';
  @Input() color = '';
  @Input() header = '';
  @Input() footer = '';

  constructor() { }

  ngOnInit() {
  }

}
