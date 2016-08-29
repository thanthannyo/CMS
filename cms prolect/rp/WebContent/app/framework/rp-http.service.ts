// Written by: Tun Thura Thet  - on: 18.4.2016
// Update by:  Tun Thura Thet  - on: 11.5.2015

import {Injectable} from 'angular2/core'
import {Subject}    from 'rxjs/Subject';  
import {Http, Headers} from 'angular2/http'; 
import 'rxjs/add/operator/map';
@Injectable()
export class RpHttpService {  
  constructor(private http: Http) {
  }
  doGet(url:string ){
     return this.http.get(url)  
      .map(res => res.json())
  } 
  doPost(url:string, j:any){
    var params = JSON.stringify(j); 
    var headers = new Headers(); 
    headers.append('Content-Type','application/json');
     return this.http.post(url,params,{headers: headers})  
      .map(res => res.json())
  }
  doPostUrlEncoded(url:string, j:any){
    var json = JSON.stringify(j);
    var params = 'json=' + json;
    var headers = new Headers(); 
    headers.append('Content-Type','application/x-www-form-urlencoded'); 
     return this.http.post(url,params,{headers: headers})  
      .map(res => res.json())
  }  
}
 
