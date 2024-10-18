import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { JwtHelperService } from "@auth0/angular-jwt";
import { Observable } from "rxjs";
import { Router } from '@angular/router';
import { enviroment } from "src/environments/environment";

@Injectable({
    providedIn: "root"
})
export class AuthService {
    private API_URL = enviroment.API_URL;

    constructor(private http: HttpClient, private jwtHelper: JwtHelperService) {}

    login(credenciales: {usuario: string, pass: string}): Observable<any> {
        return this.http.post(`${this.API_URL}/api/login`, credenciales)
    }

    isAuthenticated(): boolean {
        const token = localStorage.getItem('token');
        return token ? !this.jwtHelper.isTokenExpired(token): false;
    }
}