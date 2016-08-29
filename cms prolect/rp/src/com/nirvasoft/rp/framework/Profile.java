package com.nirvasoft.rp.framework;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class Profile {
	private String userid;
	private String password;
	private String passcode;
	private String username;
	private String domain;
	private String logotext;
	private String logolink;
	private long role;
	private boolean commandcenter;
	private Menu[] menus; 
	private Menu[] rightmenus; 
	
	public String getUserID() { return userid; } 
	public void setUserID(String p) {this.userid = p;}
	public String getPassword() { return password; } 
	public void setPassword(String p) {this.password = p;}
	public String getPasscode() { return passcode; } 
	public void setPasscode(String p) {this.passcode = p;}
	public String getUserName() { return username; } 
	public void setUserName(String p) {this.username = p;}
	public String getDomain() { return domain; } 
	public long getRole() { return role; } 
	public void setRole(long p) {this.role = p;}
	public void setDomain(String p) {this.domain = p;}
	public String getLogoText() { return logotext; } 
	public void setLogoText(String p) {this.logotext = p;}	
	public String getLogoLink() { return logolink; } 
	public void setLogoLink(String p) {this.logolink = p;}
	public Menu[] getMenus() { return menus; } 
	public void setMenus(Menu[] p) {this.menus = p;}
	public Menu[] getRightMenus() { return rightmenus; } 
	public void setRightMenus(Menu[] p) {this.rightmenus = p;}
	public boolean getCommandCenter() { return commandcenter; } 
	public void setCommandCenter(boolean p) {this.commandcenter = p;}
	public Profile(){
		username="Dr Tun";
		logotext="iCBS";
		logolink="Menu00";
		role=99;
		commandcenter=true;
		//standard menu
		menus = new Menu[5];
		Menu obj = new Menu();
			obj.setMenuItem("Menu01");
			obj.setCaption("Customers");
		menus[0]=obj;
		obj = new Menu();
			obj.setMenuItem("Menu02");
			obj.setCaption("Services");
		menus[1]=obj;
		obj = new Menu();
			obj.setMenuItem("Menu03");
			obj.setCaption("Products");
		menus[2]=obj;
		obj = new Menu();
			obj.setMenuItem("");
			obj.setCaption("Sub Menu");
			Menu[] menuitems = new Menu[3];
			Menu subobj = new Menu();
				subobj.setMenuItem("Menu01");
				subobj.setCaption("AAA");
			menuitems[0]=subobj;
			subobj = new Menu();
				subobj.setMenuItem("Menu02");
				subobj.setCaption("BBB");
			menuitems[1]=subobj;
			subobj = new Menu();
				subobj.setMenuItem("Menu03");
				subobj.setCaption("CCC");
			menuitems[2]=subobj;
			obj.setMenuItems(menuitems);
		menus[3]=obj;
		

		
		rightmenus = new Menu[2];
		obj = new Menu();
			obj.setMenuItem("");
			obj.setCaption("Settings"); 
			menuitems  = new Menu[3];
			subobj = new Menu();
				subobj.setMenuItem("Menu01");
				subobj.setCaption("AAA");
			menuitems[0]=subobj;
			subobj = new Menu();
				subobj.setMenuItem("Menu02");
				subobj.setCaption("BBB");
			menuitems[1]=subobj;
			subobj = new Menu();
				subobj.setMenuItem("Menu03");
				subobj.setCaption("CCC");
			menuitems[2]=subobj;
			obj.setMenuItems(menuitems);
		rightmenus[0]=obj;
		
		obj = new Menu();
			obj.setMenuItem("Login");
			obj.setCaption("Sign Out");
		rightmenus[1]=obj;
		
		
	}
	
	private long syskey; 
	private String t1;  
	private String t2;  
	private String t3;  
	private String t4;  
	private String t5;  
	private String t6;  
	private double n1; 
	private double n2; 
	private double n3; 
	public long getSysKey() { return syskey; } 
	public void setSysKey(long p) {this.syskey= p;}
	public String getT1() { return t1; } 
	public void setT1(String p) {this.t1 = p;}
	public String getT2() { return t2; } 
	public void setT2(String p) {this.t2 = p;}
	public String getT3() { return t3; } 
	public void setT3(String p) {this.t3 = p;}
	public String getT4() { return t4; } 
	public void setT4(String p) {this.t4 = p;}
	public String getT5() { return t5; } 
	public void setT5(String p) {this.t5 = p;}
	public String getT6() { return t6; } 
	public void setT6(String p) {this.t6 = p;}
	public double getN1() { return n1; } 
	public void setN1(double p) {this.n1 = p;}
	public double getN2() { return n2; } 
	public void setN2(double p) {this.n2 = p;}
	public double getN3() { return n3; } 
	public void setN3(double p) {this.n3 = p;}
}
