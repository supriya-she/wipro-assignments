import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SalariesService {
  constructor(private http:HttpClient) { }
  
  FetchUFromBackend(){
    return this.http.get('https://dummyjson.com/users')
  }
  
}
