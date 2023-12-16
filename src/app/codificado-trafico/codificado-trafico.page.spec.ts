import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CodificadoTraficoPage } from './codificado-trafico.page';
import { async } from '@angular/core/testing';

describe('codificado-traficoPage', () => {
  let component: CodificadoTraficoPage;
  let fixture: ComponentFixture<CodificadoTraficoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CodificadoTraficoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
