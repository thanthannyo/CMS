import {Pipe} from 'angular2/core';

// Tell Angular2 we're creating a Pipe with TypeScript decorators
@Pipe({
  name: 'PipeLovSetUp'
})
export class PipeLovSetUp { 
  transform(value, args?) { 
    let [p1] = args;
    return value.filter(rec => {
    
      return (rec.lovNo.startsWith(p1) || rec.lovDesc2.startsWith(p1));
    });
  }
}   