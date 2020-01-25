import { Directive, AfterViewInit, Input } from '@angular/core';
import { MeshBasicMaterial } from 'three';

@Directive({
  selector: 'three-mesh-basic-material',
})

export class MeshBasicMaterialComponent implements AfterViewInit {

  @Input() private color: number;
  
  material: MeshBasicMaterial;

  constructor() { }

  ngAfterViewInit(): void {
    console.log('material view Init');
    this.material = new MeshBasicMaterial({color: this.color});
    this.material.wireframe = true;
  }

}

