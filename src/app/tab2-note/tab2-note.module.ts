import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2NoteComponent } from './tab2-note.component';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab2NotePageRoutingModule } from './tab2-note-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab2NotePageRoutingModule
  ],
  declarations: [Tab2NoteComponent]
})
export class Tab2NoteModule {}
