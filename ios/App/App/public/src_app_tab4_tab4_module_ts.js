"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tab4_tab4_module_ts"],{

/***/ 5355:
/*!*********************************************!*\
  !*** ./src/app/tab4/tab4-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab4PageRoutingModule": () => (/* binding */ Tab4PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _tab4_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab4.page */ 3631);




const routes = [
    {
        path: '',
        component: _tab4_page__WEBPACK_IMPORTED_MODULE_0__.Tab4Page,
    }
];
let Tab4PageRoutingModule = class Tab4PageRoutingModule {
};
Tab4PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], Tab4PageRoutingModule);



/***/ }),

/***/ 2486:
/*!*************************************!*\
  !*** ./src/app/tab4/tab4.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab4PageModule": () => (/* binding */ Tab4PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _tab4_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab4.page */ 3631);
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../explore-container/explore-container.module */ 581);
/* harmony import */ var _candidature_candidature_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../candidature/candidature.component */ 247);
/* harmony import */ var _candidature_list_candidature_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../candidature-list/candidature-list.component */ 906);
/* harmony import */ var _tab4_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tab4-routing.module */ 5355);











let Tab4PageModule = class Tab4PageModule {
};
Tab4PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule.forChild([{ path: '', component: _tab4_page__WEBPACK_IMPORTED_MODULE_0__.Tab4Page }]),
            _tab4_routing_module__WEBPACK_IMPORTED_MODULE_4__.Tab4PageRoutingModule,
        ],
        declarations: [
            _tab4_page__WEBPACK_IMPORTED_MODULE_0__.Tab4Page,
            _candidature_candidature_component__WEBPACK_IMPORTED_MODULE_2__.CandidatureComponent,
            _candidature_list_candidature_list_component__WEBPACK_IMPORTED_MODULE_3__.CandidatureListComponent
        ]
    })
], Tab4PageModule);



/***/ }),

/***/ 3631:
/*!***********************************!*\
  !*** ./src/app/tab4/tab4.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab4Page": () => (/* binding */ Tab4Page)
/* harmony export */ });
/* harmony import */ var _var_www_run_job_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _tab4_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab4.page.html?ngResource */ 9184);
/* harmony import */ var _tab4_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab4.page.scss?ngResource */ 7432);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/authentication.service */ 7053);
/* harmony import */ var _services_offres_emploi_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/offres-emploi.service */ 4474);
/* harmony import */ var _services_formations_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/formations.service */ 9762);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _services_secteurs_activite_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/secteurs-activite.service */ 8360);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 4139);
/* harmony import */ var _global_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../global-constants */ 738);















let Tab4Page = class Tab4Page {
  constructor(formBuilder, offresEmploiService, formationsService, authenticationService, router, loadingController, alertController, secteursActiviteService) {
    this.formBuilder = formBuilder;
    this.offresEmploiService = offresEmploiService;
    this.formationsService = formationsService;
    this.authenticationService = authenticationService;
    this.router = router;
    this.loadingController = loadingController;
    this.alertController = alertController;
    this.secteursActiviteService = secteursActiviteService;
    this.loggedInObservable = this.authenticationService.isLoggedIn();
  }

  ngOnInit() {
    this.authenticationService.getUser().then(user => {
      this.user = JSON.parse(user);
      console.info("this.userrrrrrrr");
      console.info(this.user);
      console.info(this.user.secteur_activite.split(',')); //Populate the forms

      this.updateUserForm.controls['user_id'].setValue(this.user.user_id);
      this.updateUserForm.controls['prenom'].setValue(this.user.firstname);
      this.updateUserForm.controls['nom'].setValue(this.user.lastname);
      this.updateUserForm.controls['email'].setValue(this.user.email);
      this.updateUserForm.controls['email_confirm'].setValue(this.user.email);
      this.updateUserForm.controls['username'].setValue(this.user.username);
      this.updateUserForm.controls['telephone'].setValue(this.user.telephone);
      this.updateUserForm.controls['code_postal'].setValue(this.user.code_postal);
      this.updateUserForm.controls['inscrit_mission_locale'].setValue(this.user.inscrit_mission_locale);
      this.updateUserForm.controls['conseiller'].setValue(this.user.conseiller);
      this.updateUserForm.controls['emploi_formation'].setValue(this.user.emploi_formation.split(','));
      this.updateSecteursForm.controls['user_id'].setValue(this.user.user_id);
      this.updateSecteursForm.controls['secteur_activite'].setValue(this.user.secteur_activite.split(','));
      this.updateRechercheEnCoursForm.controls['user_id'].setValue(this.user.user_id);
      console.info('okkkkkkk this.user.recherche_en_cours');
      console.info(this.user.recherche_en_cours);
      this.updateRechercheEnCoursForm.controls['recherche_en_cours'].setValue(this.user.recherche_en_cours);

      if (this.user.inscrit_mission_locale) {
        this.is_conseiller_hidden = false;
      } else {
        this.is_conseiller_hidden = true;
      }
    });
    this.updateUserForm = this.formBuilder.group({
      user_id: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.pattern('^[0-9]+$')]],
      prenom: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.minLength(2)]],
      nom: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.minLength(2)]],
      username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      email_confirm: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, this.matchValues('email')]],
      telephone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.pattern('^[0-9]+$')]],
      code_postal: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.maxLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.pattern('^[0-9]+$')]],
      inscrit_mission_locale: ['false'],
      conseiller: [''],
      emploi_formation: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]]
    });
    this.updateSecteursForm = this.formBuilder.group({
      user_id: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.pattern('^[0-9]+$')]],
      secteur_activite: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]]
    });
    this.updateRechercheEnCoursForm = this.formBuilder.group({
      user_id: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.pattern('^[0-9]+$')]],
      recherche_en_cours: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]]
    });
    this.updateUserForm.controls.email.valueChanges.subscribe(() => {
      this.updateUserForm.controls.email_confirm.updateValueAndValidity();
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

  submitUpdateUserForm() {
    var _this = this;

    return (0,_var_www_run_job_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const that = _this;
      _this.errorMessage = '';
      const loading = yield _this.loadingController.create({
        message: 'Sauvegarde...'
      });
      yield loading.present();

      _this.authenticationService.updateUser(_this.updateUserForm.value).subscribe(res => {
        loading.dismiss();

        _this.authenticationService.getUser().then(user => {
          console.info("userrrrrrrr");
          console.info(user);

          _this.authenticationService.setUser({
            token: _this.user.token,
            username: _this.updateUserForm.value.username,
            displayname: _this.user.displayname,
            email: _this.updateUserForm.value.email,
            firstname: _this.updateUserForm.value.prenom,
            lastname: _this.updateUserForm.value.nom,
            telephone: _this.updateUserForm.value.telephone,
            code_postal: _this.updateUserForm.value.code_postal,
            inscrit_mission_locale: _this.updateUserForm.value.inscrit_mission_locale,
            conseiller: _this.updateUserForm.value.conseiller,
            emploi_formation: _this.updateUserForm.value.emploi_formation.join(","),
            secteur_activite: _this.user.secteur_activite,
            recherche_en_cours: _this.user.recherche_en_cours,
            user_id: _this.user.user_id
          });

          _this.offresEmploiService.cache$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.of)([]);
          _this.offresEmploiService.page = 1;
          _this.formationsService.cache$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.of)([]);
          _this.formationsService.page = 1;
        });

        _this.presentAlertConfirm('Confirmation', res['message'], function () {
          that.alertController.dismiss();
        });
      }, err => {
        loading.dismiss();
        _this.errorMessage = err.error.message;
      });
    })();
  }

  submitSecteursForm() {
    var _this2 = this;

    return (0,_var_www_run_job_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const that = _this2;
      _this2.errorMessage = '';
      const loading = yield _this2.loadingController.create({
        message: 'Sauvegarde...'
      });
      yield loading.present();

      _this2.authenticationService.updateUser(_this2.updateSecteursForm.value).subscribe(res => {
        loading.dismiss();

        _this2.authenticationService.getUser().then(user => {
          _this2.authenticationService.setUser({
            token: _this2.user.token,
            username: _this2.user.username,
            displayname: _this2.user.displayname,
            email: _this2.user.email,
            firstname: _this2.user.firstname,
            lastname: _this2.user.lastname,
            telephone: _this2.user.telephone,
            code_postal: _this2.user.code_postal,
            inscrit_mission_locale: _this2.user.inscrit_mission_locale,
            conseiller: _this2.user.conseiller,
            secteur_activite: _this2.updateSecteursForm.value.secteur_activite.join(","),
            emploi_formation: _this2.user.emploi_formation,
            recherche_en_cours: _this2.user.recherche_en_cours,
            user_id: _this2.user.user_id
          });

          _this2.offresEmploiService.cache$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.of)([]);
          _this2.offresEmploiService.page = 1;
          _this2.formationsService.cache$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.of)([]);
          _this2.formationsService.page = 1;
          _global_constants__WEBPACK_IMPORTED_MODULE_7__.GlobalConstants.reload_formations_tab = true;
          _global_constants__WEBPACK_IMPORTED_MODULE_7__.GlobalConstants.reload_offres_emploi_tab = true;
        });

        _this2.presentAlertConfirm('Confirmation', res['message'], function () {
          that.alertController.dismiss();
        });
      }, err => {
        loading.dismiss();
        _this2.errorMessage = err.error.message;
      });
    })();
  }

  submitRechercheEnCoursForm() {
    var _this3 = this;

    return (0,_var_www_run_job_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const that = _this3;
      _this3.errorMessage = '';
      const loading = yield _this3.loadingController.create({
        message: 'Sauvegarde...'
      });
      yield loading.present();

      _this3.authenticationService.updateUser(_this3.updateRechercheEnCoursForm.value).subscribe(res => {
        loading.dismiss();

        _this3.authenticationService.getUser().then(user => {
          console.info("this.updateRechercheEnCoursForm.value.recherche_en_cours");
          console.info(_this3.updateRechercheEnCoursForm.value.recherche_en_cours);

          _this3.authenticationService.setUser({
            token: _this3.user.token,
            username: _this3.user.username,
            displayname: _this3.user.displayname,
            email: _this3.user.email,
            firstname: _this3.user.firstname,
            lastname: _this3.user.lastname,
            telephone: _this3.user.telephone,
            code_postal: _this3.user.code_postal,
            inscrit_mission_locale: _this3.user.inscrit_mission_locale,
            conseiller: _this3.user.conseiller,
            secteur_activite: _this3.user.secteur_activite,
            emploi_formation: _this3.user.emploi_formation,
            recherche_en_cours: _this3.updateRechercheEnCoursForm.value.recherche_en_cours,
            user_id: _this3.user.user_id
          });

          console.info("tab4 this.user");
          console.info(_this3.user);
        });

        _this3.presentAlertConfirm('Confirmation', res['message'], function () {
          that.alertController.dismiss();
        });
      }, err => {
        loading.dismiss();
        _this3.errorMessage = err.error.message;
      });
    })();
  }

  logOut() {
    this.authenticationService.logOut().then(res => this.router.navigate(['/login']), err => console.log('Error logging out'));
  }

  presentAlertConfirm(title, message, ok_callback) {
    var _this4 = this;

    return (0,_var_www_run_job_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this4.alertController.create({
        cssClass: 'my-custom-class',
        header: title,
        message: message,
        buttons: [{
          text: 'OK',
          id: 'confirm-button',
          handler: () => {
            ok_callback();
          }
        }]
      });
      yield alert.present();
    })();
  }

  handleChangeSecteurs(e) {
    console.info('onSecteurChange : ' + e.detail.value);
    document.getElementById('updateSecteursForm_submit').click();
  }

  handleChangeRechercheEnCours(e) {
    console.info('onRechercheEnCoursChange : ' + e.detail.value);
    document.getElementById('updateRechercheEnCoursForm_submit').click();
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

Tab4Page.ctorParameters = () => [{
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder
}, {
  type: _services_offres_emploi_service__WEBPACK_IMPORTED_MODULE_4__.OffresEmploiService
}, {
  type: _services_formations_service__WEBPACK_IMPORTED_MODULE_5__.FormationsService
}, {
  type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__.AuthenticationService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.LoadingController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.AlertController
}, {
  type: _services_secteurs_activite_service__WEBPACK_IMPORTED_MODULE_6__.SecteursActiviteService
}];

Tab4Page = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
  selector: 'app-tab4',
  template: _tab4_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_tab4_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], Tab4Page);


/***/ }),

/***/ 7432:
/*!************************************************!*\
  !*** ./src/app/tab4/tab4.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWI0LnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 9184:
/*!************************************************!*\
  !*** ./src/app/tab4/tab4.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title color=\"primary\">\n      MON PROFIL\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Mon Profil</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ng-container *ngIf=\"user\">\n    <ion-text color=\"secondary\">\n      <h2 class=\"ion-padding\">{{user.firstname}} {{user.lastname}}</h2>\n    </ion-text>\n  </ng-container>    \n\n    \n  <ion-accordion-group>\n      <ion-accordion value=\"informations\">\n        <ion-item slot=\"header\">\n            <ion-label>Mes informations personnelles</ion-label>\n        </ion-item>  \n        <form slot=\"content\" *ngIf=\"user\" [formGroup]=\"updateUserForm\" (ngSubmit)=\"submitUpdateUserForm()\" novalidate autocomplete=\"off\">\n            <ion-item lines=\"full\" hidden>\n              <ion-input formControlName=\"user_id\" type=\"text\" required></ion-input>\n            </ion-item>\n            <ion-item lines=\"full\">\n              <ion-label position=\"floating\">Prénom</ion-label>\n              <ion-input formControlName=\"prenom\" type=\"text\" required></ion-input>\n            </ion-item>  \n            <ion-item lines=\"full\">\n              <ion-label position=\"floating\">Nom</ion-label>\n              <ion-input formControlName=\"nom\" type=\"text\" required></ion-input>\n            </ion-item>\n            <ion-item lines=\"full\">\n              <ion-label position=\"floating\">Email</ion-label>\n              <ion-input formControlName=\"email\" type=\"email\" required></ion-input>\n            </ion-item>\n            <ion-item lines=\"full\">\n              <ion-label position=\"floating\">Confirmer l'email</ion-label>\n              <ion-input formControlName=\"email_confirm\" type=\"email\" required></ion-input>\n            </ion-item>\n            <ion-item lines=\"full\">\n              <ion-label position=\"floating\">Nom d'utilisateur</ion-label>\n              <ion-input formControlName=\"username\" type=\"text\" required></ion-input>\n            </ion-item>\n            <ion-item lines=\"full\">\n              <ion-label position=\"floating\">Téléphone</ion-label>\n              <ion-input formControlName=\"telephone\" type=\"text\" required></ion-input>\n            </ion-item>\n            <ion-item lines=\"full\">\n              <ion-label position=\"floating\">Code Postal</ion-label>\n              <ion-input formControlName=\"code_postal\" type=\"text\" required></ion-input>\n            </ion-item>\n            <ion-item lines=\"full\">\n                <ion-label class=\"ion-text-wrap\">Je suis déjà inscrit à la Mission Locale</ion-label>\n                <ion-checkbox formControlName=\"inscrit_mission_locale\" slot=\"start\" (ionChange)=\"handleChangeInscritMissionLocale($event)\"></ion-checkbox>\n            </ion-item>\n            <ion-item lines=\"full\" id=\"nom_conseiller_item\" [hidden]=is_conseiller_hidden>\n              <ion-label position=\"floating\">Nom de mon conseiller</ion-label>\n              <ion-input formControlName=\"conseiller\" type=\"text\"></ion-input>\n            </ion-item>\n            <ion-item lines=\"full\">\n                <ion-label>Je recherche</ion-label>\n                <ion-select multiple=\"true\" cancelText=\"Annuler\" okText=\"OK\" formControlName=\"emploi_formation\" >\n                    <ion-select-option value=\"emploi\" checked>Emploi</ion-select-option>\n                    <ion-select-option value=\"formation\" checked>Formation</ion-select-option>\n                </ion-select>\n            </ion-item> \n            \n            <ion-item lines=\"full\" *ngIf=\"errorMessage\">\n                <p class=\"error-message\">{{errorMessage}}</p>\n            </ion-item>  \n\n\n            <ion-row>\n              <ion-col class=\"ion-text-center\">\n                <ion-button type=\"submit\"  [disabled]=\"!updateUserForm.valid\" >Enregistrer</ion-button>\n              </ion-col>\n            </ion-row>\n        </form>\n      </ion-accordion>\n      <ion-accordion value=\"secteurs\">\n        <ion-item slot=\"header\">\n            <ion-label>Mes secteurs d'activité</ion-label>\n        </ion-item>  \n        <form id=\"updateSecteursForm\" slot=\"content\" *ngIf=\"user\" [formGroup]=\"updateSecteursForm\" (ngSubmit)=\"submitSecteursForm()\" novalidate autocomplete=\"off\">\n            <ion-item lines=\"full\" hidden>\n              <ion-input formControlName=\"user_id\" type=\"text\" required></ion-input>\n            </ion-item>\n            <ion-item lines=\"full\">\n                <!--<ion-label>Secteur(s) d'activité</ion-label>-->\n                <ion-select multiple=\"true\" cancelText=\"Annuler\" okText=\"OK\" formControlName=\"secteur_activite\" placeholder=\"Sélectionner mes secteurs d'activité\" (ionChange)=\"handleChangeSecteurs($event)\">\n                    <ng-container *ngFor=\"let secteurActivite of secteursActivite$ | async\" >\n                        <ion-select-option value=\"{{ secteurActivite.id }}\" checked>{{ secteurActivite.name }}</ion-select-option>\n                    </ng-container>\n                </ion-select>\n            </ion-item>      \n\n            <ion-item lines=\"full\" *ngIf=\"errorMessage\">\n                <p class=\"error-message\">{{errorMessage}}</p>\n            </ion-item>  \n\n\n            <ion-row hidden>\n              <ion-col class=\"ion-text-center\">\n                <ion-button id=\"updateSecteursForm_submit\" type=\"submit\"  [disabled]=\"!updateUserForm.valid\" >Enregistrer</ion-button>\n              </ion-col>\n            </ion-row>\n        </form>\n      </ion-accordion>\n      \n      <!--\n      <ion-accordion value=\"candidatures\">\n        <ion-item slot=\"header\">\n          <ion-label>Mes candidatures</ion-label>\n        </ion-item>\n        <ion-list slot=\"content\">  \n\n            <app-candidature-list></app-candidature-list>  \n        </ion-list>    \n      </ion-accordion>\n      -->\n  </ion-accordion-group>      \n    \n  <ion-list class=\"recherche_en_cours_list\">\n    <form id=\"updateRechercheEnCoursForm\" [formGroup]=\"updateRechercheEnCoursForm\" (ngSubmit)=\"submitRechercheEnCoursForm()\">\n      <ion-item lines=\"full\" hidden>\n        <ion-input formControlName=\"user_id\" type=\"text\" required></ion-input>\n      </ion-item>\n            \n      <ion-item lines=\"full\">\n        <ion-label>Recherche en cours</ion-label>\n        <ion-toggle formControlName=\"recherche_en_cours\" slot=\"end\" [(ngModel)]=\"toggleStatus\" [checked]=\"true\" (ionChange)=\"handleChangeRechercheEnCours($event)\"></ion-toggle>\n      </ion-item>\n      \n      <ion-row hidden>\n        <ion-col class=\"ion-text-center\">\n            <ion-button id=\"updateRechercheEnCoursForm_submit\" type=\"submit\" >Enregistrer</ion-button>\n        </ion-col>\n      </ion-row>    \n          \n    </form>\n  </ion-list>\n    \n  <br>\n  <ion-content class=\"ion-padding\">    \n      <ion-button *ngIf=\"(loggedInObservable | async) === false\" [routerLink]=\"['/login']\" color=\"secondary\">Se connecter\n      </ion-button>\n      <ion-button *ngIf=\"(loggedInObservable | async) === true\" (click)=\"logOut()\" color=\"secondary\">Se déconnecter\n      </ion-button>\n  </ion-content>\n\n    \n  \n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_tab4_tab4_module_ts.js.map