import { Component, OnInit } from '@angular/core'; 
import { ApiService } from './../../service/api.service';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public form = {
    name: null,
    email: null,
    password: null,
    password_confirmation: null
  };

  public errors = [];
  constructor( private api: ApiService ) { }

  onSubmit() {
    this.api.signup(this.form).subscribe(
      data => console.log(data),
      error => this.errorHandle(error)
    );
  }

  errorHandle(error) {
    this.errors = error.error.errors;
  }

  ngOnInit() {
  }

}
