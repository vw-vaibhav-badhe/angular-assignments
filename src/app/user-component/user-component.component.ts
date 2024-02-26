import {Component} from '@angular/core';

@Component({
  selector: 'app-user-component',
  templateUrl: './user-component.component.html',
  styleUrls: ['./user-component.component.css']
})
export class UserComponentComponent {

  userName: string = "Vaibhav8698"
  emailId: string = "vaibhav.badhe@volkswagen.co.in"
  newName = ""

  isShow = true;


  applyemail_Idclass = true;
  email_Id = "";

  applyuser_Nameclass = true;
  user_Name = "";

  editUser() {
    console.log("edit button is clicked")
  }


  addClassForUsername() {
    let classes = {
      user_Name:this.applyuser_Nameclass,
    }
    return classes;
  }

  addClassForEmailId() {
    let classes = {
      email_Id:this.applyemail_Idclass,
    }
    return classes;
  }

  toggleDetails(){
    this.isShow=!this.isShow;
  }
}
