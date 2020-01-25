import { Directive, AfterViewInit } from '@angular/core';
import { Geometry, SphereGeometry } from 'three';

@Directive({
  selector: 'three-sphere-geometry',
})
export class SphereGeometryComponent implements AfterViewInit {

  geometry: Geometry;

  constructor() {
    this.geometry = new SphereGeometry(1, 32, 32);
  }

  ngAfterViewInit(): void {
    console.log('geometry view Init');
  }
}
