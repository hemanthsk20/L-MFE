import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiebherrMenuComponent } from './liebherr-menu.component';

describe('LiebherrMenuComponent', () => {
  let component: LiebherrMenuComponent;
  let fixture: ComponentFixture<LiebherrMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiebherrMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LiebherrMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
