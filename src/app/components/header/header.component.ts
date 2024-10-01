import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private http: HttpClient, private router: Router) {}
  logout() {
    localStorage.removeItem('token')
    this.router.navigate(['/login'])
  }
}
