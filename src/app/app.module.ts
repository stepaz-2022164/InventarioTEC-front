import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { TokenInterceptor } from "./services/token.interceptor";
import { JwtModule } from "@auth0/angular-jwt";
import { NgModule } from "@angular/core";
import { LoginComponent } from './components/login/login.component';
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "./app-routing.module";
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';

export const getToken = () => {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    LoginComponent,
    AppComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: getToken,
        allowedDomains: ['localhost:5290'],
        disallowedRoutes: ['localhost:5290/api/login']
      }
    })
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}