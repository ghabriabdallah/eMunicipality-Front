import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Citoyen } from '../citoyen';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 citoyen = new Citoyen();

  constructor(private _service:RegistrationService, private _router: Router) { }

  ngOnInit(): void {
  }
  loginCitoyen(){
this._service.loginCitoyenFromRemote(this.citoyen).subscribe(
  data => {
    console.log("response received");
    this._router.navigate(["/welcome"]);
  },
  error => {
    console.log("NO")
  }
  
)
  }

}
