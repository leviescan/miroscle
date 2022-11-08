import { NosotrosComponent } from './nosotros/nosotros.component';
import { ResultadosComponent } from './resultados/resultados.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path:'', component:HomeComponent},
  { path:'resultados', component:ResultadosComponent},
  { path:'nosotros', component:NosotrosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
