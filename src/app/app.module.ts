import { NgModule } from '@angular/core';
import { NgIf } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
/* Importing created modules */
import { MenuComponent } from './menu/menu.component';
import { AppComponent } from './app.component';
import { Exercise1Component } from './exercise1/exercise1.component';
import { Exercise2Component } from './exercise2/exercise2.component';
import { Exercise3Component } from './exercise3/exercise3.component';
import { DetailComponent } from './detail/detail.component';
/* Angular material imports*/
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSort, Sort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [
    AppComponent,
    Exercise1Component,
    Exercise2Component,
    Exercise3Component,
    DetailComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    NgIf,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatRadioModule,
    HttpClientModule,
    MatCardModule,
    MatMenuModule,
    MatToolbarModule,
    MatTableModule, 
    MatSortModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
