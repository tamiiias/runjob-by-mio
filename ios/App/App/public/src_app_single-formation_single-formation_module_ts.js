"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_single-formation_single-formation_module_ts"],{

/***/ 8544:
/*!*********************************************************************!*\
  !*** ./src/app/single-formation/single-formation-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SingleFormationPageRoutingModule": () => (/* binding */ SingleFormationPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _single_formation_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./single-formation.page */ 6260);




const routes = [
    {
        path: '',
        component: _single_formation_page__WEBPACK_IMPORTED_MODULE_0__.SingleFormationPage
    }
];
let SingleFormationPageRoutingModule = class SingleFormationPageRoutingModule {
};
SingleFormationPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], SingleFormationPageRoutingModule);



/***/ }),

/***/ 8026:
/*!*************************************************************!*\
  !*** ./src/app/single-formation/single-formation.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SingleFormationPageModule": () => (/* binding */ SingleFormationPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _single_formation_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./single-formation-routing.module */ 8544);
/* harmony import */ var _single_formation_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./single-formation.page */ 6260);







let SingleFormationPageModule = class SingleFormationPageModule {
};
SingleFormationPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _single_formation_routing_module__WEBPACK_IMPORTED_MODULE_0__.SingleFormationPageRoutingModule
        ],
        declarations: [_single_formation_page__WEBPACK_IMPORTED_MODULE_1__.SingleFormationPage]
    })
], SingleFormationPageModule);



/***/ }),

/***/ 6260:
/*!***********************************************************!*\
  !*** ./src/app/single-formation/single-formation.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SingleFormationPage": () => (/* binding */ SingleFormationPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _single_formation_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./single-formation.page.html?ngResource */ 4586);
/* harmony import */ var _single_formation_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./single-formation.page.scss?ngResource */ 4730);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_formations_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/formations.service */ 9762);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);







let SingleFormationPage = class SingleFormationPage {
    constructor(formationsService, route, router) {
        this.formationsService = formationsService;
        this.route = route;
        this.router = router;
    }
    ngOnInit() {
        this.formationId = +this.route.snapshot.params['id'];
        this.formation$ = this.formationsService.getFormationById(this.formationId);
    }
    onViewPostulerFormation() {
        const formationId = +this.route.snapshot.params['id'];
        this.router.navigateByUrl(`/tabs/formations/postuler/${formationId}`);
    }
};
SingleFormationPage.ctorParameters = () => [
    { type: _services_formations_service__WEBPACK_IMPORTED_MODULE_2__.FormationsService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
SingleFormationPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-single-formation',
        template: _single_formation_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_single_formation_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SingleFormationPage);



/***/ }),

/***/ 4730:
/*!************************************************************************!*\
  !*** ./src/app/single-formation/single-formation.page.scss?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaW5nbGUtZm9ybWF0aW9uLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 4586:
/*!************************************************************************!*\
  !*** ./src/app/single-formation/single-formation.page.html?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Formation</ion-title>\n    <ion-buttons slot=\"start\">\n        <ion-back-button defaultHref=\"/tabs/formations\"></ion-back-button>\n      </ion-buttons>  \n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n    <ion-card *ngIf=\"formation$ | async as formation; else elseBlock\" >\n      <!--<img *ngIf=\"formation.image\" src=\"{{ formation.image }}\" /> -->\n      <ion-card-header>\n        <ion-item *ngIf=\"formation.postule\" class=\"icon_postule_wrapper\" lines=\"none\">\n          <ion-icon size=\"large\" name=\"paper-plane-outline\" color=\"primary\" slot=\"end\"></ion-icon>\n        </ion-item>    \n        <ion-card-subtitle>Formation publiée le {{ formation.date | date: 'd MMMM yyyy' }}</ion-card-subtitle>\n        <ion-card-title color=\"primary\" [innerHTML]=\"formation.title.rendered\"></ion-card-title>\n      </ion-card-header>\n        \n      <ion-card-content>\n        <p *ngIf=\"formation['toolset-meta']['details-formation']['date-de-debut'].formatted\"><ion-icon name=\"calendar-outline\"></ion-icon>&nbsp;&nbsp;<span>{{ formation['toolset-meta']['details-formation']['date-de-debut'].formatted | date: 'd MMMM yyyy'}}</span></p>\n        \n        <div style=\"display: inline-block; width: 100%;\">  \n            <ion-button color=\"primary\" (click)=\"onViewPostulerFormation()\" class=\"right\" [disabled]=\"formation.postule=='postule'\">\n              <ion-icon name=\"paper-plane-outline\"></ion-icon>&nbsp;Postuler    \n            </ion-button>  \n        </div>    \n          \n        <ion-text *ngIf=\"formation.postule == 'postule'\" class=\"ion-text-end\" color=\"primary\">\n            <p>Tu as déjà postulé à cette formation. Retrouve toutes tes candidatures dans <ion-router-link href=\"/tabs/candidatures\">l'onglet Candidatures</ion-router-link>.</p>\n        </ion-text>        \n        <br><br>\n          \n      </ion-card-content>\n    </ion-card>\n    <ng-template #elseBlock>\n        <div class=\"spin-wrapper\">\n            <ion-spinner color=\"primary\"></ion-spinner>\n        </div>    \n    </ng-template>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_single-formation_single-formation_module_ts.js.map