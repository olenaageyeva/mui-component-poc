import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { MatTabsModule } from '@angular/material/tabs'; // import this

import { DemoPageComponent } from './components/demo-page/demo-page.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { TabComponent } from './components/tab/tab.component';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ContentPageComponent } from './components/content-page/content-page.component';


@NgModule({
  declarations: [
    DemoPageComponent,
    TabComponent,
    TabsComponent,
    AppComponent,
    ContentPageComponent
    // other components
  ],
  imports: [
    CommonModule,
    BrowserModule,
    MatTabsModule
    // other modules
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }