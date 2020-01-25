import { Directive, AfterViewInit, Input, OnInit } from '@angular/core';
import { PerspectiveCamera } from 'three';

@Directive({
  selector: 'three-perspective-camera',
})
export class PerspectiveCameraComponent implements OnInit, AfterViewInit { 

  private width: number;
  private height: number;

  @Input() private posX: number;
  @Input() private posY: number;
  @Input() private posZ: number;

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
    this.camera.translateX(this.posX ? this.posX: 0);
    this.camera.translateY(this.posY ? this.posY: 0);
    this.camera.translateZ(this.posZ ? this.posZ: 0);
    console.log('perspective camera over');
  }

}