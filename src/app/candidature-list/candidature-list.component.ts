import { Component, OnInit } from '@angular/core';
import { Candidature } from '../models/candidature.model';
import { CandidaturesService } from '../services/candidatures.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-candidature-list',
  templateUrl: './candidature-list.component.html',
  styleUrls: ['./candidature-list.component.scss'],
})

export class CandidatureListComponent implements OnInit {

  candidatures$: Observable<Array<Candidature>>;
  
  constructor(
    private candidaturesService: CandidaturesService
  ) {}
  
  ngOnInit(): void {
    this.candidatures$ = this.candidaturesService.candidatures;
  }

}

