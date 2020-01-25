import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RendererComponent } from './renderer/renderer.component';
import { PerspectiveCameraComponent } from './perspective-camera/perspective-camera.component';
import { SceneComponent } from './scene/scene.component';
import { ObjectComponent } from './object/object.component';
import { SphereGeometryComponent } from './geometry/sphere-geometry.component';
import { MeshBasicMaterialComponent } from './material/mesh-basic-material.component';

@NgModule({
  declarations: [
    RendererComponent,
    PerspectiveCameraComponent,
    SceneComponent,
    ObjectComponent,
    SphereGeometryComponent,
    MeshBasicMaterialComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    RendererComponent,
    PerspectiveCameraComponent,
    SceneComponent,
    ObjectComponent,
    SphereGeometryComponent,
    MeshBasicMaterialComponent,
  ]
})
export class ThreeModule { }
