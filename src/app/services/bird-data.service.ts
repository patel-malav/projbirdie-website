import { Injectable } from '@angular/core';
import { BirdData } from '../interfaces/data';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BirdDataService {

  private data: BirdData = {
    position:  {
      lattitude: 0,
      longitude: 0
    },
    path: [
        // { start: { lattitude: 0, longitude: 0 }, end: { lattitude: 90, longitude: 0 }},
        // { start: { lattitude: 90, longitude: 0 }, end: { lattitude: 0, longitude: 90 }},
        // { start: { lattitude: 0, longitude: 90 }, end: { lattitude: -90, longitude: 90 }},
        // { start: { lattitude: -90, longitude: 90 }, end: { lattitude: 0, longitude: 180 }},
        // { start: { lattitude: 0, longitude: 180 }, end: { lattitude: 90, longitude: 180 }},
        // { start: { lattitude: 90, longitude: 180 }, end: { lattitude: 0, longitude: 270 }},
        // { start: { lattitude: 0, longitude: 270 }, end: { lattitude: -90, longitude: 270 }},
        // { start: { lattitude: -90, longitude: 270 }, end: { lattitude: 0, longitude: 360 }},
        { start: { lattitude: 10, longitude: 15 }, end: { lattitude: 23.4, longitude: 55 }},
        { start: { lattitude: 23.4, longitude: 55 }, end: { lattitude: 35.4, longitude: 67.3 }},
        { start: { lattitude: 35.4, longitude: 67.3 }, end: { lattitude: 52.8, longitude: 0 }},
        { start: { lattitude: 52.8, longitude: 0 }, end: { lattitude: 120, longitude: 35.4 }}
      ]
  };

  data$ = new Observable((obs) => {
    // let temp = [];

    // this.data.path.push(temp.shift());

    // let interval = setInterval(() => {
    //   if(!temp.length) {
    //     clearInterval(interval);
    //   }
    //   obs.next(this.data);
    // }, 1000);

    setTimeout(()=> {
      obs.next(this.data);
    }, 1000);
  });

  constructor() { }


}
