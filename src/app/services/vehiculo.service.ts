import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Vehiculo, vehiculoResponse } from '../interfaces/vehiculo.interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {

  constructor(private http:HttpClient) { }

  getVehiculos(): Observable<vehiculoResponse> {
    return this.http.get<vehiculoResponse>('https://swapi.dev/api/vehicles/');
    }
  }