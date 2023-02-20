import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCompanyNewsComponent } from './create-company-news.component';

describe('CreateCompanyNewsComponent', () => {
  let component: CreateCompanyNewsComponent;
  let fixture: ComponentFixture<CreateCompanyNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCompanyNewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCompanyNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
