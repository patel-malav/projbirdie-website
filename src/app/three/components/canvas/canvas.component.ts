import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'three-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss']
})
export class CanvasComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('HELLO');
  }

}
