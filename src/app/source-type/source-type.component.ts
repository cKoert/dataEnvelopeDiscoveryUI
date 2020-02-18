import { Component, OnInit } from '@angular/core';
import {SelectButtonModule} from "primeng/selectbutton";
import {SelectItem} from "primeng/api";
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
export class SourceTypeComponent implements OnInit {

  title = 'Source type';

  /*
  sourceTypes : SelectItem[];
  selectedType : string;
  selectedTypes: string[] = ["SensorWeb.name"];
  */
  constructor() {
    //this.sourceTypes = [{label: "SensorWeb.name", value:"SensorWeb.name"}];

  }

  ngOnInit() {
  }

  /*
  clear(){
    this.selectedType = null;
    this.selectedTypes = [];
  }
  */
}
