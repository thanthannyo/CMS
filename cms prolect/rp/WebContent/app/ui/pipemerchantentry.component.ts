import {Pipe} from 'angular2/core';

// Tell Angular2 we're creating a Pipe with TypeScript decorators
@Pipe({
  name: 'PipeCMSMerchantEntry'
})
export class PipeCMSMerchantEntry{ 
  transform(value, args?) { 
    let [p1] = args;
    return value.filter(rec => {
      
      return (rec.merchantID.startsWith(p1) || rec.name.startsWith(p1) );
    });
  }
}

