import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { PuestoEmpleadoComponent } from './components/gestor-empleados/puesto-empleado/puesto-empleado.component';

const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: '', redirectTo: '/login', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'puestoEmpleado', component: PuestoEmpleadoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
