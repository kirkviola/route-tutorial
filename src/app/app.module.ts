import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './userapps/home/home.component';
import { AboutComponent } from './userapps/about/about.component';
import { HelpComponent } from './userapps/help/help.component';
import { E404Component } from './userapps/e404/e404.component';
import { DisplayBooleanPipe } from './display-boolean.pipe';
import { SortPipe } from './sort.pipe';
import { SearchPipe } from './search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    HelpComponent,
    E404Component,
    DisplayBooleanPipe,
    SortPipe,
    SearchPipe,
  ],
  imports: [
    BrowserModule, FormsModule,
    AppRoutingModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
