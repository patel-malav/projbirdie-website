import { Directive, AfterViewInit } from '@angular/core';
import { BoxGeometry, Geometry, SphereGeometry } from 'three';

@Directive({
  selector: 'three-geometry',
})
export class GeometryComponent implements AfterViewInit {

  geometry: Geometry;

  constructor() { 
    // this.geometry = new BoxGeometry(1, 1, 1);
    this.geometry = new SphereGeometry(1, 32, 32);
  }

  ngAfterViewInit(): void {
    console.log('geometry view Init');
  }
}
