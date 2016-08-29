package com.nirvasoft.rp.shared;

import javax.xml.bind.annotation.XmlRootElement;


@XmlRootElement
public class MerchantEnryArr {
	
	private MerchantListFormTable[] MerchantArr;
	
	public MerchantEnryArr(){
	/*	data = new MerchantListFormTable[2];
    	
		MerchantListFormTable d = new MerchantListFormTable();
    	d.sethub("hayyyyyyyyyyyyyyyyy success");    	
    	data[0] = d;
    	d = new SurveyListData();
    	d.sethub("hayyyyyyyyyyyyyyyyy success2");    	
    	data[1] = d;*/
	}

	public MerchantListFormTable[] getMerchantArr() {
		return MerchantArr;
	}

	public void setMerchantArr(MerchantListFormTable[] merchantArr) {
		MerchantArr = merchantArr
				;
	}

}
