package com.nirvasoft.rp.bl;

import java.sql.Connection;
import java.sql.SQLException;
import java.util.ArrayList;


import com.nirvasoft.rp.dao.DAOManager;
import com.nirvasoft.rp.dao.MerchantEntryDAO;
import com.nirvasoft.rp.shared.FieldData;
import com.nirvasoft.rp.shared.MerchantListFormTable;

public class DBMerchantEntryMgr {

	public ArrayList<MerchantListFormTable> getmerchantIDList(){
		ArrayList<MerchantListFormTable> ret=new ArrayList<MerchantListFormTable>();
		
		DAOManager dao=new DAOManager();
		Connection Conn =null;
		MerchantEntryDAO mer_DAO=new MerchantEntryDAO();
		
		try{
			Conn = dao.CreateConnection();
			ret = mer_DAO.getmerchantIDList( Conn);
		}catch (Exception e) {
			e.printStackTrace();
		}finally{
			try {
				if(!Conn.isClosed())
					Conn.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}
	return ret;	
	}
	
	public MerchantListFormTable getMerchantEntryByID(String merchantid){
		MerchantListFormTable  ret=new MerchantListFormTable();
		
		DAOManager dao=new DAOManager();
		Connection Conn =null;
		MerchantEntryDAO mer_DAO=new MerchantEntryDAO();
		
		try{
			Conn = dao.CreateConnection();
			ret = mer_DAO.getMerchantEntryByID(merchantid, Conn);
		}catch (Exception e) {
			e.printStackTrace();
		}finally{
			try {
				if(!Conn.isClosed())
					Conn.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}
	return ret;	
	}
	public MerchantListFormTable saveMerchantEntry(MerchantListFormTable p){
		DAOManager l_DAO = new DAOManager();
		Connection l_Conn = null;
		MerchantEntryDAO l_MerDAO = new MerchantEntryDAO();
		String key = "";
		boolean  ret = false;
		try{
			l_Conn = l_DAO.CreateConnection();
			if(l_MerDAO.checkMerchantEntryAlreadyexist(p.getMerchantID(), l_Conn)){
			ret = l_MerDAO.updateMerchantEntry(p, l_Conn);
			if(ret){
				p.setMessageCode("0000");
				p.setMessageDesc("Update Successfully");
			}else{
				p.setMessageCode("0014");
				p.setMessageDesc("Save Fail");
			}
			}else{
			ret = l_MerDAO.saveMerchantEntry(p, l_Conn);
			if(ret){
				p.setMessageCode("0000");
				p.setMessageDesc("Save Successfully");
			}else{
				p.setMessageCode("0014");
				p.setMessageDesc("Save Fail");
			}
			}
			
		}
		catch (Exception e) {
			e.printStackTrace();
		}
		finally{
			try {
				if(!l_Conn.isClosed())
					l_Conn.close();
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		return p;
	}
	public MerchantListFormTable getCMSEntryByID(String merchantId){
		MerchantListFormTable l_Data = new MerchantListFormTable();
		DAOManager l_DAO = new DAOManager();
		Connection l_Conn = null;
		MerchantEntryDAO l_MerDAO = new MerchantEntryDAO();
		String key = "";
		boolean  ret = false;
		try{
			l_Conn = l_DAO.CreateConnection();
			
			l_Data = l_MerDAO.getCMSEntryByID(merchantId, l_Conn);
			
			
		}
		catch (Exception e) {
			e.printStackTrace();
		}
		finally{
			try {
				if(!l_Conn.isClosed())
					l_Conn.close();
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		return l_Data;
	}
	//for list Button
		public ArrayList<MerchantListFormTable> getmerchantEntryList(){
			ArrayList<MerchantListFormTable> ret=new ArrayList<MerchantListFormTable>();
			
			DAOManager dao=new DAOManager();
			Connection Conn =null;
			MerchantEntryDAO mer_DAO=new MerchantEntryDAO();
			
			try{
				Conn = dao.CreateConnection();
				ret = mer_DAO.getmerchantEntryList( Conn);
			}catch (Exception e) {
				e.printStackTrace();
			}finally{
				try {
					if(!Conn.isClosed())
						Conn.close();
				} catch (SQLException e) {
					e.printStackTrace();
				}
			}
		return ret;	
		}
}
