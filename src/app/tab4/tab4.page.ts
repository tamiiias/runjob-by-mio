import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";
import { AuthenticationService } from '../services/authentication.service';
import { OffresEmploiService } from '../services/offres-emploi.service';
import { FormationsService } from '../services/formations.service';
import { LoadingController } from '@ionic/angular';
import { CandidatureListComponent } from '../candidature-list/candidature-list.component';
import { SecteurActivite } from '../models/secteur-activite.model';
import { SecteursActiviteService } from '../services/secteurs-activite.service';
import { Observable, of } from 'rxjs';
import { AlertController } from '@ionic/angular';
import{ GlobalConstants } from '../global-constants';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page implements OnInit {

  loggedInObservable: Observable<any> = this.authenticationService.isLoggedIn();
  myCandidatures$: Observable<any>
  user: any
  updateUserForm: FormGroup;
  updateSecteursForm: FormGroup;
  updateRechercheEnCoursForm: FormGroup;
  errorMessage: string;
  secteursActivite$: Observable<Array<SecteurActivite>>;
  is_conseiller_hidden: boolean;
  
  constructor(
    public formBuilder: FormBuilder,
    private offresEmploiService: OffresEmploiService,
    private formationsService: FormationsService,
    public authenticationService: AuthenticationService,
    private router: Router,
    public loadingController: LoadingController,
    public alertController: AlertController,
    private secteursActiviteService: SecteursActiviteService
  ) {}
  
  ngOnInit() {
    
    
    this.authenticationService.getUser().then(user => {
      
        this.user = JSON.parse(user);
        
        console.info("this.userrrrrrrr");
        console.info(this.user);
        console.info(this.user.secteur_activite.split(','));
        
        //Populate the forms
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
        
        
        if(this.user.inscrit_mission_locale){
            this.is_conseiller_hidden = false;
        } else{
            this.is_conseiller_hidden = true;
        }
        
    });
    
    this.updateUserForm = this.formBuilder.group({
        user_id: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
        prenom: ['', [Validators.required, Validators.minLength(2)]],
        nom: ['', [Validators.required, Validators.minLength(2)]],
        username: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
        email_confirm: ['', [Validators.required, this.matchValues('email')]],
        telephone: ['', [Validators.required, Validators.minLength(10), Validators.pattern('^[0-9]+$')]],
        code_postal: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(5), Validators.pattern('^[0-9]+$')]],
        inscrit_mission_locale: ['false'],
        conseiller: [''],
        emploi_formation: ['', [Validators.required]]
    });
    this.updateSecteursForm = this.formBuilder.group({
        user_id: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
        secteur_activite: ['', [Validators.required]]
    });
    this.updateRechercheEnCoursForm = this.formBuilder.group({
        user_id: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
        recherche_en_cours: ['', [Validators.required]]
    });
    
    this.updateUserForm.controls.email.valueChanges.subscribe(() => {
        this.updateUserForm.controls.email_confirm.updateValueAndValidity();
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
  
  async submitUpdateUserForm() {
    
    const that = this;
    this.errorMessage = '';
    const loading = await this.loadingController.create({
      message: 'Sauvegarde...'
    });
    await loading.present();
    
    this.authenticationService.updateUser(this.updateUserForm.value)
    .subscribe(
        res => {
            loading.dismiss();
            
            this.authenticationService.getUser().then(user => {
                
                console.info("userrrrrrrr");
                console.info(user);
                
                this.authenticationService.setUser({
                    token: this.user.token,
                    username: this.updateUserForm.value.username,
                    displayname: this.user.displayname,
                    email: this.updateUserForm.value.email,
                    firstname: this.updateUserForm.value.prenom,
                    lastname: this.updateUserForm.value.nom,
                    telephone: this.updateUserForm.value.telephone,
                    code_postal: this.updateUserForm.value.code_postal,
                    inscrit_mission_locale: this.updateUserForm.value.inscrit_mission_locale,
                    conseiller: this.updateUserForm.value.conseiller,
                    emploi_formation: this.updateUserForm.value.emploi_formation.join(","),
                    secteur_activite: this.user.secteur_activite,
                    recherche_en_cours: this.user.recherche_en_cours,
                    user_id: this.user.user_id
                });
                
                this.offresEmploiService.cache$ = of([]);
                this.offresEmploiService.page = 1;
                this.formationsService.cache$ = of([]);
                this.formationsService.page = 1;
    
                
            });
            
            this.presentAlertConfirm('Confirmation', res['message'], function(){
                that.alertController.dismiss();
            });
        },
        err => {
          loading.dismiss();
          this.errorMessage = err.error.message;
        }
    )
  }
  
  async submitSecteursForm() {
    
    const that = this;
    this.errorMessage = '';
    const loading = await this.loadingController.create({
      message: 'Sauvegarde...'
    });
    await loading.present();
    
    this.authenticationService.updateUser(this.updateSecteursForm.value)
    .subscribe(
        res => {
            loading.dismiss();
            
            this.authenticationService.getUser().then(user => {
                
                this.authenticationService.setUser({
                    token: this.user.token,
                    username: this.user.username,
                    displayname: this.user.displayname,
                    email: this.user.email,
                    firstname: this.user.firstname,
                    lastname: this.user.lastname,
                    telephone: this.user.telephone,
                    code_postal: this.user.code_postal,
                    inscrit_mission_locale: this.user.inscrit_mission_locale,
                    conseiller: this.user.conseiller,
                    secteur_activite: this.updateSecteursForm.value.secteur_activite.join(","),
                    emploi_formation: this.user.emploi_formation,
                    recherche_en_cours: this.user.recherche_en_cours,
                    user_id: this.user.user_id
                });
                
                this.offresEmploiService.cache$ = of([]);
                this.offresEmploiService.page = 1;
                this.formationsService.cache$ = of([]);
                this.formationsService.page = 1;
                
                GlobalConstants.reload_formations_tab = true;
                GlobalConstants.reload_offres_emploi_tab = true;
    
                
            });
            
            this.presentAlertConfirm('Confirmation', res['message'], function(){
                that.alertController.dismiss();
            });
        },
        err => {
          loading.dismiss();
          this.errorMessage = err.error.message;
        }
    )
  }
  
  async submitRechercheEnCoursForm() {
    
    const that = this;
    this.errorMessage = '';
    const loading = await this.loadingController.create({
      message: 'Sauvegarde...'
    });
    await loading.present();
    
    this.authenticationService.updateUser(this.updateRechercheEnCoursForm.value)
    .subscribe(
        res => {
            loading.dismiss();
            
            this.authenticationService.getUser().then(user => {
                
                console.info("this.updateRechercheEnCoursForm.value.recherche_en_cours");
                console.info(this.updateRechercheEnCoursForm.value.recherche_en_cours);
                
                this.authenticationService.setUser({
                    token: this.user.token,
                    username: this.user.username,
                    displayname: this.user.displayname,
                    email: this.user.email,
                    firstname: this.user.firstname,
                    lastname: this.user.lastname,
                    telephone: this.user.telephone,
                    code_postal: this.user.code_postal,
                    inscrit_mission_locale: this.user.inscrit_mission_locale,
                    conseiller: this.user.conseiller,
                    secteur_activite: this.user.secteur_activite,
                    emploi_formation: this.user.emploi_formation,
                    recherche_en_cours: this.updateRechercheEnCoursForm.value.recherche_en_cours,
                    user_id: this.user.user_id
                });
                
                console.info("tab4 this.user");
                console.info(this.user);
                
            });
            
            this.presentAlertConfirm('Confirmation', res['message'], function(){
                that.alertController.dismiss();
            });
        },
        err => {
          loading.dismiss();
          this.errorMessage = err.error.message;
        }
    )
  }
  
  
  logOut(){
    this.authenticationService.logOut()
    .then(
      res => this.router.navigate(['/login']),
      err => console.log('Error logging out')
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
            ok_callback();
          }
        }
      ]
    });

    await alert.present();
  }
  
  handleChangeSecteurs(e){
    console.info('onSecteurChange : ' + e.detail.value);
    document.getElementById('updateSecteursForm_submit').click();
  }
  
  handleChangeRechercheEnCours(e){
    console.info('onRechercheEnCoursChange : ' + e.detail.value);
    document.getElementById('updateRechercheEnCoursForm_submit').click();
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
