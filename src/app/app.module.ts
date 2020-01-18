import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './base/app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Angular Material Modules
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatInputModule} from '@angular/material/input'; 
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatCheckboxModule} from '@angular/material/checkbox'; 
import {MatSlideToggleModule} from '@angular/material/slide-toggle'; 
import {MatRadioModule} from '@angular/material/radio'; 
import {MatDatepickerModule} from '@angular/material/datepicker';
import { NavigationComponent } from './base/navigation/navigation.component';
import { FooterComponent } from './base/footer/footer.component';
import { HeaderComponent } from './base/header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountComponent } from './account/account.component'; 

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    HeaderComponent,
    DashboardComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatRadioModule,
    MatDatepickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
