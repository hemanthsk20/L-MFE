import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class EditAppService {

  constructor(private httpclient: HttpClient) { }
  editApp(Appid:any, payload: any={}) {
    console.log('payload',payload)
    return this.httpclient.post(environment.url+ environment.cmsApp+"/"+Appid, payload, {headers: {'Ocp-Apim-Subscription-Key':environment.OcpSubscriptionKey}})
  }
}
