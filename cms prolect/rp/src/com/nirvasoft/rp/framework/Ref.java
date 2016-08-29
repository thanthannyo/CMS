package com.nirvasoft.rp.framework;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class Ref {	
	private String value;
	private String caption;
	void clearProperty(){
		value="";
		caption = "";
	}
	
	public Ref(){
		clearProperty();
	}
	public String getvalue() {
		return value;
	}
	public void setvalue(String value) {
		this.value = value;
	}
	public String getcaption() {
		return caption;
	}
	public void setcaption(String division) {
		this.caption = division;
	}	

}
