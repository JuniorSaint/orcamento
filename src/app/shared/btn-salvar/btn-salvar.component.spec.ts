import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnSalvarComponent } from './btn-salvar.component';

describe('BtnSalvarComponent', () => {
  let component: BtnSalvarComponent;
  let fixture: ComponentFixture<BtnSalvarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnSalvarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnSalvarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
