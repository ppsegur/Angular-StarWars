import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../../interfaces/vehiculo.interfaces';
import { VehiculoService } from '../../services/vehiculo.service';

@Component({
  selector: 'app-vehiculo',
  templateUrl: './vehiculo.component.html',
  styleUrl: './vehiculo.component.css'
})
export class VehiculoComponent implements OnInit {
  listVehiculos: Vehiculo[] = [];

  constructor(private vehiculoService: VehiculoService) {}
  
  getPersonajeId(url: string): string {
    const urlPartes = url.split('/');
    return urlPartes[urlPartes.length - 2];
  }
  ngOnInit() {
    this.vehiculoService.getVehiculos().subscribe(respuesta => {  this.listVehiculos = respuesta.results;
    });
  }
}
