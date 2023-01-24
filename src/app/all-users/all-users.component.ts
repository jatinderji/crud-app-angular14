import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';
import { User } from '../_helpers/user.interface';
import { UserService } from '../_helpers/user.service';
import { UsereditorService } from '../usereditor.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit{

  users: User[] = [];

  @Output()
  editUserChildEvent = new EventEmitter();

  constructor(private _toastrService: ToastrService, private _userService: UserService, private usereditorService:UsereditorService) {

  }
  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers() {
    this._userService.getUsers().subscribe((res) => {
      // this.users = res;
      this.users = res as User[];
      console.log('getAllUsers:' + this.users);
      
    });
  }

  editUser(user: User) {
    let _userData:User = this.users.find((u:User)=> u.id===user.id) as User;
    // Removing Password before showing
    _userData.password='';
    // Removing Aceept Terms
    _userData.acceptTerms = false;
    console.log(_userData);
    // this.registrationForm.patchValue(_userData);
    this.usereditorService.setEditUserData(_userData);
    this.editUserChildEvent.emit('Update');
    
  }

  deleteUser(id: number) {
    Swal.fire({
      title: 'Are you sure to Delete?',
      text: 'Are you sure you want to permanently delete this user?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Delete',
      confirmButtonColor: '#ff0000',
    }).then((result) => {
      if(result.isConfirmed){
        this._userService.deleteUser(id).subscribe(res => {
          this.getAllUsers();
          this._toastrService.success('User Deleted Successfully.', 'User Deleted');
          // this.buttonText = 'Save';
        });
      }
    });
  }


}
