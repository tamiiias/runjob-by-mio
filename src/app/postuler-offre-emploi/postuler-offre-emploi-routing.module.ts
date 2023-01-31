import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostulerOffreEmploiPage } from './postuler-offre-emploi.page';

const routes: Routes = [
  {
    path: '',
    component: PostulerOffreEmploiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostulerOffreEmploiPageRoutingModule {}
