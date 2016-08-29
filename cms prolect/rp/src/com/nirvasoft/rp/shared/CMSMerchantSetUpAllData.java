package com.nirvasoft.rp.shared;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class CMSMerchantSetUpAllData {

	private String merchantid;
	private String name;
	private CMSMerchantSetUpDetail[]  data;
	private String messagecode;
	private String messagedesc;
	
	
	private void clearProperty(){
		merchantid = "";
		name="";
	}

	public CMSMerchantSetUpDetail[] getdata() {
		return data;
	}

	public void setdata(CMSMerchantSetUpDetail[] data) {
		this.data = data;
	}

	public String getmerchantid() {
		return merchantid;
	}

	public void setmerchantid(String merchantid) {
		this.merchantid = merchantid;
	}

	public String getname() {
		return name;
	}

	public void setname(String name) {
		this.name = name;
	}
	
	public String getmessagecode() {
		return messagecode;
	}

	public void setmessagecode(String messagecode) {
		this.messagecode = messagecode;
	}

	public String getmessagedesc() {
		return messagedesc;
	}

	public void setmessagedesc(String messagedesc) {
		this.messagedesc = messagedesc;
	}
}
