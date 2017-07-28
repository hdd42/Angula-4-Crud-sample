import { Pipe, PipeTransform } from '@angular/core';


/** Ornek bir 'custom' pipe*/
@Pipe({
  name: 'aktifmi'
})
export class AktifmiPipe implements PipeTransform {

  transform(active:boolean, args?: any): any {
    return active ? 'Aktif' : 'Hayir'
  }

}
