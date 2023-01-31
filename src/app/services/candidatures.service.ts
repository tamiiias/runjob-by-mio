import { Injectable, OnInit } from '@angular/core';
import { Candidature } from '../models/candidature.model';
import { HttpClient } from '@angular/common/http';

import { Observable, of, from } from 'rxjs';

//import 'rxjs/add/observable/fromPromise';
//import 'rxjs/add/operator/mergeMap';

import { shareReplay, map, mergeMap } from 'rxjs/operators';
import { AuthenticationService } from '../services/authentication.service';
import { AlertController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import{ GlobalConstants } from '../global-constants';

import { FileTransfer, FileUploadOptions, FileTransferObject } from '@awesome-cordova-plugins/file-transfer/ngx';

@Injectable({
  providedIn: 'root'
})


export class CandidaturesService {
  
  cache$: Observable<any>;
  user: any;
  candidature: Observable<any>;
  loading: any;
  cv_file: any;
  
  constructor(private http: HttpClient,
    private authenticationService: AuthenticationService,
    public alertController: AlertController,
    public loadingController: LoadingController,
    public router: Router,
    private transfer: FileTransfer){}
    

  fileTransfer: FileTransferObject = this.transfer.create();

  get candidatures() {
  
    console.info('inside get candidatures()');
    if (!this.cache$) {
        return from(this.authenticationService.getUser()).pipe(mergeMap((user) => {
            this.user = JSON.parse(user);
            this.cache$ = this.http.get(environment.wordpress.api_url + 'candidature?author=' + this.user.user_id); 
            return this.cache$;
        }));
    }
    return this.cache$;
  }
  
  getCandidatureById(candidatureID: number): Observable<Candidature>{
    return this.candidatures.pipe(map(candidatures => {
        for (var key in candidatures) {
            // skip loop if the property is from prototype
            if (!candidatures.hasOwnProperty(key)) continue;

            var obj = candidatures[key];
            if(obj.id==candidatureID){
                return obj;
            }
        }
    }));
  }
  
  async createCandidature(formValues: any){
    
    this.presentLoading();
    
    const siteURL = environment.wordpress.api_url + 'create/';
    const siteURL_add_cv_to_candidature = environment.wordpress.api_url + 'add_cv_to_candidature/';
    const postType = 'candidature';
    
    this.authenticationService.getUser()
      .then(user => {
        
        this.user = JSON.parse(user);
        const header_authorization = 'Bearer ' + this.user.token;
        
        const data = { //The data you want to send with the post request
          title: 'Candidature de ' + formValues.nom + ' ' + formValues.prenom + ' à l\'offre d\'emploi vendeur conseil',
          content: '',
          status:'publish', //needed or the post sits in 'draft' status,
          author: this.user.user_id,
          "meta": {
            "wpcf-nom": formValues.nom,
            "wpcf-prenom": formValues.prenom,
            "_wpcf_belongs_offre-emploi_id": formValues.offre_emploi_id  
          },
          "relationship": {
            "relationship" : formValues.relationship,
            "parent": formValues.parent_id
          }
        };

        fetch(siteURL+postType, { //the javascript fetch API used to handle the http requests
          method: 'POST',
          body: JSON.stringify(data),
          headers: { //the request will fail without both of these headers
            "Content-type": "application/json; charset=UTF-8",
            'Authorization': header_authorization
          }
        })
        .then(response => {
            this.loading.dismiss();
            
            
            return response.text().then(text => { 
            
                        
                if(!JSON.parse(text).saved){
                    this.presentAlertConfirm(formValues.offre_emploi_id, 'Erreur', JSON.parse(text).response, formValues.relationship);
                }
                else{
                
                    //Succès : on upload le cv s'il a été renseigné dans le formulaire
                    if (typeof this.cv_file !== 'undefined') {
                        
                        let formData = new FormData();
                        formData.append('cv_file', this.cv_file, this.cv_file.name);
                        formData.append('id_candidature', JSON.parse(text).id_candidature);
                        
                        
                        this.http.post(siteURL_add_cv_to_candidature, formData).subscribe((response) => {
                          console.info(response);
                        });
                        
                    }
                    
                
                    //Vide cache des candidatures
                    this.cache$ = of([]);
                    GlobalConstants.reload_candidatures_tab = true;

                    this.presentAlertConfirm(formValues.offre_emploi_id, 'Confirmation', JSON.parse(text).response, formValues.relationship);
                    
                }
                
            });
            
        })
        .catch(error => console.info(error));    
    });
  }
  
  async presentLoading() {
      this.loading = await this.loadingController.create({
        message: 'Envoi en cours...',
        duration: 5000
      });
      return await this.loading.present();
  }
  
  
  async presentAlertConfirm(offre_emploi_id, title, message, relationship) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: title,
      message: message,
      buttons: [
        {
          text: 'OK',
          id: 'confirm-button',
          handler: () => {
            this.alertController.dismiss();
            if(relationship=="formation-candidature"){
                this.router.navigateByUrl(`/tabs/formations`);
            }
            else if(relationship=="offre-emploi-candidature"){
                this.router.navigateByUrl(`/tabs/offres-emploi`);
            }
                
          }
        }
      ]
    });

    await alert.present();
  }
  
  getCandidatures(): Observable<Candidature[]>{
    this.cache$ = of([]);
    return from(this.authenticationService.getUser()).pipe(mergeMap((user) => {
        this.user = JSON.parse(user);
        this.cache$ = this.http.get(environment.wordpress.api_url + 'candidature?author=' + this.user.user_id); 
        return this.cache$;
    }));
    
  }    
  
  
}
