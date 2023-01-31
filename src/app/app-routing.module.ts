import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'postuler-offre-emploi',
    loadChildren: () => import('./postuler-offre-emploi/postuler-offre-emploi.module').then( m => m.PostulerOffreEmploiPageModule)
  },
  {
    path: 'postuler-formation',
    loadChildren: () => import('./postuler-formation/postuler-formation.module').then( m => m.PostulerFormationPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: '',
    redirectTo: '/welcome',
    pathMatch: 'full'
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'welcome',
    loadChildren: () => import('./welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: 'lostpassword/:lostpassword_key/:lostpassword_login',
    loadChildren: () => import('./lostpassword/lostpassword.module').then( m => m.LostpasswordPageModule)
  },
  {
    path: 'politique-confidentialite',
    loadChildren: () => import('./politique-confidentialite/politique-confidentialite.module').then( m => m.PolitiqueConfidentialitePageModule)
  },
  {
    path: 'single-candidature',
    loadChildren: () => import('./single-candidature/single-candidature.module').then( m => m.SingleCandidaturePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
