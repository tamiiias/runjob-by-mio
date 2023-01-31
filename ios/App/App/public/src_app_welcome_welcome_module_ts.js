"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_welcome_welcome_module_ts"],{

/***/ 752:
/*!***************************************************!*\
  !*** ./src/app/welcome/welcome-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WelcomePageRoutingModule": () => (/* binding */ WelcomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _welcome_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./welcome.page */ 3297);




const routes = [
    {
        path: '',
        component: _welcome_page__WEBPACK_IMPORTED_MODULE_0__.WelcomePage
    }
];
let WelcomePageRoutingModule = class WelcomePageRoutingModule {
};
WelcomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], WelcomePageRoutingModule);



/***/ }),

/***/ 2526:
/*!*******************************************!*\
  !*** ./src/app/welcome/welcome.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WelcomePageModule": () => (/* binding */ WelcomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _welcome_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./welcome-routing.module */ 752);
/* harmony import */ var _welcome_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./welcome.page */ 3297);







let WelcomePageModule = class WelcomePageModule {
};
WelcomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _welcome_routing_module__WEBPACK_IMPORTED_MODULE_0__.WelcomePageRoutingModule
        ],
        declarations: [_welcome_page__WEBPACK_IMPORTED_MODULE_1__.WelcomePage]
    })
], WelcomePageModule);



/***/ }),

/***/ 3297:
/*!*****************************************!*\
  !*** ./src/app/welcome/welcome.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WelcomePage": () => (/* binding */ WelcomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _welcome_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./welcome.page.html?ngResource */ 7030);
/* harmony import */ var _welcome_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./welcome.page.scss?ngResource */ 787);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);





let WelcomePage = class WelcomePage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() { }
    navigateToLogin() {
        this.router.navigate(['/login']);
    }
};
WelcomePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
WelcomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-welcome',
        template: _welcome_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_welcome_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], WelcomePage);



/***/ }),

/***/ 787:
/*!******************************************************!*\
  !*** ./src/app/welcome/welcome.page.scss?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3ZWxjb21lLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 7030:
/*!******************************************************!*\
  !*** ./src/app/welcome/welcome.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "<ion-content style=\"height: 100%\" class=\"ion-padding black-background\">\n  <ion-grid style=\"height: 100%\">\n    <ion-row justify-content-center align-items-center style=\"height: 100%; flex-direction: column; justify-content: center;\">\n        <ion-text color=\"secondary\" class=\"ion-text-center\" style=\"margin-bottom: 40px;\">\n          <img src=\"../../assets/logo-runjob.png\" class=\"inline-center\"/>\n          <h1>Bienvenue sur RunJob</h1>  \n        </ion-text>\n        <ion-button color=\"primary\" class=\"inline-center\" (click)=\"navigateToLogin()\" size=\"large\" style=\"margin-bottom: 40px;\">Entrer</ion-button>  \n    </ion-row>\n  </ion-grid>  \n</ion-content>\n\n  ";

/***/ })

}]);
//# sourceMappingURL=src_app_welcome_welcome_module_ts.js.map