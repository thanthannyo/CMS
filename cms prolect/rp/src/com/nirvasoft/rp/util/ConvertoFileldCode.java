package com.nirvasoft.rp.util;

public class ConvertoFileldCode {
	private String fieldcode;
	private String ref;
	private String datatype;
	private String datatypecode;
	private String lovref;
	private String readonly;

	public String ConvertToFieldCode(String codetofield) {
		switch (codetofield) {
		// text
		case "01":
			fieldcode = "t1";
			break;
		case "02":
			fieldcode = "t2";
			break;
		case "03":
			fieldcode = "t3";
			break;
		case "04":
			fieldcode = "t4";
			break;
		case "05":
			fieldcode = "t5";
			break;
		case "06":
			fieldcode = "t6";
			break;
		case "07":
			fieldcode = "t7";
			break;
		case "08":
			fieldcode = "t8";
			break;
		case "09":
			fieldcode = "t9";
			break;
		case "10":
			fieldcode = "t10";
			break;
		case "11":
			fieldcode = "t11";
			break;
		case "12":
			fieldcode = "t12";
			break;
		case "13":
			fieldcode = "t13";
			break;
		case "14":
			fieldcode = "t14";
			break;
		case "15":
			fieldcode = "t15";
			break;
		case "16":
			fieldcode = "t16";
			break;
		case "17":
			fieldcode = "t17";
			break;
		case "18":
			fieldcode = "t18";
			break;
		case "19":
			fieldcode = "t19";
			break;
		case "20":
			fieldcode = "t20";
			break;
		case "21":
			fieldcode = "t21";
			break;
		case "22":
			fieldcode = "t22";
			break;
		case "23":
			fieldcode = "t23";
			break;
		case "24":
			fieldcode = "t24";
			break;
		case "25":
			fieldcode = "t25";
			break;
		case "26":
			fieldcode = "t26";
			break;
		case "27":
			fieldcode = "t27";
			break;
		case "28":
			fieldcode = "t28";
			break;
		case "29":
			fieldcode = "t29";
			break;
		case "30":
			fieldcode = "t30";
			break;

		// number
		case "001":
			fieldcode = "n1";
			break;
		case "002":
			fieldcode = "n2";
			break;
		case "003":
			fieldcode = "n3";
			break;
		case "004":
			fieldcode = "n4";
			break;
		case "005":
			fieldcode = "n5";
			break;
		case "006":
			fieldcode = "n6";
			break;
		case "007":
			fieldcode = "n7";
			break;
		case "008":
			fieldcode = "n8";
			break;
		case "009":
			fieldcode = "n9";
			break;
		case "010":
			fieldcode = "n10";
			break;
		case "011":
			fieldcode = "n11";
			break;
		case "012":
			fieldcode = "n12";
			break;
		case "013":
			fieldcode = "n13";
			break;
		case "014":
			fieldcode = "n14";
			break;
		case "015":
			fieldcode = "n15";
			break;
		case "016":
			fieldcode = "n16";
			break;
		case "017":
			fieldcode = "n17";
			break;
		case "018":
			fieldcode = "n18";
			break;
		case "019":
			fieldcode = "n19";
			break;
		case "020":
			fieldcode = "n20";
			break;

		// Dte
		case "0001":
			fieldcode = "Dte1";
			break;
		case "0002":
			fieldcode = "Dte2";
			break;
		case "0003":
			fieldcode = "Dten3";
			break;
		case "0004":
			fieldcode = "Dten4";
			break;
		case "0005":
			fieldcode = "Dten5";
			break;
		case "0006":
			fieldcode = "Dte6";
			break;
		case "0007":
			fieldcode = "Dte7";
			break;
		case "0008":
			fieldcode = "Dte8";
			break;
		case "0009":
			fieldcode = "Dte9";
			break;
		case "0010":
			fieldcode = "Dte10";
			break;

		// lov
		case "00001":
			fieldcode = "Lov1";
			break;
		case "00002":
			fieldcode = "Lov2";
			break;
		case "00003":
			fieldcode = "Lov3";
			break;
		case "00004":
			fieldcode = "Lov4";
			break;
		case "00005":
			fieldcode = "Lov5";
			break;
		case "00006":
			fieldcode = "Lov6";
			break;
		case "00007":
			fieldcode = "Lov7";
			break;
		case "00008":
			fieldcode = "Lov8";
			break;
		case "00009":
			fieldcode = "Lov9";
			break;
		case "00010":
			fieldcode = "Lov10";
			break;

		// Bol
		case "000001":
			fieldcode = "Bol1";
			break;
		case "000002":
			fieldcode = "Bol2";
			break;
		case "000003":
			fieldcode = "Bol3";
			break;
		case "000004":
			fieldcode = "Bol4";
			break;
		case "000005":
			fieldcode = "Bol5";
			break;
		case "000006":
			fieldcode = "Bol6";
			break;
		case "000007":
			fieldcode = "Bol7";
			break;
		case "000008":
			fieldcode = "Bol8";
			break;
		case "000009":
			fieldcode = "Bol9";
			break;
		case "000010":
			fieldcode = "Bol10";
			break;

		// Image
		case "0000001":
			fieldcode = "Img1";
			break;
		case "0000002":
			fieldcode = "Img2";
			break;
		case "0000003":
			fieldcode = "Img3";
			break;
		case "0000004":
			fieldcode = "Img4";
			break;
		case "0000005":
			fieldcode = "Img5";
			break;
		case "0000006":
			fieldcode = "Img6";
			break;
		case "0000007":
			fieldcode = "Img7";
			break;
		case "0000008":
			fieldcode = "Img8";
			break;
		case "0000009":
			fieldcode = "Img9";
			break;
		case "0000010":
			fieldcode = "Img10";
			break;

		}

		return fieldcode;
	}

	public String ConvertDataTypeToFieldCode(String codetodatatype) {
		switch (codetodatatype) {
		// text
		case "t1":
			fieldcode = "01";
			break;
		case "t2":
			fieldcode = "02";
			break;
		case "t3":
			fieldcode = "03";
			break;
		case "t4":
			fieldcode = "04";
			break;
		case "t5":
			fieldcode = "05";
			break;
		case "t6":
			fieldcode = "06";
			break;
		case "t7":
			fieldcode = "07";
			break;
		case "t8":
			fieldcode = "08";
			break;
		case "t9":
			fieldcode = "09";
			break;
		case "t10":
			fieldcode = "10";
			break;
		case "t11":
			fieldcode = "11";
			break;
		case "t12":
			fieldcode = "12";
			break;
		case "t13":
			fieldcode = "13";
			break;
		case "t14":
			fieldcode = "14";
			break;
		case "t15":
			fieldcode = "15";
			break;
		case "t16":
			fieldcode = "16";
			break;
		case "t17":
			fieldcode = "17";
			break;
		case "t18":
			fieldcode = "18";
			break;
		case "t19":
			fieldcode = "19";
			break;
		case "t20":
			fieldcode = "20";
			break;
		case "t21":
			fieldcode = "21";
			break;
		case "t22":
			fieldcode = "22";
			break;
		case "t23":
			fieldcode = "23";
			break;
		case "t24":
			fieldcode = "24";
			break;
		case "t25":
			fieldcode = "25";
			break;
		case "t26":
			fieldcode = "26";
			break;
		case "t27":
			fieldcode = "27";
			break;
		case "t28":
			fieldcode = "28";
			break;
		case "t29":
			fieldcode = "29";
			break;
		case "t30":
			fieldcode = "30";
			break;

		// number
		case "n1":
			fieldcode = "001";
			break;
		case "n2":
			fieldcode = "002";
			break;
		case "n3":
			fieldcode = "003";
			break;
		case "n4":
			fieldcode = "004";
			break;
		case "n5":
			fieldcode = "005";
			break;
		case "n6":
			fieldcode = "006";
			break;
		case "n7":
			fieldcode = "007";
			break;
		case "n8":
			fieldcode = "008";
			break;
		case "n9":
			fieldcode = "009";
			break;
		case "n10":
			fieldcode = "010";
			break;
		case "n11":
			fieldcode = "011";
			break;
		case "n12":
			fieldcode = "012";
			break;
		case "n13":
			fieldcode = "013";
			break;
		case "n14":
			fieldcode = "014";
			break;
		case "n15":
			fieldcode = "015";
			break;
		case "n16":
			fieldcode = "016";
			break;
		case "n17":
			fieldcode = "017";
			break;
		case "n18":
			fieldcode = "018";
			break;
		case "n19":
			fieldcode = "019";
			break;
		case "n20":
			fieldcode = "020";
			break;

		// Dte
		case "Dte1":
			fieldcode = "0001";
			break;
		case "Dte2":
			fieldcode = "0002";
			break;
		case "Dte3":
			fieldcode = "0003";
			break;
		case "Dte4":
			fieldcode = "0004";
			break;
		case "Dte5":
			fieldcode = "0005";
			break;
		case "Dte6":
			fieldcode = "0006";
			break;
		case "Dte7":
			fieldcode = "0007";
			break;
		case "Dte8":
			fieldcode = "0008";
			break;
		case "Dte9":
			fieldcode = "0009";
			break;
		case "Dte10":
			fieldcode = "0010";
			break;

		// lov
		case "Lov1":
			fieldcode = "00001";
			break;
		case "Lov2":
			fieldcode = "00002";
			break;
		case "Lov3":
			fieldcode = "00003";
			break;
		case "Lov4":
			fieldcode = "00004";
			break;
		case "Lov5":
			fieldcode = "00005";
			break;
		case "Lov6":
			fieldcode = "00006";
			break;
		case "Lov7":
			fieldcode = "00007";
			break;
		case "Lov8":
			fieldcode = "00008";
			break;
		case "Lov9":
			fieldcode = "00009";
			break;
		case "Lov10":
			fieldcode = "00010";
			break;

		// Bol
		case "Bol1":
			fieldcode = "000001";
			break;
		case "Bol2":
			fieldcode = "000002";
			break;
		case "Bol3":
			fieldcode = "000003";
			break;
		case "Bol4":
			fieldcode = "000004";
			break;
		case "Bol5":
			fieldcode = "000005";
			break;
		case "Bol6":
			fieldcode = "000006";
			break;
		case "Bol7":
			fieldcode = "000007";
			break;
		case "Bol8":
			fieldcode = "000008";
			break;
		case "Bol9":
			fieldcode = "000009";
			break;
		case "Bol10":
			fieldcode = "000010";
			break;

		// Image
		case "Img1":
			fieldcode = "0000001";
			break;
		case "Img2":
			fieldcode = "0000002";
			break;
		case "Img3":
			fieldcode = "0000003";
			break;
		case "Img4":
			fieldcode = "0000004";
			break;
		case "Img5":
			fieldcode = "0000005";
			break;
		case "Img6":
			fieldcode = "0000006";
			break;
		case "Img7":
			fieldcode = "0000007";
			break;
		case "Img8":
			fieldcode = "0000008";
			break;
		case "Img9":
			fieldcode = "0000009";
			break;
		case "Img10":
			fieldcode = "0000010";
			break;

		}

		return fieldcode;

	}

	public String ConvertFieldCodeToDataType(String fieldcode) {
		switch (fieldcode) {
		// text
		case "t1":
			ref = "01";
			break;
		case "t2":
			ref = "01";
			break;
		case "t3":
			ref = "01";
			break;
		case "t4":
			ref = "01";
			break;
		case "t5":
			ref = "01";
			break;
		case "t6":
			ref = "01";
			break;
		case "t7":
			ref = "01";
			break;
		case "t8":
			ref = "01";
			break;
		case "t9":
			ref = "01";
			break;
		case "t10":
			ref = "01";
			break;
		case "t11":
			ref = "01";
			break;
		case "t12":
			ref = "01";
			break;
		case "t13":
			ref = "01";
			break;
		case "t14":
			ref = "01";
			break;
		case "t15":
			ref = "01";
			break;
		case "t16":
			ref = "01";
			break;
		case "t17":
			ref = "01";
			break;
		case "t18":
			ref = "01";
			break;
		case "t19":
			ref = "01";
			break;
		case "t20":
			ref = "01";
			break;
		case "t21":
			ref = "01";
			break;
		case "t22":
			ref = "01";
			break;
		case "t23":
			ref = "01";
			break;
		case "t24":
			ref = "01";
			break;
		case "t25":
			ref = "01";
			break;
		case "t26":
			ref = "01";
			break;
		case "t27":
			ref = "01";
			break;
		case "t28":
			ref = "01";
			break;
		case "t29":
			ref = "01";
			break;
		case "t30":
			ref = "01";
			break;

		case "n1":
			ref = "02";
			break;
		case "n2":
			ref = "02";
			break;
		case "n3":
			ref = "02";
			break;
		case "n4":
			ref = "02";
			break;
		case "n5":
			ref = "02";
			break;
		case "n6":
			ref = "02";
			break;
		case "n7":
			ref = "02";
			break;
		case "n8":
			ref = "02";
			break;
		case "n9":
			ref = "02";
			break;
		case "n10":
			ref = "02";
			break;
		case "n11":
			ref = "02";
			break;
		case "n12":
			ref = "02";
			break;
		case "n13":
			ref = "02";
			break;
		case "n14":
			ref = "02";
			break;
		case "n15":
			ref = "02";
			break;
		case "n16":
			ref = "02";
			break;
		case "n17":
			ref = "02";
			break;
		case "n18":
			ref = "02";
			break;
		case "n19":
			ref = "02";
			break;
		case "n20":
			ref = "02";
			break;

		// Dte
		case "Dte1":
			ref = "03";
			break;
		case "Dte2":
			ref = "03";
			break;
		case "Dte3":
			ref = "03";
			break;
		case "Dte4":
			ref = "03";
			break;
		case "Dte5":
			ref = "03";
			break;
		case "Dte6":
			ref = "03";
			break;
		case "Dte7":
			ref = "03";
			break;
		case "Dte8":
			ref = "03";
			break;
		case "Dte9":
			ref = "03";
			break;
		case "Dte10":
			ref = "03";
			break;

		// lov
		case "Lov1":
			ref = "04";
			break;
		case "Lov2":
			ref = "04";
			break;
		case "Lov3":
			ref = "04";
			break;
		case "Lov4":
			ref = "04";
			break;
		case "Lov5":
			ref = "04";
			break;
		case "Lov6":
			ref = "04";
			break;
		case "Lov7":
			ref = "04";
			break;
		case "Lov8":
			ref = "04";
			break;
		case "Lov9":
			ref = "04";
			break;
		case "Lov10":
			ref = "04";
			break;

		// Bol
		case "Bol1":
			ref = "05";
			break;
		case "Bol2":
			ref = "05";
			break;
		case "Bol3":
			ref = "05";
			break;
		case "Bol4":
			ref = "05";
			break;
		case "Bol5":
			ref = "05";
			break;
		case "Bol6":
			ref = "05";
			break;
		case "Bol7":
			ref = "05";
			break;
		case "Bol8":
			ref = "05";
			break;
		case "Bol9":
			ref = "05";
			break;
		case "Bol10":
			ref = "05";
			break;

		// Image
		case "Img1":
			ref = "06";
			break;
		case "Img2":
			ref = "06";
			break;
		case "Img3":
			ref = "06";
			break;
		case "Img4":
			ref = "06";
			break;
		case "Img5":
			ref = "06";
			break;
		case "Img6":
			ref = "06";
			break;
		case "Img7":
			ref = "06";
			break;
		case "Img8":
			ref = "06";
			break;
		case "Img9":
			ref = "06";
			break;
		case "Img10":
			ref = "06";
			break;

		}
		return ref;

	}

	public String ConvertFeildCodeToRef(String code) {

		switch (code) {
		// text
		case "t1":
			datatypecode = "ref022";
			break;
		case "t2":
			datatypecode = "ref022";
			break;
		case "t3":
			datatypecode = "ref022";
			break;
		case "t4":
			datatypecode = "ref022";
			break;
		case "t5":
			datatypecode = "ref022";
			break;
		case "t6":
			datatypecode = "ref022";
			break;
		case "t7":
			datatypecode = "ref022";
			break;
		case "t8":
			datatypecode = "ref022";
			break;
		case "t9":
			datatypecode = "ref022";
			break;
		case "t10":
			datatypecode = "ref022";
			break;
		case "t11":
			datatypecode = "ref022";
			break;
		case "t12":
			datatypecode = "ref022";
			break;
		case "t13":
			datatypecode = "ref022";
			break;
		case "t14":
			datatypecode = "ref022";
			break;
		case "t15":
			datatypecode = "ref022";
			break;
		case "t16":
			datatypecode = "ref022";
			break;
		case "t17":
			datatypecode = "ref022";
			break;
		case "t18":
			datatypecode = "ref022";
			break;
		case "t19":
			datatypecode = "ref022";
			break;
		case "t20":
			datatypecode = "ref022";
			break;
		case "t21":
			datatypecode = "ref022";
			break;
		case "t22":
			datatypecode = "ref022";
			break;
		case "t23":
			datatypecode = "ref022";
			break;
		case "t24":
			datatypecode = "ref022";
			break;
		case "t25":
			datatypecode = "ref022";
			break;
		case "t26":
			datatypecode = "ref022";
			break;
		case "t27":
			datatypecode = "ref022";
			break;
		case "t28":
			datatypecode = "ref022";
			break;
		case "t29":
			datatypecode = "ref022";
			break;
		case "t30":
			datatypecode = "ref022";
			break;

		case "n1":
			datatypecode = "ref023";
			break;
		case "n2":
			datatypecode = "ref023";
			break;
		case "n3":
			datatypecode = "ref023";
			break;
		case "n4":
			datatypecode = "ref023";
			break;
		case "n5":
			datatypecode = "ref023";
			break;
		case "n6":
			datatypecode = "ref023";
			break;
		case "n7":
			datatypecode = "ref023";
			break;
		case "n8":
			datatypecode = "ref023";
			break;
		case "n9":
			datatypecode = "ref023";
			break;
		case "n10":
			datatypecode = "ref023";
			break;
		case "n11":
			datatypecode = "ref023";
			break;
		case "n12":
			datatypecode = "ref023";
			break;
		case "n13":
			datatypecode = "ref023";
			break;
		case "n14":
			datatypecode = "ref023";
			break;
		case "n15":
			datatypecode = "ref023";
			break;
		case "n16":
			datatypecode = "ref023";
			break;
		case "n17":
			datatypecode = "ref023";
			break;
		case "n18":
			datatypecode = "ref023";
			break;
		case "n19":
			datatypecode = "ref023";
			break;
		case "n20":
			datatypecode = "ref023";
			break;

		// Dte
		case "Dte1":
			datatypecode = "ref024";
			break;
		case "Dte2":
			datatypecode = "ref024";
			break;
		case "Dte3":
			datatypecode = "ref024";
			break;
		case "Dte4":
			datatypecode = "ref024";
			break;
		case "Dte5":
			datatypecode = "ref024";
			break;
		case "Dte6":
			datatypecode = "ref024";
			break;
		case "Dte7":
			datatypecode = "ref024";
			break;
		case "Dte8":
			datatypecode = "ref024";
			break;
		case "Dte9":
			datatypecode = "ref024";
			break;
		case "Dte10":
			datatypecode = "ref024";
			break;

		// lov
		case "Lov1":
			datatypecode = "ref025";
			break;
		case "Lov2":
			datatypecode = "ref025";
			break;
		case "Lov3":
			datatypecode = "ref025";
			break;
		case "Lov4":
			datatypecode = "ref025";
			break;
		case "Lov5":
			datatypecode = "ref025";
			break;
		case "Lov6":
			datatypecode = "ref025";
			break;
		case "Lov7":
			datatypecode = "ref025";
			break;
		case "Lov8":
			datatypecode = "ref025";
			break;
		case "Lov9":
			datatypecode = "ref025";
			break;
		case "Lov10":
			datatypecode = "ref025";
			break;

		// Bol
		case "Bol1":
			datatypecode = "ref026";
			break;
		case "Bol2":
			datatypecode = "ref026";
			break;
		case "Bol3":
			datatypecode = "ref026";
			break;
		case "Bol4":
			datatypecode = "ref026";
			break;
		case "Bol5":
			datatypecode = "ref026";
			break;
		case "Bol6":
			datatypecode = "ref026";
			break;
		case "Bol7":
			datatypecode = "ref026";
			break;
		case "Bol8":
			datatypecode = "ref026";
			break;
		case "Bol9":
			datatypecode = "ref026";
			break;
		case "Bol10":
			datatypecode = "ref026";
			break;

		// Image
		case "Img1":
			datatypecode = "ref027";
			break;
		case "Img2":
			datatypecode = "ref027";
			break;
		case "Img3":
			datatypecode = "ref027";
			break;
		case "Img4":
			datatypecode = "ref027";
			break;
		case "Img5":
			datatypecode = "ref027";
			break;
		case "Img6":
			datatypecode = "ref027";
			break;
		case "Img7":
			datatypecode = "ref027";
			break;
		case "Img8":
			datatypecode = "ref027";
			break;
		case "Img9":
			datatypecode = "ref027";
			break;
		case "Img10":
			datatypecode = "ref027";
			break;

		}
		return datatypecode;
	}

	public String getLovRefFromFieldCode(String fieldcode) {

		switch (fieldcode) {
		case "Lov1":
			lovref = "ref028";
			break;
		case "Lov2":
			lovref = "ref028";
			break;
		case "Lov3":
			lovref = "ref028";
			break;
		case "Lov4":
			lovref = "ref028";
			break;
		case "Lov5":
			lovref = "ref028";
			break;
		case "Lov6":
			lovref = "ref028";
			break;
		case "Lov7":
			lovref = "ref028";
			break;
		case "Lov8":     
			lovref = "ref028";
			break;
		case "Lov9":
			lovref = "ref028";
			break;
		case "Lov10":
			lovref = "ref028";
			break;
		default : lovref="";break;

		}

		return lovref;
	}
	
	
	public String getReadonly(String code){
		switch(code){
		
		case "t1":
			readonly = "false";
			break;
		case "t2":
			readonly = "false";
			break;
		case "t3":
			readonly = "false";
			break;
		case "t4":
			readonly = "false";
			break;
		case "t5":
			readonly = "false";
			break;
		case "t6":
			readonly = "false";
			break;
		case "t7":
			readonly = "false";
			break;
		case "t8":
			readonly = "false";
			break;
		case "t9":
			readonly = "false";
			break;
		case "t10":
			readonly = "false";
			break;
		case "t11":
			readonly = "false";
			break;
		case "t12":
			readonly = "false";
			break;
		case "t13":
			readonly = "false";
			break;
		case "t14":
			readonly = "false";
			break;
		case "t15":
			readonly = "false";
			break;
		case "t16":
			readonly = "false";
			break;
		case "t17":
			readonly = "false";
			break;
		case "t18":
			readonly = "false";
			break;
		case "t19":
			readonly = "false";
			break;
		case "t20":
			readonly = "false";
			break;
		case "t21":
			readonly = "false";
			break;
		case "t22":
			readonly = "false";
			break;
		case "t23":
			readonly = "false";
			break;
		case "t24":
			readonly = "false";
			break;
		case "t25":
			readonly = "false";
			break;
		case "t26":
			readonly = "false";
			break;
		case "t27":
			readonly = "false";
			break;
		case "t28":
			readonly = "false";
			break;
		case "t29":
			readonly = "false";
			break;
		case "t30":
			readonly = "false";
			break;
			
		case "n1":
			readonly="false";
			break;
		case "n2":
			readonly="false";
			break;
		case "n3":
			readonly="false";
			break;
		case "n4":
			readonly="false";
			break;
		case "n5":
			readonly="false";
			break;
		case "n6":
			readonly="false";
			break;
		case "n7":
			readonly="false";
			break;
		case "n8":
			readonly="false";
			break;
		case "n9":
			readonly="false";
			break;
		case "n10":
			readonly="false";
			break;
		case "n11":
			readonly="false";
			break;
		case "n12":
			readonly="false";
			break;
		case "n13":
			readonly="false";
			break;
		case "n14":
			readonly="false";
			break;
		case "n15":
			readonly="false";
			break;
		case "n16":
			readonly="false";
			break;
		case "n17":
			readonly="false";
			break;
		case "n18":
			readonly="false";
			break;
		case "n19":
			readonly="false";
			break;
		case "n20":
			readonly="false";
			break;

		// Dte
		case "Dte1":
			readonly="false";
			break;
		case "Dte2":
			readonly="false";
			break;
		case "Dte3":
			readonly="false";
			break;
		case "Dte4":
			readonly="false";
			break;
		case "Dte5":
			readonly="false";
			break;
		case "Dte6":
			readonly="false";
			break;
		case "Dte7":
			readonly="false";
			break;
		case "Dte8":
			readonly="false";
			break;
		case "Dte9":
			readonly="false";
			break;
		case "Dte10":
			readonly="false";
			break;

		// lov
		case "Lov1":
			readonly="true";
			break;
		case "Lov2":
			readonly="true";
			break;
		case "Lov3":
			readonly="true";
			break;
		case "Lov4":
			readonly="true";
			break;
		case "Lov5":
			readonly="true";
			break;
		case "Lov6":
			readonly="true";
			break;
		case "Lov7":
			readonly="true";
			break;
		case "Lov8":
			readonly="true";
			break;
		case "Lov9":
			readonly="true";
			break;
		case "Lov10":
			readonly="true";
			break;

		// Bol
		case "Bol1":
			readonly="false";
			break;
		case "Bol2":
			readonly="false";
			break;
		case "Bol3":
			readonly="false";
			break;
		case "Bol4":
			readonly="false";
			break;
		case "Bol5":
			readonly="false";
			break;
		case "Bol6":
			readonly="false";
			break;
		case "Bol7":
			readonly="false";
			break;
		case "Bol8":
			readonly="false";
			break;
		case "Bol9":
			readonly="false";
			break;
		case "Bol10":
			readonly="false";
			break;

		// Image
		case "Img1":
			readonly="false";
			break;
		case "Img2":
			readonly="false";
			break;
		case "Img3":
			readonly="false";
			break;
		case "Img4":
			readonly="false";
			break;
		case "Img5":
			readonly="false";
			break;
		case "Img6":
			readonly="false";
			break;
		case "Img7":
			readonly="false";
			break;
		case "Img8":
			readonly="false";
			break;
		case "Img9":
			readonly="false";
			break;
		case "Img10":
			readonly="false";
			break;
			
			
		}
		return readonly;
	}
	

}
