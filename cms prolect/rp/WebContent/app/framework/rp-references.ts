// Written by: Tun Thura Thet  - on: 18.4.2016
// Update by:  Tun Thura Thet  - on: 11.5.2015

import {Injectable} from 'angular2/core' 

@Injectable()
export class RpReferences {  
  _lov1:any ={
    "gender" : [{"value":"","caption":"-"},{"value":"m","caption":"male"},{"value":"f","caption":"female"},{"value":"0","caption":"others"}], 
   };  
  _lov2:any ={ 
    "ref001" : [{"value":"","caption":"Empty"}]
   };   
   _lov3:any ={ 
    "ref001" : [{"value":"","caption":"Empty"}],  
     
     //CMSDatatype
     "ref021":[{"value":"01","caption":"Text"},{"value":"02","caption":"Number"},{"value":"03","caption":"Date"},{"value":"04","caption":"Lov"},{"value":"05","caption":"Boolean"},{"value":"06","caption":"Image"}],
     
     //CMSTextfieldcode     
     "ref022" :
     [{"value":"01","caption":"t1"},{"value":"02","caption":"t2"},
     {"value":"03","caption":"t3"},{"value":"04","caption":"t4"},
     {"value":"05","caption":"t5"},{"value":"06","caption":"t6"},
     {"value":"07","caption":"t7"},{"value":"08","caption":"t8"},
     {"value":"09","caption":"t9"},{"value":"10","caption":"t10"},
     {"value":"11","caption":"t11"},{"value":"12","caption":"t12"},
     {"value":"13","caption":"t13"},{"value":"14","caption":"14"},
     {"value":"15","caption":"t15"},{"value":"16","caption":"t16"},
     {"value":"17","caption":"t17"},{"value":"18","caption":"t18"},
     {"value":"19","caption":"t19"},{"value":"20","caption":"t20"},
     {"value":"21","caption":"t11"},{"value":"22","caption":"t12"},
     {"value":"23","caption":"t13"},{"value":"24","caption":"n14"},
     {"value":"25","caption":"t15"},{"value":"26","caption":"t16"},
     {"value":"27","caption":"t17"},{"value":"28","caption":"t18"},
     {"value":"29","caption":"t19"},{"value":"30","caption":"t20"}     
     ],
     
     //CMSNumberfieldcode
     "ref023":
     [{"value":"001","caption":"n1"},{"value":"002","caption":"n2"},
     {"value":"003","caption":"n3"},{"value":"004","caption":"n4"},
     {"value":"005","caption":"n5"},{"value":"006","caption":"n6"},
     {"value":"007","caption":"n7"},{"value":"008","caption":"n8"},
     {"value":"009","caption":"n9"},{"value":"010","caption":"n10"},
     {"value":"011","caption":"n11"},{"value":"012","caption":"n12"},
     {"value":"013","caption":"n13"},{"value":"014","caption":"n14"},
     {"value":"015","caption":"n15"},{"value":"016","caption":"n16"},
     {"value":"017","caption":"n17"},{"value":"018","caption":"n18"},
     {"value":"019","caption":"n19"},{"value":"020","caption":"n20"}],
          
     //CMSdatefieldcode
     "ref024":
    [{"value":"0001","caption":"Dte1"},{"value":"0002","caption":"Dte2"},
     {"value":"0003","caption":"Dte3"},{"value":"0004","caption":"Dte4"},
     {"value":"0005","caption":"Dte5"},{"value":"0006","caption":"Dte6"},
     {"value":"0007","caption":"Dte7"},{"value":"0008","caption":"Dte8"},
     {"value":"0009","caption":"Dte9"},{"value":"0010","caption":"Dte10"}],
      
      //CMSlovfieldcodde
     "ref025":
     [{"value":"00001","caption":"Lov1"},{"value":"00002","caption":"Lov2"},
     {"value":"00003","caption":"Lov3"},{"value":"00004","caption":"Lov4"},
     {"value":"00005","caption":"Lov5"},{"value":"00006","caption":"Lov6"},
     {"value":"00007","caption":"Lov7"},{"value":"00008","caption":"Lov8"},
     {"value":"00009","caption":"Lov9"},{"value":"00010","caption":"Lov10"}],
         
     //CMSBooleanFieldCode
     "ref026":
     [{"value":"000001","caption":"Bol1"},{"value":"000002","caption":"Bol2"},
     {"value":"000003","caption":"Bol3"},{"value":"000004","caption":"Bol4"},
     {"value":"000005","caption":"Bol5"},{"value":"000006","caption":"Bol6"},
     {"value":"000007","caption":"Bol7"},{"value":"000008","caption":"Bol8"},
     {"value":"000009","caption":"Bol9"},{"value":"000010","caption":"Bol10"}],
     
     //CMSImageFieldCode
     "ref027":
     [{"value":"0000001","caption":"Img1"},{"value":"0000002","caption":"Img2"},
     {"value":"0000003","caption":"Img3"},{"value":"0000004","caption":"Img4"},
     {"value":"0000005","caption":"Img5"},{"value":"0000006","caption":"Img6"},
     {"value":"0000007","caption":"Img7"},{"value":"0000008","caption":"Img8"},
     {"value":"0000009","caption":"Img9"},{"value":"0000010","caption":"Img10"}],
     
     //CMSLov
     "ref028":[{"value":"","caption":""},{"value":"","caption":""}]
   }; 
} 