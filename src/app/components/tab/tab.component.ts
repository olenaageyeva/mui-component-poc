import { Component, Input } from '@angular/core';

@Component({
  selector: 'ec-tab',
  template: `
    {{title}} Hello!
    <ng-content></ng-content>
  `,
})
export class TabComponent {
  @Input('tabTitle') title: string ='';
  @Input() active = false;
  
}