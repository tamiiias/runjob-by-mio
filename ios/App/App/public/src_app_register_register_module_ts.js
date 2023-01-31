"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_register_register_module_ts"],{

/***/ 3963:
/*!*****************************************************!*\
  !*** ./src/app/register/register-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPageRoutingModule": () => (/* binding */ RegisterPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.page */ 8135);




const routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_0__.RegisterPage
    }
];
let RegisterPageRoutingModule = class RegisterPageRoutingModule {
};
RegisterPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RegisterPageRoutingModule);



/***/ }),

/***/ 8723:
/*!*********************************************!*\
  !*** ./src/app/register/register.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPageModule": () => (/* binding */ RegisterPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _register_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register-routing.module */ 3963);
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.page */ 8135);







let RegisterPageModule = class RegisterPageModule {
};
RegisterPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _register_routing_module__WEBPACK_IMPORTED_MODULE_0__.RegisterPageRoutingModule
        ],
        declarations: [_register_page__WEBPACK_IMPORTED_MODULE_1__.RegisterPage]
    })
], RegisterPageModule);



/***/ }),

/***/ 8135:
/*!*******************************************!*\
  !*** ./src/app/register/register.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPage": () => (/* binding */ RegisterPage)
/* harmony export */ });
/* harmony import */ var _var_www_run_job_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _register_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.page.html?ngResource */ 4754);
/* harmony import */ var _register_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register.page.scss?ngResource */ 6219);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/authentication.service */ 7053);
/* harmony import */ var _services_secteurs_activite_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/secteurs-activite.service */ 8360);











let RegisterPage = class RegisterPage {
  constructor(formBuilder, router, authenticationService, loadingController, alertController, secteursActiviteService) {
    this.formBuilder = formBuilder;
    this.router = router;
    this.authenticationService = authenticationService;
    this.loadingController = loadingController;
    this.alertController = alertController;
    this.secteursActiviteService = secteursActiviteService;
  }

  ngOnInit() {
    this.is_conseiller_hidden = true;
    this.registerForm = this.formBuilder.group({
      prenom: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(2)]],
      nom: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(2)]],
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      email_confirm: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, this.matchValues('email')]],
      username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
      telephone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern('^[0-9]+$')]],
      code_postal: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern('^[0-9]+$')]],
      password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
      password_confirm: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, this.matchValues('password')]],
      inscrit_mission_locale: ['false'],
      conseiller: [''],
      secteur_activite: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
      emploi_formation: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
      accept_politique_confidentialite: ['false', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.requiredTrue]]
    });
    this.registerForm.controls.password.valueChanges.subscribe(() => {
      this.registerForm.controls.password_confirm.updateValueAndValidity();
    });
    this.registerForm.controls.email.valueChanges.subscribe(() => {
      this.registerForm.controls.email_confirm.updateValueAndValidity();
    });
    this.secteursActivite$ = this.secteursActiviteService.secteursActivite;
  }

  matchValues(matchTo) {
    return control => {
      return !!control.parent && !!control.parent.value && control.value === control.parent.controls[matchTo].value ? null : {
        isMatching: false
      };
    };
  }

  submitForm() {
    var _this = this;

    return (0,_var_www_run_job_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const that = _this;
      _this.errorMessage = '';
      const loading = yield _this.loadingController.create({
        message: 'Veuillez patienter...'
      });
      yield loading.present();

      _this.authenticationService.doRegister(_this.registerForm.value).subscribe(res => {
        loading.dismiss();
        console.info('res');
        console.info(res);
        console.info(_this);

        _this.presentAlertConfirm('Confirmation', res['message'], function () {
          console.info('inside callback');
          that.alertController.dismiss();
          that.router.navigate(['/login']);
        });
      }, err => {
        loading.dismiss();
        console.info('err');
        console.info(err.error.message);
        _this.errorMessage = err.error.message;
      });
    })();
  }

  presentAlertConfirm(title, message, ok_callback) {
    var _this2 = this;

    return (0,_var_www_run_job_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this2.alertController.create({
        cssClass: 'my-custom-class',
        header: title,
        message: message,
        buttons: [{
          text: 'OK',
          id: 'confirm-button',
          handler: () => {
            console.info('before_callback');
            ok_callback();
            console.info('after callback');
          }
        }]
      });
      yield alert.present();
    })();
  }

  handleChangeInscritMissionLocale(event) {
    console.info(event);

    if (event.detail.checked) {
      this.is_conseiller_hidden = false;
    } else {
      this.is_conseiller_hidden = true;
    }
  }

};

RegisterPage.ctorParameters = () => [{
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
}, {
  type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__.AuthenticationService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController
}, {
  type: _services_secteurs_activite_service__WEBPACK_IMPORTED_MODULE_4__.SecteursActiviteService
}];

RegisterPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'app-register',
  template: _register_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_register_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], RegisterPage);


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

/***/ 6219:
/*!********************************************************!*\
  !*** ./src/app/register/register.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWdpc3Rlci5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 4754:
/*!********************************************************!*\
  !*** ./src/app/register/register.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n        <ion-back-button defaultHref=\"/login\" text=\"Retour\"></ion-back-button>\n    </ion-buttons>  \n    <ion-title>Inscription</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"page-content\">\n    <form [formGroup]=\"registerForm\" (ngSubmit)=\"submitForm()\" novalidate>\n        <ion-item lines=\"full\">\n          <ion-label position=\"floating\">Prénom*</ion-label>\n          <ion-input formControlName=\"prenom\" type=\"text\" required></ion-input>\n        </ion-item>  \n        <ion-item lines=\"full\">\n          <ion-label position=\"floating\">Nom*</ion-label>\n          <ion-input formControlName=\"nom\" type=\"text\" required></ion-input>\n        </ion-item>\n        <ion-item lines=\"full\">\n          <ion-label position=\"floating\">Email*</ion-label>\n          <ion-input formControlName=\"email\" type=\"email\" required></ion-input>\n        </ion-item>\n        <ion-item lines=\"full\">\n          <ion-label position=\"floating\">Confirmer l'email*</ion-label>\n          <ion-input formControlName=\"email_confirm\" type=\"email\" required></ion-input>\n        </ion-item>\n        <ion-item lines=\"full\">\n          <ion-label position=\"floating\">Nom d'utilisateur*</ion-label>\n          <ion-input formControlName=\"username\" type=\"text\" required></ion-input>\n        </ion-item>\n        <ion-item lines=\"full\">\n          <ion-label position=\"floating\">Mot de passe*</ion-label>\n          <ion-input formControlName=\"password\" type=\"password\" required></ion-input>\n        </ion-item>\n        <ion-item lines=\"full\">\n          <ion-label position=\"floating\">Confirmer le mot de passe*</ion-label>\n          <ion-input formControlName=\"password_confirm\" type=\"password\" required></ion-input>\n        </ion-item>\n        <ion-item lines=\"full\">\n          <ion-label position=\"floating\">Téléphone*</ion-label>\n          <ion-input formControlName=\"telephone\" type=\"text\" required></ion-input>\n        </ion-item>\n        <ion-item lines=\"full\">\n          <ion-label position=\"floating\">Code Postal*</ion-label>\n          <ion-input formControlName=\"code_postal\" type=\"text\" required></ion-input>\n        </ion-item>\n        <ion-item lines=\"full\">\n            <ion-label class=\"ion-text-wrap\">Je suis déjà inscrit à la Mission Locale</ion-label>\n            <ion-checkbox formControlName=\"inscrit_mission_locale\" slot=\"start\" (ionChange)=\"handleChangeInscritMissionLocale($event)\"></ion-checkbox>\n        </ion-item>\n        <ion-item lines=\"full\" id=\"nom_conseiller_item\" [hidden]=is_conseiller_hidden>\n          <ion-label position=\"floating\">Nom de mon conseiller</ion-label>\n          <ion-input formControlName=\"conseiller\" type=\"text\"></ion-input>\n        </ion-item>\n        \n        <ion-item lines=\"full\">\n            <ion-label class=\"select_secteurs_label\">Mon projet professionnel, dans quel(s) domaine(s) ?</ion-label>\n            <ion-select multiple=\"true\" cancelText=\"Annuler\" okText=\"OK\" formControlName=\"secteur_activite\" >\n                <ng-container *ngFor=\"let secteurActivite of secteursActivite$ | async\" >\n                    <ion-select-option value=\"{{ secteurActivite.id }}\" checked>{{ secteurActivite.name }}</ion-select-option>\n                </ng-container>\n            </ion-select>\n        </ion-item> \n        \n        <ion-item lines=\"full\" class=\"select_secteurs\">\n            <ion-label>Je recherche</ion-label>\n            <ion-select multiple=\"true\" cancelText=\"Annuler\" okText=\"OK\" formControlName=\"emploi_formation\" >\n                <ng-container>\n                    <ion-select-option value=\"emploi\" checked>Un emploi</ion-select-option>\n                    <ion-select-option value=\"formation\" checked>Une formation</ion-select-option>\n                </ng-container>\n            </ion-select>\n        </ion-item> \n        \n        <p>La Mission Locale Intercommunale (MIO) traite les données recueillies pour vous informer lorsque de nouvelles offres d'emploi ou de formation correspondantes à vos secteurs d'activité sont publiées ainsi que pour vous contacter lorsque vous avez postulé à une offre. Pour en savoir plus sur la gestion de vos données personnelles et pour exercer vos droits, consultez notre <ion-router-link href=\"#\" onclick=\"window.open('http://lab.airlab.fr/runjob/politique-de-confidentialite', '_system', 'location=yes'); return false;\">politique de confidentialité</ion-router-link>.</p>\n        \n        <ion-item lines=\"full\">\n            <ion-label class=\"ion-text-wrap\">J'accepte la politique de confidentialité</ion-label>\n            <ion-checkbox formControlName=\"accept_politique_confidentialite\" slot=\"start\" ></ion-checkbox>\n        </ion-item>\n        \n        <p class=\"error-message\" *ngIf=\"errorMessage\">{{errorMessage}}</p>\n        \n        <ion-row>\n          <ion-col>\n            <ion-button type=\"submit\" expand=\"block\" [disabled]=\"!registerForm.valid\" >Inscription</ion-button>\n          </ion-col>\n        </ion-row>\n    </form>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_register_register_module_ts.js.map