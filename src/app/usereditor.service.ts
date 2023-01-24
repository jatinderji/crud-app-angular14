import { Injectable } from '@angular/core';
import { User } from './_helpers/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UsereditorService {

  user:User = {
    id: 0,
    title: '',
    firstName: '',
    lastName: '',
    email: '',
    dob: '',
    password: '',
    acceptTerms: false
  };

  constructor() { }
  
  setEditUserData(user:User){
    this.user = user;
  }

  getEditUserData(){
    return this.user;
  }

}
