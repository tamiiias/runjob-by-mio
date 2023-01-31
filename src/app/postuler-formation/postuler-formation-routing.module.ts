import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostulerFormationPage } from './postuler-formation.page';

const routes: Routes = [
  {
    path: '',
    component: PostulerFormationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostulerFormationPageRoutingModule {}
