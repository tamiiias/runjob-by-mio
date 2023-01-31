import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SingleOffreEmploiPage } from './single-offre-emploi.page';

describe('SingleOffreEmploiPage', () => {
  let component: SingleOffreEmploiPage;
  let fixture: ComponentFixture<SingleOffreEmploiPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleOffreEmploiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SingleOffreEmploiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
