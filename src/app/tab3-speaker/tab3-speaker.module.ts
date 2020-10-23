import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab3SpeakerComponent } from './tab3-speaker.component';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab3SpeakerPageRoutingModule } from './tab3-speaker-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab3SpeakerPageRoutingModule
  ],
  declarations: [Tab3SpeakerComponent]
})
export class Tab3SpeakerModule {}
