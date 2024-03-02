import { Component, ContentChildren, QueryList, AfterContentInit } from '@angular/core';
import { TabComponent } from '../tab/tab.component';


@Component({
  selector: 'ec-tabs',
  template: `
    <mat-tab-group [(selectedIndex)]="selectedIndex">
      <mat-tab *ngFor="let tab of tabs" [label]="tab.title">
        <ng-template matTabContent>
          <ng-container *ngIf="tab.active">
            <ng-content select="[tabContent]"></ng-content>
          </ng-container>
        </ng-template>
      </mat-tab>
    </mat-tab-group>
  `,
})
export class TabsComponent implements AfterContentInit {
  @ContentChildren(TabComponent) tabs!: QueryList<TabComponent>;

  // Index of the active tab
  selectedIndex = 0;

  ngAfterContentInit() {
    // Set the first tab as active
    this.tabs.toArray()[0].active = true;
  }

  selectTab(tab: TabComponent) {
    // Deactivate all tabs
    this.tabs.toArray().forEach(tab => tab.active = false);
    
    // Activate the tab the user has clicked on.
    tab.active = true;
  }
}