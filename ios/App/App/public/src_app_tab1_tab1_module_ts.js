"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tab1_tab1_module_ts"],{

/***/ 8519:
/*!******************************************************************!*\
  !*** ./src/app/offre-emploi-list/offre-emploi-list.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OffreEmploiListComponent": () => (/* binding */ OffreEmploiListComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _offre_emploi_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./offre-emploi-list.component.html?ngResource */ 8149);
/* harmony import */ var _offre_emploi_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./offre-emploi-list.component.scss?ngResource */ 8588);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _services_offres_emploi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/offres-emploi.service */ 4474);
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/authentication.service */ 7053);
/* harmony import */ var _services_secteurs_activite_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/secteurs-activite.service */ 8360);








let OffreEmploiListComponent = class OffreEmploiListComponent {
    constructor(offresEmploiService, secteursActiviteService, authenticationService) {
        this.offresEmploiService = offresEmploiService;
        this.secteursActiviteService = secteursActiviteService;
        this.authenticationService = authenticationService;
    }
    ngOnInit() {
        this.authenticationService.getUser().then(user => {
            this.user = JSON.parse(user);
            this.offresEmploi$ = this.offresEmploiService.getOffreEmploiBySecteur(this.user.secteur_activite.split(','));
        });
    }
    /*
    onSecteurChange($event){
      console.info($event.detail.value);
      const secteur_activite_slug_array = $event.detail.value;
      this.offresEmploi$ = this.offresEmploiService.getOffreEmploiBySecteur(secteur_activite_slug_array);
    }
    */
    getMorePosts(evt) {
        this.offresEmploiService.getMorePosts().subscribe((data) => {
            this.offresEmploi$ = data;
            this.infiniteScroll.complete();
        });
    }
    infiniteScrollDisabled() {
        if (this.offresEmploiService.hasMorePosts()) {
            console.info('hasMorePosts');
            return false;
        }
        else {
            console.info('noMorePosts');
            return true;
        }
    }
};
OffreEmploiListComponent.ctorParameters = () => [
    { type: _services_offres_emploi_service__WEBPACK_IMPORTED_MODULE_2__.OffresEmploiService },
    { type: _services_secteurs_activite_service__WEBPACK_IMPORTED_MODULE_4__.SecteursActiviteService },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__.AuthenticationService }
];
OffreEmploiListComponent.propDecorators = {
    infiniteScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonInfiniteScroll,] }]
};
OffreEmploiListComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-offre-emploi-list',
        template: _offre_emploi_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_offre_emploi_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], OffreEmploiListComponent);



/***/ }),

/***/ 1505:
/*!********************************************************!*\
  !*** ./src/app/offre-emploi/offre-emploi.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OffreEmploiComponent": () => (/* binding */ OffreEmploiComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _offre_emploi_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./offre-emploi.component.html?ngResource */ 1224);
/* harmony import */ var _offre_emploi_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./offre-emploi.component.scss?ngResource */ 1456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);





let OffreEmploiComponent = class OffreEmploiComponent {
    constructor(router) {
        this.router = router;
        this.iconName = 'heart-outline';
        this.iconHeartColor = 'medium';
    }
    ngOnInit() { }
    onViewOffreEmploi() {
        console.info(this.offreEmploi);
        this.router.navigateByUrl(`/tabs/offres-emploi/single/${this.offreEmploi.id}`);
    }
    onToggleLiked() {
        if (this.iconName == 'heart-outline') {
            this.iconName = 'heart';
            this.iconHeartColor = 'primary';
        }
        else {
            this.iconName = 'heart-outline';
            this.iconHeartColor = 'medium';
        }
    }
};
OffreEmploiComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
OffreEmploiComponent.propDecorators = {
    offreEmploi: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }]
};
OffreEmploiComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-offre-emploi',
        template: _offre_emploi_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_offre_emploi_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], OffreEmploiComponent);



/***/ }),

/***/ 8271:
/*!*********************************************!*\
  !*** ./src/app/tab1/tab1-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1PageRoutingModule": () => (/* binding */ Tab1PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab1.page */ 6923);




const routes = [
    {
        path: '',
        component: _tab1_page__WEBPACK_IMPORTED_MODULE_0__.Tab1Page,
    }
];
let Tab1PageRoutingModule = class Tab1PageRoutingModule {
};
Tab1PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], Tab1PageRoutingModule);



/***/ }),

/***/ 2168:
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1PageModule": () => (/* binding */ Tab1PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab1.page */ 6923);
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../explore-container/explore-container.module */ 581);
/* harmony import */ var _offre_emploi_offre_emploi_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../offre-emploi/offre-emploi.component */ 1505);
/* harmony import */ var _offre_emploi_list_offre_emploi_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../offre-emploi-list/offre-emploi-list.component */ 8519);
/* harmony import */ var _tab1_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tab1-routing.module */ 8271);










let Tab1PageModule = class Tab1PageModule {
};
Tab1PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule,
            _tab1_routing_module__WEBPACK_IMPORTED_MODULE_4__.Tab1PageRoutingModule
        ],
        declarations: [
            _tab1_page__WEBPACK_IMPORTED_MODULE_0__.Tab1Page,
            _offre_emploi_offre_emploi_component__WEBPACK_IMPORTED_MODULE_2__.OffreEmploiComponent,
            _offre_emploi_list_offre_emploi_list_component__WEBPACK_IMPORTED_MODULE_3__.OffreEmploiListComponent
        ]
    })
], Tab1PageModule);



/***/ }),

/***/ 6923:
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1Page": () => (/* binding */ Tab1Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _tab1_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab1.page.html?ngResource */ 3852);
/* harmony import */ var _tab1_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab1.page.scss?ngResource */ 8165);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _offre_emploi_list_offre_emploi_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../offre-emploi-list/offre-emploi-list.component */ 8519);
/* harmony import */ var _global_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../global-constants */ 738);






let Tab1Page = class Tab1Page {
    constructor() { }
    ngOnInit() { }
    ionViewWillEnter() {
        console.info('fire every time tab1 in entered');
        if (_global_constants__WEBPACK_IMPORTED_MODULE_3__.GlobalConstants.reload_offres_emploi_tab) {
            this.offreEmploiList.authenticationService.getUser().then(user => {
                _global_constants__WEBPACK_IMPORTED_MODULE_3__.GlobalConstants.reload_offres_emploi_tab = false;
                this.offreEmploiList.user = JSON.parse(user);
                this.offreEmploiList.offresEmploi$ = this.offreEmploiList.offresEmploiService.getOffreEmploiBySecteur(this.offreEmploiList.user.secteur_activite.split(','));
            });
        }
    }
};
Tab1Page.ctorParameters = () => [];
Tab1Page.propDecorators = {
    offreEmploiList: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewChild, args: [_offre_emploi_list_offre_emploi_list_component__WEBPACK_IMPORTED_MODULE_2__.OffreEmploiListComponent,] }]
};
Tab1Page = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-tab1',
        template: _tab1_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_tab1_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], Tab1Page);



/***/ }),

/***/ 8588:
/*!*******************************************************************************!*\
  !*** ./src/app/offre-emploi-list/offre-emploi-list.component.scss?ngResource ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvZmZyZS1lbXBsb2ktbGlzdC5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 1456:
/*!*********************************************************************!*\
  !*** ./src/app/offre-emploi/offre-emploi.component.scss?ngResource ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvZmZyZS1lbXBsb2kuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 8165:
/*!************************************************!*\
  !*** ./src/app/tab1/tab1.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWIxLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 8149:
/*!*******************************************************************************!*\
  !*** ./src/app/offre-emploi-list/offre-emploi-list.component.html?ngResource ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = "<ion-grid class=\"ion-padding\">\n  <ion-row>\n    <ion-col>\n      <div>\n        Tu trouveras ci-dessous les offres d'emploi correspondant à tes secteurs d'activité.  \n      </div>\n    </ion-col>\n    <ion-col size=\"2\">\n      <div>\n        <ion-button id=\"info-secteur-button-ofrre-emploi\"><ion-icon name=\"help-circle-outline\"></ion-icon></ion-button>\n      </div>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n<ion-popover trigger=\"info-secteur-button-ofrre-emploi\" triggerAction=\"click\" arrow=true>\n  <ng-template>\n    <ion-content class=\"ion-padding\">Tu peux modifier tes secteurs d'activité, dans la section <ion-router-link href=\"/tabs/tab4\">Profil > Mes secteurs d'activités</ion-router-link></ion-content>\n  </ng-template>\n</ion-popover>\n\n\n\n<div *ngIf=\"offresEmploi$ | async as offreEmploi; else loading\">\n\n    <app-offre-emploi *ngFor=\"let offreEmploi of offresEmploi$ | async\" [offreEmploi]=\"offreEmploi\"></app-offre-emploi>\n    <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"getMorePosts($event)\" [disabled]=\"infiniteScrollDisabled()\">\n        <ion-infinite-scroll-content loadingSpinner=\"lines\">\n        </ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n\n    <div *ngIf=\"offreEmploi.length; else noresults\">\n    </div>\n    <ng-template #noresults>\n        <ion-item>\n            <p>Il n'y aucune offre d'emploi en lien avec ton ou tes secteurs d'activité. N'hésite pas à élargir ta recherche en modifiant tes secteurs depuis la section <ion-router-link href=\"/tabs/tab4\">Profil > Mes secteurs d'activités</ion-router-link></p>\n        </ion-item>\n    </ng-template>\n</div>\n\n<ng-template #loading>\n    <p class=\"ion-text-center\" style=\"margin-top: 40px;\" >\n        <ion-spinner name=\"lines\" ></ion-spinner>    \n    </p>\n</ng-template>";

/***/ }),

/***/ 1224:
/*!*********************************************************************!*\
  !*** ./src/app/offre-emploi/offre-emploi.component.html?ngResource ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = "<ion-card (click)=\"onViewOffreEmploi()\" class=\"{{ offreEmploi.postule }}\">\n  <!--    \n  <img src=\"{{ offreEmploi._embedded['wp:featuredmedia']['0'].source_url }}\" (click)=\"onViewOffreEmploi()\"/>     \n  -->\n  <ion-card-header>\n    \n    <ion-item *ngIf=\"offreEmploi.postule\" class=\"icon_postule_wrapper\" lines=\"none\">\n      <ion-icon size=\"large\" name=\"paper-plane-outline\" color=\"primary\" slot=\"end\"></ion-icon>\n    </ion-item>  \n    <ion-card-subtitle>Offre publiée le {{ offreEmploi.date | date: 'd MMMM yyyy' }}</ion-card-subtitle>\n    <ion-card-title color=\"primary\" [innerHTML]=\"offreEmploi.title.rendered\"></ion-card-title> \n      \n  </ion-card-header>\n\n  <ion-card-content>\n      \n    <p *ngIf=\"\"><ion-icon name=\"location-outline\"></ion-icon>&nbsp;&nbsp;<span>{{ offreEmploi['toolset-meta']['details-offre-demploi']['ville'].raw }}</span></p>\n    <p *ngIf=\"offreEmploi['toolset-meta']['details-offre-demploi']['duree-contrat'].raw\">Durée du contrat : <span>{{ offreEmploi['toolset-meta']['details-offre-demploi']['duree-contrat'].raw }}</span></p>\n  \n  </ion-card-content>\n     \n</ion-card>";

/***/ }),

/***/ 3852:
/*!************************************************!*\
  !*** ./src/app/tab1/tab1.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title class=\"\" color=\"primary\">\n      OFFRES D'EMPLOI\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\" class=\"ion-text-center\" >Offres d'Emploi</ion-title>\n    </ion-toolbar>\n  </ion-header>  \n    \n  <app-offre-emploi-list></app-offre-emploi-list>   \n    \n    \n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_tab1_tab1_module_ts.js.map