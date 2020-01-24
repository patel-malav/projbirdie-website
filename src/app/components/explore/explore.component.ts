import { Component, OnInit, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss']
})
export class ExploreComponent implements OnInit {

  width: number;
  height: number;

  constructor(private eleRef: ElementRef) { }

  ngOnInit() {
    // console.log(`Width: ${this.eleRef.nativeElement.clientWidth} Height: ${this.eleRef.nativeElement.clientHeight}`);
    this.width = this.eleRef.nativeElement.clientWidth;
    this.height = this.eleRef.nativeElement.clientHeight
    // console.log(this.width, this.height);
  }

  // @HostListener('window:resize')
  // updateDimensions() {
  //   console.log(`Width: ${window.innerWidth} Height: ${window.innerHeight}`);
  //   // console.log(this.eleRef.nativeElement);
  //   // console.log(`Width: ${this.eleRef.nativeElement.clientWidth} Height: ${this.eleRef.nativeElement.clientHeight}`);
  //   // this.width = this.eleRef.nativeElement.innerWidth;
  //   // this.height = this.eleRef.nativeElement
  // }
}
