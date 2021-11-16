import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetByThematiqueComponent } from './projet-by-thematique.component';

describe('ProjetByThematiqueComponent', () => {
  let component: ProjetByThematiqueComponent;
  let fixture: ComponentFixture<ProjetByThematiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjetByThematiqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetByThematiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
