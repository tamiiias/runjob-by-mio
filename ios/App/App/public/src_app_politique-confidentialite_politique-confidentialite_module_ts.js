"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_politique-confidentialite_politique-confidentialite_module_ts"],{

/***/ 2396:
/*!***************************************************************************************!*\
  !*** ./src/app/politique-confidentialite/politique-confidentialite-routing.module.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PolitiqueConfidentialitePageRoutingModule": () => (/* binding */ PolitiqueConfidentialitePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _politique_confidentialite_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./politique-confidentialite.page */ 4247);




const routes = [
    {
        path: '',
        component: _politique_confidentialite_page__WEBPACK_IMPORTED_MODULE_0__.PolitiqueConfidentialitePage
    }
];
let PolitiqueConfidentialitePageRoutingModule = class PolitiqueConfidentialitePageRoutingModule {
};
PolitiqueConfidentialitePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PolitiqueConfidentialitePageRoutingModule);



/***/ }),

/***/ 8315:
/*!*******************************************************************************!*\
  !*** ./src/app/politique-confidentialite/politique-confidentialite.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PolitiqueConfidentialitePageModule": () => (/* binding */ PolitiqueConfidentialitePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _politique_confidentialite_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./politique-confidentialite-routing.module */ 2396);
/* harmony import */ var _politique_confidentialite_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./politique-confidentialite.page */ 4247);







let PolitiqueConfidentialitePageModule = class PolitiqueConfidentialitePageModule {
};
PolitiqueConfidentialitePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _politique_confidentialite_routing_module__WEBPACK_IMPORTED_MODULE_0__.PolitiqueConfidentialitePageRoutingModule
        ],
        declarations: [_politique_confidentialite_page__WEBPACK_IMPORTED_MODULE_1__.PolitiqueConfidentialitePage]
    })
], PolitiqueConfidentialitePageModule);



/***/ }),

/***/ 4247:
/*!*****************************************************************************!*\
  !*** ./src/app/politique-confidentialite/politique-confidentialite.page.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PolitiqueConfidentialitePage": () => (/* binding */ PolitiqueConfidentialitePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _politique_confidentialite_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./politique-confidentialite.page.html?ngResource */ 7026);
/* harmony import */ var _politique_confidentialite_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./politique-confidentialite.page.scss?ngResource */ 590);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let PolitiqueConfidentialitePage = class PolitiqueConfidentialitePage {
    constructor() { }
    ngOnInit() {
    }
};
PolitiqueConfidentialitePage.ctorParameters = () => [];
PolitiqueConfidentialitePage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-politique-confidentialite',
        template: _politique_confidentialite_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_politique_confidentialite_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PolitiqueConfidentialitePage);



/***/ }),

/***/ 590:
/*!******************************************************************************************!*\
  !*** ./src/app/politique-confidentialite/politique-confidentialite.page.scss?ngResource ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb2xpdGlxdWUtY29uZmlkZW50aWFsaXRlLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 7026:
/*!******************************************************************************************!*\
  !*** ./src/app/politique-confidentialite/politique-confidentialite.page.html?ngResource ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n        <ion-back-button defaultHref=\"/register\" text=\"Retour\"></ion-back-button>\n    </ion-buttons>  \n    <ion-title>Politique de confidentialité</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"page-content\">\n    <ion-text>\n        L'association Mission Intercommunale de l'Ouest, connue sous le nom « MIO » a conçu l’application mobile RunJob.\n        La MIO est particulièrement attachée au respect de la vie privée de ses clients.\n        Ce document décrit les pratiques adoptées par la MIO concernant les données à caractère personnel qu’elle peut être amenée à collecter, l’usage qui en est fait, et les personnes auxquelles elles sont destinées. \n\n        <h2>Objectif</h2>\n\n        L’Application traite des données aux fins d’exploiter et d’améliorer le service et de suivre les rapports concernant des abus et coopérer avec l’application de la loi. Nous ne vendons pas ni ne distribuons vos données personnelles à des tiers. Afin d’évaluer l’utilisation de notre service ainsi qu’à des fins de statistiques, seules les données rendues anonymes seront utilisées.\n\n\n        <h2>Quelles informations l’Application obtient-elle et comment sont-elles utilisées ?</h2>\n        <h3>Informations Fournies par l’utilisateur</h3>\n        L’Application obtient les informations que vous fournissez lorsque vous la téléchargez. Certaines informations sont collectées au travers du processus de création de site de manière obligatoire afin de pouvoir utiliser les fonctionnalités de base de l’Application.\n\n        <h2>Informations Collectées automatiquement</h2>\n        De plus, l’Application peut collecter certaines informations automatiquement, y compris, sans toutefois s’y limiter, le type d’appareil mobile que vous utilisez, l’identifiant d’appareil unique de votre appareil mobile, l’adresse IP de votre appareil mobile, votre système d’exploitation mobile, le type de navigateurs Internet mobiles que vous utilisez et les informations concernant la manière dont vous utilisez l’Application. Il se peut que l’Application accède à certaines informations et/ou composants de l’appareil automatiquement. Cette collecte n’est faite qu’aux fins de fournir les services dans l’Application que vous choisissez d’utiliser.\n\n        <h2>L’Application collecte-t-elle des informations précises de localisation en temps réel de l’appareil ?</h2>\n        Cette Application ne collecte pas d’informations précises concernant la localisation de votre appareil mobile.\n\n        <h2>Est-ce que des tiers voient et/ou ont accès aux informations obtenues par l’Application ?</h2>\n        Nous ne divulguons ou ne transférons aucunes de vos données personnelles à des tiers. Il se peut que nous divulguions des données collectées automatiquement sur l’utilisateur dans les cas suivants :\n        • si la loi l’exige, notamment en cas d’assignation ou d’autre processus légal similaire ; • si nous avons de bonnes raisons de penser que la divulgation est nécessaire pour protéger nos droits, votre sécurité ou celle des autres, ou pour enquêter sur les fraudes ou répondre à une demande gouvernementale.\n\n        <h2>Publicité de notre application RunJob 2</h2>h2>\n        Nous ne travaillons PAS avec des réseaux publicitaires tiers.\n        Nous ne faisons la promotion de notre application Visiotact 2 que via des bandeaux en ligne sur notre Site. Nous n’utilisons pas les données collectées dans l’application pour vous envoyer des publicités ciblées.\n\n        <h2>Droit d’accès, corriger, se désinscrire</h2>\n        Vous pouvez mettre fin à toute collecte d’informations par l’Application facilement en désinstallant l’Application. Vous pouvez utiliser les procédures de désinstallation standard qui peuvent être disponibles à travers votre appareil mobile ou via le marché ou réseau de l’application mobile. Veuillez noter que vous pouvez à tout moment exercer vos droits d’accès, de rectification, d’annulation et d’opposition en ce qui concerne vos données personnelles en nous écrivant à l’adresse contact@agri-video-system.com.\n\n        <h2>Sécurité</h2>\n        La MIO accorde de l’importance à la sécurité des données et se soucie de préserver la confidentialité de vos données. Nous avons établi des mesures de protection physiques, électroniques, managériales et procédurales pour protéger les données que nous collectons, que nous traitons et que nous maintenons à jour. Par exemple, l’accès à ces données est limité aux employés qui en ont besoin pour faire fonctionner, développer, maintenir ou améliorer l’application. Veuillez noter que, bien que nous nous efforcions d’assurer la sécurité raisonnable des données que nous traitons et maintenons à jour, aucun système de sécurité ne peut prévenir toutes les failles de sécurité potentielles. Pour des raisons techniques et opérationnelles, les données personnelles peuvent être transférées via des serveurs situés en dehors de l’Union européenne, où les règles européennes de protection des données ne sont pas applicables. En dehors de l’Union européenne, les règlements sur la confidentialité peuvent ne pas fournir le même niveau élevé de protection.\n\n        <h2>Modifications</h2>\n        Cette politique de confidentialité peut être mise à jour de temps en temps pour une raison quelconque. Si cette politique de confidentialité subit d’importantes modifications, il est probable que nous vous en informions plus notoirement et que nous cherchions à obtenir votre accord préalable.\n\n        <h2>Politique de conservation des données, Gestion de vos informations</h2>    \n        Nous ne conservons aucunes données collectées par l’application Visiotact 2. Si vous souhaitez que nous supprimions les données Fournies par l’utilisateur que vous avez fournies via l’application, veuillez nous contacter à l’adresse contact@agri-videosystem.com et nous vous répondrons dans un délai raisonnable. Veuillez noter que tout ou partie des données Fournies par l’utilisateur peuvent être requises pour que l’application fonctionne correctement et il se peut que nous soyons tenus de conserver certaines informations en vertu de la loi.\n    </ion-text>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_politique-confidentialite_politique-confidentialite_module_ts.js.map