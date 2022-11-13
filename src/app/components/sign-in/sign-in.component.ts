import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup , Validators} from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
 
  constructor() { }
 
registerForm:any;//form
  ngOnInit(): void {

    this.registerForm = new FormGroup({
      "firstName": new FormControl(null, [Validators.required,Validators.pattern('[a-zA-Z]*')]),
      "lastName": new FormControl(null, [Validators.required,Validators.pattern('[a-zA-Z]*')]),
      "emailId": new FormControl(null, [Validators.required,Validators.email]),
      "phoneNumber": new FormControl(null, [Validators.required,Validators.pattern('[0-9]*')]),
      "passWord": new FormControl(null, [Validators.required,Validators.pattern('[0-9]*')]),
      "address": new FormControl(null),
    });
  }

  //submit function  
submitData(){
if(this.registerForm.valid){
  alert(`Thank You Hope To See You Soon ${this.registerForm.value.firstName} `);
  this.registerForm.reset(); //reset from value
}
}
get firstname() {return this.registerForm.get('firstName'); }
get lastname() {return this.registerForm.get('lastName'); }
get emailid() {return this.registerForm.get('emailId'); }
get phoneNumber() {return this.registerForm.get('phoneNumber'); }
get passWord() {return this.registerForm.get('passWord'); }
get address() {return this.registerForm.get('address'); }
 
}


