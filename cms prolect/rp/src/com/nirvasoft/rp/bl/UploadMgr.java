package com.nirvasoft.rp.bl;

import java.io.File;
import java.sql.Connection;
import java.sql.SQLException;

import com.nirvasoft.rp.dao.DAOManager;
import com.nirvasoft.rp.dao.UploadDao;

public class UploadMgr {
	
public static void savePhoto(File f) {
		
		DAOManager l_DAO = new DAOManager();
		Connection l_Conn = null;
		
		try{
			
		    l_Conn = l_DAO.CreateConnection();
		    UploadDao.savePhoto(f, l_Conn);
	
			
		}catch(SQLException e){
			
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
		
		
	}
}
