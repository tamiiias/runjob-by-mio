"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_single-offre-emploi_single-offre-emploi_module_ts"],{

/***/ 8465:
/*!***************************************************************************!*\
  !*** ./src/app/single-offre-emploi/single-offre-emploi-routing.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SingleOffreEmploiPageRoutingModule": () => (/* binding */ SingleOffreEmploiPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _single_offre_emploi_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./single-offre-emploi.page */ 1956);




const routes = [
    {
        path: '',
        component: _single_offre_emploi_page__WEBPACK_IMPORTED_MODULE_0__.SingleOffreEmploiPage
    }
];
let SingleOffreEmploiPageRoutingModule = class SingleOffreEmploiPageRoutingModule {
};
SingleOffreEmploiPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], SingleOffreEmploiPageRoutingModule);



/***/ }),

/***/ 7693:
/*!*******************************************************************!*\
  !*** ./src/app/single-offre-emploi/single-offre-emploi.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SingleOffreEmploiPageModule": () => (/* binding */ SingleOffreEmploiPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _single_offre_emploi_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./single-offre-emploi-routing.module */ 8465);
/* harmony import */ var _single_offre_emploi_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./single-offre-emploi.page */ 1956);







let SingleOffreEmploiPageModule = class SingleOffreEmploiPageModule {
};
SingleOffreEmploiPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _single_offre_emploi_routing_module__WEBPACK_IMPORTED_MODULE_0__.SingleOffreEmploiPageRoutingModule
        ],
        declarations: [_single_offre_emploi_page__WEBPACK_IMPORTED_MODULE_1__.SingleOffreEmploiPage]
    })
], SingleOffreEmploiPageModule);



/***/ }),

/***/ 1956:
/*!*****************************************************************!*\
  !*** ./src/app/single-offre-emploi/single-offre-emploi.page.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SingleOffreEmploiPage": () => (/* binding */ SingleOffreEmploiPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _single_offre_emploi_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./single-offre-emploi.page.html?ngResource */ 7393);
/* harmony import */ var _single_offre_emploi_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./single-offre-emploi.page.scss?ngResource */ 172);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_offres_emploi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/offres-emploi.service */ 4474);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);







let SingleOffreEmploiPage = class SingleOffreEmploiPage {
    constructor(offresEmploiService, route, router) {
        this.offresEmploiService = offresEmploiService;
        this.route = route;
        this.router = router;
    }
    ngOnInit() {
        this.offreEmploiId = +this.route.snapshot.params['id'];
        this.offreEmploi$ = this.offresEmploiService.getOffreEmploiById(this.offreEmploiId);
    }
    onViewPostulerOffreEmploi() {
        const offreEmploiId = +this.route.snapshot.params['id'];
        this.router.navigateByUrl(`/tabs/offres-emploi/postuler/${offreEmploiId}`);
    }
};
SingleOffreEmploiPage.ctorParameters = () => [
    { type: _services_offres_emploi_service__WEBPACK_IMPORTED_MODULE_2__.OffresEmploiService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
SingleOffreEmploiPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-single-offre-emploi',
        template: _single_offre_emploi_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_single_offre_emploi_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SingleOffreEmploiPage);



/***/ }),

/***/ 172:
/*!******************************************************************************!*\
  !*** ./src/app/single-offre-emploi/single-offre-emploi.page.scss?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaW5nbGUtb2ZmcmUtZW1wbG9pLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 7393:
/*!******************************************************************************!*\
  !*** ./src/app/single-offre-emploi/single-offre-emploi.page.html?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Offre d'emploi</ion-title>\n    <ion-buttons slot=\"start\">\n        <ion-back-button defaultHref=\"/tabs/offres-emploi\"></ion-back-button>\n      </ion-buttons>  \n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n    <ion-card *ngIf=\"offreEmploi$ | async as offreEmploi; else elseBlock\" class=\"offre_emploi_card\">\n      <!--\n      <img src=\"{{ offreEmploi._embedded['wp:featuredmedia']['0'].source_url }}\" />     \n      -->\n      <ion-card-header>\n        \n        <ion-item *ngIf=\"offreEmploi.postule\" class=\"icon_postule_wrapper\" lines=\"none\">\n          <ion-icon size=\"large\" name=\"paper-plane-outline\" color=\"primary\" slot=\"end\"></ion-icon>\n        </ion-item>    \n        <ion-card-subtitle>Offre publiée le {{ offreEmploi.date | date: 'd MMMM yyyy' }}</ion-card-subtitle>\n        <ion-card-title color=\"primary\" [innerHTML]=\"offreEmploi.title.rendered\"></ion-card-title>\n          \n      </ion-card-header>\n\n      <ion-card-content>\n        <p *ngIf=\"offreEmploi['toolset-meta']['details-offre-demploi']['lieu-travail'].raw\"><ion-icon name=\"location-outline\"></ion-icon> <span>{{ offreEmploi['toolset-meta']['details-offre-demploi']['lieu-travail'].raw }}</span></p>\n          \n        \n        <hr>\n        <ion-text color=\"primary\">\n          <h2>Détails du contrat</h2>\n        </ion-text>  \n        \n          \n        <p *ngIf=\"offreEmploi['type-contrat-name']\"><label>Type de contrat</label> : <span>{{ offreEmploi['type-contrat-name'] }}</span></p>\n          \n        <p *ngIf=\"offreEmploi['toolset-meta']['details-offre-demploi']['duree-contrat'].raw\"><label>Durée du contrat</label> : <span>{{ offreEmploi['toolset-meta']['details-offre-demploi']['duree-contrat'].raw }}</span></p>\n          \n        <p *ngIf=\"offreEmploi['etat-name']\"><label>État</label> : <span>{{ offreEmploi['etat-name'] }}</span></p>\n        \n        <p *ngIf=\"offreEmploi['toolset-meta']['details-offre-demploi']['duree-travail-hebdomadaire'].raw\"><label>Durée de travail hebdomadaire</label> : <span>{{ offreEmploi['toolset-meta']['details-offre-demploi']['duree-travail-hebdomadaire'].raw }}h</span></p>\n          \n        <p *ngIf=\"offreEmploi['toolset-meta']['details-offre-demploi']['amplitude-horaire'].raw\"><label>Amplitude horaire</label> : <span>{{ offreEmploi['toolset-meta']['details-offre-demploi']['amplitude-horaire'].raw }}</span></p>\n          \n        \n        \n        \n          \n        <div *ngIf=\"offreEmploi['toolset-meta']['details-offre-demploi']['lieu-formation'].raw\">\n            \n            <hr>\n            <ion-text color=\"primary\">\n              <h2>Détails de la formation</h2>\n            </ion-text> \n            \n            \n            <p *ngIf=\"offreEmploi['toolset-meta']['details-offre-demploi']['lieu-formation'].raw\"><ion-icon name=\"location-outline\"></ion-icon> <span>{{ offreEmploi['toolset-meta']['details-offre-demploi']['lieu-formation'].raw }}</span></p>      \n            \n            <p *ngIf=\"offreEmploi['toolset-meta']['details-offre-demploi']['formation-preparee'].raw\"><label>Formation préparée</label> : <span>{{ offreEmploi['toolset-meta']['details-offre-demploi']['formation-preparee'].raw }}</span></p>\n            \n            <p *ngIf=\"offreEmploi['toolset-meta']['details-offre-demploi']['niveau-diplome-prepare'].raw\"><label>Niveau et diplôme préparé</label> : <span>{{ offreEmploi['toolset-meta']['details-offre-demploi']['niveau-diplome-prepare'].raw }}</span></p>\n            \n            \n            \n        </div>\n          \n        <hr>  \n        <ion-text color=\"primary\">\n          <h2>Description du poste</h2> \n        </ion-text>   \n         \n        \n        <p *ngIf=\"offreEmploi['toolset-meta']['details-offre-demploi']['missions'].raw\"><label>Missions</label> : <span>{{ offreEmploi['toolset-meta']['details-offre-demploi']['missions'].raw }}</span></p>  \n          \n          \n        <hr>  \n        <ion-text color=\"primary\">\n          <h2>Qualifications</h2>\n        </ion-text>   \n        \n        \n        <p *ngIf=\"offreEmploi['toolset-meta']['details-offre-demploi']['formation-diplome-demande'].raw\"><label>Formation / Diplôme demandés</label> : <span>{{ offreEmploi['toolset-meta']['details-offre-demploi']['formation-diplome-demande'].raw }}</span></p>\n          \n        <p *ngIf=\"offreEmploi['toolset-meta']['details-offre-demploi']['experience'].raw\"><label>Expérience</label> : <span>{{ offreEmploi['toolset-meta']['details-offre-demploi']['experience'].raw }}</span></p>\n          \n        <p *ngIf=\"offreEmploi['toolset-meta']['details-offre-demploi']['permis'].raw\"><label>Permis</label> : <span>{{ offreEmploi['toolset-meta']['details-offre-demploi']['permis'].raw }}</span></p>\n          \n        <p *ngIf=\"offreEmploi['toolset-meta']['details-offre-demploi']['moyen-locomotion'].raw\"><label>Moyen de locomotion</label> : <span>{{ offreEmploi['toolset-meta']['details-offre-demploi']['moyen-locomotion'].raw }}</span></p>\n        \n        <p *ngIf=\"offreEmploi['toolset-meta']['details-offre-demploi']['savoir'].raw\"><label>Savoir</label> : <span>{{ offreEmploi['toolset-meta']['details-offre-demploi']['savoir'].raw }}</span></p>\n        <br>\n          \n        <p *ngIf=\"offreEmploi['toolset-meta']['details-offre-demploi']['savoir-etre'].raw\"><label>Savoir être</label> : <span>{{ offreEmploi['toolset-meta']['details-offre-demploi']['savoir-etre'].raw }}</span></p>\n        <br>\n          \n        <p *ngIf=\"offreEmploi['toolset-meta']['details-offre-demploi']['savoir-faire'].raw\"><label>Savoir faire</label> : <span>{{ offreEmploi['toolset-meta']['details-offre-demploi']['savoir-faire'].raw }}</span></p>\n        <br>\n          \n        <p *ngIf=\"offreEmploi['toolset-meta']['details-offre-demploi']['infos-complementaires-commentaire'].raw\"><label>Infos complémentaires / Commentaire</label> : <span>{{ offreEmploi['toolset-meta']['details-offre-demploi']['infos-complementaires-commentaire'].raw }}</span></p>  \n          \n          \n          \n          \n        <br> \n        <p [innerHTML]=\"offreEmploi.content.rendered\"></p>  \n        \n        <div style=\"display: inline-block; width: 100%;\">\n            <ion-button color=\"primary\" (click)=\"onViewPostulerOffreEmploi()\" class=\"right\" [disabled]=\"offreEmploi['etat-name'] !== 'Candidatures en cours' || offreEmploi.postule=='postule'\">\n              <ion-icon name=\"paper-plane-outline\" style=\"color:white;\"></ion-icon>&nbsp;Postuler\n            </ion-button>\n        </div>  \n        <ion-text *ngIf=\"offreEmploi.postule !== 'postule' && offreEmploi['etat-name'] !== 'Candidatures en cours'\" class=\"ion-text-end\" color=\"primary\">\n            <p>Les candidatures sont terminées, vous ne pouvez plus postuler à cette offre d'emploi.</p>\n            <p>{{offreEmploi.postule}}</p>\n        </ion-text>    \n        <ion-text *ngIf=\"offreEmploi.postule == 'postule'\" class=\"ion-text-end\" color=\"primary\">\n            <p>Tu as déjà postulé à cette offre d'emploi. Retrouve toutes tes candidatures dans <ion-router-link href=\"/tabs/candidatures\">l'onglet Candidatures</ion-router-link>.</p>\n        </ion-text>      \n            \n        \n        <br><br>\n      </ion-card-content>\n    </ion-card>\n    <ng-template #elseBlock>\n        <div class=\"spin-wrapper\">\n            <ion-spinner color=\"primary\"></ion-spinner>\n        </div>    \n    </ng-template>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_single-offre-emploi_single-offre-emploi_module_ts.js.map