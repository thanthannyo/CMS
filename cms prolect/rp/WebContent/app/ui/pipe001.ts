import {Pipe} from 'angular2/core';

// Tell Angular2 we're creating a Pipe with TypeScript decorators
@Pipe({
  name: 'Pipe001'
})
export class Pipe001 { 
  transform(value, args?) { 
    let [p1] = args;
    return value.filter(rec => {
    
      return (rec.t1.startsWith(p1) || rec.t2.startsWith(p1) || rec.t3.startsWith(p1));
    });
  }

}