import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PostulerFormationPageRoutingModule } from './postuler-formation-routing.module';
import { PostulerFormationPage } from './postuler-formation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    PostulerFormationPageRoutingModule
  ],
  declarations: [PostulerFormationPage]
})
export class PostulerFormationPageModule {}
