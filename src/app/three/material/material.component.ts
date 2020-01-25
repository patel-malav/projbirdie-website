import { Directive, AfterViewInit } from '@angular/core';
import { MeshBasicMaterial } from 'three';

@Directive({
  selector: 'three-material',
})

export class MaterialComponent implements AfterViewInit {

  material: MeshBasicMaterial;

  constructor() {
    this.material = new MeshBasicMaterial({color: 0x0fffff});
  }

  ngAfterViewInit(): void {
    console.log('material view Init');
  }

}

