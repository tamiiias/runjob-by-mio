import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { OffresEmploiService } from '../services/offres-emploi.service';
import { CandidaturesService } from '../services/candidatures.service';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-postuler-offre-emploi',
  templateUrl: './postuler-offre-emploi.page.html',
  styleUrls: ['./postuler-offre-emploi.page.scss'],
})
export class PostulerOffreEmploiPage implements OnInit {

  postulerOffreEmploiForm: FormGroup;
  user: any;
  offreEmploi$: Observable<any>;
  
  constructor(public formBuilder: FormBuilder,
        private offresEmploiService: OffresEmploiService,
        private candidaturesService: CandidaturesService,
        private authenticationService: AuthenticationService,
        private route: ActivatedRoute) { }

  ngOnInit() {
  
    const offreEmploiId = +this.route.snapshot.params['id'];
    
    this.offreEmploi$ = this.offresEmploiService.getOffreEmploiById(offreEmploiId);
    
    this.authenticationService.getUser()
      .then(user => {
      this.user = JSON.parse(user);
      console.info(this.user.displayname);
      this.postulerOffreEmploiForm.controls['nom'].setValue(this.user.lastname);
      this.postulerOffreEmploiForm.controls['prenom'].setValue(this.user.firstname);
      this.postulerOffreEmploiForm.controls['email'].setValue(this.user.email);
    });
    
    this.postulerOffreEmploiForm = this.formBuilder.group({
      parent_id: [offreEmploiId, [Validators.required]],
      relationship: ['offre-emploi-candidature', [Validators.required]],
      nom: [this.user, [Validators.required, Validators.minLength(2)]],
      prenom: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      telephone: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      cv: ['']
    })
  }
  
  submitForm() {
      this.candidaturesService.createCandidature(this.postulerOffreEmploiForm.value);
  }
  
  file_input_change(event) {
  
    console.info("event");
    console.info(event);
    if(event.srcElement.value != ""){
      document.getElementsByClassName('success')[0].innerHTML = event.target.files[0].name;
      document.getElementsByClassName('success')[0].classList.add('visible');
    }
    else{
      document.getElementsByClassName('success')[0].innerHTML = "";  
    }
    
    this.candidaturesService.cv_file = event.target.files[0];
    
  }

}
