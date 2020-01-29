import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Explorer } from '../../classes/explorer';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss']
})
export class ExploreComponent implements OnInit, AfterViewInit {

  @ViewChild('canvas', {static: false})
  private canvasRef: ElementRef;

  private get canvas(): HTMLCanvasElement {
    return this.canvasRef.nativeElement;
  }

  constructor() { }

  ngOnInit() { }

  ngAfterViewInit() {
    new Explorer(this.canvas);
  }
}
