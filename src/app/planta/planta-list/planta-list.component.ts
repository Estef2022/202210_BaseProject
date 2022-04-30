import { Component, OnInit } from '@angular/core';
import { map, Subscriber } from 'rxjs';
import { Planta } from '../planta';
import { PlantaService } from '../planta.service';
import { observable } from 'rxjs';
import { getInterpolationArgsLength } from '@angular/compiler/src/render3/view/util';

@Component({
  selector: 'app-planta-list',
  templateUrl: './planta-list.component.html',
  styleUrls: ['./planta-list.component.css'],
})
export class PlantaListComponent implements OnInit {
  length(length: any) {
    throw new Error('Method not implemented.');
  }
  leght(leght: any) {
    throw new Error('Method not implemented.');
  }
  plantas: Array<Planta> = [];

  interior: number=0;
  exterior: number=0;
  constructor(private plantaService: PlantaService) {}

  ngOnInit() {
    this.getPlantas();

}

  getPlantas(): void {
    this.plantaService.getPlantas().subscribe((plantas: any) =>
    { this.plantas = plantas;
      console.log("Traer plantas: ", this.plantas);
      this.interior = this.plantas.filter(planta => planta.tipo== "Interior").length;
      console.log("Total plantas de interior: ", this.interior);
      this.exterior = this.plantas.filter(planta => planta.tipo== "Exterior").length;
      console.log("Total plantas de exterior: ", this.exterior)
    });
  }}


