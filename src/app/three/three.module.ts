import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RendererComponent } from './renderer/renderer.component';
import { PerspectiveCameraComponent } from './perspective-camera/perspective-camera.component';
import { SceneComponent } from './scene/scene.component';

@NgModule({
  declarations: [
    RendererComponent,
    PerspectiveCameraComponent,
    SceneComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    RendererComponent,
    PerspectiveCameraComponent,
    SceneComponent
  ]
})
export class ThreeModule { }
