import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { debounceTime, Subject } from 'rxjs';
import { Router } from '@angular/router';

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
  data: any[] = [];
  filtros: any[] = [];
  terminoBuscador: string = '';
  pagina: number = 1;
  totalPaginas: number = 1;
  buscador: Subject<string> = new Subject();
  isSearchDisabled: boolean = false;
  isCreateDisabled: boolean = false;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
      this.getData();
      this.statusSearch();
      this.statusCreate();

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
}
