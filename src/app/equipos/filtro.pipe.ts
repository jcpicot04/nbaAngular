import { Pipe, PipeTransform } from '@angular/core';
import { Equipo } from './equipo';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(equipos: Equipo[], criterio: string): Equipo[] {
    criterio = criterio ? criterio.toLocaleLowerCase() : "";
    equipos = criterio ? equipos.filter(p => p.full_name.toLocaleLowerCase().includes(criterio)) : equipos;
    return equipos;
  }

}
