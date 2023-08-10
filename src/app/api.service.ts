import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  getData() {
    throw new Error('Method not implemented.');
  }
  
  constructor(private http:HttpClient) { }
  sendFormData(dt:any){
  
    console.log(this.http.post("https://reqres.in/api/users",dt))
     return this.http.post("https://reqres.in/api/users",dt);
}
getAllData(){
   return this.http.get("https://reqres.in/api/users")
}

deleteData(id:any){
 return  this.http.delete("https://reqres.in/api/users/2"+id);
}
 updateData(data:any){
  return this.http.put("https://reqres.in/api/users/2"+ data.id,data);
 }
 getPromData(){
  return this.http.get("http://reqres.in/api/userssss").toPromise();
 }
}
