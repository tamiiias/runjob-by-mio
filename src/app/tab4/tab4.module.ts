import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Tab4Page } from './tab4.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';


import { CandidatureComponent } from '../candidature/candidature.component';
import { CandidatureListComponent } from '../candidature-list/candidature-list.component';

import { Tab4PageRoutingModule } from './tab4-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: Tab4Page }]),
    Tab4PageRoutingModule,
  ],
  declarations: [
    Tab4Page,
    CandidatureComponent,
    CandidatureListComponent]
})
export class Tab4PageModule {}