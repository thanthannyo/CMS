package com.nirvasoft.rp.shared;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class CMSMerchantData {

	private String merchantid;
	private String name;
	
	
	private void clearProperty(){
		merchantid = "";
		name="";
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
	
}
