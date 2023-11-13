import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedecinCreateComponent } from './medecin-create.component';

describe('MedecinCreateComponent', () => {
  let component: MedecinCreateComponent;
  let fixture: ComponentFixture<MedecinCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MedecinCreateComponent]
    });
    fixture = TestBed.createComponent(MedecinCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
