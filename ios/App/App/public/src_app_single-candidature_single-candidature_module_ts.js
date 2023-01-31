"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_single-candidature_single-candidature_module_ts"],{

/***/ 2482:
/*!*************************************************************************!*\
  !*** ./src/app/single-candidature/single-candidature-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SingleCandidaturePageRoutingModule": () => (/* binding */ SingleCandidaturePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _single_candidature_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./single-candidature.page */ 5535);




const routes = [
    {
        path: '',
        component: _single_candidature_page__WEBPACK_IMPORTED_MODULE_0__.SingleCandidaturePage
    }
];
let SingleCandidaturePageRoutingModule = class SingleCandidaturePageRoutingModule {
};
SingleCandidaturePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SingleCandidaturePageRoutingModule);



/***/ }),

/***/ 5136:
/*!*****************************************************************!*\
  !*** ./src/app/single-candidature/single-candidature.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SingleCandidaturePageModule": () => (/* binding */ SingleCandidaturePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _single_candidature_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./single-candidature-routing.module */ 2482);
/* harmony import */ var _single_candidature_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./single-candidature.page */ 5535);







let SingleCandidaturePageModule = class SingleCandidaturePageModule {
};
SingleCandidaturePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _single_candidature_routing_module__WEBPACK_IMPORTED_MODULE_0__.SingleCandidaturePageRoutingModule
        ],
        declarations: [_single_candidature_page__WEBPACK_IMPORTED_MODULE_1__.SingleCandidaturePage]
    })
], SingleCandidaturePageModule);



/***/ }),

/***/ 5535:
/*!***************************************************************!*\
  !*** ./src/app/single-candidature/single-candidature.page.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SingleCandidaturePage": () => (/* binding */ SingleCandidaturePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _single_candidature_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./single-candidature.page.html?ngResource */ 1304);
/* harmony import */ var _single_candidature_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./single-candidature.page.scss?ngResource */ 2980);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let SingleCandidaturePage = class SingleCandidaturePage {
    constructor() { }
    ngOnInit() {
    }
};
SingleCandidaturePage.ctorParameters = () => [];
SingleCandidaturePage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-single-candidature',
        template: _single_candidature_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_single_candidature_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SingleCandidaturePage);



/***/ }),

/***/ 2980:
/*!****************************************************************************!*\
  !*** ./src/app/single-candidature/single-candidature.page.scss?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaW5nbGUtY2FuZGlkYXR1cmUucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 1304:
/*!****************************************************************************!*\
  !*** ./src/app/single-candidature/single-candidature.page.html?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>single-candidature</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_single-candidature_single-candidature_module_ts.js.map