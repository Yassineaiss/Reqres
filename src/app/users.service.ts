import {HttpClient} from '@angular/common/http';
import { Injectable} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
@Injectable({providedIn:'root'})
export class UsersService {


constructor(private http:HttpClient,
  private route: ActivatedRoute){

}
getUsers():Observable<any>{
  return this.http.get('https://reqres.in/api/users?page=1');
}
getUser(id:string):Observable<any>{
  console.log('getUser works correctly');
  console.log(id);

  return this.http.get('https://reqres.in/api/users/'+ id);

  };

}
