import { Directive, AfterViewInit, ContentChildren, QueryList } from '@angular/core';
import { Scene, BoxGeometry, MeshBasicMaterial, Mesh, Color } from 'three';
import { ObjectComponent } from '../object/object.component';

@Directive({
  selector: 'three-scene',
})
export class SceneComponent implements AfterViewInit {

  scene: Scene;

  @ContentChildren(ObjectComponent)
  private objects: QueryList<ObjectComponent>

  constructor() { }

  ngAfterViewInit(): void {
    console.log('scene Init');
    this.scene = new Scene();
    this.scene.background = new Color(0x5f9ea0);

    console.log(this.objects.first);

    this.objects.forEach(item => { this.scene.add(item.object) });

    

    console.log('scene Over');
  }

  animate(): void {
    // this.objects.forEach(item => { item.animate() });
    this.objects.first.animate();
  }
}
