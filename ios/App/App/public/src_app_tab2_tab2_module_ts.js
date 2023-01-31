"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tab2_tab2_module_ts"],{

/***/ 4391:
/*!************************************************************!*\
  !*** ./src/app/formation-list/formation-list.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormationListComponent": () => (/* binding */ FormationListComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _formation_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formation-list.component.html?ngResource */ 9079);
/* harmony import */ var _formation_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formation-list.component.scss?ngResource */ 914);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _services_formations_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/formations.service */ 9762);
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/authentication.service */ 7053);
/* harmony import */ var _services_secteurs_activite_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/secteurs-activite.service */ 8360);








let FormationListComponent = class FormationListComponent {
    constructor(formationsService, secteursActiviteService, authenticationService) {
        this.formationsService = formationsService;
        this.secteursActiviteService = secteursActiviteService;
        this.authenticationService = authenticationService;
    }
    ngOnInit() {
        /*this.authenticationService.getUser().then(user => {
          
            this.user = JSON.parse(user);
            //this.formations$ = this.formationsService.getFormationBySecteur(this.user.secteur_activite.split(','));
            
        });
        */
        //this.formations$ = this.formationsService.formations;
        //this.secteursActivite$ = this.secteursActiviteService.secteursActivite;
    }
    /*
    onSecteurChange($event){
      console.info($event.detail.value);
      const secteur_activite_slug_array = $event.detail.value;
      this.formations$ = this.formationsService.getFormationBySecteur(secteur_activite_slug_array);
    }
    */
    getMorePosts(evt) {
        console.info('getMorePosts');
        this.formationsService.getMorePosts().subscribe((data) => {
            this.formations$ = data;
            this.infiniteScroll.complete();
        });
    }
    infiniteScrollDisabled() {
        if (this.formationsService.hasMorePosts()) {
            return false;
        }
        else {
            return true;
        }
    }
};
FormationListComponent.ctorParameters = () => [
    { type: _services_formations_service__WEBPACK_IMPORTED_MODULE_2__.FormationsService },
    { type: _services_secteurs_activite_service__WEBPACK_IMPORTED_MODULE_4__.SecteursActiviteService },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__.AuthenticationService }
];
FormationListComponent.propDecorators = {
    infiniteScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonInfiniteScroll,] }]
};
FormationListComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-formation-list',
        template: _formation_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_formation_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], FormationListComponent);



/***/ }),

/***/ 2387:
/*!**************************************************!*\
  !*** ./src/app/formation/formation.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormationComponent": () => (/* binding */ FormationComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _formation_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formation.component.html?ngResource */ 807);
/* harmony import */ var _formation_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formation.component.scss?ngResource */ 9334);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);





let FormationComponent = class FormationComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() { }
    onViewFormation() {
        console.info(this.formation);
        this.router.navigateByUrl(`/tabs/formations/single/${this.formation.id}`);
    }
};
FormationComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
FormationComponent.propDecorators = {
    formation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }]
};
FormationComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-formation',
        template: _formation_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_formation_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], FormationComponent);



/***/ }),

/***/ 3092:
/*!*********************************************!*\
  !*** ./src/app/tab2/tab2-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab2PageRoutingModule": () => (/* binding */ Tab2PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab2.page */ 442);




const routes = [
    {
        path: '',
        component: _tab2_page__WEBPACK_IMPORTED_MODULE_0__.Tab2Page,
    }
];
let Tab2PageRoutingModule = class Tab2PageRoutingModule {
};
Tab2PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], Tab2PageRoutingModule);



/***/ }),

/***/ 4608:
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab2PageModule": () => (/* binding */ Tab2PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab2.page */ 442);
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../explore-container/explore-container.module */ 581);
/* harmony import */ var _formation_formation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../formation/formation.component */ 2387);
/* harmony import */ var _formation_list_formation_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../formation-list/formation-list.component */ 4391);
/* harmony import */ var _tab2_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tab2-routing.module */ 3092);










let Tab2PageModule = class Tab2PageModule {
};
Tab2PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule,
            _tab2_routing_module__WEBPACK_IMPORTED_MODULE_4__.Tab2PageRoutingModule
        ],
        declarations: [
            _tab2_page__WEBPACK_IMPORTED_MODULE_0__.Tab2Page,
            _formation_formation_component__WEBPACK_IMPORTED_MODULE_2__.FormationComponent,
            _formation_list_formation_list_component__WEBPACK_IMPORTED_MODULE_3__.FormationListComponent
        ]
    })
], Tab2PageModule);



/***/ }),

/***/ 442:
/*!***********************************!*\
  !*** ./src/app/tab2/tab2.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab2Page": () => (/* binding */ Tab2Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _tab2_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab2.page.html?ngResource */ 1748);
/* harmony import */ var _tab2_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab2.page.scss?ngResource */ 1597);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _formation_list_formation_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../formation-list/formation-list.component */ 4391);
/* harmony import */ var _global_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../global-constants */ 738);






let Tab2Page = class Tab2Page {
    constructor() { }
    ngOnInit() { }
    ionViewWillEnter() {
        console.info('fire every time tab2 in entered');
        if (_global_constants__WEBPACK_IMPORTED_MODULE_3__.GlobalConstants.reload_formations_tab) {
            this.formationList.authenticationService.getUser().then(user => {
                _global_constants__WEBPACK_IMPORTED_MODULE_3__.GlobalConstants.reload_formations_tab = false;
                this.formationList.user = JSON.parse(user);
                this.formationList.formations$ = this.formationList.formationsService.getFormationBySecteur(this.formationList.user.secteur_activite.split(','));
            });
        }
    }
};
Tab2Page.ctorParameters = () => [];
Tab2Page.propDecorators = {
    formationList: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewChild, args: [_formation_list_formation_list_component__WEBPACK_IMPORTED_MODULE_2__.FormationListComponent,] }]
};
Tab2Page = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-tab2',
        template: _tab2_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_tab2_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], Tab2Page);



/***/ }),

/***/ 914:
/*!*************************************************************************!*\
  !*** ./src/app/formation-list/formation-list.component.scss?ngResource ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3JtYXRpb24tbGlzdC5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 9334:
/*!***************************************************************!*\
  !*** ./src/app/formation/formation.component.scss?ngResource ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3JtYXRpb24uY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 1597:
/*!************************************************!*\
  !*** ./src/app/tab2/tab2.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWIyLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 9079:
/*!*************************************************************************!*\
  !*** ./src/app/formation-list/formation-list.component.html?ngResource ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = "<ion-grid class=\"ion-padding\">\n  <ion-row>\n    <ion-col>\n      <div>\n        Tu trouveras ci-dessous les formations correspondant à tes secteurs d'activité.  \n      </div>\n    </ion-col>\n    <ion-col size=\"2\">\n      <div>\n        <ion-button id=\"info-secteur-button-formation\"><ion-icon name=\"help-circle-outline\"></ion-icon></ion-button>\n      </div>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n<ion-popover trigger=\"info-secteur-button-formation\" triggerAction=\"click\" arrow=true>\n  <ng-template>\n    <ion-content class=\"ion-padding\">Tu peux modifier tes secteurs d'activité, dans la section <ion-router-link href=\"/tabs/tab4\">Profil > Mes secteurs d'activités</ion-router-link></ion-content>\n  </ng-template>\n</ion-popover>\n\n\n\n<div *ngIf=\"formations$ | async as formation; else loading\">\n\n    <app-formation *ngFor=\"let formation of formations$ | async\" [formation]=\"formation\"></app-formation>\n\n    <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"getMorePosts($event)\" [disabled]=\"infiniteScrollDisabled()\">\n        <ion-infinite-scroll-content loadingSpinner=\"lines\">\n        </ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n\n    <div *ngIf=\"formation.length; else noresults\">\n    </div>    \n    <ng-template #noresults>\n        <ion-item>\n            <p>Il n'y a actuellement aucune formation en lien avec ton ou tes secteurs d'activité. N'hésite pas à élargir ta recherche en modifiant tes secteurs depuis la section <ion-router-link href=\"/tabs/tab4\">Profil > Mes secteurs d'activités</ion-router-link></p>\n        </ion-item>\n    </ng-template>    \n\n</div>\n\n<ng-template #loading>\n    <p class=\"ion-text-center\" style=\"margin-top: 40px;\" >\n        <ion-spinner name=\"lines\" ></ion-spinner>    \n    </p>\n</ng-template>\n";

/***/ }),

/***/ 807:
/*!***************************************************************!*\
  !*** ./src/app/formation/formation.component.html?ngResource ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = "<ion-card (click)=\"onViewFormation()\" class=\"{{ formation.postule }}\">\n\n  <!--<img *ngIf=\"formation.image\" src=\"{{ formation.image }}\" /> -->\n  <ion-card-header>\n    \n    <ion-item *ngIf=\"formation.postule\" class=\"icon_postule_wrapper\" lines=\"none\">\n      <ion-icon size=\"large\" name=\"paper-plane-outline\" color=\"primary\" slot=\"end\"></ion-icon>\n    </ion-item>  \n      \n    <ion-card-subtitle>Publiée le {{ formation.date | date: 'd MMMM yyyy' }}</ion-card-subtitle>\n    <ion-card-title color=\"primary\" [innerHTML]=\"formation.title.rendered\"></ion-card-title>\n  </ion-card-header>\n\n  <ion-card-content>\n    <p *ngIf=\"formation['toolset-meta']['details-formation']['date-de-debut'].formatted\"><ion-icon name=\"calendar-outline\"></ion-icon>&nbsp;&nbsp;<span>Début de la formation : {{ formation['toolset-meta']['details-formation']['date-de-debut'].formatted | date: 'd MMMM yyyy'}}</span></p>\n    <p *ngIf=\"formation['partenaire']\"><span>{{ formation['partenaire'] }}</span></p>  \n  </ion-card-content>\n</ion-card>\n";

/***/ }),

/***/ 1748:
/*!************************************************!*\
  !*** ./src/app/tab2/tab2.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title class=\"\" color=\"primary\">\n      FORMATIONS\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\" class=\"ion-text-center\">Formations</ion-title>\n    </ion-toolbar>\n  </ion-header>  \n    \n  <app-formation-list></app-formation-list>   \n    \n    \n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_tab2_tab2_module_ts.js.map