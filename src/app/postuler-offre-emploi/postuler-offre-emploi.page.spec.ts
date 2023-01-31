import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PostulerOffreEmploiPage } from './postuler-offre-emploi.page';

describe('PostulerOffreEmploiPage', () => {
  let component: PostulerOffreEmploiPage;
  let fixture: ComponentFixture<PostulerOffreEmploiPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PostulerOffreEmploiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PostulerOffreEmploiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
