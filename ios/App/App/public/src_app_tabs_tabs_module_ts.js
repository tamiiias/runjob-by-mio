"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tabs_tabs_module_ts"],{

/***/ 530:
/*!*********************************************!*\
  !*** ./src/app/tabs/tabs-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPageRoutingModule": () => (/* binding */ TabsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs.page */ 7942);




const routes = [
    {
        path: '',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_0__.TabsPage,
        children: [
            {
                path: 'offres-emploi',
                children: [
                    {
                        path: "",
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_candidatures_service_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_tab1_tab1_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../tab1/tab1.module */ 2168)).then(m => m.Tab1PageModule)
                    },
                    {
                        path: "single/:id",
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_candidatures_service_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_single-offre-emploi_single-offre-emploi_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../single-offre-emploi/single-offre-emploi.module */ 7693)).then(m => m.SingleOffreEmploiPageModule)
                    },
                    {
                        path: "postuler/:id",
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_candidatures_service_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_postuler-offre-emploi_postuler-offre-emploi_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../postuler-offre-emploi/postuler-offre-emploi.module */ 991)).then(m => m.PostulerOffreEmploiPageModule)
                    }
                ]
            },
            {
                path: 'formations',
                children: [
                    {
                        path: "",
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_candidatures_service_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_tab2_tab2_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../tab2/tab2.module */ 4608)).then(m => m.Tab2PageModule)
                    },
                    {
                        path: "single/:id",
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_candidatures_service_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_single-formation_single-formation_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../single-formation/single-formation.module */ 8026)).then(m => m.SingleFormationPageModule)
                    },
                    {
                        path: "postuler/:id",
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_candidatures_service_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_postuler-formation_postuler-formation_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../postuler-formation/postuler-formation.module */ 8053)).then(m => m.PostulerFormationPageModule)
                    }
                ]
            },
            {
                path: 'candidatures',
                children: [
                    {
                        path: "",
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_candidatures_service_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_tab3_tab3_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../tab3/tab3.module */ 3746)).then(m => m.Tab3PageModule)
                    },
                    {
                        path: "single/:id",
                        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_single-candidature_single-candidature_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../single-candidature/single-candidature.module */ 5136)).then(m => m.SingleCandidaturePageModule)
                    }
                ]
            },
            {
                path: 'tab4',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_candidatures_service_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_tab4_tab4_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../tab4/tab4.module */ 2486)).then(m => m.Tab4PageModule)
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
let TabsPageRoutingModule = class TabsPageRoutingModule {
};
TabsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
    })
], TabsPageRoutingModule);



/***/ }),

/***/ 5564:
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPageModule": () => (/* binding */ TabsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs-routing.module */ 530);
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.page */ 7942);







let TabsPageModule = class TabsPageModule {
};
TabsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _tabs_routing_module__WEBPACK_IMPORTED_MODULE_0__.TabsPageRoutingModule
        ],
        declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_1__.TabsPage]
    })
], TabsPageModule);



/***/ }),

/***/ 7942:
/*!***********************************!*\
  !*** ./src/app/tabs/tabs.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPage": () => (/* binding */ TabsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _tabs_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs.page.html?ngResource */ 5230);
/* harmony import */ var _tabs_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.page.scss?ngResource */ 4710);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let TabsPage = class TabsPage {
    constructor() { }
};
TabsPage.ctorParameters = () => [];
TabsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-tabs',
        template: _tabs_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_tabs_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TabsPage);



/***/ }),

/***/ 4710:
/*!************************************************!*\
  !*** ./src/app/tabs/tabs.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWJzLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 5230:
/*!************************************************!*\
  !*** ./src/app/tabs/tabs.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-tabs>\n\n  <ion-tab-bar slot=\"bottom\">\n    <ion-tab-button tab=\"offres-emploi\">\n      <ion-icon name=\"flash-outline\"></ion-icon>\n      <ion-label>Emploi</ion-label>\n      <ion-badge color=\"tertiary\">6</ion-badge>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"formations\">\n      <ion-icon name=\"school-outline\"></ion-icon>\n      <ion-label>Formations</ion-label>\n    </ion-tab-button>\n\n      \n    <ion-tab-button tab=\"candidatures\">\n      <ion-icon name=\"paper-plane-outline\"></ion-icon>\n      <ion-label>Candidatures</ion-label>\n    </ion-tab-button>\n      \n    <ion-tab-button tab=\"tab4\">\n      <ion-icon name=\"person-circle-outline\"></ion-icon>\n      <ion-label>Profil</ion-label>\n    </ion-tab-button>  \n  </ion-tab-bar>\n\n</ion-tabs>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_tabs_tabs_module_ts.js.map