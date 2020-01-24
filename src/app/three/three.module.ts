import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebGlRendererComponent } from './components/web-gl-renderer/web-gl-renderer.component';

@NgModule({
  declarations: [
    WebGlRendererComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    WebGlRendererComponent
  ]
})
export class ThreeModule { }
