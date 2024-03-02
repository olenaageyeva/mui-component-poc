import { Component, Input } from '@angular/core';

@Component({
  selector: 'ec-content-page',
  templateUrl: './content-page.component.html',
  styleUrl: './content-page.component.scss'
})
export class ContentPageComponent {
  @Input() variant: 'empty' | 'children' = 'children';

}
