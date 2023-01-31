import { Component, OnInit, Input } from '@angular/core';
import { Candidature } from '../models/candidature.model';

@Component({
  selector: 'app-candidature',
  templateUrl: './candidature.component.html',
  styleUrls: ['./candidature.component.scss'],
})
export class CandidatureComponent implements OnInit {
  
  @Input() candidature!: Candidature;

  constructor() { }

  ngOnInit() {}
  
}
