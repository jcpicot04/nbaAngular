import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'presupuesto'
})
export class PresupuestoPipe implements PipeTransform {

  transform(value: number, args?: any): any {
    const tasaCambio = 1.07
    return value * tasaCambio
  }

}
