import { Injectable } from '@angular/core';
import { User } from './user';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Citoyen } from './citoyen';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  

  constructor(private _http : HttpClient) { }

  public loginCitoyenFromRemote(Citoyen:Citoyen):Observable<any>{
    return this._http.post<any>("http://localhost:8080/Citoyens/login",Citoyen)
  }
  public registerCitoyenFromRemote(Citoyen:Citoyen):Observable<any>{
    return this._http.post<any>("http://localhost:8080/Citoyens/register",Citoyen)
  }
}
