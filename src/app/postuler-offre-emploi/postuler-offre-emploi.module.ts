import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PostulerOffreEmploiPageRoutingModule } from './postuler-offre-emploi-routing.module';
import { PostulerOffreEmploiPage } from './postuler-offre-emploi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    PostulerOffreEmploiPageRoutingModule
  ],
  declarations: [PostulerOffreEmploiPage]
})
export class PostulerOffreEmploiPageModule {}
