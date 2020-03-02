import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { SourceTypeComponent } from './source-type/source-type.component';
import { RequiredParametersComponent } from './required-parameters/required-parameters.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { AccordionModule} from 'ngx-bootstrap/accordion';


@NgModule({
  declarations: [
    AppComponent,
    SourceTypeComponent,
    RequiredParametersComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    ButtonsModule.forRoot(),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AccordionModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
