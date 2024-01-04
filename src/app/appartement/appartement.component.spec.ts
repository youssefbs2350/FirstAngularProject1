import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppartmentsComponent} from './appartement.component';

describe('AppartementComponent', () => {
  let component: AppartmentsComponent;
  let fixture: ComponentFixture<AppartmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppartmentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppartmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
