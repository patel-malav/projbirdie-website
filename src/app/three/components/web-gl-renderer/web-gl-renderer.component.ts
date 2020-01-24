import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
// import { WebGLRenderer } from 'three';
// import * as THREE from 'three';

@Component({
  selector: 'three-web-gl-renderer',
  templateUrl: './web-gl-renderer.component.html',
  styleUrls: ['./web-gl-renderer.component.scss']
})
export class WebGlRendererComponent implements OnInit, AfterViewInit {

  // private renderer: WebGLRenderer;

  @ViewChild('canvas', {static: false})
  private canvasRef: ElementRef;
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    // this.renderer = new WebGLRenderer({
    //   canvas: this.canvas,
    //   antialias: true
    // });
  }
  
  // private get canvas(): HTMLCanvasElement {
    // return this.canvasRef.nativeElement;
  // }



}
