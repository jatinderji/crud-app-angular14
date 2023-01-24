import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  title = 'crud-app';

  // users: User[] = [];

  // registrationForm: FormGroup = new FormGroup({});
  // isUpdate: boolean = false;
  // buttonText: string = 'Save';
  // isSubmitted = false;

  constructor( private ngbModal: NgbModal) {

  }

  // setFormState() {
  //   // this.registrationForm = this._formBuilder.group(
  //   //   {
  //   //     id: [0],
  //   //     title: ['Mr.', Validators.required],
  //   //     firstName: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(10)])],
  //   //     lastName: ['', Validators.compose([Validators.minLength(3), Validators.maxLength(8)])],
  //   //     email: ['', Validators.compose([Validators.required, Validators.email])],
  //   //     dob: ['', Validators.compose([Validators.required, Validators.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)])],
  //   //     password: ['', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(10)])],
  //   //     confirmPassword: ['', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(10)])],
  //   //     acceptTerms: [false, Validators.compose([Validators.requiredTrue])],
  //   //   }
  //   // );
  //   this.registrationForm = new FormGroup(
  //     {
  //       id: new FormControl(0),
  //       title: new FormControl('Mr.', Validators.required),
  //       firstName: new FormControl('', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(10)])),
  //       lastName: new FormControl('', Validators.compose([Validators.minLength(3), Validators.maxLength(8)])),
  //       email: new FormControl('', Validators.compose([Validators.required, Validators.email])),
  //       dob: new FormControl('', Validators.compose([Validators.required, Validators.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)])),
  //       password: new FormControl('', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(10)])),
  //       confirmPassword: new FormControl('', Validators.compose([Validators.required])),
  //       acceptTerms: new FormControl(false, Validators.compose([Validators.requiredTrue])),
  //     },
  //     mustMatchValidator('password','confirmPassword')
  //   );
  // }

  openAddUserModel(content:any){
    console.log(content);
    this.ngbModal.open(content);    
      // const modalRef = this.ngbModal.open(content);
      // modalRef.componentInstance.name = 'World';
    
  }

  // get myForm(){
  //   return this.registrationForm.controls;
  // }

    // this.setFormState();
    // this.getAllUsers();
    // this.toastrService.success('Saved.','Saved Successfully');
    // this.toastrService.info('Information.','Saved Successfully');
    // this.toastrService.warning('Warning.','Some Warning');
    // this.toastrService.error('Error.','Something went wrong');
    // // Swal.fire('This is demo of Sweet Alert fire() method');
    // // Swal.fire('Oops!!','Something went wrong', 'error');
    // // Swal.fire('Note it.','Some information', 'info');
    // Swal.fire({title: 'Are you sure?', text: 'Do you really want to sign out?', icon: 'question', showCancelButton: true, confirmButtonText: 'Yes', cancelButtonText: 'No'}).then((result)=>{
    //   console.log(result);
    //   if(result.value)//true
    //   {
    //     // 
    //     Swal.fire('Logged Out','Logged out successfully','success');
    //   }
    //   else if(result.isDismissed)// if dismissed true
    //   {
    //     // 
    //     Swal.fire('Not Logged out','You are still in the app','info');
    //   }
    // });
    // // Swal.fire('Login Succeed','Login Successful', 'success');
    // // Swal.fire('Warning!','A warning for you', 'warning');
  }

  // onReset(){
  //   this.buttonText = 'Save'
  //   this.isUpdate = false;
  //   this.isSubmitted = false;
  // }

  // saveUser() {
  //   this.isSubmitted = true;
  //   if (this.registrationForm.invalid) {
  //     return;
  //   }
  //   // If user clicked Update (Existing)
  //   if(this.isUpdate){
  //     this._userService.updateUser(this.registrationForm.value).subscribe((res) => {
  //       this.getAllUsers();
  //       this.setFormState();
  //       this._toastrService.success('User Updated Successfully.', 'User Updated');
  //       this.buttonText = 'Save';
  //       this.isUpdate = false;
  //     });
  //   }
  //   // User clicked Save (New)
  //   else{
  //     this._userService.saveUser(this.registrationForm.value).subscribe((res) => {
  //       this.getAllUsers();
  //       this.setFormState();
  //       this._toastrService.success('User Added Successfully.', 'User Added');
  //     });
  //   }

  //   this.isSubmitted=false;
  // }

  // getAllUsers() {
  //   this._userService.getUsers().subscribe((res) => {
  //     // this.users = res;
  //     this.users = res as User[];
  //     console.log('getAllUsers:' + this.users);
      
  //   });
  // }

  // editUser(user: User) {
  //   this.viewChildTab.select('registerUserTab');
  //   this.buttonText = 'Update';
  //   this.isUpdate = true;
  //   let _userData:User = this.users.find((u:User)=> u.id===user.id) as User;
  //   // Removing Password before showing
  //   _userData.password='';
  //   // Removing Aceept Terms
  //   _userData.acceptTerms = false;
  //   console.log(_userData);
  //   this.registrationForm.patchValue(_userData);
  //   // adding confirm password
  //   // this.registrationForm.patchValue({'confirmPassword':_userData.password});
  // }

  // deleteUser(id: number) {
  //   Swal.fire({
  //     title: 'Are you sure to Delete?',
  //     text: 'Are you sure you want to permanently delete this user?',
  //     icon: 'question',
  //     showCancelButton: true,
  //     confirmButtonText: 'Delete',
  //     confirmButtonColor: '#ff0000',
  //   }).then((result) => {
  //     if(result.isConfirmed){
  //       this._userService.deleteUser(id).subscribe(res => {
  //         this.getAllUsers();
  //         this._toastrService.success('User Deleted Successfully.', 'User Deleted');
  //         this.buttonText = 'Save';
  //       });
  //     }
  //   });

  // }


