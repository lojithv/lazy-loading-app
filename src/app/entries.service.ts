import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { AppResponse } from './models/response';

@Injectable({
  providedIn: 'root'
})
export class EntriesService {

  public baseUrl = "https://dummyjson.com" || "http://localhost:3000"
  // public headers: HttpHeaders = new HttpHeaders({
  //   'Content-Type': 'application/json',
  //   'Accept': "application/json",
  //   'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE',
  //   'Authorization': ''
  // });

  constructor() { }

  // public getData(limit:number,skip:number):Observable<AppResponse<any[]>>{
  //   let params= new HttpParams();
  //   return this.http.get<AppResponse<any[]>>(`${this.baseUrl}/products?limit=${10}&skip=${skip}`,{headers :this.headers,params})
  // }
}
