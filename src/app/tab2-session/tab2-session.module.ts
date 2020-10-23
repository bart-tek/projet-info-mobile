import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2SessionComponent } from './tab2-session.component';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab2SessionPageRoutingModule } from './tab2-session-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab2SessionPageRoutingModule
  ],
  declarations: [Tab2SessionComponent]
})
export class Tab2SessionModule {}
