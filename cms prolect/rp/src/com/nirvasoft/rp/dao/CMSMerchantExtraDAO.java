package com.nirvasoft.rp.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import com.nirvasoft.rp.shared.CMSMerchantData;
import com.nirvasoft.rp.shared.CMSMerchantSetUpAllData;
import com.nirvasoft.rp.shared.CMSMerchantSetUpDetail;
import com.nirvasoft.rp.util.ConvertoFileldCode;
import com.nirvasoft.rp.util.FileUtil;



public class CMSMerchantExtraDAO {

	public ArrayList<CMSMerchantData> getCMSMerchantList(Connection aConn) throws SQLException{
		
		ArrayList<CMSMerchantData> ret = new ArrayList<CMSMerchantData>();		
		String l_Query ="select UserId, UserName from CMSMerchant ";
		PreparedStatement pstmt = aConn.prepareStatement(l_Query);
		ResultSet rs = pstmt.executeQuery();
		
		while(rs.next()){
			CMSMerchantData data = new CMSMerchantData();//**
			data.setmerchantid(rs.getString("UserId"));
			data.setname(rs.getString("UserName"));			
			ret.add(data);//**
		}		
		return ret;
	}
	
	public CMSMerchantData getCMSMerchantByID(String merchantID, Connection pConn) throws SQLException {		
		
		CMSMerchantData ret = new CMSMerchantData();		
		String l_Query = "select UserId, UserName from CMSMerchant where UserId=?  ";
		
		PreparedStatement pstmt = pConn.prepareStatement(l_Query);
		
		pstmt.setString(1, merchantID);
		ResultSet rs = pstmt.executeQuery();		
		while(rs.next()) {
			ret.setmerchantid(rs.getString("UserId"));
			ret.setname(rs.getString("UserName"));			
			
		}
		
		return ret;
	}
	
	//Save
	public CMSMerchantSetUpAllData saveCMSMerchantExtraSetUp(CMSMerchantSetUpAllData aData, Connection aConn) throws SQLException{
		Boolean isNew=true;
		String	sql = "select count(*) as c from CMSMerchantExtraCaption where MerchantID=?  ";
		PreparedStatement	pstmtt = aConn.prepareStatement(sql);		
		pstmtt.setString(1,aData.getmerchantid());
		ResultSet rs = pstmtt.executeQuery();
		rs.next();
		if(rs.getInt("c")>0){
			isNew = false;
			
		}
		
		String fieldcode= "";
		ConvertoFileldCode converttofielcode = new ConvertoFileldCode();
		CMSMerchantSetUpAllData ret = new CMSMerchantSetUpAllData();
		if(isNew)
		{
		for(int i=0 ; i<aData.getdata().length; i++){
		String	query = "insert into CMSMerchantExtraCaption (MerchantID, FieldCode, FieldLabel, FieldRef,createdDate, modidate) values (?,?,?,?,?,?)";
		PreparedStatement	pstmt = aConn.prepareStatement(query);				
			pstmt.setString(1,aData.getmerchantid());
			fieldcode=converttofielcode.ConvertToFieldCode(aData.getdata()[i].getfieldcode());
			aData.getdata()[i].setfieldcode((fieldcode));
			aData.getdata()[i].setfielddesc(aData.getdata()[i].getfielddesc());
			aData.getdata()[i].setfieldref(aData.getdata()[i].getfieldref());	
			pstmt.setString(5,FileUtil.datetoDBString());
			pstmt.setString(6,FileUtil.datetoDBString());
			updateRecordForDetails(pstmt, aData.getdata()[i]);		
			if(pstmt.executeUpdate() >0)
			{
				ret.setmessagecode("0000");
				ret.setmessagedesc("Save Successfully");			
			}
			else {			
				ret.setmessagecode("0014");
				ret.setmessagedesc("Save Fail!");	
			}	
		}	
		}
		else{
			String l_Query = "delete from CMSMerchantExtraCaption where MerchantID = ?";
			PreparedStatement pstmtDe = aConn.prepareStatement(l_Query);
			pstmtDe.setString(1, aData.getmerchantid());
			pstmtDe.executeUpdate();
			
			for(int i=0 ; i<aData.getdata().length; i++){
				String	query = "insert into CMSMerchantExtraCaption (MerchantID, FieldCode, FieldLabel, FieldRef) values (?,?,?,?)";
				PreparedStatement	pstmt = aConn.prepareStatement(query);				
					pstmt.setString(1,aData.getmerchantid());
					fieldcode=converttofielcode.ConvertToFieldCode(aData.getdata()[i].getfieldcode());
					aData.getdata()[i].setfieldcode((fieldcode));
					aData.getdata()[i].setfielddesc(aData.getdata()[i].getfielddesc());
					aData.getdata()[i].setfieldref(aData.getdata()[i].getfieldref());					
					updateRecordForDetails(pstmt, aData.getdata()[i]);		
					if(pstmt.executeUpdate() >0)
					{
						ret.setmessagecode("0000");
						ret.setmessagedesc("Updated Successfully");			
					}
					else {			
						ret.setmessagecode("0014");
						ret.setmessagedesc("Updated Fail!");	
					}	
				}	
		}
		
		return ret;	
		
	}
	
	void updateRecordForDetails(PreparedStatement pstmt, CMSMerchantSetUpDetail data) throws SQLException{
		int index = 2;
		pstmt.setString(index++, data.getfieldcode());
		pstmt.setString(index++, data.getfielddesc());
		pstmt.setString(index++, data.getfieldref());		
	}
	
	
	public ArrayList<CMSMerchantData> getCMSMerchantExtraList(Connection aConn) throws SQLException{
		
		ArrayList<CMSMerchantData> ret = new ArrayList<CMSMerchantData>();		
		String l_Query ="select Distinct CMSExtra.UserId as MerchantID, CMSExtra.UserName as MerchantName from  CMSMerchantExtraCaption as CMS left join CMSMerchant as CMSExtra on CMS.MerchantID = CMSExtra.UserId ";
		PreparedStatement pstmt = aConn.prepareStatement(l_Query);
		ResultSet rs = pstmt.executeQuery();
		
		while(rs.next()){
			CMSMerchantData data = new CMSMerchantData();//**
			data.setmerchantid(rs.getString("MerchantID"));
			data.setname(rs.getString("MerchantName"));			
			ret.add(data);//**
		}		
		return ret;
	}
	
	

	public CMSMerchantSetUpAllData getCMSMerchantSetUpByID(String merchantID, Connection pConn) throws SQLException {
		String codetodatatype =""; 	
		String codetoref="";
		String datatypecode = "";
		String lovref="";
		String readonly="";
		ConvertoFileldCode CNV = new ConvertoFileldCode();
		int srno =1;
		CMSMerchantSetUpAllData ret = new CMSMerchantSetUpAllData();
		ArrayList<CMSMerchantSetUpDetail> datalist = new ArrayList<CMSMerchantSetUpDetail>();
		String l_Query = "select CMS.UserId as MerchantID,CMS.UserName as MerchantName , FieldCode, FieldLabel, FieldRef from CMSMerchantExtraCaption left join  CMSMerchant as CMS  on  CMSMerchantExtraCaption.MerchantID = CMS.UserID where CMSMerchantExtraCaption.MerchantID=? ";
		
		PreparedStatement pstmt = pConn.prepareStatement(l_Query);
		
		pstmt.setString(1, merchantID);
		ResultSet rs = pstmt.executeQuery();
		
		while(rs.next()) {
			ret.setmerchantid(rs.getString("MerchantID"));	
			ret.setname(rs.getString("MerchantName"));
			CMSMerchantSetUpDetail data = new CMSMerchantSetUpDetail();			
			codetodatatype = CNV.ConvertDataTypeToFieldCode(rs.getString("FieldCode"));
			codetoref = CNV.ConvertFeildCodeToRef(rs.getString("FieldCode"));
			datatypecode = CNV.ConvertFieldCodeToDataType(rs.getString("FieldCode"));
			lovref = CNV.getLovRefFromFieldCode(rs.getString("FieldCode"));
			readonly = CNV.getReadonly(rs.getString("FieldCode"));
			data.setfieldcode(codetodatatype);
			data.setdatatype(datatypecode);
			data.setrefcode(codetoref);			
			data.setfielddesc(rs.getString("FieldLabel"));	
			data.setfieldref (rs.getString("FieldRef"));
			data.setlovref(lovref);
			data.setreadonly(readonly);
			data.setsrno(srno++);
			datalist.add(data);
		}
		
		CMSMerchantSetUpDetail[] dataarry = new CMSMerchantSetUpDetail[datalist.size()];		
		for(int i=0;i<datalist.size();i++){
			dataarry[i] = datalist.get(i);
		}		
		ret.setdata(dataarry);
		return ret;
	}
}
