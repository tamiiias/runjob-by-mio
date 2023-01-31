import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SingleFormationPage } from './single-formation.page';

const routes: Routes = [
  {
    path: '',
    component: SingleFormationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SingleFormationPageRoutingModule {}
