import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
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

    this.http.post<any>('http://localhost:5290/api/Usuario/login', {usuario: this.usuario, pass: this.pass})
    .subscribe(
      res => {
        localStorage.setItem('token', res.token);
        Swal.fire({
          icon: 'success',
          title: 'Inicio de sesión exitoso',
          text: 'Bienvenido al sistema'
        }).then(() => {
          this.router.navigate([''])
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
