// Written by: Tun Thura Thet  - on: 18.4.2016
// Update by:  Tun Thura Thet  - on: 11.5.2015
import {Injectable} from 'angular2/core'
import {Subject}    from 'rxjs/Subject'; 
declare var jQuery: any; 
@Injectable()
export class RpIntercomService {
  private _mybean : any; 
  _apiurl:string ="";
  _rpturl:string ="";
  _title:string = "";
  _app:string ="";
  _appname:string ="";
  _profile={
    "userName":"?",
    "role":0,
    "logoText":"A2",
    "logoLink":"Menu00", 
    "commandCenter": "true",
    "menus":[{"menuItem":"Menu01","caption":"Menu 01"},
            {"menuItem":"Menu02","caption":"Menu 02"},
            {"menuItem":"Menu03","caption":"Menu 03"},
            {"menuItem":"","caption":"Menu Group",
              "menuItems":
              [{"menuItem":"Menu01","caption":"Menu 001"},
              {"menuItem":"Menu02","caption":"Menu 002"},
              {"menuItem":"Menu03","caption":"Menu 003"}]
            }
    ],    
    "rightMenus":[{"menuItem":"Menu01","caption":"Menu 01"},
            {"menuItem":"Menu02","caption":"Menu 02"},
            {"menuItem":"Menu03","caption":"Menu 03"},
            {"menuItem":"","caption":"Menu Group",
              "menuItems":
              [{"menuItem":"Menu01","caption":"Menu 001"},
              {"menuItem":"Menu02","caption":"Menu 002"},
              {"menuItem":"Menu03","caption":"Menu 003"}]
            }
    ]
  };  
  // Observable string sources 
  private _channel001Source = new Subject<string>();
  private _channel002Source = new Subject<string>();
  private _channel003Source = new Subject<string>();
  private _rpbeanSource = new Subject<any>();
   
  // Observable string streams 
  channel001$ = this._channel001Source.asObservable();
  channel002$ = this._channel002Source.asObservable();
  channel003$ = this._channel002Source.asObservable();
  rpbean$ = this._rpbeanSource.asObservable();
  // Service message commands 
  send001(x: string) { 
    this._channel001Source.next(x);
  }
  send002(x: string) { 
    this._channel002Source.next(x);
  }
  send003(x: string) { 
    this._channel003Source.next(x);
  } 
  sendBean(x: any) { 
    this._mybean=x;
    this._rpbeanSource.next(x);
  }
  getBean() : any { 
    return this._mybean;
  } 
  getRole() : number { 
    return this._profile.role;
  }  
  isMenuBar() : boolean { 
    return this._profile.role>0;
  } 
  confirmUpload(p:boolean){
     if (p) {
        jQuery(window).on('beforeunload', function(){ return "Exit Application"; }); 
      } else {
        jQuery(window).unbind('beforeunload'); 
      }
  }
}