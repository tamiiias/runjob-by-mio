"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_postuler-formation_postuler-formation_module_ts"],{

/***/ 4773:
/*!*************************************************************************!*\
  !*** ./src/app/postuler-formation/postuler-formation-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostulerFormationPageRoutingModule": () => (/* binding */ PostulerFormationPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _postuler_formation_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./postuler-formation.page */ 8833);




const routes = [
    {
        path: '',
        component: _postuler_formation_page__WEBPACK_IMPORTED_MODULE_0__.PostulerFormationPage
    }
];
let PostulerFormationPageRoutingModule = class PostulerFormationPageRoutingModule {
};
PostulerFormationPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PostulerFormationPageRoutingModule);



/***/ }),

/***/ 8053:
/*!*****************************************************************!*\
  !*** ./src/app/postuler-formation/postuler-formation.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostulerFormationPageModule": () => (/* binding */ PostulerFormationPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _postuler_formation_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./postuler-formation-routing.module */ 4773);
/* harmony import */ var _postuler_formation_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./postuler-formation.page */ 8833);







let PostulerFormationPageModule = class PostulerFormationPageModule {
};
PostulerFormationPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _postuler_formation_routing_module__WEBPACK_IMPORTED_MODULE_0__.PostulerFormationPageRoutingModule
        ],
        declarations: [_postuler_formation_page__WEBPACK_IMPORTED_MODULE_1__.PostulerFormationPage]
    })
], PostulerFormationPageModule);



/***/ }),

/***/ 8833:
/*!***************************************************************!*\
  !*** ./src/app/postuler-formation/postuler-formation.page.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostulerFormationPage": () => (/* binding */ PostulerFormationPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _postuler_formation_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./postuler-formation.page.html?ngResource */ 1102);
/* harmony import */ var _postuler_formation_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./postuler-formation.page.scss?ngResource */ 9489);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _services_formations_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/formations.service */ 9762);
/* harmony import */ var _services_candidatures_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/candidatures.service */ 980);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/authentication.service */ 7053);









let PostulerFormationPage = class PostulerFormationPage {
    constructor(formBuilder, formationsService, candidaturesService, authenticationService, route) {
        this.formBuilder = formBuilder;
        this.formationsService = formationsService;
        this.candidaturesService = candidaturesService;
        this.authenticationService = authenticationService;
        this.route = route;
    }
    ngOnInit() {
        const formationId = +this.route.snapshot.params['id'];
        this.formation$ = this.formationsService.getFormationById(formationId);
        this.authenticationService.getUser()
            .then(user => {
            this.user = JSON.parse(user);
            console.info(this.user.displayname);
            this.postulerFormationForm.controls['nom'].setValue(this.user.lastname);
            this.postulerFormationForm.controls['prenom'].setValue(this.user.firstname);
            this.postulerFormationForm.controls['email'].setValue(this.user.email);
        });
        this.postulerFormationForm = this.formBuilder.group({
            parent_id: [formationId, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            relationship: ['formation-candidature', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            nom: [this.user, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(2)]],
            prenom: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(2)]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
            telephone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern('^[0-9]+$')]]
        });
    }
    submitForm() {
        this.candidaturesService.createCandidature(this.postulerFormationForm.value);
    }
};
PostulerFormationPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder },
    { type: _services_formations_service__WEBPACK_IMPORTED_MODULE_2__.FormationsService },
    { type: _services_candidatures_service__WEBPACK_IMPORTED_MODULE_3__.CandidaturesService },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__.AuthenticationService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute }
];
PostulerFormationPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-postuler-formation',
        template: _postuler_formation_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_postuler_formation_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PostulerFormationPage);



/***/ }),

/***/ 9489:
/*!****************************************************************************!*\
  !*** ./src/app/postuler-formation/postuler-formation.page.scss?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb3N0dWxlci1mb3JtYXRpb24ucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 1102:
/*!****************************************************************************!*\
  !*** ./src/app/postuler-formation/postuler-formation.page.html?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Postuler à la formation</ion-title>\n    <ion-buttons slot=\"start\">\n        <ion-back-button defaultHref=\"/tabs/formations\"></ion-back-button>\n      </ion-buttons>    \n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n    \n    <ion-text class=\"ion-text-center\" color=\"primary\" *ngIf=\"formation$ | async as formation;\"><h2 [innerHTML]=\"formation.title.rendered\"></h2></ion-text>\n    \n    <div class=\"ion-padding\">\n        <ion-text class=\"ion-text-center\" color=\"\" *ngIf=\"formation$ | async as formation;\">Vérifier mes informations avant de postuler</ion-text>\n    </div>\n    \n    \n  \n    <form [formGroup]=\"postulerFormationForm\" (ngSubmit)=\"submitForm()\" novalidate>\n        <ion-item lines=\"full\" hidden>\n          <ion-input formControlName=\"parent_id\" type=\"text\" required></ion-input>\n        </ion-item>\n        <ion-item lines=\"full\" hidden>\n          <ion-input formControlName=\"relationship\" type=\"text\" required></ion-input>\n        </ion-item>\n        <ion-item lines=\"full\">\n          <ion-label position=\"floating\">Nom</ion-label>\n          <ion-input formControlName=\"nom\" type=\"text\" required></ion-input>\n        </ion-item>\n        <ion-item lines=\"full\">\n          <ion-label position=\"floating\">Prénom</ion-label>\n          <ion-input formControlName=\"prenom\" type=\"text\" required></ion-input>\n        </ion-item>  \n        <ion-item lines=\"full\">\n          <ion-label position=\"floating\">Email</ion-label>\n          <ion-input formControlName=\"email\" type=\"email\" required></ion-input>\n        </ion-item>\n        <ion-item lines=\"full\">\n          <ion-label position=\"floating\">Téléphone</ion-label>\n          <ion-input formControlName=\"telephone\" type=\"text\" required></ion-input>\n        </ion-item>\n        <ion-row>\n          <ion-col>\n            <ion-button type=\"submit\" expand=\"block\">Envoyer</ion-button>\n          </ion-col>\n        </ion-row>\n      </form>\n</ion-content>\n\n";

/***/ })

}]);
//# sourceMappingURL=src_app_postuler-formation_postuler-formation_module_ts.js.map