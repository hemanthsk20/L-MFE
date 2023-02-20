import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EditTextService {

  constructor(private httpclient: HttpClient) { }
  editTexts(textid:any, payload: any={}) {
    console.log('payload',payload)
    return this.httpclient.post(environment.url+ environment.text+"/"+textid, payload, {headers: {'Ocp-Apim-Subscription-Key':environment.OcpSubscriptionKey}})
  }
}
