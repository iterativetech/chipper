import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GridComponent } from './grid/grid.component';

import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { PartDetailComponent } from './part-detail/part-detail.component';
import { ToolboxComponent } from './toolbox/toolbox.component';
import {MatList, MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCard, MatCardModule} from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { PlayComponent } from './play/play.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
//import { InMemoryDataService } from './in-memory-data.service';
import { provideRouter } from '@angular/router';
import { withComponentInputBinding } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule} from '@angular/material/dialog';



@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    PartDetailComponent,
    ToolboxComponent,
    PlayComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    HttpClientModule,
    //HttpClientInMemoryWebApiModule.forRoot(
    //  InMemoryDataService, { dataEncapsulation: false }
    //),
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatGridListModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
