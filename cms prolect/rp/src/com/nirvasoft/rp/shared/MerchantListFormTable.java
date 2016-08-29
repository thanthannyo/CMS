package com.nirvasoft.rp.shared;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class MerchantListFormTable {
	private String merchantID;
	private String name;
	private String messageCode;
	private String messageDesc;
	private FieldData[] fieldData;
	
	public MerchantListFormTable(){
		clearProperty();
	}
	private void clearProperty(){
		merchantID = "";
		name ="";
		fieldData = null;
	}
	
	public String getMerchantID() {
		return merchantID;
	}
	public void setMerchantID(String merchantID) {
		this.merchantID = merchantID;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public FieldData[] getFieldData() {
		return fieldData;
	}
	public void setFieldData(FieldData[] fieldData) {
		this.fieldData = fieldData;
	}
	public String getMessageDesc() {
		return messageDesc;
	}
	public void setMessageDesc(String messageDesc) {
		this.messageDesc = messageDesc;
	}
	public String getMessageCode() {
		return messageCode;
	}
	public void setMessageCode(String messageCode) {
		this.messageCode = messageCode;
	}
	
	
	

}
