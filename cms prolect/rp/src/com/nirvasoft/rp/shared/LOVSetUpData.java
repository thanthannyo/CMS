package com.nirvasoft.rp.shared;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class LOVSetUpData {

	private String lovNo;
	private long sysKey;
	private String createdDate;
	private String modiDate;
	private String userID;
	private String recStatus;
	private LOVSetUpDtlData[] data;
	private String lovDesc2;

	private String messagecode;
	private String messagedesc;

	void clearProperty() {
		
		lovNo = "";
		sysKey = 0;
		createdDate = "";
		modiDate = "";
		userID = "";
		recStatus = "";
		data=null;
		lovDesc2 = "";

		messagecode = "";
		messagedesc = "";
	}

	public String getLovNo() {
		return lovNo;
	}

	public void setLovNo(String lovNo) {
		this.lovNo = lovNo;
	}

	public long getSysKey() {
		return sysKey;
	}

	public void setSysKey(long sysKey) {
		this.sysKey = sysKey;
	}

	public String getCreatedDate() {
		return createdDate;
	}

	public void setCreatedDate(String createdDate) {
		this.createdDate = createdDate;
	}

	public String getModiDate() {
		return modiDate;
	}

	public void setModiDate(String modiDate) {
		this.modiDate = modiDate;
	}

	public String getUserID() {
		return userID;
	}

	public void setUserID(String userID) {
		this.userID = userID;
	}

	public String getRecStatus() {
		return recStatus;
	}

	public void setRecStatus(String recStatus) {
		this.recStatus = recStatus;
	}

	public String getLovDesc2() {
		return lovDesc2;
	}

	public void setLovDesc2(String lovDesc2) {
		this.lovDesc2 = lovDesc2;
	}

	public String getMessagecode() {
		return messagecode;
	}

	public void setMessagecode(String messagecode) {
		this.messagecode = messagecode;
	}

	public String getMessagedesc() {
		return messagedesc;
	}

	public void setMessagedesc(String messagedesc) {
		this.messagedesc = messagedesc;
	}

	public LOVSetUpDtlData[] getData() {
		return data;
	}

	public void setData(LOVSetUpDtlData[] data) {
		this.data = data;
	}
	
	
}
