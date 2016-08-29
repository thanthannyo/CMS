package com.nirvasoft.rp.shared;

import javax.xml.bind.annotation.XmlRootElement;


@XmlRootElement
public class FieldData {
	
	private String fieldCode;
	private String fieldLabel;
	private String fieldRef;
	private String restType;
	private String datatype;
	private String fieldValue;
	private LOVSetUpDtlData[] lovData;

	
	public FieldData(){
		fieldCode="";
		 fieldLabel="";
		 fieldRef="";
		 datatype="";
		 fieldValue="";
	}
	public String getFieldValue() {
		return fieldValue;
	}
	public void setFieldValue(String fieldValue) {
		this.fieldValue = fieldValue;
	}
	public String getFieldCode() {
		return fieldCode;
	}
	public void setFieldCode(String fieldCode) {
		this.fieldCode = fieldCode;
	}
	public String getFieldLabel() {
		return fieldLabel;
	}
	public void setFieldLabel(String fieldLabel) {
		this.fieldLabel = fieldLabel;
	}
	public String getFieldRef() {
		return fieldRef;
	}
	public void setFieldRef(String fieldRef) {
		this.fieldRef = fieldRef;
	}
	public String getDatatype() {
		return datatype;
	}
	public void setDatatype(String datatype) {
		this.datatype = datatype;
	}
	public String getRestType() {
		return restType;
	}
	public void setRestType(String restType) {
		this.restType = restType;
	}
	public LOVSetUpDtlData[] getLovData() {
		return lovData;
	}
	public void setLovData(LOVSetUpDtlData[] lovData) {
		this.lovData = lovData;
	}


}
