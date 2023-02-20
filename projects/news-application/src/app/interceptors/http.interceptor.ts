import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpClient
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Injectable()
export class HTTPInterceptor implements HttpInterceptor {

  constructor(private router: Router, private httpClient: HttpClient) { }
  /**
    * This function is altering each http request and add the Bearer token to each request
    * @param request 
    * @param next 
    * @returns 
    */
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const OCP_KEY = environment.OcpSubscriptionKey
    // request = request.clone({ url: environment.url});

    request = request.clone({setHeaders: {'Ocp-Apim-Subscription-Key': `${OCP_KEY}`}});

    return next
      .handle(request)
      .pipe(catchError((x) => this.handleAuthError(x)));
  }

  private handleAuthError(err: any): Observable<any> {
    if (err.status === 401 || err.status === 403) {
      return throwError(err);
    } else {
      return throwError(err);
    }
  }
}