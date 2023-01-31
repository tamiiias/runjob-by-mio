import { Injectable, OnInit } from '@angular/core';
import { Formation } from '../models/formation.model';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { isEmpty } from 'rxjs/operators';
import { shareReplay, map, tap } from 'rxjs/operators';
import { AuthenticationService } from '../services/authentication.service';
import { CandidaturesService } from '../services/candidatures.service';
import { AlertController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})


export class FormationsService {
  
  cache$: Observable<any>;
  user: any;
  formation: Observable<any>;
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
    
  get formations() {
    
    console.info('inside get formations');
    
    var get_formation_url = environment.wordpress.api_url+'formation?_embed';
    
    if(this.secteur != '' && !this.secteur.includes('tous')){
        get_formation_url += "&secteur-activite=" + this.secteur;
    }
    
    
    if ( !this.cache$ ) {
        
        this.cache$ = this.http.get<any[]>(get_formation_url, {observe: 'response'}).pipe(map(data => {
            console.info('http 1');
            this.totalPages = +data.headers.get('X-WP-TotalPages'); // unary (+) operator casts the string to a number
            this.cache$ = of(this.process(data.body));
            return data.body;
        }));
    }
    return this.cache$;
    
  }
  
  process(data: any){
    data.forEach((item: any) => {
        item._embedded['wp:term'].forEach((wp_term: any) => {
            if(typeof wp_term['0'] !== "undefined" && wp_term['0'].taxonomy == "partenaire"){
                item.partenaire = wp_term['0'].name;
                if(wp_term['0']["toolset-meta"]["details-partenaires"]["logo"]["raw"] !== ""){
                    item.image = wp_term['0']["toolset-meta"]["details-partenaires"]["logo"]["raw"];
                }
            }
        });
        
    });
    return data;
        
  }
  
  getMorePosts() {
        console.info('ok inside getMorePosts');
        this.page++;
        var get_formation_url = environment.wordpress.api_url+'formation?_embed';
        if(this.secteur != '' && !this.secteur.includes('tous')){
            get_formation_url += "&secteur-activite=" + this.secteur;
        }
        
        
        return this.http.get<any[]>(get_formation_url + '&page=' + this.page, {observe: 'response'}).pipe(map(formations_data => {
            
            console.info('http 2');    
            var formations_datas = formations_data.body;
            
            this.authenticationService.getUser().then(user => {
                this.user = JSON.parse(user);
                var get_candidatures_url =  environment.wordpress.api_url + 'candidature?author=' + this.user.user_id; 

                var candidatures = this.candidaturesService.getCandidatures().pipe(map(candidatures_data => {

                    for (var i = 0; i < candidatures_data.length; i++) {
                        for(var j = 0; j < formations_datas.length; j++){
                            if(candidatures_data[i].parentPostId==formations_datas[j].id){
                                formations_data.body[j].postule = "postule";
                                break;
                            }
                        }
                    }

                    return candidatures_data;

                }));

                candidatures.subscribe();

            });
            
            return this.processPostData(formations_data)
        }));
  }
  
  // A place for post-processing, before making the fetched data available to view.
  processPostData(resp: HttpResponse<any[]>) {
        
        this.totalPages = +resp.headers.get('X-WP-TotalPages'); // unary (+) operator casts the string to a number
        
        //Add new item in resp.body
        this.process(resp.body).forEach((item: any) => {
            
            //Add element to cache$
            this.cache$.subscribe(array=> array.push(item));
            
        });
        
        
        return this.cache$;
  }
  
  hasMorePosts() {
        //N.B : added the -1 here to fix a bug where the loading lines didn't show before the last load of infinitescroll
        //It causes a js error at the end on the infinitescroll because it believe there is still another load.
        return this.page - 1 < this.totalPages;
  }
  
  getFormationById(formationID: number): Observable<Formation>{
    var get_formation_by_id_url = environment.wordpress.api_url + 'formation?_embed&include[]=' + formationID;
    
    var formation$ = this.http.get<Formation>(get_formation_by_id_url, {observe: 'response'}).pipe(map(data => {
        
        console.info('http 3');
        var to_return = this.process(data.body);
        //return data.body[0];
        
        
        var candidatures = this.candidaturesService.getCandidatures().pipe(map(candidatures_data => {
                
            for (var i = 0; i < candidatures_data.length; i++) {   
                if(candidatures_data[i].parentPostId == data.body[0].id){
                    to_return[0].postule = "postule";
                    break;
                }
            }

            return candidatures_data;

        }));

        candidatures.subscribe();
        
        return to_return[0];
    }));
    
    return formation$;
  }
  
  getFormationBySecteur(secteurActiviteArray: []): Observable<Formation[]>{
    
    
    console.info('inside get formationbysecteur');
    
    this.secteur = '';
    for(var key_secteur in secteurActiviteArray){
        if(this.secteur==''){
            this.secteur = secteurActiviteArray[key_secteur];
        } else {
            this.secteur += ',' + secteurActiviteArray[key_secteur];
        }
    }
    this.cache$ = of([]);
    //this.page = 1;
    var get_formation_url = environment.wordpress.api_url+'formation?_embed';
    if(this.secteur != '' && !this.secteur.includes('tous')){
        get_formation_url += "&secteur-activite=" + this.secteur;
    }
    
    console.info('http 4 before');
    this.cache$ = this.http.get<any[]>(get_formation_url+ '&page=' + this.page, {observe: 'response'}).pipe(map(formations_data => {
        
        
        console.info('http 4');
        console.info(formations_data);
        
        var formations_datas = formations_data.body;
        
        this.authenticationService.getUser().then(user => {
            this.user = JSON.parse(user);
            var get_candidatures_url =  environment.wordpress.api_url + 'candidature?author=' + this.user.user_id; 
            
            var candidatures = this.candidaturesService.getCandidatures().pipe(map(candidatures_data => {
                
                for (var i = 0; i < candidatures_data.length; i++) {
                    for(var j = 0; j < formations_datas.length; j++){
                        if(candidatures_data[i].parentPostId==formations_datas[j].id){
                            formations_data.body[j].postule = "postule";
                            break;
                        }
                    }
                }
                
                return candidatures_data;
            
            }));
            
            candidatures.subscribe();
            
        });
        
        this.totalPages = +formations_data.headers.get('X-WP-TotalPages'); // unary (+) operator casts the string to a number
        this.cache$ = of(this.process(formations_data.body));
        
        
        
        return formations_data.body;
    }));
    console.info('before return this.cache$')
    return this.cache$;
    
  }
   
}