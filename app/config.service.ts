import { Injectable } from '@angular/core';
import { Config } from './config';

import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
  ) { }

  level: number = 1;

  CONFIG_URLS = [
    'level_zero',
    'level_one',
    'level_two'
  ]

  getConfig(level_int: number): Observable<Config> {
    return this.http.get<Config>('http://localhost:8000/config?level='+ level_int)
  }
}
