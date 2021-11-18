import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetPreselectionnerComponent } from './projet-preselectionner.component';

describe('ProjetPreselectionnerComponent', () => {
  let component: ProjetPreselectionnerComponent;
  let fixture: ComponentFixture<ProjetPreselectionnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjetPreselectionnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetPreselectionnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
