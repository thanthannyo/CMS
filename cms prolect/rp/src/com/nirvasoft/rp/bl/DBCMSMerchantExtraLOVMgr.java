package com.nirvasoft.rp.bl;

import java.sql.Connection;
import java.sql.SQLException;
import java.util.ArrayList;

import com.nirvasoft.rp.dao.CMSMerchantExtraLOVDAO;
import com.nirvasoft.rp.dao.DAOManager;
import com.nirvasoft.rp.framework.Lov3;
import com.nirvasoft.rp.framework.Ref;
import com.nirvasoft.rp.shared.LOVSetUpData;

public class DBCMSMerchantExtraLOVMgr {


	public Lov3 getLoadLOV() {
		
		Lov3 ret = new Lov3();
		Ref[] arr = null;
		DAOManager l_DAO = new DAOManager();
		Connection l_Conn = null;
		CMSMerchantExtraLOVDAO l_LOVDAO= new CMSMerchantExtraLOVDAO();
		
		try{
			l_Conn = l_DAO.CreateConnection();			
			arr = l_LOVDAO.getLOVList(l_Conn);			
			ret.setRef004(arr);			
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
	
	public LOVSetUpData getLOVByLOVNo(String LOVNo){
		LOVSetUpData ret = new LOVSetUpData();
		DAOManager l_DAOMgr = new DAOManager();
		Connection l_Conn = null;
		CMSMerchantExtraLOVDAO l_LOVDAO= new CMSMerchantExtraLOVDAO();
		
		try{
			l_Conn = l_DAOMgr.CreateConnection();
			ret = l_LOVDAO.getLOVByLOVNo(LOVNo, l_Conn);
			
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

	
	
	
	
}
