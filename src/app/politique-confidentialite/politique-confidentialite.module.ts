import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PolitiqueConfidentialitePageRoutingModule } from './politique-confidentialite-routing.module';

import { PolitiqueConfidentialitePage } from './politique-confidentialite.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PolitiqueConfidentialitePageRoutingModule
  ],
  declarations: [PolitiqueConfidentialitePage]
})
export class PolitiqueConfidentialitePageModule {}
