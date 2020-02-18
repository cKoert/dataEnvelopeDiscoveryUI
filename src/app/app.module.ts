import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SourceTypeComponent } from './source-type/source-type.component';
import {SelectButtonModule} from "primeng";

@NgModule({
  declarations: [
    AppComponent,
    SourceTypeComponent
  ],
  imports: [
    BrowserModule,
    SelectButtonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
