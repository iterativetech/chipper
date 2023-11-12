import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PlayComponent } from './play/play.component';
import { GridComponent } from './grid/grid.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'play', component: PlayComponent },
  { path: '', redirectTo: '/play?level=1', pathMatch: 'full'}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
