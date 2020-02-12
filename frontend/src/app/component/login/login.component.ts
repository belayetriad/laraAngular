import { Router } from '@angular/router';
import { TokenService } from './../../service/token.service';
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

  constructor(
    private api: ApiService,
    private token: TokenService,
    private router: Router
  ) { }

  onSubmit() {
   this.api.login(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }
  handleResponse(data) {
    this.token.handle(data.access_token);
    this.router.navigateByUrl('/profile');
  }
  handleError(error) {
    this.error = error.error.error;
  }



  ngOnInit() {
  }

}
