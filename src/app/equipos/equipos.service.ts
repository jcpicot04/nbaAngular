declare var require: any
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Equipo } from './equipo';
import {map,filter} from 'rxjs/operators'
import { Equipos } from './equipos';
const shuffle = require('shuffle-array');

@Injectable({
  providedIn: 'root'
})
export class EquiposService {
tal: Observable<Equipo[]> | undefined
  constructor(private http: HttpClient) { }
equiposURL = '/assets/equipos.json';
  getEquipos(): Observable<Equipo[]>{   // retorna un observable al que cal subscriure's
  return this.http.get<{equipos: Equipo[]}>(this.equiposURL).pipe( // get retorna un observable i pipe accepta funcions de manipulació de les dades
    map(response => response.equipos) // de la resposta traguem l'array que ens interessa
    );
}

getEquipo(full_name:String): Observable<Equipo>{   // retorna un observable al que cal subscriure's
  return this.http.get<{equipos: Equipo[]}>(this.equiposURL).pipe( // get retorna un observable i pipe accepta funcions de manipulació de les dades
    map(response => response.equipos.filter(p=> p.full_name === full_name)[0]) // de la resposta traguem l'array que ens interessa
    );
}

get4Equipos(): Observable<Equipo[]>{

  this.tal = this.http.get<{equipos: Equipo[]}>(this.equiposURL).pipe(map(response => response.equipos));
   return shuffle.pick(this.tal, { 'picks': 4 });
}
get8Equipos(): Observable<Equipo[]>{

  this.tal = this.http.get<{equipos: Equipo[]}>(this.equiposURL).pipe(map(response => response.equipos));
   return shuffle.pick(this.tal, { 'picks': 8 });
}
get16Equipos(): Observable<Equipo[]>{

  this.tal = this.http.get<{equipos: Equipo[]}>(this.equiposURL).pipe(map(response => response.equipos));
   return shuffle.pick(this.tal, { 'picks': 16 });
}

}
