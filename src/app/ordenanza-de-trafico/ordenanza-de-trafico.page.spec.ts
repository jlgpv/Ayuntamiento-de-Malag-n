import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrdenanzaDeTraficoPage } from './ordenanza-de-trafico.page';
import { async } from '@angular/core/testing';

describe('OrdenanzaDeTraficoPage', () => {
  let component: OrdenanzaDeTraficoPage;
  let fixture: ComponentFixture<OrdenanzaDeTraficoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(OrdenanzaDeTraficoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
