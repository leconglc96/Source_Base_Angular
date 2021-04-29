import { Injectable } from '@angular/core';
import { DataService } from './http-service.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { _TOKEN } from '../constants/const';

@Injectable({ providedIn: 'root' })

export class AuthService {

  constructor(private dataService: DataService) { }

  login(params): Observable<any> {
    return ;
  }

  logout(): void {
    // logout the user
    localStorage.removeItem(_TOKEN);
    location.reload();
  }

}

