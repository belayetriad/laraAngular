import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private iss = {
    login : 'http://localhost:8000/api/login',
    signup: 'http://localhost:8000/api/signup'
  };

  constructor() { }

  handle( token ) {
    this.set(token);
  }

  set( token ) {
    localStorage.setItem('token', token);
    localStorage.setItem('issLogged', 'true');
  }

  get( item ) {
    return localStorage.getItem(item);
  }

  remove( item ) {
    return localStorage.removeItem(item);
  }

  isValid() {
    const token = this.get('token');
    if ( token ) {
      const payload = this.payload( token );
      if ( payload ) {
        return Object.values( 'http://localhost:8000/api/login' ).indexOf( payload.iss ) > -1 ? true : false;
      }
    }
    return false;
  }

  payload( token ) {
    const payload = token.split('.')[1];
    console.log(this.decode(payload));
    return this.decode(payload);
  }

  decode( payload ) {
    return JSON.parse(atob(payload));
  }

  loggedIn() {
    return this.isValid();
  }

}
