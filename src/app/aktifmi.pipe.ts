import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'aktifmi'
})
export class AktifmiPipe implements PipeTransform {

  transform(active:boolean, args?: any): any {
    return active ? 'Aktif' : 'Hayir'
  }

}
