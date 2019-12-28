import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { 
    
  }
  login(payload): Observable<any> {
    return this.http.post(`${environment.authUrl}login`,payload).pipe(
      map(results => results['data'])
    );
  }
  getList(filter = null): Observable<any> {
    if(!filter)
    return this.http.get(`${environment.serviceurl}admissions?page=1&limit=9999`,{headers:this._addStandardHeaders(new HttpHeaders)}).pipe(
      map(results => results['data'])
    );
    else{
      filter = new HttpParams().set("filter", JSON.stringify(filter))
      return this.http.get(`${environment.serviceurl}admissions?page=1&limit=9999&${filter}`,{headers:this._addStandardHeaders(new HttpHeaders)}).pipe(
        map(results => results['data'])
      );
    }
    
  } 
  getDetails(transactionNumber): Observable<any> {
    return this.http.get(`${environment.serviceurl}admissions/${transactionNumber}`,{headers:this._addStandardHeaders(new HttpHeaders)}).pipe(
      map(results => results['data'])
    );
  }  
  _addStandardHeaders(header:HttpHeaders)
  {
    console.log(JSON.parse(localStorage.getItem("data")));
    header = header.append('Content-Type','application/json');
    header = header.append('Accept','application/json');
    header = header.append('Authorization','Basic  '+ JSON.parse(localStorage.getItem("data"))['auth_token']);    
    return header;
  }
}
