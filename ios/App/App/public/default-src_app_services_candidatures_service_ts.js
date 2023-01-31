"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_services_candidatures_service_ts"],{

/***/ 738:
/*!*************************************!*\
  !*** ./src/app/global-constants.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GlobalConstants": () => (/* binding */ GlobalConstants)
/* harmony export */ });
class GlobalConstants {
}
GlobalConstants.reload_offres_emploi_tab = true;
GlobalConstants.reload_formations_tab = true;
GlobalConstants.reload_candidatures_tab = true;


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

/***/ 980:
/*!**************************************************!*\
  !*** ./src/app/services/candidatures.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CandidaturesService": () => (/* binding */ CandidaturesService)
/* harmony export */ });
/* harmony import */ var _var_www_run_job_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 4383);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 4139);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 522);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/authentication.service */ 7053);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ 2340);
/* harmony import */ var _global_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../global-constants */ 738);
/* harmony import */ var _awesome_cordova_plugins_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @awesome-cordova-plugins/file-transfer/ngx */ 9883);




 //import 'rxjs/add/observable/fromPromise';
//import 'rxjs/add/operator/mergeMap';









let CandidaturesService = class CandidaturesService {
  constructor(http, authenticationService, alertController, loadingController, router, transfer) {
    this.http = http;
    this.authenticationService = authenticationService;
    this.alertController = alertController;
    this.loadingController = loadingController;
    this.router = router;
    this.transfer = transfer;
    this.fileTransfer = this.transfer.create();
  }

  get candidatures() {
    console.info('inside get candidatures()');

    if (!this.cache$) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.from)(this.authenticationService.getUser()).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.mergeMap)(user => {
        this.user = JSON.parse(user);
        this.cache$ = this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.wordpress.api_url + 'candidature?author=' + this.user.user_id);
        return this.cache$;
      }));
    }

    return this.cache$;
  }

  getCandidatureById(candidatureID) {
    return this.candidatures.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(candidatures => {
      for (var key in candidatures) {
        // skip loop if the property is from prototype
        if (!candidatures.hasOwnProperty(key)) continue;
        var obj = candidatures[key];

        if (obj.id == candidatureID) {
          return obj;
        }
      }
    }));
  }

  createCandidature(formValues) {
    var _this = this;

    return (0,_var_www_run_job_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.presentLoading();

      const siteURL = _environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.wordpress.api_url + 'create/';
      const siteURL_add_cv_to_candidature = _environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.wordpress.api_url + 'add_cv_to_candidature/';
      const postType = 'candidature';

      _this.authenticationService.getUser().then(user => {
        _this.user = JSON.parse(user);
        const header_authorization = 'Bearer ' + _this.user.token;
        const data = {
          title: 'Candidature de ' + formValues.nom + ' ' + formValues.prenom + ' à l\'offre d\'emploi vendeur conseil',
          content: '',
          status: 'publish',
          author: _this.user.user_id,
          "meta": {
            "wpcf-nom": formValues.nom,
            "wpcf-prenom": formValues.prenom,
            "_wpcf_belongs_offre-emploi_id": formValues.offre_emploi_id
          },
          "relationship": {
            "relationship": formValues.relationship,
            "parent": formValues.parent_id
          }
        };
        fetch(siteURL + postType, {
          method: 'POST',
          body: JSON.stringify(data),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            'Authorization': header_authorization
          }
        }).then(response => {
          _this.loading.dismiss();

          return response.text().then(text => {
            if (!JSON.parse(text).saved) {
              _this.presentAlertConfirm(formValues.offre_emploi_id, 'Erreur', JSON.parse(text).response, formValues.relationship);
            } else {
              //Succès : on upload le cv s'il a été renseigné dans le formulaire
              if (typeof _this.cv_file !== 'undefined') {
                let formData = new FormData();
                formData.append('cv_file', _this.cv_file, _this.cv_file.name);
                formData.append('id_candidature', JSON.parse(text).id_candidature);

                _this.http.post(siteURL_add_cv_to_candidature, formData).subscribe(response => {
                  console.info(response);
                });
              } //Vide cache des candidatures


              _this.cache$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)([]);
              _global_constants__WEBPACK_IMPORTED_MODULE_3__.GlobalConstants.reload_candidatures_tab = true;

              _this.presentAlertConfirm(formValues.offre_emploi_id, 'Confirmation', JSON.parse(text).response, formValues.relationship);
            }
          });
        }).catch(error => console.info(error));
      });
    })();
  }

  presentLoading() {
    var _this2 = this;

    return (0,_var_www_run_job_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.loading = yield _this2.loadingController.create({
        message: 'Envoi en cours...',
        duration: 5000
      });
      return yield _this2.loading.present();
    })();
  }

  presentAlertConfirm(offre_emploi_id, title, message, relationship) {
    var _this3 = this;

    return (0,_var_www_run_job_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this3.alertController.create({
        cssClass: 'my-custom-class',
        header: title,
        message: message,
        buttons: [{
          text: 'OK',
          id: 'confirm-button',
          handler: () => {
            _this3.alertController.dismiss();

            if (relationship == "formation-candidature") {
              _this3.router.navigateByUrl(`/tabs/formations`);
            } else if (relationship == "offre-emploi-candidature") {
              _this3.router.navigateByUrl(`/tabs/offres-emploi`);
            }
          }
        }]
      });
      yield alert.present();
    })();
  }

  getCandidatures() {
    this.cache$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)([]);
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.from)(this.authenticationService.getUser()).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.mergeMap)(user => {
      this.user = JSON.parse(user);
      this.cache$ = this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.wordpress.api_url + 'candidature?author=' + this.user.user_id);
      return this.cache$;
    }));
  }

};

CandidaturesService.ctorParameters = () => [{
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient
}, {
  type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_1__.AuthenticationService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.AlertController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.LoadingController
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.Router
}, {
  type: _awesome_cordova_plugins_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_4__.FileTransfer
}];

CandidaturesService = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Injectable)({
  providedIn: 'root'
})], CandidaturesService);


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



/***/ })

}]);
//# sourceMappingURL=default-src_app_services_candidatures_service_ts.js.map