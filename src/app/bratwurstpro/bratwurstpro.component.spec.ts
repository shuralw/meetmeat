import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BratwurstproComponent } from './bratwurstpro.component';

describe('BratwurstproComponent', () => {
  let component: BratwurstproComponent;
  let fixture: ComponentFixture<BratwurstproComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BratwurstproComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BratwurstproComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
