import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersUrl = "http://localhost:3000/users"
  private searchUrl = "http://localhost:3000/users/search"

  constructor(private http: HttpClient) { }

  postUser(userData: {email: string, password: string}): Observable<any> {
    return this.http.post(this.usersUrl, userData)
  }

  searchUser(userData: { email: string; password: string }): Observable<any> {
    return this.http.post<any>(this.searchUrl, userData);
  }
}
