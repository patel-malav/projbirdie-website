import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { Explorer } from '../../classes/explorer';
import { BirdDataService } from 'src/app/services/bird-data.service';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss']
})
export class ExploreComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('canvas', {static: false})
  private canvasRef: ElementRef;

  private get canvas(): HTMLCanvasElement {
    return this.canvasRef.nativeElement;
  }

  private explorer: Explorer;

  constructor(private birdDataService: BirdDataService) { }

  ngOnInit() { }

  ngAfterViewInit() {
    new Explorer(this.canvas, {birdData: this.birdDataService.data$});
  }

  ngOnDestroy(): void {
    this.explorer.unsubscribe();
  }
}
