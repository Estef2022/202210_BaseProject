import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlantaListComponent } from './planta-list/planta-list.component';
import { PlantaComponent } from './planta.component';


@NgModule({
  imports: [
    CommonModule
  ],
  exports: [PlantaListComponent],
  declarations: [PlantaListComponent]
})
export class PlantaModule { }
