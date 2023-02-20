import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CreateCmsNewsService {

  constructor(private httpclient: HttpClient) { }
  CreateCmsNews(payload: any={}){
// debugger
console.log('payload',payload)
return this.httpclient.post(environment.url+ environment.cmsNews, payload, {headers: {'Ocp-Apim-Subscription-Key':environment.OcpSubscriptionKey}})
// return this.httpclient.post(environment.url+ environment.createApp, payload)
  }
}
