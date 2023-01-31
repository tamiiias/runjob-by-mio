import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SingleOffreEmploiPageRoutingModule } from './single-offre-emploi-routing.module';

import { SingleOffreEmploiPage } from './single-offre-emploi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SingleOffreEmploiPageRoutingModule
  ],
  declarations: [SingleOffreEmploiPage]
})
export class SingleOffreEmploiPageModule {}
