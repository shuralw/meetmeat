import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { BratwurstproComponent } from './bratwurstpro/bratwurstpro.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { StartComponent } from './start/start.component';
import { UeberunsComponent } from './ueberuns/ueberuns.component';

const routes: Routes = [
  { path: 'Start', component: StartComponent },
  { path: 'UeberUns', component: UeberunsComponent },
  { path: 'Bratwurst-Pro', component: BratwurstproComponent },
  { path: 'Impressum', component: ImpressumComponent },
  { path: '',   redirectTo: '/Start', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
