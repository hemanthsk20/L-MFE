import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class EditNewsService {

  constructor(private httpclient: HttpClient) { }
  editNews(newsid:any, payload: any={}) {
    console.log('payload',payload)
    return this.httpclient.post(environment.url+ environment.news+"/"+newsid, payload, {headers: {'Ocp-Apim-Subscription-Key':environment.OcpSubscriptionKey}})
  }
}
// https://myguideapilayer.azure-api.net/mobileAppcms/private/appNews/{newsID}