import { Directive, AfterViewInit, Input } from '@angular/core';
import { Geometry, SphereGeometry } from 'three';

@Directive({
  selector: 'three-sphere-geometry',
})
export class SphereGeometryComponent implements AfterViewInit {

  @Input() private radius: number;
  geometry: Geometry;

  constructor() { }

  ngAfterViewInit(): void {
    console.log('geometry view Init');
    this.geometry = new SphereGeometry(this.radius || 1, 32, 32);
  }
}
