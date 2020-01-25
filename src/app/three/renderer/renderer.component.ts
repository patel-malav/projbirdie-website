import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, ContentChild, Input } from '@angular/core';
import { WebGLRenderer } from 'three';
import { PerspectiveCameraComponent } from '../perspective-camera/perspective-camera.component';
import { SceneComponent } from '../scene/scene.component';

@Component({
  selector: 'three-renderer',
  templateUrl: './renderer.component.html',
  styleUrls: ['./renderer.component.scss']
})
export class RendererComponent implements OnInit, AfterViewInit {

  renderer: WebGLRenderer;
  // @Input() width: number;

  // @Input() height: number;
  private width: number;
  private height: number;

  @ViewChild('canvas', {static: false})
  private canvasRef: ElementRef;

  @ContentChild(PerspectiveCameraComponent, {static: false})
  private cameraComp: PerspectiveCameraComponent;

  @ContentChild(SceneComponent, { static: false})
  private sceneComp: SceneComponent;

  get canvas(): HTMLCanvasElement {
    return this.canvasRef.nativeElement;
  }

  constructor() { }

  ngOnInit() {
    let html = document.documentElement;
    this.width = html.clientWidth;
    // this.height = html.clientHeight;
    this.height = window.innerHeight;
    console.log(this.width, this.height);
  }

  ngAfterViewInit(): void {
    console.log('Rendering Init');

    this.renderer = new WebGLRenderer({ canvas: this.canvas, antialias: true });
    this.renderer.setSize( this.width, this.height );
    this.render();
  }

  render(): void {
    this.renderer.render(this.sceneComp.scene, this.cameraComp.camera);

    this.sceneComp.animate();

    requestAnimationFrame(() => this.render());
  }

  // ngOnChanges(changes: SimpleChanges): void {
    // console.log(changes);

    // try {
    //   if(changes.width.isFirstChange() && changes.width.isFirstChange()) {
    //     console.log(`First Value - Width : ${changes.width.currentValue} Height : ${changes.height.currentValue}`);
    //   } else {
    //     console.log(changes);
    //     const widthChng = changes.width && changes.width.currentValue;
    //     const heightChng = changes.height && changes.height.currentValue;
    //     if(widthChng || heightChng) {
    //       this.renderer.setSize(this.width, this.height);
    //     }
    //   }
    // } catch(err) {
    //   console.log(`ERROR IN RENDER ON CHANGES : ${err}`);
    // }

    // if(changes.width && changes.width.firstChange && changes.height && changes.height.firstChange) {
    //   console.log(`first change`);
    // } else {

    // }

  // }

}
