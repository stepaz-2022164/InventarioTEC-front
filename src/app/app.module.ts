import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { TokenInterceptor } from "./services/token.interceptor";
import { JwtModule } from "@auth0/angular-jwt";
import { NgModule } from "@angular/core";
import { LoginComponent } from './components/login/login.component';
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "./app-routing.module";
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { TableComponent } from './components/table/table.component';
import { PuestoEmpleadoComponent } from './components/gestor-empleados/puesto-empleado/puesto-empleado.component';
import { AreaEmpleadosComponent } from './components/gestor-empleados/area-empleados/area-empleados.component';
import { PaisComponent } from './components/operativo/pais/pais.component';
import { RegionComponent } from './components/operativo/region/region.component';
import { HubComponent } from './components/operativo/hub/hub.component';
import { SedeComponent } from './components/operativo/sede/sede.component';
import { EmpleadoComponent } from './components/gestor-empleados/empleado/empleado.component';
import { DepartamentoEmpleadoComponent } from './components/gestor-empleados/departamento-empleado/departamento-empleado.component';
import { EquipoComponent } from './components/gestor-equipos/equipo/equipo.component';
import { MarcaComponent } from './components/gestor-equipos/marca/marca.component';
import { PropietarioEquipoComponent } from './components/gestor-equipos/propietario-equipo/propietario-equipo.component';
import { ReporteEquipoComponent } from './components/gestor-equipos/reporte-equipo/reporte-equipo.component';
import { TipoEquipoComponent } from './components/gestor-equipos/tipo-equipo/tipo-equipo.component';
import { FormComponent } from './components/form/form.component';
import { FormEquipoComponent } from './components/gestor-equipos/equipo/form-equipo/form-equipo.component';
import { FormEmpleadoComponent } from './components/gestor-empleados/empleado/form-empleado/form-empleado.component';
import { FormSedeComponent } from './components/operativo/sede/form-sede/form-sede.component';
import { FormPuestoEmpleadoComponent } from './components/gestor-empleados/puesto-empleado/form-puesto-empleado/form-puesto-empleado.component';
import { FormMarcaComponent } from './components/gestor-equipos/marca/form-marca/form-marca.component';
import { FormTipoEquipoComponent } from './components/gestor-equipos/tipo-equipo/form-tipo-equipo/form-tipo-equipo.component';
import { FormPropietarioEquipoComponent } from './components/gestor-equipos/propietario-equipo/form-propietario-equipo/form-propietario-equipo.component';
import { FormReporteEquipoComponent } from './components/gestor-equipos/reporte-equipo/form-reporte-equipo/form-reporte-equipo.component';

export const getToken = () => {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    LoginComponent,
    AppComponent,
    HeaderComponent,
    HomeComponent,
    TableComponent,
    PuestoEmpleadoComponent,
    AreaEmpleadosComponent,
    PaisComponent,
    RegionComponent,
    HubComponent,
    SedeComponent,
    EmpleadoComponent,
    DepartamentoEmpleadoComponent,
    EquipoComponent,
    MarcaComponent,
    PropietarioEquipoComponent,
    ReporteEquipoComponent,
    TipoEquipoComponent,
    FormComponent,
    FormEquipoComponent,
    FormEmpleadoComponent,
    FormSedeComponent,
    FormPuestoEmpleadoComponent,
    FormMarcaComponent,
    FormTipoEquipoComponent,
    FormPropietarioEquipoComponent,
    FormReporteEquipoComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: getToken,
        allowedDomains: ['localhost:5290'],
        disallowedRoutes: ['localhost:5290/api/login']
      }
    })
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}