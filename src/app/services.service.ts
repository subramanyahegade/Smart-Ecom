import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  url = "http://13.59.50.179:8080/"
  tentId="cfd1fbdf-ebab-4ee3-9a8a-69fb6f3be80c"

  private headers = new HttpHeaders({
      'Content-Type':'application/json; charset=utf-8',
      'tenantId':this.tentId,
  }).set('Access-Control-Allow-Origin','*');

  constructor(private httpclient:HttpClient) { }

  getCategory(){
    return this.httpclient.get<any>(this.url+'category/status?active=true',{headers:this.headers})
  }

}
