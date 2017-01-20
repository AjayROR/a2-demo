import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
@Injectable()
export class UserService {
  private baseUrl: string  = 'https://jsonplaceholder.typicode.com';
  constructor(private http: Http) { }
  
  getData(): Observable<any[]> {
    var _headers: Headers = new Headers({
      'Content-type': 'application/json'
    })
    return this.http.get(this.baseUrl + '/posts')
                    .map((response: Response) => response.json());
    /*
    return [
      {id: 1, name: 'Abc', age: 12},
      {id: 2, name: 'xyz', age: 123}
    ];
    */                 
  }
}