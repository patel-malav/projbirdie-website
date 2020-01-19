import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../services/navigation.service';

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

  // redirDashboard() {
  //   console.log('Click');
  // }
}
