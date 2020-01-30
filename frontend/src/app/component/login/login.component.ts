import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../service/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

  public form = {
    email: null,
    password: null
  };
  public error = null;

  constructor( private api: ApiService ) { }

  onSubmit() {
   this.api.login(this.form).subscribe(
      data => console.log(data),
      error => this.errorHandle(error)
    );
  }

  errorHandle(error) {
    this.error = error.error.error;
  }

  ngOnInit() {
  }

}
