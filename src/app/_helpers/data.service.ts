import { Injectable } from '@angular/core';

import { InMemoryDbService } from 'angular-in-memory-web-api';


@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {
  
  createDb(){
    let _usersData = [
      { id: 101, title: 'Mr.', firstName:'Russel', lastName:'Sie', email:'russel.sie@gmail.com', dob:'1988-06-21', password:'123456', acceptTerms:true},
      { id: 102, title: 'Miss.', firstName:'Sonia', lastName:'Sethi', email:'sonia.sethi@gmail.com', dob:'1992-02-20', password:'123456', acceptTerms:true},
    ];
    return {users: _usersData};
  } 
  constructor() { }
}
