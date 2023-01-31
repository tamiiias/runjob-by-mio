import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SingleOffreEmploiPage } from './single-offre-emploi.page';

const routes: Routes = [
  {
    path: '',
    component: SingleOffreEmploiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SingleOffreEmploiPageRoutingModule {}
