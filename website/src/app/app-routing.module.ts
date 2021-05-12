import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GalleriaComponent } from './galleria/galleria.component';
import { ContattiComponent } from './contatti/contatti.component';
import { OrariComponent } from './orari/orari.component';
import { LuogoComponent } from './luogo/luogo.component';

const routes: Routes = [
  { path: 'doveSiamo', component: LuogoComponent },
  { path: 'orari', component: OrariComponent },
  { path: 'contatti', component: ContattiComponent },
  { path: 'galleria', component: GalleriaComponent },
  { path: 'home', component: HomeComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
