"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_lostpassword_lostpassword_module_ts"],{

/***/ 5939:
/*!*************************************************************!*\
  !*** ./src/app/lostpassword/lostpassword-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LostpasswordPageRoutingModule": () => (/* binding */ LostpasswordPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _lostpassword_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lostpassword.page */ 4561);




const routes = [
    {
        path: '',
        component: _lostpassword_page__WEBPACK_IMPORTED_MODULE_0__.LostpasswordPage
    }
];
let LostpasswordPageRoutingModule = class LostpasswordPageRoutingModule {
};
LostpasswordPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LostpasswordPageRoutingModule);



/***/ }),

/***/ 6593:
/*!*****************************************************!*\
  !*** ./src/app/lostpassword/lostpassword.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LostpasswordPageModule": () => (/* binding */ LostpasswordPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _lostpassword_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lostpassword-routing.module */ 5939);
/* harmony import */ var _lostpassword_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lostpassword.page */ 4561);







let LostpasswordPageModule = class LostpasswordPageModule {
};
LostpasswordPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _lostpassword_routing_module__WEBPACK_IMPORTED_MODULE_0__.LostpasswordPageRoutingModule
        ],
        declarations: [_lostpassword_page__WEBPACK_IMPORTED_MODULE_1__.LostpasswordPage]
    })
], LostpasswordPageModule);



/***/ }),

/***/ 4561:
/*!***************************************************!*\
  !*** ./src/app/lostpassword/lostpassword.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LostpasswordPage": () => (/* binding */ LostpasswordPage)
/* harmony export */ });
/* harmony import */ var _var_www_run_job_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _lostpassword_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lostpassword.page.html?ngResource */ 6084);
/* harmony import */ var _lostpassword_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lostpassword.page.scss?ngResource */ 765);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/authentication.service */ 7053);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);










let LostpasswordPage = class LostpasswordPage {
  constructor(formBuilder, route, authenticationService, toastCtrl, alertCtrl, router) {
    this.formBuilder = formBuilder;
    this.route = route;
    this.authenticationService = authenticationService;
    this.toastCtrl = toastCtrl;
    this.alertCtrl = alertCtrl;
    this.router = router;
  }

  ngOnInit() {
    var lostpassword_key = this.route.snapshot.params['lostpassword_key'];
    var lostpassword_login = this.route.snapshot.params['lostpassword_login'];
    console.info("login : " + lostpassword_login);
    console.info("key : " + lostpassword_key);
    this.lostPasswordForm = this.formBuilder.group({
      login: [lostpassword_login, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
      rp_key: [lostpassword_key, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
      pass1: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]]
    });
  }

  submitForm() {
    var _this = this;

    this.authenticationService.resetPassword(this.lostPasswordForm.value).subscribe( /*#__PURE__*/function () {
      var _ref = (0,_var_www_run_job_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
        const alert = yield _this.alertCtrl.create({
          header: "Succès",
          //subHeader: err.error.data.status,
          message: res['message'],
          buttons: [{
            text: 'OK',
            handler: () => {
              _this.router.navigateByUrl('/login');
            }
          }]
        });
        yield alert.present();
      });

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }(), err => {
      this.showError(err);
    });
  }

  showError(err) {
    var _this2 = this;

    return (0,_var_www_run_job_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this2.alertCtrl.create({
        header: "Erreur",
        //subHeader: err.error.data.status,
        message: err.error.message,
        buttons: [{
          text: 'OK',
          handler: () => {
            _this2.router.navigateByUrl('/login');
          }
        }]
      });
      yield alert.present();
    })();
  }

};

LostpasswordPage.ctorParameters = () => [{
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute
}, {
  type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__.AuthenticationService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
}];

LostpasswordPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-lostpassword',
  template: _lostpassword_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_lostpassword_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], LostpasswordPage);


/***/ }),

/***/ 7053:
/*!****************************************************!*\
  !*** ./src/app/services/authentication.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthenticationService": () => (/* binding */ AuthenticationService)
/* harmony export */ });
/* harmony import */ var _var_www_run_job_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _capacitor_preferences__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/preferences */ 5191);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ 2340);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 4383);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 4139);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 1133);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 7418);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 6942);








let AuthenticationService = class AuthenticationService {
  constructor(http) {
    this.http = http;
    this.loggedUser = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
  }

  getUser() {
    return (0,_var_www_run_job_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const {
        value
      } = yield _capacitor_preferences__WEBPACK_IMPORTED_MODULE_1__.Preferences.get({
        key: 'user'
      });
      return value;
    })();
  }

  setUser(user) {
    var _this = this;

    return (0,_var_www_run_job_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _capacitor_preferences__WEBPACK_IMPORTED_MODULE_1__.Preferences.set({
        key: 'user',
        value: JSON.stringify(user)
      });

      _this.loggedUser.next(JSON.stringify(user));
    })();
  } // check if user is logged in and token is valid


  isLoggedIn() {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.from)(this.getUser()).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.concatMap)(user => {
      if (user) {
        // user is the value returned from the local Preferences
        return this.validateAuthToken(JSON.parse(user).token).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(error)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(result => {
          if (result.error) {
            // token is expired
            return false;
          } else // user is logged in and token is valid
            return true;
        }));
      } else {
        // there is no logged user
        console.info('there is no logged user');
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(false);
      }
    }));
  }

  loggedUserObservable() {
    return this.loggedUser.asObservable();
  }

  logOut() {
    var _this2 = this;

    return (0,_var_www_run_job_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _capacitor_preferences__WEBPACK_IMPORTED_MODULE_1__.Preferences.remove({
        key: 'user'
      });

      _this2.loggedUser.next(null);
    })();
  }

  doLogin(username, password) {
    return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.wordpress.auth_url, {
      username: username,
      password: password
    });
  }

  doRegister(userData) {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.wordpress.api_url + 'users/register', userData, {
      headers: header
    });
  }

  updateUser(userData) {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.wordpress.api_url + 'users/update', userData, {
      headers: header
    });
  }

  validateAuthToken(token) {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpHeaders({
      'Authorization': 'Bearer ' + token
    });
    return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.wordpress.auth_url + '/validate?token=' + token, {}, {
      headers: header
    });
  }

  lostPassword(user_email) {
    return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.wordpress.api_url + 'users/lostpassword', {
      email: user_email
    });
  }

  resetPassword(data) {
    let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.wordpress.api_url + 'users/resetpassword', {
      login: data.login,
      rp_key: data.rp_key,
      pass1: data.pass1
    }, {
      headers: header
    });
  }

};

AuthenticationService.ctorParameters = () => [{
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient
}];

AuthenticationService = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Injectable)({
  providedIn: 'root'
})], AuthenticationService);


/***/ }),

/***/ 4970:
/*!*********************************************************************!*\
  !*** ./node_modules/@capacitor/preferences/dist/esm/definitions.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 5191:
/*!***************************************************************!*\
  !*** ./node_modules/@capacitor/preferences/dist/esm/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Preferences": () => (/* binding */ Preferences)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 5099);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 4970);

const Preferences = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('Preferences', {
  web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor_preferences_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 7333)).then(m => new m.PreferencesWeb())
});



/***/ }),

/***/ 765:
/*!****************************************************************!*\
  !*** ./src/app/lostpassword/lostpassword.page.scss?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb3N0cGFzc3dvcmQucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 6084:
/*!****************************************************************!*\
  !*** ./src/app/lostpassword/lostpassword.page.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Mot de passe oublié</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    \n    <ion-text class=\"ion-text-center\" color=\"primary\"><h1>Renouveler mon mot de passe</h1></ion-text>\n    \n    \n    <form [formGroup]=\"lostPasswordForm\" (ngSubmit)=\"submitForm()\" novalidate>\n        <ion-item lines=\"full\" hidden>\n          <ion-input formControlName=\"login\" type=\"text\" required></ion-input>\n        </ion-item>\n        <ion-item lines=\"full\" hidden>\n          <ion-input formControlName=\"rp_key\" type=\"text\" required></ion-input>\n        </ion-item>\n        <ion-item lines=\"full\">\n          <ion-label position=\"floating\">Nouveau mot de passe</ion-label>\n          <ion-input formControlName=\"pass1\" type=\"password\" required></ion-input>\n        </ion-item>\n        <ion-row>\n          <ion-col>\n            <ion-button type=\"submit\" expand=\"block\">Envoyer</ion-button>\n          </ion-col>\n        </ion-row>\n      </form>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_lostpassword_lostpassword_module_ts.js.map