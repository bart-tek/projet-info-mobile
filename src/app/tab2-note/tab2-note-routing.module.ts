import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab2NoteComponent } from './tab2-note.component';

const routes: Routes = [
  {
    path: '',
    component: Tab2NoteComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab2NotePageRoutingModule {}
