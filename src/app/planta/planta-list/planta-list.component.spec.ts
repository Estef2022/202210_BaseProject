/* tslint:disable:no-unused-variable */
import {
  async,
  ComponentFixture,
  TestBed,
  inject,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { PlantaService } from '../planta.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { Planta } from '../planta';
import { faker } from '@faker-js/faker';
import { PlantaListComponent } from './planta-list.component';

let httpTestingController: HttpTestingController;
let plantaListComponent: PlantaListComponent;
let fixture: ComponentFixture<PlantaListComponent>;
var planta: Array<Planta> = [];
let debug: DebugElement;

describe('Service: Planta', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PlantaService],
      declarations: [PlantaListComponent]
    }).compileComponents();

    planta = [];

    fixture = TestBed.createComponent(PlantaListComponent);
    plantaListComponent = fixture.componentInstance;

    for (let i = 0; i < 3; i++) {
      planta.push(
        new Planta(
          faker.datatype.number(),
          faker.lorem.sentence(),
          faker.lorem.sentence(),
          faker.lorem.sentence(),
          faker.datatype.number(),
          faker.lorem.sentence(),
          faker.lorem.sentence()
        )
      );
    }
    plantaListComponent.plantas=planta;

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(plantaListComponent).toBeTruthy();
  });

  it('prueba mostrar 3 plantas', () => {
    expect(plantaListComponent.plantas.length).toEqual(3);
  });

});



