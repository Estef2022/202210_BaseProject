import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlantaListComponent } from './planta/planta-list/planta-list.component';
import { APP_BASE_HREF } from '@angular/common';

const routes: Routes = [
  { path: 'plantas', component: PlantaListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{provide: APP_BASE_HREF, useValue : '/' }]
})
export class AppRoutingModule { }
