import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'offres-emploi',
        children: [
          {
            path: "",
            loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
          },
          {
            path: "single/:id",
            loadChildren: () => import('../single-offre-emploi/single-offre-emploi.module').then(m => m.SingleOffreEmploiPageModule)
          },
          {
            path: "postuler/:id",
            loadChildren: () => import('../postuler-offre-emploi/postuler-offre-emploi.module').then(m => m.PostulerOffreEmploiPageModule)
          }
        ] 
      },
      {
        path: 'formations',
        children: [
          {
            path: "",
            loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
          },
          {
            path: "single/:id",
            loadChildren: () => import('../single-formation/single-formation.module').then(m => m.SingleFormationPageModule)
          },
          {
            path: "postuler/:id",
            loadChildren: () => import('../postuler-formation/postuler-formation.module').then(m => m.PostulerFormationPageModule)
          }
        ] 
      },
      {
        path: 'candidatures',
        children: [
          {
            path: "",
            loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
          },
          {
            path: "single/:id",
            loadChildren: () => import('../single-candidature/single-candidature.module').then(m => m.SingleCandidaturePageModule)
          }
        ] 
      },
      {
        path: 'tab4',
        loadChildren: () => import('../tab4/tab4.module').then(m => m.Tab4PageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/offres-emploi',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/offres-emploi',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
