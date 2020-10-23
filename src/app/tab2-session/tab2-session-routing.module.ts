import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab2SessionComponent } from './tab2-session.component';

const routes: Routes = [
  {
    path: '',
    component: Tab2SessionComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab2SessionPageRoutingModule {}
