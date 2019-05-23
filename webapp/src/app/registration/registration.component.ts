import { Component, OnInit } from '@angular/core';
import { RegistrationModule } from './registration.module';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { FormsModule} from '@angular/forms';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
    userForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
  }

    ngOnInit() {
        this.userForm = this.formBuilder.group({
        name: [null, Validators.compose([Validators.required,Validators.pattern('^[a-zA-Z]+$')])],
        lastName: [null, Validators.compose([Validators.required,Validators.pattern('^[a-zA-Z]+$')])],
        email: [null,Validators.compose([Validators.required, Validators.minLength(5), Validators.email, Validators.pattern('^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$')])],
        password: [null, Validators.compose([Validators.required, Validators.minLength(8)])],
        confirmPassword: [null, Validators.compose([Validators.required, Validators.minLength(8)])]
      });
    }

    onSubmit(userData) {
      if(userData.password === userData.confirmPassword){
        if(this.userForm.valid){
          alert('User form is valid!!');
        }
        else {
          alert('User form is not valid!!');
        }
      }
      else{
        alert('Passwords are not the same');
      }
    }
}
