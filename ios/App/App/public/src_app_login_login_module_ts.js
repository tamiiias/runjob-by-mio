"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_login_login_module_ts"],{

/***/ 8595:
/*!**************************************!*\
  !*** ./src/app/login/login.guard.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginGuard": () => (/* binding */ LoginGuard)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/authentication.service */ 7053);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 1133);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 7418);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 4383);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 4139);






let LoginGuard = class LoginGuard {
    constructor(authenticationService, router) {
        this.authenticationService = authenticationService;
        this.router = router;
    }
    canActivate() {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.from)(this.authenticationService.getUser())
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.concatMap)(user => {
            if (user) { // user is the value returned from the local storage
                return this.authenticationService.validateAuthToken(JSON.parse(user).token)
                    .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(error)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(result => {
                    if (result.error) {
                        // token is expired
                        return true;
                    }
                    else {
                        // user is logged in and token is valid
                        var user_obj = JSON.parse(user);
                        console.info('guard user');
                        console.info(user_obj);
                        console.info(user_obj.emploi_formation);
                        if (user_obj.emploi_formation == "formation") {
                            return this.router.parseUrl('/tabs/formations');
                        }
                        else {
                            return this.router.parseUrl('/tabs');
                        }
                    }
                }));
            }
            else {
                // there is no logged user
                console.info('no user logged in');
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(true);
            }
        }));
    }
};
LoginGuard.ctorParameters = () => [
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_0__.AuthenticationService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router }
];
LoginGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Injectable)()
], LoginGuard);



/***/ }),

/***/ 107:
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 937);
/* harmony import */ var _login_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.guard */ 8595);








const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage,
        canActivate: [_login_guard__WEBPACK_IMPORTED_MODULE_1__.LoginGuard]
    }
];
let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes)
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage],
        providers: [_login_guard__WEBPACK_IMPORTED_MODULE_1__.LoginGuard]
    })
], LoginPageModule);



/***/ }),

/***/ 937:
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var _var_www_run_job_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.html?ngResource */ 1729);
/* harmony import */ var _login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.page.scss?ngResource */ 7047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/authentication.service */ 7053);
/* harmony import */ var _services_offres_emploi_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/offres-emploi.service */ 4474);
/* harmony import */ var onesignal_cordova_plugin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! onesignal-cordova-plugin */ 182);
/* harmony import */ var onesignal_cordova_plugin__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(onesignal_cordova_plugin__WEBPACK_IMPORTED_MODULE_5__);











let LoginPage = class LoginPage {
  constructor(platform, router, loadingController, formBuilder, alertCtrl, toastCtrl, authenticationService, offresEmploiService) {
    this.platform = platform;
    this.router = router;
    this.loadingController = loadingController;
    this.formBuilder = formBuilder;
    this.alertCtrl = alertCtrl;
    this.toastCtrl = toastCtrl;
    this.authenticationService = authenticationService;
    this.offresEmploiService = offresEmploiService;
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
      password: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required)
    });
  }

  doLogin() {
    var _this = this;

    return (0,_var_www_run_job_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.info('inside doLogin');
      const loading = yield _this.loadingController.create({
        message: 'Veuillez patienter...'
      });
      yield loading.present();

      _this.authenticationService.doLogin(_this.loginForm.value.username, _this.loginForm.value.password).subscribe(res => {
        console.info('res');
        console.info(res);

        _this.authenticationService.setUser({
          token: res['token'],
          username: _this.loginForm.value.username,
          displayname: res['user_display_name'],
          email: res['user_email'],
          firstname: res['user_firstname'],
          lastname: res['user_lastname'],
          telephone: res['user_telephone'],
          code_postal: res['user_code_postal'],
          inscrit_mission_locale: res['user_inscrit_mission_locale'],
          conseiller: res['user_conseiller'],
          secteur_activite: res['user_secteur_activite'],
          emploi_formation: res['user_emploi_formation'],
          recherche_en_cours: res['user_recherche_en_cours'],
          user_id: res['user_id']
        }); //Send user ID to OneSignal


        if (_this.platform.is("capacitor")) {
          console.log('capacitor');
          let externalUserId = res['user_id']; // You will supply the external user id to the OneSignal SDK

          console.info('externalUserId : ' + externalUserId);
          onesignal_cordova_plugin__WEBPACK_IMPORTED_MODULE_5___default().setExternalUserId(externalUserId);
        } else {
          console.log('not capacitor');
        }

        loading.dismiss(); //Set constants like Types de contrat, Secteurs d'activité...

        console.info('set constants');

        _this.offresEmploiService.setSecteurs();

        _this.offresEmploiService.setTypesContrat();

        _this.offresEmploiService.setEtats();

        if (res['user_emploi_formation'] == "formation") {
          _this.router.navigate(['/tabs/formations']);
        } else {
          _this.router.navigate(['/tabs']);
        }
      }, err => {
        loading.dismiss();
        _this.errorMessage = "Identifiant ou mot de passe invalide";
      });
    })();
  }

  openPwReset() {
    var _this2 = this;

    return (0,_var_www_run_job_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this2.alertCtrl.create({
        header: 'Mot de passe oublié ?',
        message: 'Entre ton email pour obtenir un nouveau mot de passe',
        inputs: [{
          type: 'text',
          name: 'user_email'
        }],
        buttons: [{
          role: 'cancel',
          text: 'Annuler'
        }, {
          text: 'Renouveler mot de passe',
          handler: data => {
            _this2.resetPw(data['user_email']);
          }
        }]
      });
      yield alert.present();
    })();
  }

  resetPw(user_email) {
    var _this3 = this;

    this.authenticationService.lostPassword(user_email).subscribe( /*#__PURE__*/function () {
      var _ref = (0,_var_www_run_job_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
        const toast = yield _this3.toastCtrl.create({
          message: res['message'],
          duration: 2000
        });
        toast.present();
      });

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }(), err => {
      this.showError(err);
    });
  }

  showError(err) {
    var _this4 = this;

    return (0,_var_www_run_job_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this4.alertCtrl.create({
        header: "Erreur",
        //subHeader: err.error.data.status,
        message: err.error.message,
        buttons: ['OK']
      });
      yield alert.present();
    })();
  }

};

LoginPage.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.Platform
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController
}, {
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController
}, {
  type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__.AuthenticationService
}, {
  type: _services_offres_emploi_service__WEBPACK_IMPORTED_MODULE_4__.OffresEmploiService
}];

LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: 'app-login',
  template: _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], LoginPage);


/***/ }),

/***/ 7047:
/*!**************************************************!*\
  !*** ./src/app/login/login.page.scss?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = ".skip-login {\n  text-align: right;\n}\n.skip-login a {\n  text-decoration: none;\n}\n.sign-up {\n  text-align: right;\n  margin-top: 40px;\n}\n.sign-up a {\n  text-decoration: none;\n}\n.login-form {\n  margin-top: 50px;\n}\n.login-button {\n  margin-top: 30px;\n}\n.submit-btn {\n  margin-top: 60px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGlCQUFBO0FBREY7QUFHRTtFQUNFLHFCQUFBO0FBREo7QUFLQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7QUFGRjtBQUlFO0VBQ0UscUJBQUE7QUFGSjtBQU1BO0VBQ0UsZ0JBQUE7QUFIRjtBQU1BO0VBQ0UsZ0JBQUE7QUFIRjtBQU1BO0VBQ0UsZ0JBQUE7QUFIRiIsImZpbGUiOiJsb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuLnNraXAtbG9naW4ge1xuICB0ZXh0LWFsaWduOiByaWdodDtcblxuICBhIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cbn1cblxuLnNpZ24tdXAge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgbWFyZ2luLXRvcDogNDBweDtcblxuICBhIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cbn1cblxuLmxvZ2luLWZvcm0ge1xuICBtYXJnaW4tdG9wOiA1MHB4XG59XG5cbi5sb2dpbi1idXR0b24ge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuXG4uc3VibWl0LWJ0biB7XG4gIG1hcmdpbi10b3A6IDYwcHg7XG59Il19 */";

/***/ }),

/***/ 1729:
/*!**************************************************!*\
  !*** ./src/app/login/login.page.html?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "<ion-content class=\"page-content\">\n  \n  <ion-text color=\"secondary\">\n    <h2>Se connecter</h2>\n  </ion-text>\n\n  <form class=\"login-form\" [formGroup]=\"loginForm\" (submit)=\"doLogin()\">\n    <ion-item class=\"input-item\">\n      <ion-label color=\"secondary\" position=\"stacked\">Nom d'utilisateur</ion-label>\n      <ion-input type=\"text\" formControlName=\"username\" clearInput=\"true\"></ion-input>\n    </ion-item>\n\n    <ion-item class=\"input-item\">\n      <ion-label color=\"secondary\" position=\"stacked\">Mot de passe</ion-label>\n      <ion-input type=\"password\" formControlName=\"password\" clearInput=\"true\"></ion-input>\n    </ion-item>\n\n    <p class=\"error-message\" *ngIf=\"errorMessage\">{{errorMessage}}</p>\n\n    <p class=\"sign-up\">\n      <a [routerLink]=\"['/register']\" color=\"secondary\">Pas encore de compte ?</a>\n    </p>\n    <p class=\"sign-up\">\n      <a color=\"secondary\" (click)=\"openPwReset()\">Mot de passe oublié ?</a>      \n    </p>  \n\n    <ion-button color=\"secondary\" class=\"submit-btn\" expand=\"block\" [disabled]=\"!loginForm.valid\" type=\"submit\" strong=\"true\">Connexion</ion-button>\n  </form>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_login_login_module_ts.js.map