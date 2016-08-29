package com.nirvasoft.rp.shared;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class CMSMerchantSetUpDetail {

	private int srno;
	private String datatype;
	private String fieldcode;
	private String fielddesc;
	private String fieldref;
	private String refcode;
	private String lovref;	
	private String readonly;
	
	private void clearProperty(){
		datatype = "";
		fieldcode="";
		fielddesc = "";
		fieldref = "";
		refcode="";
		lovref="";
		readonly="";
	}


	public CMSMerchantSetUpDetail(){
		
	}

	public int getsrno() {
		return srno;
	}

	public void setsrno(int srno) {
		this.srno = srno;
	}

	public String getdatatype() {
		return datatype;
	}

	public void setdatatype(String datatype) {
		this.datatype = datatype;
	}

	public String getfieldcode() {
		return fieldcode;
	}

	public void setfieldcode(String fieldcode) {
		this.fieldcode = fieldcode;
	}

	public String getfielddesc() {
		return fielddesc;
	}

	public void setfielddesc(String fielddesc) {
		this.fielddesc = fielddesc;
	}

	public String getfieldref() {
		return fieldref;
	}

	public void setfieldref(String fieldref) {
		this.fieldref = fieldref;
	}

	public String getrefcode() {
		return refcode;
	}

	public void setrefcode(String refcode) {
		this.refcode = refcode;
	}

	public String getlovref() {
		return lovref;
	}

	public void setlovref(String lovref) {
		this.lovref = lovref;
	}
	
	public String getreadonly() {
		return readonly;
	}

	public void setreadonly(String readonly) {
		this.readonly = readonly;
	}

}
