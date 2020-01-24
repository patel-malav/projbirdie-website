import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Scene, PerspectiveCamera, WebGLRenderer, BoxGeometry, MeshBasicMaterial, Mesh } from 'three';

@Component({
  selector: 'three-renderer',
  templateUrl: './renderer.component.html'
})
export class RendererComponent implements OnInit, AfterViewInit {

  @ViewChild('canvas', {static: false})
  private canvasRef: ElementRef;

  get canvas(): HTMLCanvasElement {
    return this.canvasRef.nativeElement;
  }

  constructor() {
    // console.log('HELLO CONSTRUCTOR', this.canvas);
  }

  ngOnInit() {
    // console.log('On INIT', this.canvas);
  }

  ngAfterViewInit(): void {
    console.log(this.canvas);

    let width = this.canvas.parentElement.parentElement.clientWidth;
    let height = this.canvas.parentElement.parentElement.clientHeight;

    var scene = new Scene();
			var camera = new PerspectiveCamera( 75, width / height, 0.1, 1000 );

			var renderer = new WebGLRenderer({
        canvas: this.canvas
      });
 
      renderer.setSize( width, height );
      
			var geometry = new BoxGeometry( 1, 1, 1 );
			var material = new MeshBasicMaterial( { color: 0x00ff00 } );
			var cube = new Mesh( geometry, material );
			scene.add( cube );

			camera.position.z = 5;

			var animate = function () {
				requestAnimationFrame( animate );

				cube.rotation.x += 0.01;
				cube.rotation.y += 0.01;

				renderer.render( scene, camera );
			};

			animate();
  }

}
