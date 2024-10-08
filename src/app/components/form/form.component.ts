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
  @Input() apiUrlGet!: string;
  @Input() titulos!: string[];
  @Input() campos!: {nombre: string, tipo: string, llaveForanea: boolean, opciones?: any[]}[];
  @Input() urlEntidad!: string;
  registro: any = {};

  constructor(private http: HttpClient, private router: Router){}

  ngOnInit(): void {
    this.obtenerDatosForaneos();
  }

  obtenerDatosForaneos() {
    this.campos.forEach(campo => {
      if (campo.llaveForanea && this.apiUrlGet) {
        this.http.get<any>(this.apiUrlGet).subscribe({
          next: (response) =>  {
            campo.opciones = response.data.map((item: any) => {
              return {id: item.idTipoDeEquipo, nombre: item.nombreTipoDeEquipo}
            });
          },
          error: () => {
            Swal.fire('Error', 'No se pudieron cargar las opciones para las entidades foráneas.', 'error');
          }
        });
      }
    });
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
          Swal.fire('Éxito', 'Entidad creada exitosamente', 'success').then(() => {
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
