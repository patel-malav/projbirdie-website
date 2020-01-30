import { Injectable } from '@angular/core';
import { BirdData } from '../interfaces/data';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BirdDataService {

  private data: BirdData = {
    position:  {
      lattitude: 45,
      longitude: 0
    },
    path: [
      {
        lattitude: 0, longitude: 0
      },
      {
        lattitude: 0, longitude: 180
      },
      {
        lattitude: 90, longitude: 180
      }
    ]
  };

  data$ = new Observable((obs) => {
    setTimeout(()=> {
      obs.next(this.data);
    }, 1000);
  });

  constructor() { }


}
