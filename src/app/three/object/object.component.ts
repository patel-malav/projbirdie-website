import { Directive, AfterViewInit, ContentChild, ElementRef, Input } from '@angular/core';
import { Mesh } from 'three';
import { SphereGeometryComponent } from '../geometry/sphere-geometry.component';
import { MeshBasicMaterialComponent } from '../material/mesh-basic-material.component';

@Directive({
  selector: 'three-object',
})
export class ObjectComponent implements AfterViewInit {

  object: Mesh;

  @Input() private posX: number;
  @Input() private posY: number;
  @Input() private posZ: number;

  @ContentChild(SphereGeometryComponent, {static: false})
  private geometryRef: SphereGeometryComponent;

  @ContentChild(MeshBasicMaterialComponent, {static: false})
  private materialRef: MeshBasicMaterialComponent;

  constructor() { }

  ngAfterViewInit(): void {
    console.log('Object view Init');
    console.log(this.posX);
    this.object = new Mesh(this.geometryRef.geometry, this.materialRef.material);
    this.object.translateX(this.posX ? this.posX : 0);
    this.object.translateY(this.posY ? this.posY : 0);
    this.object.translateZ(this.posZ ? this.posZ : 0);
  }

  animate() {
    // this.object.rotateX(0.01);
    this.object.rotateY(0.002);
    this.object
  }
}
