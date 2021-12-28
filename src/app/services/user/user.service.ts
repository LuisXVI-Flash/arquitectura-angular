import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { listaUsers, User } from 'src/app/entities/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  endpoint: string = environment.be_url
  constructor(private http: HttpClient) { }

  getList() {
    return this.http.get<listaUsers>(`${this.endpoint}api/usuarios?limit=`)
  }
}
