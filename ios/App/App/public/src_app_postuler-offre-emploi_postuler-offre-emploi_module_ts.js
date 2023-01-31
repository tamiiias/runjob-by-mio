"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_postuler-offre-emploi_postuler-offre-emploi_module_ts"],{

/***/ 5310:
/*!*******************************************************************************!*\
  !*** ./src/app/postuler-offre-emploi/postuler-offre-emploi-routing.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostulerOffreEmploiPageRoutingModule": () => (/* binding */ PostulerOffreEmploiPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _postuler_offre_emploi_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./postuler-offre-emploi.page */ 1044);




const routes = [
    {
        path: '',
        component: _postuler_offre_emploi_page__WEBPACK_IMPORTED_MODULE_0__.PostulerOffreEmploiPage
    }
];
let PostulerOffreEmploiPageRoutingModule = class PostulerOffreEmploiPageRoutingModule {
};
PostulerOffreEmploiPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PostulerOffreEmploiPageRoutingModule);



/***/ }),

/***/ 991:
/*!***********************************************************************!*\
  !*** ./src/app/postuler-offre-emploi/postuler-offre-emploi.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostulerOffreEmploiPageModule": () => (/* binding */ PostulerOffreEmploiPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _postuler_offre_emploi_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./postuler-offre-emploi-routing.module */ 5310);
/* harmony import */ var _postuler_offre_emploi_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./postuler-offre-emploi.page */ 1044);







let PostulerOffreEmploiPageModule = class PostulerOffreEmploiPageModule {
};
PostulerOffreEmploiPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _postuler_offre_emploi_routing_module__WEBPACK_IMPORTED_MODULE_0__.PostulerOffreEmploiPageRoutingModule
        ],
        declarations: [_postuler_offre_emploi_page__WEBPACK_IMPORTED_MODULE_1__.PostulerOffreEmploiPage]
    })
], PostulerOffreEmploiPageModule);



/***/ }),

/***/ 1044:
/*!*********************************************************************!*\
  !*** ./src/app/postuler-offre-emploi/postuler-offre-emploi.page.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostulerOffreEmploiPage": () => (/* binding */ PostulerOffreEmploiPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _postuler_offre_emploi_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./postuler-offre-emploi.page.html?ngResource */ 1270);
/* harmony import */ var _postuler_offre_emploi_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./postuler-offre-emploi.page.scss?ngResource */ 7227);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _services_offres_emploi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/offres-emploi.service */ 4474);
/* harmony import */ var _services_candidatures_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/candidatures.service */ 980);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/authentication.service */ 7053);









let PostulerOffreEmploiPage = class PostulerOffreEmploiPage {
    constructor(formBuilder, offresEmploiService, candidaturesService, authenticationService, route) {
        this.formBuilder = formBuilder;
        this.offresEmploiService = offresEmploiService;
        this.candidaturesService = candidaturesService;
        this.authenticationService = authenticationService;
        this.route = route;
    }
    ngOnInit() {
        const offreEmploiId = +this.route.snapshot.params['id'];
        this.offreEmploi$ = this.offresEmploiService.getOffreEmploiById(offreEmploiId);
        this.authenticationService.getUser()
            .then(user => {
            this.user = JSON.parse(user);
            console.info(this.user.displayname);
            this.postulerOffreEmploiForm.controls['nom'].setValue(this.user.lastname);
            this.postulerOffreEmploiForm.controls['prenom'].setValue(this.user.firstname);
            this.postulerOffreEmploiForm.controls['email'].setValue(this.user.email);
        });
        this.postulerOffreEmploiForm = this.formBuilder.group({
            parent_id: [offreEmploiId, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            relationship: ['offre-emploi-candidature', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            nom: [this.user, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(2)]],
            prenom: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(2)]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
            telephone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern('^[0-9]+$')]],
            cv: ['']
        });
    }
    submitForm() {
        this.candidaturesService.createCandidature(this.postulerOffreEmploiForm.value);
    }
    file_input_change(event) {
        console.info("event");
        console.info(event);
        if (event.srcElement.value != "") {
            document.getElementsByClassName('success')[0].innerHTML = event.target.files[0].name;
            document.getElementsByClassName('success')[0].classList.add('visible');
        }
        else {
            document.getElementsByClassName('success')[0].innerHTML = "";
        }
        this.candidaturesService.cv_file = event.target.files[0];
    }
};
PostulerOffreEmploiPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder },
    { type: _services_offres_emploi_service__WEBPACK_IMPORTED_MODULE_2__.OffresEmploiService },
    { type: _services_candidatures_service__WEBPACK_IMPORTED_MODULE_3__.CandidaturesService },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__.AuthenticationService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute }
];
PostulerOffreEmploiPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-postuler-offre-emploi',
        template: _postuler_offre_emploi_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_postuler_offre_emploi_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PostulerOffreEmploiPage);



/***/ }),

/***/ 7227:
/*!**********************************************************************************!*\
  !*** ./src/app/postuler-offre-emploi/postuler-offre-emploi.page.scss?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb3N0dWxlci1vZmZyZS1lbXBsb2kucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 1270:
/*!**********************************************************************************!*\
  !*** ./src/app/postuler-offre-emploi/postuler-offre-emploi.page.html?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Postuler à l'offre d'emploi</ion-title>\n    <ion-buttons slot=\"start\">\n        <ion-back-button defaultHref=\"/tabs/offres-emploi\"></ion-back-button>\n      </ion-buttons>    \n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n    \n    <ion-text class=\"ion-text-center\" color=\"primary\" *ngIf=\"offreEmploi$ | async as offreEmploi;\"><h2 [innerHTML]=\"offreEmploi.title.rendered\"></h2></ion-text>\n    \n    \n    <div class=\"ion-padding\">\n        <ion-text *ngIf=\"offreEmploi$ | async as offreEmploi;\">Vérifier mes informations avant de postuler</ion-text>\n    </div>\n    \n  \n    <form [formGroup]=\"postulerOffreEmploiForm\" (ngSubmit)=\"submitForm()\" novalidate>\n        <ion-item lines=\"full\" hidden>\n          <ion-input formControlName=\"parent_id\" type=\"text\" required></ion-input>\n        </ion-item>\n        <ion-item lines=\"full\" hidden>\n          <ion-input formControlName=\"relationship\" type=\"text\" required></ion-input>\n        </ion-item>\n        <ion-item lines=\"full\">\n          <ion-label position=\"floating\">Nom</ion-label>\n          <ion-input formControlName=\"nom\" type=\"text\" required></ion-input>\n        </ion-item>\n        <ion-item lines=\"full\">\n          <ion-label position=\"floating\">Prénom</ion-label>\n          <ion-input formControlName=\"prenom\" type=\"text\" required></ion-input>\n        </ion-item>  \n        <ion-item lines=\"full\">\n          <ion-label position=\"floating\">Email</ion-label>\n          <ion-input formControlName=\"email\" type=\"email\" required></ion-input>\n        </ion-item>\n        <ion-item lines=\"full\">\n          <ion-label position=\"floating\">Téléphone</ion-label>\n          <ion-input formControlName=\"telephone\" type=\"text\" required></ion-input>\n        </ion-item>\n        <ion-item lines=\"full\">\n            <label for=\"cv-file-input\">Joindre un C.V</label>\n            <div class=\"input_wrapper\">\n                <ion-input formControlName=\"cv\" type=\"file\" (change)=\"file_input_change($event)\" id=\"cv-file-input\" accept=\"application/pdf\"></ion-input>\n                <!--<input type=\"file\" (change)=\"file_input_change($event)\" id=\"cv-file-input\" accept=\"application/pdf\" name=\"cv\">-->\n                <div class=\"file-dummy\"><span class=\"success\">Fichier sélectionné</span></div>\n            </div>    \n        </ion-item>\n        <ion-row>\n          <ion-col>\n            <ion-button type=\"submit\" expand=\"block\">Envoyer</ion-button>\n          </ion-col>\n        </ion-row>\n      </form>\n</ion-content>\n\n";

/***/ })

}]);
//# sourceMappingURL=src_app_postuler-offre-emploi_postuler-offre-emploi_module_ts.js.map