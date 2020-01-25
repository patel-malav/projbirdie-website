import { Directive, AfterViewInit, ContentChild, ElementRef } from '@angular/core';
import { Mesh } from 'three';
import { GeometryComponent } from '../geometry/geometry.component';
import { MaterialComponent } from '../material/material.component';

@Directive({
  selector: 'three-object',
})
export class ObjectComponent implements AfterViewInit {

  object: Mesh;

  @ContentChild(GeometryComponent, {static: false})
  private geometryRef: GeometryComponent;

  @ContentChild(MaterialComponent, {static: false})
  private materialRef: MaterialComponent;

  constructor() { }

  ngAfterViewInit(): void {
    console.log('Object view Init');
    console.log(this);
    this.object = new Mesh(this.geometryRef.geometry, this.materialRef.material);
  }

  animate() {
    this.object.rotateX(0.01);
    this.object.rotateY(0.01);
  }
}
