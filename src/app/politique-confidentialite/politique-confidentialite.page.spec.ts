import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PolitiqueConfidentialitePage } from './politique-confidentialite.page';

describe('PolitiqueConfidentialitePage', () => {
  let component: PolitiqueConfidentialitePage;
  let fixture: ComponentFixture<PolitiqueConfidentialitePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PolitiqueConfidentialitePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PolitiqueConfidentialitePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
