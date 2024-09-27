import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { TokenInterceptor } from "./services/token.interceptor";
import { JwtModule } from "@auth0/angular-jwt";
import { NgModule } from "@angular/core";
import { LoginComponent } from './components/login/login.component';

export const getToken = () => {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    HttpClientModule,
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
  bootstrap: [LoginComponent]
})
export class AppModule {}