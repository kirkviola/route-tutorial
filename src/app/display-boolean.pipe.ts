import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bool'
})
export class DisplayBooleanPipe implements PipeTransform {

  transform(aBoolean: boolean, lang:string = "en"): string {
    switch(lang){
      case "en": {
        return (aBoolean) ? "Yes" : "No";
      }
      case "fr": {
        return (aBoolean) ? "Oui" : "Non";
      }
      case "gr": {
        return (aBoolean) ? "Ja" : "Nein";
      }
      default: {
        return "IDK"
      }
    }
  }

}
