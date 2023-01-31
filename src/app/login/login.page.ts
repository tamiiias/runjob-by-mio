import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { LoadingController, Platform, AlertController, ToastController } from '@ionic/angular';
import { AuthenticationService } from '../services/authentication.service';
import { OffresEmploiService } from '../services/offres-emploi.service';
import { environment } from '../../environments/environment';
import OneSignal from 'onesignal-cordova-plugin';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;
  errorMessage: string;

  constructor(
    private platform: Platform, 
    private router: Router,
    public loadingController: LoadingController,
    public formBuilder: FormBuilder,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    public authenticationService: AuthenticationService,
    public offresEmploiService: OffresEmploiService
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  async doLogin() {
    console.info('inside doLogin');
    const loading = await this.loadingController.create({
      message: 'Veuillez patienter...'
    });
    await loading.present();

    this.authenticationService.doLogin(this.loginForm.value.username, this.loginForm.value.password)
    .subscribe(res => {
    
      console.info('res');
      console.info(res);
      
      this.authenticationService.setUser({
        token: res['token'],
        username: this.loginForm.value.username,
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
      });
      
      //Send user ID to OneSignal
      if (this.platform.is("capacitor")) {
          console.log('capacitor');
          let externalUserId = res['user_id']; // You will supply the external user id to the OneSignal SDK
          console.info('externalUserId : ' + externalUserId);
          OneSignal.setExternalUserId(externalUserId);
      } else {
          console.log('not capacitor');
      }
          

      loading.dismiss();
      
      //Set constants like Types de contrat, Secteurs d'activité...
      console.info('set constants');
      this.offresEmploiService.setSecteurs();
      this.offresEmploiService.setTypesContrat();
      this.offresEmploiService.setEtats();
      
      if( res['user_emploi_formation'] == "formation" ){
        this.router.navigate(['/tabs/formations']);
      }
      else{
        this.router.navigate(['/tabs']);
      }
      
      
    },
    err => {
      loading.dismiss();
      this.errorMessage = "Identifiant ou mot de passe invalide";
    })
  }
  
  
  async openPwReset() {
    const alert = await this.alertCtrl.create({
      header: 'Mot de passe oublié ?',
      message: 'Entre ton email pour obtenir un nouveau mot de passe',
      inputs: [
        {
          type: 'text',
          name: 'user_email'
        }
      ],
      buttons: [
        {
          role: 'cancel',
          text: 'Annuler'
        },
        {
          text: 'Renouveler mot de passe',
          handler: (data) => {
            this.resetPw(data['user_email']);
          }
        }
      ]
    });

    await alert.present();
  }
  
  resetPw(user_email) {
    this.authenticationService.lostPassword(user_email).subscribe(
      async res => {
        const toast = await this.toastCtrl.create({
          message: res['message'],
          duration: 2000
        });
        toast.present();
      },
      err => {
        this.showError(err);
      }
    );
  }
  
  async showError(err) {
    const alert = await this.alertCtrl.create({
      header: "Erreur",
      //subHeader: err.error.data.status,
      message: err.error.message,
      buttons: ['OK']
    });
    await alert.present();
  }
  
  
}