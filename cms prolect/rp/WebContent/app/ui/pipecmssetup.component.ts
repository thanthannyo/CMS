import {Pipe} from 'angular2/core';

// Tell Angular2 we're creating a Pipe with TypeScript decorators
@Pipe({
  name: 'PipeCMSSetup'
})
export class PipeCMSSetup { 
  transform(value, args?) { 
    let [p1] = args;
    return value.filter(rec => {
      
      return (rec.merchantid.startsWith(p1) || rec.name.startsWith(p1));
      
    });
  }

}