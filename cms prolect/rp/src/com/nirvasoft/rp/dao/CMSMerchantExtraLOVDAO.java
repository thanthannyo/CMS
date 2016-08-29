package com.nirvasoft.rp.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import com.nirvasoft.rp.framework.Ref;
import com.nirvasoft.rp.shared.LOVSetUpData;

public class CMSMerchantExtraLOVDAO {

	public Ref[] getLOVList(Connection pConn) {
		Ref ref = new Ref();
		Ref[] arr = null;
		int value=0;
		int count = 0;
		try {
			String l_Query = "select  count(Distinct LOVNo) c from CMSMerchantExtraLOV";
			PreparedStatement pstmt = pConn.prepareStatement(l_Query);
						
			ResultSet rs = pstmt.executeQuery();
			
			if(rs.next()) {
				count = rs.getInt("c");
			}		
			arr = new Ref[count];
			
			l_Query = "select Distinct (LOVNo) as LovNo  from CMSMerchantExtraLOV ";
			pstmt = pConn.prepareStatement(l_Query);					
			rs = pstmt.executeQuery();
			
			int index = 0;
			while(rs.next()) {
				ref = new Ref();
				ref.setcaption(rs.getString("LovNo"));
				ref.setvalue(rs.getString("LovNo"));
				arr[index] = ref;
				index ++;
			}			
			
		} catch (Exception e) {
			e.printStackTrace();
		}
		return arr;
	}
	
	
	public LOVSetUpData getLOVByLOVNo(String LOVNo, Connection pConn) throws SQLException {				
		LOVSetUpData ret = new LOVSetUpData();		
		String l_Query = "select Top 1  LOVDesc2  from CMSMerchantExtraLOV where LOVNo=?  ";
		
		PreparedStatement pstmt = pConn.prepareStatement(l_Query);
		
		pstmt.setString(1, LOVNo);
		ResultSet rs = pstmt.executeQuery();		
		while(rs.next()) {
			ret.setLovDesc2(rs.getString("LOVDesc2"));					
		}
		
		return ret;
	}
	
	
}
