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
      { start: { lattitude: 0, longitude: 0 }, end: { lattitude: 90, longitude: 0 }},
      { start: { lattitude: 90, longitude: 0 }, end: { lattitude: 0, longitude: 90 }},
      { start: { lattitude: 0, longitude: 90 }, end: { lattitude: -90, longitude: 90 }},
      { start: { lattitude: -90, longitude: 90 }, end: { lattitude: 0, longitude: 180 }},
      { start: { lattitude: 0, longitude: 180 }, end: { lattitude: 90, longitude: 180 }},
      { start: { lattitude: 90, longitude: 180 }, end: { lattitude: 0, longitude: 270 }},
      { start: { lattitude: 0, longitude: 270 }, end: { lattitude: -90, longitude: 270 }},
      { start: { lattitude: -90, longitude: 270 }, end: { lattitude: 0, longitude: 360 }},    
    ]
  };

  data$ = new Observable((obs) => {
    setTimeout(()=> {
      obs.next(this.data);
    }, 1000);
  });

  constructor() { }


}