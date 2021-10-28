import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Title, DomSanitizer } from '@angular/platform-browser';
import { Observable, BehaviorSubject } from 'rxjs';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})

export class CommonSrvService {
  UsersAPIURL: any;
  private Loading = new BehaviorSubject<boolean>(false);
  constructor(
    private http: HttpClient,
  ) {
    this.UsersAPIURL = environment.UsersAPIURL;
  }

  postNoAuth(URL: string, data: any) {
    return this.http.post(this.UsersAPIURL + URL, JSON.stringify(data), {
      headers: { 'Content-Type': 'application/json', 'No-Auth': 'True' },
    });
  }

  getNoAuth(URL: string, id?: any | null) {
    return this.http.get(this.UsersAPIURL + URL + (id == null ? '' : id), {
      headers: { 'Content-Type': 'application/json', 'No-Auth': 'True' },
    });
  }
  get isLoading() {
    return this.Loading.asObservable(); // {2}
  }

  setLoading(v: boolean) {
    this.Loading.next(v); // {2}
  }
}
