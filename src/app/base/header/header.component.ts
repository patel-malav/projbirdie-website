import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../navigation.service';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private navService: NavigationService) { 
  }

  ngOnInit() {
  }

  toggleNav(event) {
    this.navService.isOpen.next(event);
  }
}
