import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  constructor() { }

  getData() {
    return [
      {id: 1, name: 'Abc', age: 12},
      {id: 2, name: 'xyz', age: 123}
    ];
  }

}
