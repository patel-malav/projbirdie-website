import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RendererComponent } from './renderer/renderer.component';
import { PerspectiveCameraComponent } from './perspective-camera/perspective-camera.component';
import { SceneComponent } from './scene/scene.component';
import { ObjectComponent } from './object/object.component';
import { MaterialComponent } from './material/material.component';
import { GeometryComponent } from './geometry/geometry.component';

@NgModule({
  declarations: [
    RendererComponent,
    PerspectiveCameraComponent,
    SceneComponent,
    ObjectComponent,
    MaterialComponent,
    GeometryComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    RendererComponent,
    PerspectiveCameraComponent,
    SceneComponent,
    ObjectComponent,
    MaterialComponent,
    GeometryComponent
  ]
})
export class ThreeModule { }
