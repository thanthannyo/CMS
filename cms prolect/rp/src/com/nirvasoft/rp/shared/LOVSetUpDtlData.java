package com.nirvasoft.rp.shared;
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class LOVSetUpDtlData {

	private String lov;
	private String lovCde;
	private String lovDesc1;

	private int srno;
	void clearProperty(){
		lov = "";
		lovCde = "";
		lovDesc1 = "";
		srno = 1;
	}


	public String getLov() {
		return lov;
	}


	public void setLov(String lov) {
		this.lov = lov;
	}


	public String getLovCde() {
		return lovCde;
	}


	public void setLovCde(String lovCde) {
		this.lovCde = lovCde;
	}


	public String getLovDesc1() {
		return lovDesc1;
	}


	public void setLovDesc1(String lovDesc1) {
		this.lovDesc1 = lovDesc1;
	}


	public int getSrno() {
		return srno;
	}


	public void setSrno(int srno) {
		this.srno = srno;
	}
	

}
