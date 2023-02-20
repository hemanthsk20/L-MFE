import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})
export class CreateNewsService {

  constructor(private httpclient: HttpClient) { }
  CreateNews(payload: any={}) {
    httpOptions.headers.append('Access-Control-Allow-Origin', 'http://localhost:5000');
    httpOptions.headers.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    httpOptions.headers.append('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    httpOptions.headers.append('Access-Control-Allow-Credentials', 'true');
    // debugger
    console.log('payload',payload)
    return this.httpclient.post(environment.url+ environment.news, payload, {headers: {'Ocp-Apim-Subscription-Key':environment.OcpSubscriptionKey}})
    // return this.httpclient.post(environment.url+ environment.createApp, payload)
  }
}
