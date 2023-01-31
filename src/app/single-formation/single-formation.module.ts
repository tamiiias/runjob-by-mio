import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SingleFormationPageRoutingModule } from './single-formation-routing.module';

import { SingleFormationPage } from './single-formation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SingleFormationPageRoutingModule
  ],
  declarations: [SingleFormationPage]
})
export class SingleFormationPageModule {}
