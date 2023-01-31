import { Injectable, OnInit } from '@angular/core';
import { SecteurActivite } from '../models/secteur-activite.model';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { shareReplay, map } from 'rxjs/operators';
import { AuthenticationService } from '../services/authentication.service';
import { AlertController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})


export class SecteursActiviteService {
  
  private cache$: Observable<any>;
  user: any;
  secteurActivite: Observable<any>;
  //loading: any;
  
  constructor(private http: HttpClient,
    private authenticationService: AuthenticationService,
    public alertController: AlertController,
    public loadingController: LoadingController,
    public router: Router){}
    
  get secteursActivite() {
    if (!this.cache$) {
        this.cache$ = this.http.get(environment.wordpress.api_url+'secteur-activite?_embed');
    }
    return this.cache$;
  }
  
  getSecteurActiviteById(secteurActiviteID: number): Observable<SecteurActivite>{
    return this.secteursActivite.pipe(map(secteursActivite => {
        for (var key in secteursActivite) {
            // skip loop if the property is from prototype
            if (!secteursActivite.hasOwnProperty(key)) continue;

            var obj = secteursActivite[key];
            if(obj.id==secteurActiviteID){
                return obj;
            }
        }
    }));
  }
  
  
}
