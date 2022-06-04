import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  public navFlag:boolean=false
  public urlPath = "http://localhost:3000"
  public isLogIn : boolean = false


  constructor(private http : HttpClient) { }
 
  getImages(obj:any):Observable<any>{
    return this.http.get(`${this.urlPath}photos`,obj)
  }
  login(obj:any) : Observable<any>{
    return this.http.post(`${this.urlPath}login` , obj )
  }
  signUp(obj:any):Observable<any>{
    return this.http.post(`${this.urlPath}signUp`, obj )
  }
  loadRoles(obj:any):Observable<any>{
    return this.http.get(`${this.urlPath}loadRoles/1`,obj)
  }
  uploadImg(obj:any):Observable<any>{
    return this.http.post(`${this.urlPath}storeAccountImages`, obj)
  }
  getSingleProduct(id:any):Observable<any>{
    return this.http.get(`${this.urlPath}products/${id}`)
  }
  getUsers(id:any):Observable<any>{
    return this.http.get(`${this.urlPath}users/${id}`)
  }
  loadProviders(obj:any , pageNum : any):Observable<any>{
    return this.http.post(`${this.urlPath}LoadProvidersBySlug/1/${pageNum}/10` , obj )
  }
}
