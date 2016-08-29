package com.nirvasoft.rp.bl;

import java.sql.Connection;
import java.sql.SQLException;

import com.nirvasoft.rp.dao.DAOManager;
import com.nirvasoft.rp.dao.LOVSetUpDAO;
import com.nirvasoft.rp.shared.LOVSetUpData;
import com.nirvasoft.rp.shared.LOVSetUpDataArr;

public class LOVSetUpMgr {

		public LOVSetUpData savelovSetUp(LOVSetUpData aData) {
			LOVSetUpData ret= new LOVSetUpData();
			DAOManager l_DAO = new DAOManager();
			Connection l_Conn = null;
			LOVSetUpDAO l_LOVSetUpDAO = new LOVSetUpDAO();
			String id="";
			try {
				l_Conn = l_DAO.CreateConnection();		
				
				if(aData.getLovNo().equalsIgnoreCase("TBA")){
					
					id = l_DAO.getNewLOVNumber(l_Conn);
					aData.setLovNo(id);
					System.out.println("ID"+id);
					l_Conn = l_DAO.CreateConnection();
					ret=l_LOVSetUpDAO.savelovSetUp(aData,l_Conn);
				}
			} 
			catch (Exception e) {
				e.printStackTrace();
				ret.setMessagedesc(e.getMessage());
			} 
			finally {
				try {
					if (!l_Conn.isClosed())
						l_Conn.close();
				} catch (SQLException e) {
					e.printStackTrace();
					ret.setMessagedesc(e.getMessage());
				}
			}
			return ret;
		}
		
		public LOVSetUpDataArr lovSetUplist(LOVSetUpDataArr data) {
			LOVSetUpDataArr ret = new LOVSetUpDataArr();
			DAOManager l_DAO = new DAOManager();
			Connection l_Conn = null;
			LOVSetUpDAO l_LOVSetUpDAO = new LOVSetUpDAO();
			try {
				l_Conn = l_DAO.CreateConnection();
								
				ret = l_LOVSetUpDAO.lovSetUplist(l_Conn);
			} catch (Exception e) {
				e.printStackTrace();
			} finally {
				try {
					if (!l_Conn.isClosed())
						l_Conn.close();
				} catch (SQLException e) {
					e.printStackTrace();
				}
			}
			return ret;
		}
		
		public LOVSetUpData lovNobyID(String pdata) {
			LOVSetUpData ret = new LOVSetUpData();
			DAOManager l_DAO = new DAOManager();
			Connection l_Conn = null;
			LOVSetUpDAO l_LOVSetUpDAO = new LOVSetUpDAO();
			try {
				l_Conn = l_DAO.CreateConnection();
				ret = l_LOVSetUpDAO.lovNobyID(pdata, l_Conn);
			} catch (Exception e) {
				e.printStackTrace();

			} finally {
				try {
					if (!l_Conn.isClosed())
						l_Conn.close();
				} catch (SQLException e) {
				}
			}
			return ret;
		}
}
