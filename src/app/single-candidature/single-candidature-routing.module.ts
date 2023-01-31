import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SingleCandidaturePage } from './single-candidature.page';

const routes: Routes = [
  {
    path: '',
    component: SingleCandidaturePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SingleCandidaturePageRoutingModule {}
