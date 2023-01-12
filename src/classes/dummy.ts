import { Tracks } from "./siteClasses/Tracks";
import { Artists } from "./siteClasses/Artists";
import { trackInfo } from "./siteClasses/trackInfo";




export class Dummy {



  constructor(){
    console.log(this.getDummyTracks());
  }
  getDummyTracks(): Tracks[]{
    let tracks: Tracks[] = [];
    let Artists: Artists[] = [{
      naam :'GetJiggly',
      id : 0
    },
    {
      naam : "Marcus Fort",
      id : 1
    },
    {
      naam: "Zone revelation",
      id: 2
    },{
      naam: "Gman",
      id: 3
    }];

    var romanNumerals = [ "I","II","III","IV"];


    let counter: number = 1;
   let idCounter: number = 0;
    for (const iterator of Artists) {
      for (let index = 0; index < 4; index++) {
        if( counter > 4){
          counter = 1;
        }

        var date = ""+ (counter + index + 2) + "/"+ (counter * 3) + "/" + "2022";
        var streams = ((counter + index + 1) * (Math.max(index, counter) - Math.min(index, counter)) * (202  * Math.round((Math.random() * 3))));
        var numeral = romanNumerals[counter];
        tracks.push({
          id: idCounter,
          trackInfo: this.getTrackInfoDummy("3:" + Math.round(counter + (Math.random() + 0.5))+ (index + Math.floor((Math.random() * 2))).toString()[0], iterator,date, streams, ""+ iterator.naam + romanNumerals[counter-1])
        });
        counter++;
        idCounter++;
      }

    }
    return tracks;
    }



  getTrackInfoDummy(duration:string, artist: Artists, d: string, streams:number, name: string): trackInfo{
    let trackInfo: trackInfo = {
      name: name,
      duration: duration,
      artist: artist,
      dateCreated: d,
      streams: streams
    }
    return trackInfo
  }
}
