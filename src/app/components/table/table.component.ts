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
      })
      
  }

  getData() {
    this.http.get<any[]>(`${this.apiUrl}?page=${this.pagina}`)
    .subscribe(data => {
        this.data = data;
        this.totalPaginas = Math.ceil(this.data.length / 10);
      });
  }

  onSearch(term: string){
    this.buscador.next(term);
  } 

  aplicarFiltros(){
    this.filtros = this.data.filter(item =>
      this.data.some(col => item[col].toString().toLowerCase().includes(this.terminoBuscador.toLowerCase()))
    )
  }

  cambiarPagina(pagina: number){
    this.pagina = pagina;
    this.getData();
  }

  abrirFiltros(){
    
  }
}
