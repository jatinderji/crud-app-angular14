import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  saveOrUpdate = 'Add';
  cancelOrReset = 'Reset';

  @ViewChild('nav')
  viewChildTab: any;

  setSaveOrUpdateEvent(value: any) {
    // 
    this.saveOrUpdate = value;
    console.log(this.viewChildTab);
    // Updating Tab to View Add User Tab which is now Update User
    this.viewChildTab.select('registerUserTab');
    this.cancelOrReset = 'Cancel'
  }

  userSavedOrUpdatedEvent(value: any) {
    if(value != 'Reset'){
     // User clicked Save
     // Updating Tab to View All Users Tab
     this.viewChildTab.select('allUsersTab');      
    }
    // otherwise User clicked Reset or Add just change text to Add
    this.saveOrUpdate = 'Add';
    this.cancelOrReset = 'Reset';
  }

}
