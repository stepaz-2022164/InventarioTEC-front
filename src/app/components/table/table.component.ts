import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { debounceTime, Subject } from 'rxjs';

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
  data: any[] = [];
  filtros: any[] = [];
  terminoBuscador: string = '';
  pagina: number = 1;
  totalPaginas: number = 1;
  buscador: Subject<string> = new Subject();

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
      this.getData();

      this.buscador.pipe(debounceTime(500)).subscribe(terminoBuscador => {
        this.terminoBuscador = terminoBuscador;
        this.getData();
      })
      
  }

  getData() {
    if (this.terminoBuscador) {
      // Enviar la búsqueda por nombre
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
      // Enviar la solicitud con paginación cuando no hay término de búsqueda
      this.http.get<any>(`${this.apiUrl}?pagina=${this.pagina}&numeroPaginas=10`)
      .subscribe(response => {
        this.data = response.data;
        console.log(response.data)
        const totalRecords = response.totalRecords;
        this.totalPaginas = Math.ceil(totalRecords / 10);  // Actualizar el número de páginas
        this.aplicarFiltros();
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
    this.filtros = this.data.filter(item =>
      this.columnas.some(col => item[col]?.toString().toLowerCase().includes(this.terminoBuscador.toLowerCase()))
    );
  }
  
  cambiarPagina(pagina: number){
    console.log(`Cambiando a la página: ${pagina}`);
    this.pagina = pagina;
    this.getData();
  }

  abrirFiltros(){
    
  }
}
