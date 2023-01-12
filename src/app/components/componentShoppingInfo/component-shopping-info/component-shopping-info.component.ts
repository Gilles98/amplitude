import { Tracks } from './../../../../classes/siteClasses/Tracks';
import { Component, OnInit, NgModule, Input } from '@angular/core';
import { IonicModule, MenuController } from '@ionic/angular';


@Component({
  selector: 'app-shopping-info',
  templateUrl: './component-shopping-info.component.html',
  styleUrls: ['./component-shopping-info.component.scss'],
})
export class ComponentShoppingInfoComponent implements OnInit {

  @Input()tracks: Tracks[] = [];
  constructor(public menu: MenuController) { }

  ngOnInit() {}

}
