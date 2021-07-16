import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SharedService {

  readonly APIUrl = "http://127.0.0.1:8000";

  constructor(private http : HttpClient) {}

  getProductsList():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/products/');
  }


  addProducts(val:any){
    return this.http.post(this.APIUrl + '/products/',val);
  }

  updateProducts(val:any){
    return this.http.put(this.APIUrl + '/products/',val);
  }

  deleteProducts(val:any){
    return this.http.delete(this.APIUrl + '/products/'+val);
  }

}
