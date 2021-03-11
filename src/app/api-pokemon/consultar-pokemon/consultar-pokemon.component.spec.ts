import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarPokemonComponent } from './consultar-pokemon.component';

describe('ConsultarPokemonComponent', () => {
  let component: ConsultarPokemonComponent;
  let fixture: ComponentFixture<ConsultarPokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultarPokemonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
