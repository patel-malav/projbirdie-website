import { Injectable } from '@angular/core';
import { Observable, Subject, fromEvent } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  public isOpen = new Subject();
  public isOpen$ = this.isOpen.asObservable();
  constructor() { 
    // this.isOpen$.subscribe((event) => {
    //   console.log(event);
    // });
   }
}
