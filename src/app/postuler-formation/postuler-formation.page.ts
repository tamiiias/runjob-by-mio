import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { FormationsService } from '../services/formations.service';
import { CandidaturesService } from '../services/candidatures.service';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-postuler-formation',
  templateUrl: './postuler-formation.page.html',
  styleUrls: ['./postuler-formation.page.scss'],
})
export class PostulerFormationPage implements OnInit {

  postulerFormationForm: FormGroup;
  user: any;
  formation$: Observable<any>;
  
  constructor(public formBuilder: FormBuilder,
            private formationsService: FormationsService,
            private candidaturesService: CandidaturesService,
            private authenticationService: AuthenticationService,
            private route: ActivatedRoute) { }

  ngOnInit() {
  
    const formationId = +this.route.snapshot.params['id'];
    
    this.formation$ = this.formationsService.getFormationById(formationId);
    
    this.authenticationService.getUser()
      .then(user => {
      this.user = JSON.parse(user);
      console.info(this.user.displayname);
      this.postulerFormationForm.controls['nom'].setValue(this.user.lastname);
      this.postulerFormationForm.controls['prenom'].setValue(this.user.firstname);
      this.postulerFormationForm.controls['email'].setValue(this.user.email);
    });
    
    this.postulerFormationForm = this.formBuilder.group({
      parent_id: [formationId, [Validators.required]],
      relationship: ['formation-candidature', [Validators.required]],
      nom: [this.user, [Validators.required, Validators.minLength(2)]],
      prenom: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      telephone: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]
    })
  }
  
  submitForm() {
      this.candidaturesService.createCandidature(this.postulerFormationForm.value);
  }

}
