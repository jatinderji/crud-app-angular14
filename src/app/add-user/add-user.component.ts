import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UsereditorService } from '../usereditor.service';
import { mustMatchValidator } from '../_helpers/must-match.validator';
import { User } from '../_helpers/user.interface';
import { UserService } from '../_helpers/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  cancelOrResetText = 'Reset';
  users: User[] = [];

  @Output()
  addUserChildEvent = new EventEmitter();

  user?: User = undefined;

  registrationForm: FormGroup = new FormGroup({});
  // isUpdate: boolean = false;
  buttonText: string = 'Save';
  // Will be used for Validations
  isSubmitted = false;


  constructor(private _toastrService: ToastrService, private _userService: UserService, private usereditorService: UsereditorService) {

  }
  ngOnInit(): void {
    this.setFormState();
    // Getting data from UserEditorService to check if user clicked on Edit User
    this.user = this.usereditorService.getEditUserData();

    console.log("User");
    if (this.user.firstName != '') {
      console.log("Updating Save to Update");
      this.registrationForm.patchValue(this.user);
      this.buttonText = 'Update'
      this.cancelOrResetText = 'Cancel'
    }
  }

  get myForm() {
    return this.registrationForm.controls;
  }

  setFormState() {
    this.registrationForm = new FormGroup(
      {
        id: new FormControl(0),
        title: new FormControl('Mr.', Validators.required),
        firstName: new FormControl('', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(10)])),
        lastName: new FormControl('', Validators.compose([Validators.minLength(3), Validators.maxLength(8)])),
        email: new FormControl('', Validators.compose([Validators.required, Validators.email])),
        dob: new FormControl('', Validators.compose([Validators.required, Validators.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)])),
        password: new FormControl('', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(10)])),
        confirmPassword: new FormControl('', Validators.compose([Validators.required])),
        acceptTerms: new FormControl(false, Validators.compose([Validators.requiredTrue])),
      },
      mustMatchValidator('password', 'confirmPassword')
    );
  }

  saveUser() {
    console.log('saveUser() started');
    console.log(this.registrationForm.value);
    this.isSubmitted = true;
    if (this.registrationForm.invalid) {
      console.log('registrationForm.invalid');
      return;
    }
    // If user clicked Update (Existing)
    if (this.buttonText == 'Update') {
      console.log('updating');

      this._userService.updateUser(this.registrationForm.value).subscribe((res) => {
        this._toastrService.success('User Updated Successfully.', 'User Updated');
        this.addUserChildEvent.emit('updated');
        this.buttonText = 'Save';
        this.cancelOrResetText = 'Reset';
      });
    }
    // User clicked Save (New)
    else {
      console.log('saving new user data');
      this._userService.saveUser(this.registrationForm.value).subscribe((res) => {
        this._toastrService.success('User Added Successfully.', 'User Added');
      });
    }
    // Resetting Form Data
    this.setFormState();
    // goto All Users Tab
    this.addUserChildEvent.emit('allUsersTab');
    this.isSubmitted = false;
  }


  onReset() {
    console.log('Reset Start');

    this.buttonText = 'Save';

    this.isSubmitted = false;
    // If use this.registrationForm.reset() this will assign null to all the controls
    // Resetting Form
    this.setFormState();
    console.log(this.registrationForm.value);

    // If it is not Reset that means it's Cancel, so go to All Users Tab
    console.log('text: ');
    console.log(this.cancelOrResetText);
    const isCancel = this.cancelOrResetText == 'Cancel' ? true : false;
    this.cancelOrResetText = 'Reset';
    // Passing Reset will reset Update User to Add User(Save)
    this.addUserChildEvent.emit('Reset');

    // Setting user to undefined to update that user not clicked on Edit
    this.user = undefined;
    // Deleting data from UserEditorService to show user not clicked on Edit User
    this.usereditorService.setEditUserData({
      id: 0,
      title: '',
      firstName: '',
      lastName: '',
      email: '',
      dob: '',
      password: '',
      acceptTerms: false
    });
    // Navigating to All Users Tab if User Canceled
    if (isCancel) {
      this.addUserChildEvent.emit('allUsersTab');
    }
  }

}
