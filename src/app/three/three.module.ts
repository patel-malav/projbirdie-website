import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RendererComponent } from './renderer/renderer.component';

@NgModule({
  declarations: [
    RendererComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    RendererComponent
  ]
})
export class ThreeModule { }
