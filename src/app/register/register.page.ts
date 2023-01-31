import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";
import { LoadingController } from '@ionic/angular';
import { AuthenticationService } from '../services/authentication.service';
import { AlertController } from '@ionic/angular';
import { SecteurActivite } from '../models/secteur-activite.model';
import { SecteursActiviteService } from '../services/secteurs-activite.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  
  registerForm: FormGroup;
  errorMessage: string;
  secteursActivite$: Observable<Array<SecteurActivite>>;
  is_conseiller_hidden: boolean;
  
  constructor(public formBuilder: FormBuilder,
    private router: Router,
    public authenticationService: AuthenticationService,
    public loadingController: LoadingController,
    public alertController: AlertController,
    private secteursActiviteService: SecteursActiviteService) { }

  ngOnInit() {
  
  
    this.is_conseiller_hidden = true;
    
    this.registerForm = this.formBuilder.group({
      prenom: ['', [Validators.required, Validators.minLength(2)]],
      nom: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      email_confirm: ['', [Validators.required, this.matchValues('email')]],
      username: ['', [Validators.required]],
      telephone: ['', [Validators.required, Validators.minLength(10), Validators.pattern('^[0-9]+$')]],
      code_postal: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(5), Validators.pattern('^[0-9]+$')]],
      password: ['', [Validators.required]],
      password_confirm: ['', [Validators.required, this.matchValues('password')]],
      inscrit_mission_locale: ['false'],
      conseiller: [''],
      secteur_activite: ['', [Validators.required]],
      emploi_formation: ['', [Validators.required]],
      accept_politique_confidentialite: ['false', [Validators.requiredTrue]]
    });
    
    
    this.registerForm.controls.password.valueChanges.subscribe(() => {
      this.registerForm.controls.password_confirm.updateValueAndValidity();
    });
    this.registerForm.controls.email.valueChanges.subscribe(() => {
      this.registerForm.controls.email_confirm.updateValueAndValidity();
    });
    
    this.secteursActivite$ = this.secteursActiviteService.secteursActivite;
    
  }
  
  matchValues( matchTo: string ) : (AbstractControl) => ValidationErrors | null {
    return (control: AbstractControl): ValidationErrors | null => {
      return !!control.parent &&
        !!control.parent.value &&
        control.value === control.parent.controls[matchTo].value
        ? null
        : { isMatching: false };
    };
  }
  
  async submitForm() {
    
    
    const that = this;
    this.errorMessage = '';
    const loading = await this.loadingController.create({
      message: 'Veuillez patienter...'
    });
    await loading.present();

    this.authenticationService.doRegister(this.registerForm.value)
    .subscribe(
        res => {
            loading.dismiss();
            console.info('res');
            console.info(res);
            console.info(this);
            this.presentAlertConfirm('Confirmation', res['message'], function(){
                console.info('inside callback');
                that.alertController.dismiss();
                that.router.navigate(['/login']);
            });
          
        },
        err => {
          loading.dismiss();
          console.info('err');
          console.info(err.error.message);
          this.errorMessage = err.error.message;
        }
    )
  }
  
  async presentAlertConfirm(title, message, ok_callback) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: title,
      message: message,
      buttons: [
        {
          text: 'OK',
          id: 'confirm-button',
          handler: () => {
            console.info('before_callback');
            ok_callback();
            console.info('after callback');
          }
        }
      ]
    });

    await alert.present();
  }
  
  handleChangeInscritMissionLocale(event){
    console.info(event);
    if(event.detail.checked){
        this.is_conseiller_hidden = false;
    } else{
        this.is_conseiller_hidden = true;
    }
  }
  
}

