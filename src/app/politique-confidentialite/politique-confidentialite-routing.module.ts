import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PolitiqueConfidentialitePage } from './politique-confidentialite.page';

const routes: Routes = [
  {
    path: '',
    component: PolitiqueConfidentialitePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PolitiqueConfidentialitePageRoutingModule {}
