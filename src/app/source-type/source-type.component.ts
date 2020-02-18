import { Component } from '@angular/core';
import { SensorWeb } from '../source-type-interfaces';
import { Copernicus } from '../source-type-interfaces';
import { GdiDe } from '../source-type-interfaces';
import { Dwd } from '../source-type-interfaces';
import { WacodisProduct } from '../source-type-interfaces';

@Component({
  selector: 'app-source-type',
  templateUrl: './source-type.component.html',
  styleUrls: ['./source-type.component.css']
})
export class SourceTypeComponent{
  radioModel = 'Middle';
  componentTitel = "Source type"

  //constructor() { }


}
