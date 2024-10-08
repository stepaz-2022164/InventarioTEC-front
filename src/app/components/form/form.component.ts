import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Input() titulo!: string;
  @Input() apiUrlCreate!: string;
  @Input() apiUrlsGet!: {[key: string]: string};
  @Input() titulos!: string[];
  @Input() campos!: {nombre: string, tipo: string, llaveForanea: boolean, opciones?: any[], urlGet?: string}[];
  @Input() urlEntidad!: string;
  registro: any = {};

  constructor(private http: HttpClient, private router: Router){}

  ngOnInit(): void {
    this.obtenerDatosForaneos();
  }

  obtenerDatosForaneos() {
    this.campos.forEach(campo => {
      if (campo.llaveForanea && campo.urlGet) {
        this.http.get<any>(campo.urlGet).subscribe({
          next: (response) =>  {
            campo.opciones = response.data.map((item: any) => {
              return {id: item.id, nombre: item.nombre}
            });
          },
          error: () => {
            Swal.fire('Error', 'No se pudieron cargar las opciones para las entidades foráneas.', 'error');
          }
        });
      }
    });
  }

  volverATabla() {
    this.router.navigate([`${this.urlEntidad}`]);
  }

  guardarDatos() {
    if (this.validarFormulario()) {
      this.crearEntidad();
    } else {
      Swal.fire({
        icon: 'warning',
        title: 'Campos Incompletos',
        text: 'Por favor complete todos los campos requeridos.'
      });
    }
  }

  validarFormulario(): boolean {
    return this.campos.every(campo => this.registro[campo.nombre] !== undefined && this.registro[campo.nombre] !== '');
  }

  crearEntidad() {
    this.http.post(this.apiUrlCreate, this.registro)
      .subscribe({
        next: () => {
          Swal.fire('Éxito', 'Registro creado exitosamente', 'success').then(() => {
            this.router.navigate([`${this.urlEntidad}`])
          });
        },
        error: () => {
          Swal.fire('Error', 'Ocurrió un problema al crear la entidad.', 'error');
        }
      });
  }

  resetearFormulario() {
    this.registro = {};
  }
}
