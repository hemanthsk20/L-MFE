import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class GetNewsService {
  pageSize: any = 3;
  pageNo: any = 1;
  constructor(private httpclient: HttpClient) { }
  getNews() {
    return this.httpclient.get(environment.url+ environment.news+"/"+this.pageSize+"/"+this.pageNo, {headers: {'Ocp-Apim-Subscription-Key':environment.OcpSubscriptionKey}})
  }
  getNewsByAppId(appid: string){
    return this.httpclient.get(environment.url+ environment.news+"/"+appid+"/"+this.pageSize+"/"+this.pageNo, {headers: {'Ocp-Apim-Subscription-Key':environment.OcpSubscriptionKey}})
  }
  getNewsByNewsId(newsid: string){
    return this.httpclient.get(environment.url+ environment.news+"/"+newsid, {headers: {'Ocp-Apim-Subscription-Key':environment.OcpSubscriptionKey}})
  }
}
// https://myguideapilayer.azure-api.net/mobileAppcms/private/appNews/2dfaeb7c-aa19-4f51-a1f6-e7447dc73d75/1/1
// https://myguideapilayer.azure-api.net/mobileAppcms/private/appNews/{newsID}