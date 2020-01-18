import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavigationService } from '../navigation.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit, OnDestroy {
  hide = true;
  navSub: Subscription;
  constructor(private navService: NavigationService) { }

  ngOnInit() {
    this.navSub = this.navService.isOpen$.subscribe((event) => {
      if(!!event) {
        this.hide = !this.hide;
      }
    });
  }

  ngOnDestroy() {
    this.navSub.unsubscribe();
  }
}
