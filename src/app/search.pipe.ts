import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(arr: any[], searchCriteria: string = ""): any[] {
    if(searchCriteria === "") {return arr;}
    searchCriteria = searchCriteria.toLowerCase();
    let selArr: any[] = [];
    for (let a of arr){
      if((a.id.toString().toLowerCase().includes(searchCriteria)) ||
      (a.title.toString().toLowerCase().includes(searchCriteria)) ||
      (a.count.toString().toLowerCase().includes(searchCriteria))) {
        selArr.push(a);
      }
    }
    return selArr;
  }

}
