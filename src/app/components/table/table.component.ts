import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { debounceTime, Subject } from 'rxjs';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import * as jQuery from 'jquery';
declare var $: any;

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() entidad!: string;
  @Input() apiUrl!: string;
  @Input() apirUrlGetByName!: string;
  @Input() columnas!: string[];
  @Input() nombreColumnas!: string[];
  @Input() apirUrlCreate!: string;
  @Input() apirUrlDelete!: string;
  @Input() apiUrlUpdate!: string;
  @Input() camposActualizables!: string[];

  data: any[] = [];
  filtros: any[] = [];
  terminoBuscador: string = '';
  pagina: number = 1;
  totalPaginas: number = 1;
  buscador: Subject<string> = new Subject();
  isSearchDisabled: boolean = false;
  isCreateDisabled: boolean = false;
  isDeleteDisabled: boolean = false;
  isUpdateDisabled: boolean = false;
  registroSeleccionado: any = {};

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
      this.getData();
      this.statusSearch();
      this.statusCreate();
      this.statusDelete();
      this.statusUpdate()
      this.buscador.pipe(debounceTime(500)).subscribe(terminoBuscador => {
        this.terminoBuscador = terminoBuscador;
        this.getData();
      })
  }

  statusSearch() {
    if (this.apirUrlGetByName.length == 0) {
      this.isSearchDisabled = true;
    }
  }

  statusCreate() {
    if (this.apirUrlCreate == null) {
      this.isCreateDisabled = true;
    }
  }

  statusDelete() {
    if (this.apirUrlDelete == null) {
      this.isDeleteDisabled = true;
    }
  }

  statusUpdate() {
    if (this.apiUrlUpdate == null) {
      this.isUpdateDisabled = true;
    }
  }

  getData() {
    if (this.terminoBuscador) {
      this.http.get<any>(`${this.apirUrlGetByName}${this.terminoBuscador}`)
      .subscribe(response => {
        this.data = response; 
        this.totalPaginas = Math.ceil(this.data.length / 10);
        this.aplicarFiltros();
      }, error => {
        this.data = [];
        this.totalPaginas = 1;
        this.filtros = [];
      });
    } else {
      this.http.get<any>(`${this.apiUrl}?pagina=${this.pagina}&numeroPaginas=10`)
      .subscribe(response => {
        this.data = response.data;
        const totalRecords = response.totalRecords;
        this.totalPaginas = Math.ceil(totalRecords / 10); 
        this.filtros = [...this.data];
      });
    }
  }
  
  getPaginasArray(): number[] {
    return Array.from({ length: this.totalPaginas }, (_, i) => i + 1);
  }
  

  onSearch(term: string){
    this.buscador.next(term);
  } 

  aplicarFiltros() {
    if (this.terminoBuscador) {
      this.filtros = this.data.filter(item =>
        this.columnas.some(col => item[col]?.toString().toLowerCase().includes(this.terminoBuscador.toLowerCase()))
      );
    } else {
      this.filtros = [...this.data];
    }
  }
  
  cambiarPagina(pagina: number){
    this.pagina = pagina;
    this.getData();
  }

  abrirFiltros(){
    
  }

  crearEntidad(){
    this.router.navigate([this.apirUrlCreate])
  }

  eliminar(indexFila: number) {  
    const id = this.filtros[indexFila][this.columnas[0]];

    Swal.fire({
      title: '¿Estás seguro?',
      text: "¡No podrás revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.http.put(`${this.apirUrlDelete}${id}`, {}).subscribe({
          next: (response) => {
            Swal.fire('¡Eliminado!', 'El registro ha sido eliminado.', 'success')
            .then(() => {
              window.location.reload(); 
            });
          },
          error: (error) => {
            console.error('Error al eliminar el registro', error);
            Swal.fire('Error', 'Ocurrió un problema al eliminar el registro.', 'error');
          }
        });
      }
    });
  }

  
  abriModalUpdate(indexFila: number){
    const registro = this.filtros[indexFila];
    this.registroSeleccionado = {...registro};
    $('#modalUpdate').modal('show');
  }

  
  actualizar(){
    const id = this.registroSeleccionado[this.columnas[0]];

    if (this.registroSeleccionado == '') {
      Swal.fire({
        icon: 'warning',
        title: 'Campos Incompletos',
        text: 'Por favor llene todos los campos'
      });
      return;
    }
    this.http.put(`${this.apiUrlUpdate}${id}`, this.registroSeleccionado)
    .subscribe({
      next: (response) => {
        Swal.fire('Actualizado!', 'Registro actualizado exitosamente', 'success')
        .then(() => {
          $('#modalUpdate').modal('hide');
          window.location.reload();
        });
      },
      error: (error) => {
        console.error('Error al actualizar el registro', error);
        Swal.fire('Error', 'Ocurrió un problema al actualizar el registro.', 'error');
      }
    })
  }
    
  getNombreColumna(campo: string): string {
    const index = this.columnas.indexOf(campo);
    return index !== -1 ? this.nombreColumnas[index] : campo;
  }
  
}
