import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit, OnDestroy {

  user = {
    displayName: 'John Doe',
    email: 'johndoe@internet.com',
    photoURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS2UfOx_ANW_jK7e31p1tqZ6xd6_MbjMxYqpGrezasInsV6vINM',
    uid: 'yni6kfTEdsPVDL4HsVh2I68CNB02'
  }

  constructor(public authService: AuthService) {  }

  ngOnInit() { }

  ngOnDestroy() { }
}
