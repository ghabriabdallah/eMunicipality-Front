import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../registration.service';
import { NgForm } from '@angular/forms';
import { Citoyen } from '../citoyen';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  citoyen = new Citoyen();

  constructor(private _service:RegistrationService, private _router:Router) { }

  ngOnInit(): void {
  }
  registerCitoyen(){
    this._service.registerCitoyenFromRemote(this.citoyen).subscribe(
      data => {
        console.log("response received");
        this._router.navigate(["/"]);
      },
      error => console.log("exception occuredd")
    )
      }

}
