package com.nirvasoft.rp.shared;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class LOVSetUpDataArr {

	private LOVSetUpData[] data;
	

	public LOVSetUpDataArr(){
		clearProperty();
	}
	void clearProperty(){
		data=null;
	}
	public LOVSetUpData[] getData() {
		return data;
	}
	public void setData(LOVSetUpData[] data) {
		this.data = data;
	}

	
}
