import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { StatesTimelineComponent } from './states-timeline/states-timeline.component';


const routes: Routes = [
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
