import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { PuestoEmpleadoComponent } from './components/gestor-empleados/puesto-empleado/puesto-empleado.component';
import { AreaEmpleadosComponent } from './components/gestor-empleados/area-empleados/area-empleados.component';
import { PaisComponent } from './components/operativo/pais/pais.component';
import { RegionComponent } from './components/operativo/region/region.component';
import { HubComponent } from './components/operativo/hub/hub.component';
import { SedeComponent } from './components/operativo/sede/sede.component';
import { DepartamentoEmpleadoComponent } from './components/gestor-empleados/departamento-empleado/departamento-empleado.component';
import { EmpleadoComponent } from './components/gestor-empleados/empleado/empleado.component';
import { EquipoComponent } from './components/gestor-equipos/equipo/equipo.component';
import { MarcaComponent } from './components/gestor-equipos/marca/marca.component';
import { TipoEquipoComponent } from './components/gestor-equipos/tipo-equipo/tipo-equipo.component';
import { PropietarioEquipoComponent } from './components/gestor-equipos/propietario-equipo/propietario-equipo.component';
import { ReporteEquipoComponent } from './components/gestor-equipos/reporte-equipo/reporte-equipo.component';
import { FormEquipoComponent } from './components/gestor-equipos/equipo/form-equipo/form-equipo.component';

const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: '', redirectTo: '/login', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'puestoEmpleado', component: PuestoEmpleadoComponent},
    {path: 'areaEmpleado', component: AreaEmpleadosComponent},
    {path: 'paises', component: PaisComponent},
    {path: 'region', component: RegionComponent},
    {path: 'hub', component: HubComponent},
    {path: 'sede', component: SedeComponent},
    {path: 'departamentoEmpleado', component: DepartamentoEmpleadoComponent},
    {path: 'empleado', component: EmpleadoComponent},
    {path: 'equipo', component: EquipoComponent},
    {path: 'marca', component: MarcaComponent},
    {path: 'tipoDeEquipo', component: TipoEquipoComponent},
    {path: 'propietarioEquipo', component: PropietarioEquipoComponent},
    {path: 'reporteEquipo', component: ReporteEquipoComponent},
    {path: 'createEquipo', component: FormEquipoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
