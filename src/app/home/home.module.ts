import { ComponentShoppingInfoComponent } from './../components/componentShoppingInfo/component-shopping-info/component-shopping-info.component';
import { MenuComponent } from './../components/menu/menu.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage,MenuComponent, ComponentShoppingInfoComponent]
})
export class HomePageModule {}
