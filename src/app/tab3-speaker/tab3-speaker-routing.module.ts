import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab3SpeakerComponent } from './tab3-speaker.component';

const routes: Routes = [
  {
    path: '',
    component: Tab3SpeakerComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab3SpeakerPageRoutingModule {}
