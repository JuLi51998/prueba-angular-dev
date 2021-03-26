import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvisosTablaComponent } from './avisos-tabla.component';

describe('AvisosTablaComponent', () => {
  let component: AvisosTablaComponent;
  let fixture: ComponentFixture<AvisosTablaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvisosTablaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvisosTablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
