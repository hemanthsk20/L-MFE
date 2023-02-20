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
// @Injectable()
// export class HTTPInterceptor implements HttpInterceptor {
//     intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//         console.log(req);
//         const httpRequest = new HttpRequest(<any>req.method, environment.url + environment.createApp);
//         req = Object.assign(req, httpRequest);
//         if (req.url === environment.url) {
//             // return Observable.empty();
//             console.log('hello');
//         }
//         const dupReq = req.clone({
//             headers: req.headers.set('Ocp-Apim-Subscription-Key', environment.OcpSubscriptionKey),
//         });
//         return next.handle(dupReq);
//       }
//     }