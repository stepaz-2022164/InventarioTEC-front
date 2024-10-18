import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { enviroment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  private API_URL = enviroment.API_URL;

  title = 'Login';
  usuario: string = '';
  pass: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  login() {
    if (this.usuario === '' || this.pass === '') {
      Swal.fire({
        icon: 'warning',
        title: 'Campos Incompletos',
        text: 'Por favor ingrese todos los campos'
      });
      return;
    }

    this.http.post<any>(`${this.API_URL}/api/Usuario/login`, {usuario: this.usuario, pass: this.pass})
    .subscribe(
      res => {
        localStorage.setItem('token', res.token);
        Swal.fire({
          icon: 'success',
          title: 'Inicio de sesión exitoso',
          text: 'Bienvenido al sistema'
        }).then(() => {
          this.router.navigate(['/home'])
        });
      },
      err => {
        Swal.fire({
          icon: 'error',
          title: 'Error de autenticación',
          text: 'Usuario o contraseña incorrectos'
        });
      }
    );
  }
}
