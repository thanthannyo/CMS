export class ClientUtil { 
  constructor(){   
  }  
  //20160526 2:09pm YMK...
  changeDatetoString(dt){
    var datepattern = /(\d{4})?[- ]?(\d{2})?[- ]?(\d{2})/;
    return dt.replace(datepattern, '$1$2$3');
  }
  changeStringtoDate(dt){
    var pattern = /(\d{4})(\d{2})(\d{2})/;
    return dt.replace(pattern, '$1-$2-$3');
  }
  getTodayDate(){
    var d = new Date();
    var datestring = d.getFullYear() + "-" + ("0"+(d.getMonth()+1)).slice(-2) + "-" + ("0" + d.getDate()).slice(-2);
    return datestring;
  }
}