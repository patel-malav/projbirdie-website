import { Directive, AfterViewInit } from '@angular/core';
import { Scene, BoxGeometry, MeshBasicMaterial, Mesh } from 'three';

@Directive({
  selector: 'three-scene',
})
export class SceneComponent implements AfterViewInit {

  scene: Scene;

  constructor() { }

  ngAfterViewInit(): void {
    console.log('scene Init');
    this.scene = new Scene();

    var geometry = new BoxGeometry( 1, 1, 1 );
    var material = new MeshBasicMaterial( { color: 0x00ff00 } );
    var cube = new Mesh( geometry, material );
    this.scene.add( cube );

    console.log('scene Over');
  }

}
