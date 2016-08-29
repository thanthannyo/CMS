package com.nirvasoft.rp.bl;

import java.sql.Connection;
import java.sql.SQLException;
import java.util.ArrayList;
import com.nirvasoft.rp.dao.CMSMerchantExtraDAO;
import com.nirvasoft.rp.dao.DAOManager;
import com.nirvasoft.rp.shared.CMSMerchantData;
import com.nirvasoft.rp.shared.CMSMerchantSetUpAllData;



public class DBCMSMerchantExtraMgr {

	public ArrayList<CMSMerchantData> getCMSMerchantList(){
		ArrayList<CMSMerchantData> ret=new ArrayList<CMSMerchantData> ();		
		DAOManager l_DAOMgr = new DAOManager();
		Connection l_Conn = null;
		CMSMerchantExtraDAO l_DAO = new CMSMerchantExtraDAO();
		try{
			l_Conn = l_DAOMgr.CreateConnection();
			ret = l_DAO.getCMSMerchantList(l_Conn);
		}
		catch (Exception e) {
			e.printStackTrace();
		}
		finally{
			try {
				if(!l_Conn.isClosed())
					l_Conn.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}
		return ret;
	}
	
	public CMSMerchantData getCMSMerchantByID(String merchantID){
		CMSMerchantData ret = new CMSMerchantData();
		DAOManager l_DAOMgr = new DAOManager();
		Connection l_Conn = null;
		CMSMerchantExtraDAO l_DAO = new CMSMerchantExtraDAO();
		try{
			l_Conn = l_DAOMgr.CreateConnection();
			ret = l_DAO.getCMSMerchantByID(merchantID, l_Conn);			
		}
		catch (Exception e) {
			e.printStackTrace();			
		}
		finally{
			try {
				if(!l_Conn.isClosed())
					l_Conn.close();
			} catch (SQLException e) {
				e.printStackTrace();				
			}
		}
		return ret;
	}
	
	//Save
	public CMSMerchantSetUpAllData saveCMSMerchantExtraSetup(CMSMerchantSetUpAllData aData){
		CMSMerchantSetUpAllData ret = new CMSMerchantSetUpAllData();
		DAOManager dao = new DAOManager(); 
		Connection Conn = null;		
		CMSMerchantExtraDAO l_DAO = new CMSMerchantExtraDAO();		
		//insert query		
		try{			
			Conn = dao.CreateConnection();			
			ret = l_DAO.saveCMSMerchantExtraSetUp(aData, Conn);					
		}
		
		catch (Exception e) {
			e.printStackTrace();	
			ret.setmessagedesc(e.getMessage());
		}
		finally{
			try {
				if(!Conn.isClosed())
					Conn.close();
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
				ret.setmessagedesc(e.getMessage());
			}
		}			
		return ret;		
		
	}
	
	

	public ArrayList<CMSMerchantData> getCMSMerchantExtraList(){
		ArrayList<CMSMerchantData> ret=new ArrayList<CMSMerchantData> ();		
		DAOManager l_DAOMgr = new DAOManager();
		Connection l_Conn = null;
		CMSMerchantExtraDAO l_DAO = new CMSMerchantExtraDAO();
		try{
			l_Conn = l_DAOMgr.CreateConnection();
			ret = l_DAO.getCMSMerchantExtraList(l_Conn);
		}
		catch (Exception e) {
			e.printStackTrace();
		}
		finally{
			try {
				if(!l_Conn.isClosed())
					l_Conn.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}
		return ret;
	}
	
	public CMSMerchantSetUpAllData getCMSMerchantSetupAllDataByID(String merchantID){
		CMSMerchantSetUpAllData ret = new CMSMerchantSetUpAllData();
		DAOManager l_DAOMgr = new DAOManager();
		Connection l_Conn = null;
		CMSMerchantExtraDAO l_DAO = new CMSMerchantExtraDAO();
		try{
			l_Conn = l_DAOMgr.CreateConnection();
			ret = l_DAO.getCMSMerchantSetUpByID(merchantID, l_Conn);
			
		}
		catch (Exception e) {
			e.printStackTrace();
			ret.setmessagecode("0014");
			ret.setmessagedesc(e.getMessage());
		}
		finally{
			try {
				if(!l_Conn.isClosed())
					l_Conn.close();
			} catch (SQLException e) {
				e.printStackTrace();
				ret.setmessagecode("0014");
				ret.setmessagedesc(e.getMessage());
			}
		}
		return ret;
	}


	
	
	
}
