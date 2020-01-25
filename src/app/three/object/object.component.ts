import { Directive, AfterViewInit, ContentChild, ElementRef } from '@angular/core';
import { Mesh } from 'three';
import { SphereGeometryComponent } from '../geometry/sphere-geometry.component';
import { MeshBasicMaterialComponent } from '../material/mesh-basic-material.component';

@Directive({
  selector: 'three-object',
})
export class ObjectComponent implements AfterViewInit {

  object: Mesh;

  @ContentChild(SphereGeometryComponent, {static: false})
  private geometryRef: SphereGeometryComponent;

  @ContentChild(MeshBasicMaterialComponent, {static: false})
  private materialRef: MeshBasicMaterialComponent;

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
