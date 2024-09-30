import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { JwtHelperService } from "@auth0/angular-jwt";
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class AuthService {
    private apiUrl = "http://localhost:5290/api";

    constructor(private http: HttpClient, private jwtHelper: JwtHelperService) {}

    login(credenciales: {usuario: string, pass: string}): Observable<any> {
        return this.http.post(`${this.apiUrl}/login`, credenciales)
    }

    isAuthenticated(): boolean {
        const token = localStorage.getItem('token');
        return token ? !this.jwtHelper.isTokenExpired(token): false;
    }

    logout() {
        localStorage.removeItem('token');
    }
}