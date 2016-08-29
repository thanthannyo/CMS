package com.nirvasoft.rp.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import com.nirvasoft.rp.shared.LOVSetUpData;
import com.nirvasoft.rp.shared.LOVSetUpDataArr;
import com.nirvasoft.rp.shared.LOVSetUpDtlData;
import com.nirvasoft.rp.util.FileUtil;

public class LOVSetUpDAO {

	public LOVSetUpData savelovSetUp(LOVSetUpData aData, Connection aConn) throws SQLException{
		LOVSetUpData ret = new LOVSetUpData();
		
		/*String query = "INSERT INTO CMSMerchantExtraLOV (LOVNo,CreatedDate,ModiDate,UserID,RecStatus,LOVDesc2) VALUES (?,?,?,?,?,?)";
		PreparedStatement pstmt = aConn.prepareStatement(query);
	

		pstmt.executeUpdate();
		pstmt.close();*/

		for (int i = 0; i < aData.getData().length; i++) {
			String query = "INSERT INTO CMSMerchantExtraLOV (LOVNo,CreatedDate,ModiDate,UserID,RecStatus,LOVDesc2,LOV,LOVCde,LOVDesc1) VALUES (?,?,?,?,?,?,?,?,?)";
			PreparedStatement pstmt = aConn.prepareStatement(query);
			pstmt = aConn.prepareStatement(query);
			
			pstmt.setString(1,  aData.getLovNo());
			pstmt.setString(2, FileUtil.datetoDBString());
			pstmt.setString(3, FileUtil.datetoDBString());
			pstmt.setString(4,  aData.getUserID());
			pstmt.setString(5,  aData.getRecStatus());
			pstmt.setString(6,  aData.getLovDesc2());
		//	pstmt.setString(7, aData.getData()[i].getLov());
			pstmt.setString(7, i+1+"");

			pstmt.setString(8, aData.getData()[i].getLovCde());
			pstmt.setString(9, aData.getData()[i].getLovDesc1());
			if (pstmt.executeUpdate() > 0) {

				ret.setMessagecode("0000");
				ret.setMessagedesc("Saved Successfully.");
			} else {
				ret.setMessagecode("0014");
				ret.setMessagedesc("Saved Fail.");
			}
			pstmt.close();
		}
		return ret;
	}	
	
	public long getLovSyskey(Connection pConn) throws SQLException {
		long l_Key = 0;
		
		String l_Query = "SELECT MAX(Syskey) as maxkey  from CMSMerchantExtraLOV";
		PreparedStatement pstmt = pConn.prepareStatement(l_Query);			
		ResultSet rs=pstmt.executeQuery();				
		while(rs.next()){
			l_Key=rs.getLong("maxkey");
		}
		return l_Key;
	}
	
	public LOVSetUpDataArr lovSetUplist(Connection pConn) throws SQLException {
		LOVSetUpDataArr result = new LOVSetUpDataArr ();
		
		String l_Query = "SELECT distinct LOVNo,LOVDesc2 from CMSMerchantExtraLOV";
		PreparedStatement pstmt = pConn.prepareStatement(l_Query);
					
		ResultSet rs = pstmt.executeQuery();
		ArrayList<LOVSetUpData> datalist = new ArrayList<LOVSetUpData>();
		while(rs.next()) {
			LOVSetUpData data = new LOVSetUpData();
			data.setLovNo(rs.getString("LOVNo"));
			data.setLovDesc2(rs.getString("LOVDesc2"));

			
			datalist.add(data);
		}
		LOVSetUpData[] dataarry = new LOVSetUpData[datalist.size()];		
		for(int i=0;i<datalist.size();i++){
			dataarry[i] = datalist.get(i);
		}		
		result.setData(dataarry);			
		
		return result;
	}
	
	public LOVSetUpData lovNobyID(String LovNo, Connection Conn) throws SQLException {
		LOVSetUpData ret = new LOVSetUpData();
		int srno = 1;
		ArrayList<LOVSetUpDtlData> datalist = new ArrayList<LOVSetUpDtlData>();
		String l_Query = "SELECT LOVNo,LOVDesc2,LOVCde,LOVDesc1 from CMSMerchantExtraLOV where LOVNo=?";
		PreparedStatement pstmt = Conn.prepareStatement(l_Query);
		pstmt.setString(1, LovNo);

		ResultSet rs = pstmt.executeQuery();
		while (rs.next()) {
			ret.setLovNo(rs.getString("LOVNo"));
			ret.setLovDesc2(rs.getString("LOVDesc2"));

			LOVSetUpDtlData data = new LOVSetUpDtlData();
			data.setLovCde(rs.getString("LOVCde"));
			data.setLovDesc1(rs.getString("LOVDesc1"));
			data.setSrno(srno++);
			datalist.add(data);
		}
		LOVSetUpDtlData[] dataarry = new LOVSetUpDtlData[datalist.size()];
		for (int i = 0; i < datalist.size(); i++) {
			dataarry[i] = datalist.get(i);
		}
		ret.setData(dataarry);
		return ret;
	}
	
}
