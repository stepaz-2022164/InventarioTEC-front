import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { PuestoEmpleadoComponent } from './components/gestor-empleados/puesto-empleado/puesto-empleado.component';
import { AreaEmpleadosComponent } from './components/gestor-empleados/area-empleados/area-empleados.component';
import { PaisComponent } from './components/operativo/pais/pais.component';

const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: '', redirectTo: '/login', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'puestoEmpleado', component: PuestoEmpleadoComponent},
    {path: 'areaEmpleado', component: AreaEmpleadosComponent},
    {path: 'paises', component: PaisComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
