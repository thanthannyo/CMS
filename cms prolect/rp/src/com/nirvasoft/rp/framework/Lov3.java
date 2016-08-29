package com.nirvasoft.rp.framework;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class Lov3 {
	private Ref[] ref001;
	private Ref[] ref002;
	private Ref[] ref003;
	private Ref[] ref004;
	private Ref[] ref005;
	private Ref[] ref006;
	private Ref[] ref007;
	private Ref[] ref008;
	private Ref[] ref009;
	private Ref[] ref010;
	
    void clearProperty(){
    	ref001 = null;
    	ref002 = null;
    	ref003 = null;
    	ref004 = null;
    	ref005 = null;
    	ref006 = null;
    	ref007 = null;
    	ref008 = null;
    	ref009 = null;
    	ref010 = null;
    }
    
    public Lov3(){
    	clearProperty();
    }

	public Ref[] getRef001() {
		return ref001;
	}

	public void setRef001(Ref[] ref001) {
		this.ref001 = ref001;
	}

	public Ref[] getRef002() {
		return ref002;
	}

	public void setRef002(Ref[] ref002) {
		this.ref002 = ref002;
	}

	public Ref[] getRef003() {
		return ref003;
	}

	public void setRef003(Ref[] ref003) {
		this.ref003 = ref003;
	}

	public Ref[] getRef004() {
		return ref004;
	}

	public void setRef004(Ref[] ref004) {
		this.ref004 = ref004;
	}

	public Ref[] getRef005() {
		return ref005;
	}

	public void setRef005(Ref[] ref005) {
		this.ref005 = ref005;
	}

	public Ref[] getRef006() {
		return ref006;
	}

	public void setRef006(Ref[] ref006) {
		this.ref006 = ref006;
	}

	public Ref[] getRef007() {
		return ref007;
	}

	public void setRef007(Ref[] ref007) {
		this.ref007 = ref007;
	}

	public Ref[] getRef008() {
		return ref008;
	}

	public void setRef008(Ref[] ref008) {
		this.ref008 = ref008;
	}

	public Ref[] getRef009() {
		return ref009;
	}

	public void setRef009(Ref[] ref009) {
		this.ref009 = ref009;
	}

	public Ref[] getRef010() {
		return ref010;
	}

	public void setRef010(Ref[] ref010) {
		this.ref010 = ref010;
	}

}
