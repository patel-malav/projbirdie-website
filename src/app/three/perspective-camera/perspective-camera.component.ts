import { Directive, AfterViewInit, Input, OnInit } from '@angular/core';
import { PerspectiveCamera } from 'three';

@Directive({
  selector: 'three-perspective-camera',
})
export class PerspectiveCameraComponent implements OnInit, AfterViewInit { 

  // @Input() width: number;
  // @Input() height: number;
  private width: number;
  private height: number;

  camera: PerspectiveCamera;

  constructor() { }

  ngOnInit(): void {
    let html = document.documentElement;
    this.width = html.clientWidth;
    // this.height = html.clientHeight;
    this.height = window.innerHeight;
    console.log(this.width, this.height);
  }

  ngAfterViewInit(): void {
    console.log('perspective camera Init');
    this.camera = new PerspectiveCamera(75, this.width / this.height, 0.1, 1000);
    // this.camera = new PerspectiveCamera(75, 400 / 400, 0.1, 1000);
    this.camera.position.z = 5;
    console.log('perspective camera over');
  }

}