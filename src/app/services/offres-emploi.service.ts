import { Injectable, OnInit } from '@angular/core';
import { OffreEmploi } from '../models/offre-emploi.model';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, of, from } from 'rxjs';
import { isEmpty, mergeMap } from 'rxjs/operators';
import { shareReplay, map, tap } from 'rxjs/operators';
import { AuthenticationService } from '../services/authentication.service';
import { CandidaturesService } from '../services/candidatures.service';
import { AlertController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { Preferences } from '@capacitor/preferences';

@Injectable({
  providedIn: 'root'
})


export class OffresEmploiService {
  
  cache$: Observable<any>;
  user: any;
  offreEmploi: Observable<any>;
  page = 1;
  totalPages = 1;
  secteur = '';
  
  //loading: any;
  
  constructor(private http: HttpClient,
    private authenticationService: AuthenticationService,
    private candidaturesService: CandidaturesService,
    public alertController: AlertController,
    public loadingController: LoadingController,
    public router: Router){}
    
  get offresEmploi() {
    
    
    var get_offre_emploi_url = environment.wordpress.api_url+'offre-emploi?_embed';
    if(this.secteur != '' && !this.secteur.includes('tous')){
        get_offre_emploi_url += "&secteur-activite=" + this.secteur;
    }
    
    if ( !this.cache$ ) {
        this.cache$ = this.http.get<any[]>(get_offre_emploi_url, {observe: 'response'}).pipe(map(data => {
            this.totalPages = +data.headers.get('X-WP-TotalPages'); // unary (+) operator casts the string to a number
            this.cache$ = of(data.body);
            return data.body;
        }));
    }
    return this.cache$;
    
  }
  
  getMorePosts() {
        console.info('ok inside getMorePosts');
        this.page++;
        var get_offre_emploi_url = environment.wordpress.api_url+'offre-emploi?_embed';
        if(this.secteur != '' && !this.secteur.includes('tous')){
            get_offre_emploi_url += "&secteur-activite=" + this.secteur;
        }
        
        return this.http.get<any[]>(get_offre_emploi_url + '&page=' + this.page, {observe: 'response'}).pipe(map(offres_data => {


            var offres_datas = offres_data.body;

            this.authenticationService.getUser().then(user => {
                this.user = JSON.parse(user);
                var get_candidatures_url =  environment.wordpress.api_url + 'candidature?author=' + this.user.user_id; 

                var candidatures = this.candidaturesService.getCandidatures().pipe(map(candidatures_data => {

                    for (var i = 0; i < candidatures_data.length; i++) {
                        for(var j = 0; j < offres_datas.length; j++){
                            if(candidatures_data[i].parentPostId==offres_datas[j].id){
                                offres_data.body[j].postule = "postule";
                                break;
                            }
                        }
                    }

                    return candidatures_data;

                }));

                candidatures.subscribe();

            });

            return this.processPostData(offres_data)
        }));
        
            
  }
  
  // A place for post-processing, before making the fetched data available to view.
  processPostData(resp: HttpResponse<any[]>) {
  
        this.totalPages = +resp.headers.get('X-WP-TotalPages'); // unary (+) operator casts the string to a number
        
        //Add new item in resp.body
        resp.body.forEach((item: any) => {
            
            //Add element to cache$
            this.cache$.subscribe(array=> {
                array.push(item)
            });
            
        });
        
        
        return this.cache$;
        
  }
  
  hasMorePosts() {
        //N.B : added the -1 here to fix a bug where the loading lines didn't show before the last load of infinitescroll
        //It causes a js error at the end on the infinitescroll because it believe there is still another load.
        return this.page - 1 < this.totalPages;
  }
  
  async setSecteurs() {
    var get_secteurs_url = environment.wordpress.api_url + 'secteur-activite';
    var secteurs$ = this.http.get<any[]>(get_secteurs_url, {observe: 'response'}).pipe(map(data => {
        Preferences.set({
          key: 'secteurs',
          value: JSON.stringify(data.body)
        });
    }));
    
    secteurs$.subscribe();
  }
  
  async getSecteurs() {
    const { value } = await Preferences.get({ key: 'secteurs' });   
    return value;
  }
  
  async setTypesContrat() {
    var get_types_contrat_url = environment.wordpress.api_url + 'type-contrat';
    var types_contrat$ = this.http.get<any[]>(get_types_contrat_url, {observe: 'response'}).pipe(map(data => {
        Preferences.set({
          key: 'types_contrat',
          value: JSON.stringify(data.body)
        });
    }));
    
    types_contrat$.subscribe();
  }
  
  async getTypesContrat() {
    const { value } = await Preferences.get({ key: 'types_contrat' });   
    return value;
  }
  
  async setEtats() {
    var get_etats_url = environment.wordpress.api_url + 'etat';
    var etats$ = this.http.get<any[]>(get_etats_url, {observe: 'response'}).pipe(map(data => {
        Preferences.set({
          key: 'etats',
          value: JSON.stringify(data.body)
        });
    }));
    
    etats$.subscribe();
  }
  
  async getEtats() {
    const { value } = await Preferences.get({ key: 'etats' });   
    return value;
  }
  
  getOffreEmploiById(offreEmploiID: number): Observable<OffreEmploi>{
    
    var get_offre_emploi_by_id_url = environment.wordpress.api_url + 'offre-emploi?_embed&include[]=' + offreEmploiID;
    var offreEmploi$ = this.http.get<OffreEmploi>(get_offre_emploi_by_id_url, {observe: 'response'}).pipe(map(data => {
        
        var secteur_id = data.body[0]["secteur-activite"][0];
        
        this.getSecteurs().then(secteurs => {
            var secteurs_array = JSON.parse(secteurs);
            for (var i = 0; i < secteurs_array.length; i++) {
                if(secteurs_array[i].id==secteur_id){
                    data.body[0]["secteur-activite-name"] = secteurs_array[i].name;
                    break;
                }
            }
        });
        
        var type_contrat_id = data.body[0]["type-contrat"][0];
        
        this.getTypesContrat().then(types_contrat => {            
            var types_contrat_array = JSON.parse(types_contrat);
            for (var i = 0; i < types_contrat_array.length; i++) {
                if(types_contrat_array[i].id==type_contrat_id){
                    data.body[0]["type-contrat-name"] = types_contrat_array[i].name;
                    break;
                }
            }
        });   
        
        var etat_id = data.body[0]["etat"][0];
        
        this.getEtats().then(etats => {        
            var etats_array = JSON.parse(etats);
            for (var i = 0; i < etats_array.length; i++) {
                if(etats_array[i].id==etat_id){
                    data.body[0]["etat-name"] = etats_array[i].name;
                    break;
                }
            }
        });   
        
        var candidatures = this.candidaturesService.getCandidatures().pipe(map(candidatures_data => {
                
            for (var i = 0; i < candidatures_data.length; i++) {   
                if(candidatures_data[i].parentPostId == data.body[0].id){
                    data.body[0].postule = "postule";
                    break;
                }
            }

            return candidatures_data;

        }));

        candidatures.subscribe();

        return data.body[0];

    }));
    
    return offreEmploi$;
  }
  
  getOffreEmploiBySecteur(secteurActiviteArray: []): Observable<OffreEmploi[]>{
    
    
    this.secteur = '';
    for(var key_secteur in secteurActiviteArray){
        if(this.secteur==''){
            this.secteur = secteurActiviteArray[key_secteur];
        } else {
            this.secteur += ',' + secteurActiviteArray[key_secteur];
        }
    }
    this.cache$ = of([]);
    this.page = 1;
    var get_offre_emploi_url = environment.wordpress.api_url+'offre-emploi?_embed';
    if(this.secteur != '' && !this.secteur.includes('tous')){
        get_offre_emploi_url += "&secteur-activite=" + this.secteur;
    }
    
    return this.http.get<any[]>(get_offre_emploi_url, {observe: 'response'}).pipe(map(offres_data => {
        
        var offres_datas = offres_data.body;
        
        this.authenticationService.getUser().then(user => {
            this.user = JSON.parse(user);
            var get_candidatures_url =  environment.wordpress.api_url + 'candidature?author=' + this.user.user_id; 
            
            var candidatures = this.candidaturesService.getCandidatures().pipe(map(candidatures_data => {
                
                for (var i = 0; i < candidatures_data.length; i++) {
                    for(var j = 0; j < offres_datas.length; j++){
                        if(candidatures_data[i].parentPostId==offres_datas[j].id){
                            offres_data.body[j].postule = "postule";
                            break;
                        }
                    }
                }
                
                return candidatures_data;
            
            }));
            
            candidatures.subscribe();
            
        });
        
        this.totalPages = +offres_data.headers.get('X-WP-TotalPages'); // unary (+) operator casts the string to a number
        this.cache$ = of(offres_data.body);
        return offres_data.body;
        
    }));
    return this.cache$;
    
  }
   
}