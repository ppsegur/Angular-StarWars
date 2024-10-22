import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Vehiculo, vehiculoResponse } from '../interfaces/vehiculo.interfaces';
import { Observable } from 'rxjs';
import { PeopleResponse } from '../interfaces/people.interface';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private http:HttpClient) { }

  getPerson(): Observable<PeopleResponse> {
    return this.http.get<PeopleResponse>('https://swapi.dev/api/people/');
    }
  }