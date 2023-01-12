import { Analytics } from '@angular/fire/analytics';
import { Tracks } from './../../classes/siteClasses/Tracks';
import { Dummy } from './../../classes/dummy';
import { Component } from '@angular/core';
import { Event } from '@angular/router';
import * as analytics from 'firebase/analytics';
import { FirebaseApp } from '@angular/fire/app';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  Dummy: Tracks[] = new Dummy().getDummyTracks();
  SelectList:Tracks[] = [];
  startNav: any[] = [{
    src: "musical-notes-outline",
    title: "Buy",
    descr: "Explore our music store"
  },
  {
    src: "construct",
    title: "Services",
    descr: "Services we offer"
  },
  {
    src: "grid",
    title: "Custom",
    descr: "Request a custom track"
  }];

  count: number = 0;
  genres: string[] = ["Drum & Bass","Ambient","Breakbeat", "Breakcore", "Crossbreed", "Darkstep", "Deepstep", "Halfstep", "Hardstep", "Jump Up", "Jungle ","Liquid", "Minimal","Neurofunk", "Techstep", "Dubstep", "Briddim"/// Brostep Drumstep Chillstep Deathstep Grimestep Liquid Dubstep Melodic Dubstep Melodic Drumstep Melodic Riddim Metalstep Neurostep Trapstep Reggaestep Riddim UK Dubstep Vomitstep Wobblestep Wubstep Hard Dance Dubstyle Early Hardcore Early Hardstyle Jumpstyle Frenchcore Hardcore Hardstyle Psystyle Rawstyle Rawphoric Tekstyle Trapstyle Uptempo Hauntology Sovietwave Synthwave Vaporwave Hip Hop Boom Bap Chillhop Crunk Gangsta Rap Lofi House Acid House Bass House Bigroom House Bigroom Techno Complextro Deep House Dutch House Electro House Future House Future Rave Italo House Jazz House Melbourne House Minimal House Moombathon Progressive House Retro House Slap House Tech House Techno Hard Techno Meme Techno Minimal Techno Schranz Trance Acidtrance Dream Trance Eurotrance Goa Trance Hardtrance Psytrance Progressive Psytrance Tech Trance Uplifting Trance Vocal Trance Trap Drill Drill Rap Hard Trap Hybrid Trap Mumble Rap"
]
  basketItemsTotal: number = 0;

  async openMenu(){
    console.log("called");
if (await this.menu.isOpen("main")) {
  this.menu.close();
  console.log("open");
} else {
  this.menu.open();
}
  }
  constructor(public firebase: FirebaseApp, public menu: MenuController) {

  }



  addTotal(item: Tracks): void{

    this.basketItemsTotal++;
    this.SelectList.push(item);
    console.log(item);

this.count++;
    analytics.logEvent(analytics.getAnalytics(), 'BucketItems', {'count': this.count});

  }

  changeColor(evt:any) :void{


    analytics.logEvent(analytics.getAnalytics(), 'Genre', {'count': this.count, 'Genre': 'iets'});
    let text = "";
    console.log(typeof(evt));
    if (evt.target.className.includes('dark')) {
      text = "ion-color ion-color-primary md hydrated";
    }
    if (evt.target.className.includes('primary')) {
      text = "ion-color ion-color-dark md hydrated";
    }
    evt.target.className = text;
  }



}
