import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class DeleteAppService {
  constructor(private httpclient: HttpClient) { }
  deleteAppById(appId: any) {
    return this.httpclient.delete(environment.url+ environment.cmsApp+"/"+appId, {headers: {'Ocp-Apim-Subscription-Key':environment.OcpSubscriptionKey}})
  }
}
