import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';



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
  constructor( private http: HttpClient ) { }

  onSubmit() {
    return this.http.post( 'http://127.0.0.1:8000/api/signup', this.form ).subscribe(
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
