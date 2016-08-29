package com.nirvasoft.rp.dao;

import java.lang.reflect.Field;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import com.nirvasoft.rp.shared.FieldData;
import com.nirvasoft.rp.shared.MerchantListFormTable;
import com.nirvasoft.rp.util.FileUtil;

public class MerchantEntryDAO {
	public ArrayList<MerchantListFormTable> getmerchantIDList(Connection aConn) throws SQLException{
		ArrayList<MerchantListFormTable> ret = new ArrayList<MerchantListFormTable>();
		
		String query = "select distinct a.MerchantID as MerchantID , b.UserName as MerchantName from CMSMerchantExtraCaption a, CMSMerchant b where a.MerchantID=b.UserId";
		PreparedStatement pstmt = aConn.prepareStatement(query);
		ResultSet rs = pstmt.executeQuery();
		
		while(rs.next()){
			MerchantListFormTable data = new MerchantListFormTable();
			
			data.setMerchantID(rs.getString("MerchantID"));
			data.setName(rs.getString("MerchantName"));
			ret.add(data);
		}		
	return ret;
	}

	public MerchantListFormTable getMerchantEntryByID(String merchantid,Connection Conn) throws SQLException{
		MerchantListFormTable ret= new MerchantListFormTable();
		LOVSetUpDAO lovDao = new LOVSetUpDAO();
		int count = 0;
		String query="select count(*) c from CMSMerchantExtraCaption  where MerchantID=?";
		PreparedStatement pstmt = Conn.prepareStatement(query);
		pstmt.setString(1, merchantid);
		ResultSet rs1 = pstmt.executeQuery();
		
		if(rs1.next()){
			count = rs1.getInt("c");
		}
		
		FieldData[] fData = new FieldData[count];
		int index = 0;
		
		
		query="select a.MerchantID as MerchantID , a.FieldCode as FieldCode,a.FieldLabel as FieldLabel,a.FieldRef as FieldRef"
				+ ", b.UserName from CMSMerchantExtraCaption a, CMSMerchant b where a.MerchantID=b.UserId and a.MerchantID=?";  
		 pstmt=Conn.prepareStatement(query);
		pstmt.setString(1, merchantid);
		
		ResultSet rs=pstmt.executeQuery();
		while (rs.next()){
			ret= new MerchantListFormTable();
			ret.setMerchantID(rs.getString("MerchantID"));
			ret.setName(rs.getString("UserName"));
		
			FieldData fd = new FieldData();
			fd.setFieldCode(rs.getString("FieldCode"));
			fd.setFieldLabel(rs.getString("FieldLabel"));
			fd.setFieldRef(rs.getString("FieldRef"));
			
			String fieldcode = rs.getString("FieldCode");
			 if(fieldcode.contains("D")){
				fd.setDatatype("date");
			}else if(fieldcode.contains("t")){
				fd.setDatatype("text");
			}else if(fieldcode.contains("n")){
				fd.setDatatype("number");
			}else if(fieldcode.contains("I")){
				fd.setDatatype("image");
			}else if(fieldcode.contains("B")){
				fd.setDatatype("checkbox");
			}else if(fieldcode.contains("L")){
				fd.setDatatype("reflov");
				//fd.setLovSetupData(lovDao.lovNobyID(rs.getString("FieldRef"), Conn));
			fd.setLovData(lovDao.lovNobyID(rs.getString("FieldRef"), Conn).getData());
			}
			fData[index] = fd;
			index++;
		}
		ret.setFieldData(fData);
	return ret;
	}
	public boolean checkMerchantEntryAlreadyexist(String pMerchantId,Connection pConn) throws SQLException{
		int count = 0;
		boolean ret = false;
		String query="select count(*) c from CMSMerchantExtra where MerchantID=?";
		PreparedStatement pstmt = pConn.prepareStatement(query);
		pstmt.setString(1, pMerchantId);
		ResultSet rs1 = pstmt.executeQuery();
		
		if(rs1.next()){
			count = rs1.getInt("c");
		}
		if(count>0){
			ret = true;
		}
		return ret;
	}

	public boolean saveMerchantEntry(MerchantListFormTable pData, Connection pConn) throws SQLException{
		boolean ret= false;
		String sql ="insert into CMSMerchantExtra (createdDate,modifiedDate,userId,recordStatus,merchantId,FKHdrID ";
		FieldData[] fData=pData.getFieldData();
		
		sql=prepareColumSave(fData, sql);

		sql +=") values (?,?,?,?,?,? ";
		for(int i=0; i<fData.length;i++){
			sql += " ,?";
		}
		sql += ")";
		
		int j = 1;
		PreparedStatement pstmt = pConn.prepareStatement(sql);
		pstmt.setString(j++, FileUtil.datetoDBString());
		pstmt.setString(j++, FileUtil.datetoDBString());
		pstmt.setString(j++, "User 1");
		pstmt.setString(j++, "0");
		pstmt.setString(j++, pData.getMerchantID());
		pstmt.setString(j++, "");
		updateRecord(fData, pstmt, j);
		if(pstmt.executeUpdate() > 0){
			ret = true;
		}
	return ret;
		
	}
	
	private String  prepareColumSave(FieldData[] fData,String sql){
		for(int i=0; i<fData.length;i++){
			
			
			switch (fData[i].getFieldCode()) {
			
			case "t1":
				sql +=" ,t1 ";
				break;
			case "t2":
				sql +=" ,t2 ";
				break;
			case "t3":
				sql +=" ,t3 ";
				break;
			case "t4":
				sql +=" ,t4 ";
			case "t5":
				sql +=" ,t5 ";
				break;
			case "t6":
				sql +=" ,t6 ";
				break;
			case "t7":
				sql +=" ,t7 ";
				break;
			case "t8":
				sql +=" ,t8 ";
				break;
			case "t9":
				sql +=" ,t9 ";
				break;
			case "t10":
				sql +=" ,t10 ";
				break;
			case "t11":
				sql +=" ,t11 ";
				break;
			case "t12":
				sql +=" ,t12 ";
				break;
			case "t13":
				sql +=" ,t13 ";
				break;
			case "t14":
				sql +=" ,t14 ";
				break;
			case "t15":
				sql +=" ,t15 ";
				break;
			case "t16":
				sql +=" ,t16 ";
				break;
			case "t17":
				sql +=" ,t17 ";
				break;
			case "t18":
				sql +=" ,t18 ";
				break;
			case "t19":
				sql +=" ,t19 ";
				break;
			case "t20":
				sql +=" ,t20 ";
				break;
			case "t21":
				sql +=" ,t21 ";
				break;
			case "t22":
				sql +=" ,t22 ";
				break;
			case "t23":
				sql +=" ,t23 ";
				break;
			case "t24":
				sql +=" ,t24 ";
				break;
			case "t25":
				sql +=" ,t25 ";
				break;
			case "t26":
				sql +=" ,t26 ";
				break;
			case "t27":
				sql +=" ,t27 ";
				break;
			case "t28":
				sql +=" ,t28 ";
				break;
			case "t29":
				sql +=" ,t29 ";
				break;
			case "t30":
				sql +=" ,t30 ";
				break;
			case "n1":
				sql +=" ,n1 ";
				break;
			case "n2":
				sql +=" ,n2 ";
				break;
			case "n3":
				sql +=" ,n3 ";
				break;
			case "n4":
				sql +=" ,n4 ";
			case "n5":
				sql +=" ,n5 ";
				break;
			case "n6":
				sql +=" ,n6 ";
				break;
			case "n7":
				sql +=" ,n7 ";
				break;
			case "n8":
				sql +=" ,n8 ";
				break;
			case "n9":
				sql +=" ,n9 ";
				break;
			case "n10":
				sql +=" ,n10 ";
				break;
			case "n11":
				sql +=" ,n11 ";
				break;
			case "n12":
				sql +=" ,n12 ";
				break;
			case "n13":
				sql +=" ,n13 ";
				break;
			case "n14":
				sql +=" ,n14 ";
				break;
			case "n15":
				sql +=" ,n15 ";
				break;
			case "n16":
				sql +=" ,n16 ";
				break;
			case "n17":
				sql +=" ,n17 ";
				break;
			case "n18":
				sql +=" ,n18 ";
				break;
			case "n19":
				sql +=" ,n19 ";
				break;
			case "n20":
				sql +=" ,n20 ";
				break;
			case "Img1":
				sql +=" ,Img1 ";
				break;
			case "Img2":
				sql +=" ,Img2 ";
				break;
			case "Img3":
				sql +=" ,Img3 ";
				break;
			case "Img4":
				sql +=" ,Img4 ";
			case "Img5":
				sql +=" ,Img5 ";
				break;
			case "Img6":
				sql +=" ,Img6 ";
				break;
			case "Img7":
				sql +=" ,Img7 ";
				break;
			case "Img8":
				sql +=" ,Img8 ";
				break;
			case "Img9":
				sql +=" ,Img9 ";
				break;
			case "Img10":
				sql +=" ,Img10 ";
				break;
			case "Dte1":
				sql +=" ,Dte1 ";
				break;
			case "Dte2":
				sql +=" ,Dte2 ";
				break;
			case "Dte3":
				sql +=" ,Dte3 ";
				break;
			case "Dte4":
				sql +=" ,Dte4 ";
			case "Dte5":
				sql +=" ,Dte5 ";
				break;
			case "Dte6":
				sql +=" ,Dte6 ";
				break;
			case "Dte7":
				sql +=" ,Dte7 ";
				break;
			case "Dte8":
				sql +=" ,Dte8 ";
				break;
			case "Dte9":
				sql +=" ,Dte9 ";
				break;
			case "Dte10":
				sql +=" ,Dte10 ";
				break;
			case "Lov1":
				sql +=" ,Lov1 ";
				break;
			case "Lov2":
				sql +=" ,Lov2 ";
				break;
			case "Lov3":
				sql +=" ,Lov3 ";
				break;
			case "Lov4":
				sql +=" ,Lov4 ";
			case "Lov5":
				sql +=" ,Lov5 ";
				break;
			case "Lov6":
				sql +=" ,Lov6 ";
				break;
			case "Lov7":
				sql +=" ,Lov7 ";
				break;
			case "Lov8":
				sql +=" ,Lov8 ";
				break;
			case "Lov9":
				sql +=" ,Lov9 ";
				break;
			case "Lov10":
				sql +=" ,Lov10 ";
				break;
			case "Bol1":
				sql +=" ,Bol1 ";
				break;
			case "Bol2":
				sql +=" ,Bol2 ";
				break;
			case "Bol3":
				sql +=" ,Bol3 ";
				break;
			case "Bol4":
				sql +=" ,Bol4 ";
			case "Bol5":
				sql +=" ,Bol5 ";
				break;
			case "Bol6":
				sql +=" ,Bol6 ";
				break;
			case "Bol7":
				sql +=" ,Bol7 ";
				break;
			case "Bol8":
				sql +=" ,Bol8 ";
				break;
			case "Bol9":
				sql +=" ,Bol9 ";
				break;
			case "Bol10":
				sql +=" ,Bol10 ";
			default:
				break;
			}
			
		}
		return sql;
	}
	private void updateRecord(FieldData[] fData, PreparedStatement pstmt, int j) throws SQLException{
		
		for(int i=0; i<fData.length;i++){
			switch (fData[i].getFieldCode()) {
			case "t1":
				pstmt.setString(j++, fData[i].getFieldValue());
				break;
			case "t2":
				pstmt.setString(j++, fData[i].getFieldValue());
				break;
			case "t3":
				pstmt.setString(j++, fData[i].getFieldValue());
				break;
			case "t4":
				pstmt.setString(j++, fData[i].getFieldValue());
			case "t5":
				pstmt.setString(j++, fData[i].getFieldValue());
				break;
			case "t6":
				pstmt.setString(j++, fData[i].getFieldValue());
				break;
			case "t7":
				pstmt.setString(j++, fData[i].getFieldValue());
				break;
			case "t8":
				pstmt.setString(j++, fData[i].getFieldValue());
				break;
			case "t9":
				pstmt.setString(j++, fData[i].getFieldValue());
				break;
			case "t10":
				pstmt.setString(j++, fData[i].getFieldValue());
				break;
			case "t11":
				pstmt.setString(j++, fData[i].getFieldValue());
				break;
			case "t12":
				pstmt.setString(j++, fData[i].getFieldValue());
				break;
			case "t13":
				pstmt.setString(j++, fData[i].getFieldValue());
				break;
			case "t14":
				pstmt.setString(j++, fData[i].getFieldValue());
				break;
			case "t15":
				pstmt.setString(j++, fData[i].getFieldValue());
				break;
			case "t16":
				pstmt.setString(j++, fData[i].getFieldValue());
				break;
			case "t17":
				pstmt.setString(j++, fData[i].getFieldValue());
				break;
			case "t18":
				pstmt.setString(j++, fData[i].getFieldValue());
				break;
			case "t19":
				pstmt.setString(j++, fData[i].getFieldValue());
				break;
			case "t20":
				pstmt.setString(j++, fData[i].getFieldValue());
				break;
			case "t21":
				pstmt.setString(j++, fData[i].getFieldValue());
				break;
			case "t22":
				pstmt.setString(j++, fData[i].getFieldValue());
				break;
			case "t23":
				pstmt.setString(j++, fData[i].getFieldValue());
				break;
			case "t24":
				pstmt.setString(j++, fData[i].getFieldValue());
				break;
			case "t25":
				pstmt.setString(j++, fData[i].getFieldValue());
				break;
			case "t26":
				pstmt.setString(j++, fData[i].getFieldValue());
				break;
			case "t27":
				pstmt.setString(j++, fData[i].getFieldValue());
				break;
			case "t28":
				pstmt.setString(j++, fData[i].getFieldValue());
				break;
			case "t29":
				pstmt.setString(j++, fData[i].getFieldValue());
				break;
			case "t30":
				pstmt.setString(j++, fData[i].getFieldValue());
				break;
			case "n1":
				pstmt.setDouble(j++, Double.parseDouble(fData[i].getFieldValue()));
				break;
			case "n2":
				pstmt.setDouble(j++, Double.parseDouble(fData[i].getFieldValue()));
				break;
			case "n3":
				pstmt.setDouble(j++, Double.parseDouble(fData[i].getFieldValue()));
				break;
			case "n4":
				pstmt.setDouble(j++, Double.parseDouble(fData[i].getFieldValue()));
			case "n5":
				pstmt.setDouble(j++, Double.parseDouble(fData[i].getFieldValue()));
				break;
			case "n6":
				pstmt.setDouble(j++, Double.parseDouble(fData[i].getFieldValue()));
				break;
			case "n7":
				pstmt.setDouble(j++, Double.parseDouble(fData[i].getFieldValue()));
				break;
			case "n8":
				pstmt.setDouble(j++, Double.parseDouble(fData[i].getFieldValue()));
				break;
			case "n9":
				pstmt.setDouble(j++, Double.parseDouble(fData[i].getFieldValue()));
				break;
			case "n10":
				pstmt.setDouble(j++, Double.parseDouble(fData[i].getFieldValue()));
				break;
			case "n11":
				pstmt.setDouble(j++, Double.parseDouble(fData[i].getFieldValue()));
				break;
			case "n12":
				pstmt.setDouble(j++, Double.parseDouble(fData[i].getFieldValue()));
				break;
			case "n13":
				pstmt.setDouble(j++, Double.parseDouble(fData[i].getFieldValue()));
				break;
			case "n14":
				pstmt.setDouble(j++, Double.parseDouble(fData[i].getFieldValue()));
				break;
			case "n15":
				pstmt.setDouble(j++, Double.parseDouble(fData[i].getFieldValue()));
				break;
			case "n16":
				pstmt.setDouble(j++, Double.parseDouble(fData[i].getFieldValue()));
				break;
			case "n17":
				pstmt.setDouble(j++, Double.parseDouble(fData[i].getFieldValue()));
				break;
			case "n18":
				pstmt.setDouble(j++, Double.parseDouble(fData[i].getFieldValue()));
				break;
			case "n19":
				pstmt.setDouble(j++, Double.parseDouble(fData[i].getFieldValue()));;
				break;
			case "n20":
				pstmt.setDouble(j++, Double.parseDouble(fData[i].getFieldValue()));
				break;
			case "Img1":
				pstmt.setString(j++, fData[i].getFieldValue());
				break;
			case "Img2":
				pstmt.setString(j++, fData[i].getFieldValue());
				break;
			case "Img3":
				pstmt.setString(j++, fData[i].getFieldValue());
				break;
			case "Img4":
				pstmt.setString(j++, fData[i].getFieldValue());
			case "Img5":
				pstmt.setString(j++, fData[i].getFieldValue());
				break;
			case "Img6":
				pstmt.setString(j++, fData[i].getFieldValue());
				break;
			case "Img7":
				pstmt.setString(j++, fData[i].getFieldValue());
				break;
			case "Img8":
				pstmt.setString(j++, fData[i].getFieldValue());
				break;
			case "Img9":
				pstmt.setString(j++, fData[i].getFieldValue());
				break;
			case "Img10":
				pstmt.setString(j++, fData[i].getFieldValue());
				break;
			case "Dte1":
				pstmt.setString(j++, fData[i].getFieldValue());
				break;
			case "Dte2":
				pstmt.setString(j++, fData[i].getFieldValue());
				break;
			case "Dte3":
				pstmt.setString(j++, fData[i].getFieldValue());
				break;
			case "Dte4":
				pstmt.setString(j++, fData[i].getFieldValue());
			case "Dte5":
				pstmt.setString(j++, fData[i].getFieldValue());
				break;
			case "Dte6":
				pstmt.setString(j++, fData[i].getFieldValue());
				break;
			case "Dte7":
				pstmt.setString(j++, fData[i].getFieldValue());
				break;
			case "Dte8":
				pstmt.setString(j++, fData[i].getFieldValue());
				break;
			case "Dte9":
				pstmt.setString(j++, fData[i].getFieldValue());
				break;
			case "Dte10":
				pstmt.setString(j++, fData[i].getFieldValue());
				break;
			case "Lov1":
				pstmt.setString(j++, fData[i].getFieldValue());
				break;
			case "Lov2":
				pstmt.setString(j++, fData[i].getFieldValue());
				break;
			case "Lov3":
				pstmt.setString(j++, fData[i].getFieldValue());
				break;
			case "Lov4":
				pstmt.setString(j++, fData[i].getFieldValue());
			case "Lov5":
				pstmt.setString(j++, fData[i].getFieldValue());
				break;
			case "Lov6":
				pstmt.setString(j++, fData[i].getFieldValue());
				break;
			case "Lov7":
				pstmt.setString(j++, fData[i].getFieldValue());
				break;
			case "Lov8":
				pstmt.setString(j++, fData[i].getFieldValue());
				break;
			case "Lov9":
				pstmt.setString(j++, fData[i].getFieldValue());
				break;
			case "Lov10":
				pstmt.setString(j++, fData[i].getFieldValue());
				break;
			case "Bol1":
				pstmt.setString(j++, fData[i].getFieldValue());
				break;
			case "Bol2":
				pstmt.setString(j++, fData[i].getFieldValue());
				break;
			case "Bol3":
				pstmt.setString(j++, fData[i].getFieldValue());
				break;
			case "Bol4":
				pstmt.setString(j++, fData[i].getFieldValue());
			case "Bol5":
				pstmt.setString(j++, fData[i].getFieldValue());
				break;
			case "Bol6":
				pstmt.setString(j++, fData[i].getFieldValue());
				break;
			case "Bol7":
				pstmt.setString(j++, fData[i].getFieldValue());
				break;
			case "Bol8":
				pstmt.setString(j++, fData[i].getFieldValue());
				break;
			case "Bol9":
				pstmt.setString(j++, fData[i].getFieldValue());
				break;
			case "Bol10":
				pstmt.setString(j++, fData[i].getFieldValue());
			default:
				break;
			}
			
		}
	}
	
	public boolean updateMerchantEntry(MerchantListFormTable pData, Connection pConn) throws SQLException{
		boolean ret= false;
		String sql ="update  CMSMerchantExtra set modifiedDate=? ,userId=? ,recordStatus=? ,FKHdrID=? ";
		FieldData[] fData=pData.getFieldData();
		 sql = prepareColumUpdate(fData, sql);
		sql +=" where merchantId = ? ";
		int j = 1;
		PreparedStatement pstmt = pConn.prepareStatement(sql);
		pstmt.setString(j++, FileUtil.datetoString());
		pstmt.setString(j++, "User 1");
		pstmt.setString(j++, "0");
		pstmt.setString(j++, "");
		updateRecord(fData, pstmt, j);
		j+=fData.length;
		pstmt.setString(j++, pData.getMerchantID());
		if(pstmt.executeUpdate() > 0){
			ret = true;
		}
		return ret;
		
	}
	
	private String prepareColumUpdate(FieldData[] fData,String sql){
		for(int i=0; i<fData.length;i++){
			
			
			switch (fData[i].getFieldCode()) {
			
			case "t1":
				sql +=" ,t1 =? ";
				break;
			case "t2":
				sql +=" ,t2 =? ";
				break;
			case "t3":
				sql +=" ,t3 =? ";
				break;
			case "t4":
				sql +=" ,t4 =? ";
			case "t5":
				sql +=" ,t5 =? ";
				break;
			case "t6":
				sql +=" ,t6 =? ";
				break;
			case "t7":
				sql +=" ,t7 =? ";
				break;
			case "t8":
				sql +=" ,t8 =? ";
				break;
			case "t9":
				sql +=" ,t9 =? ";
				break;
			case "t10":
				sql +=" ,t10 =? ";
				break;
			case "t11":
				sql +=" ,t11 =? ";
				break;
			case "t12":
				sql +=" ,t12 =? ";
				break;
			case "t13":
				sql +=" ,t13 =? ";
				break;
			case "t14":
				sql +=" ,t14 =? ";
				break;
			case "t15":
				sql +=" ,t15 =? ";
				break;
			case "t16":
				sql +=" ,t16 =? ";
				break;
			case "t17":
				sql +=" ,t17 =? ";
				break;
			case "t18":
				sql +=" ,t18 =? ";
				break;
			case "t19":
				sql +=" ,t19 =? ";
				break;
			case "t20":
				sql +=" ,t20 =? ";
				break;
			case "t21":
				sql +=" ,t21 =? ";
				break;
			case "t22":
				sql +=" ,t22 =? ";
				break;
			case "t23":
				sql +=" ,t23 =? ";
				break;
			case "t24":
				sql +=" ,t24 =? ";
				break;
			case "t25":
				sql +=" ,t25 =? ";
				break;
			case "t26":
				sql +=" ,t26 =? ";
				break;
			case "t27":
				sql +=" ,t27 =? ";
				break;
			case "t28":
				sql +=" ,t28 =? ";
				break;
			case "t29":
				sql +=" ,t29 =? ";
				break;
			case "t30":
				sql +=" ,t30 =? ";
				break;
			case "n1":
				sql +=" ,n1 =? ";
				break;
			case "n2":
				sql +=" ,n2 =? ";
				break;
			case "n3":
				sql +=" ,n3 =? ";
				break;
			case "n4":
				sql +=" ,n4 =? ";
			case "n5":
				sql +=" ,n5 =? ";
				break;
			case "n6":
				sql +=" ,n6 =? ";
				break;
			case "n7":
				sql +=" ,n7 =? ";
				break;
			case "n8":
				sql +=" ,n8 =? ";
				break;
			case "n9":
				sql +=" ,n9 =? ";
				break;
			case "n10":
				sql +=" ,n10 =? ";
				break;
			case "n11":
				sql +=" ,n11 =? ";
				break;
			case "n12":
				sql +=" ,n12 =? ";
				break;
			case "n13":
				sql +=" ,n13 =? ";
				break;
			case "n14":
				sql +=" ,n14 =? ";
				break;
			case "n15":
				sql +=" ,n15 =? ";
				break;
			case "n16":
				sql +=" ,n16 =? ";
				break;
			case "n17":
				sql +=" ,n17 =? ";
				break;
			case "n18":
				sql +=" ,n18 =? ";
				break;
			case "n19":
				sql +=" ,n19 =? ";
				break;
			case "n20":
				sql +=" ,n20 =? ";
				break;
			case "Img1":
				sql +=" ,Img1 =? ";
				break;
			case "Img2":
				sql +=" ,Img2 =? ";
				break;
			case "Img3":
				sql +=" ,Img3 =? ";
				break;
			case "Img4":
				sql +=" ,Img4 =? ";
			case "Img5":
				sql +=" ,Img5 =? ";
				break;
			case "Img6":
				sql +=" ,Img6 =? ";
				break;
			case "Img7":
				sql +=" ,Img7 =? ";
				break;
			case "Img8":
				sql +=" ,Img8 =? ";
				break;
			case "Img9":
				sql +=" ,Img9 =? ";
				break;
			case "Img10":
				sql +=" ,Img10 =? ";
				break;
			case "Dte1":
				sql +=" ,Dte1 =? ";
				break;
			case "Dte2":
				sql +=" ,Dte2 =? ";
				break;
			case "Dte3":
				sql +=" ,Dte3 =? ";
				break;
			case "Dte4":
				sql +=" ,Dte4 =? ";
			case "Dte5":
				sql +=" ,Dte5 =? ";
				break;
			case "Dte6":
				sql +=" ,Dte6 =? ";
				break;
			case "Dte7":
				sql +=" ,Dte7 =? ";
				break;
			case "Dte8":
				sql +=" ,Dte8 =? ";
				break;
			case "Dte9":
				sql +=" ,Dte9 =? ";
				break;
			case "Dte10":
				sql +=" ,Dte10 =? ";
				break;
			case "Lov1":
				sql +=" ,Lov1 =? ";
				break;
			case "Lov2":
				sql +=" ,Lov2 =? ";
				break;
			case "Lov3":
				sql +=" ,Lov3 =? ";
				break;
			case "Lov4":
				sql +=" ,Lov4 =? ";
			case "Lov5":
				sql +=" ,Lov5 =? ";
				break;
			case "Lov6":
				sql +=" ,Lov6 =? ";
				break;
			case "Lov7":
				sql +=" ,Lov7 =? ";
				break;
			case "Lov8":
				sql +=" ,Lov8 =? ";
				break;
			case "Lov9":
				sql +=" ,Lov9 =? ";
				break;
			case "Lov10":
				sql +=" ,Lov10 =? ";
				break;
			case "Bol1":
				sql +=" ,Bol1 =? ";
				break;
			case "Bol2":
				sql +=" ,Bol2 =? ";
				break;
			case "Bol3":
				sql +=" ,Bol3 =? ";
				break;
			case "Bol4":
				sql +=" ,Bol4 =? ";
			case "Bol5":
				sql +=" ,Bol5 =? ";
				break;
			case "Bol6":
				sql +=" ,Bol6 =? ";
				break;
			case "Bol7":
				sql +=" ,Bol7 =? ";
				break;
			case "Bol8":
				sql +=" ,Bol8 =? ";
				break;
			case "Bol9":
				sql +=" ,Bol9 =? ";
				break;
			case "Bol10":
				sql +=" ,Bol10 =? ";
			default:
				break;
			}
			
		}
		return sql;
	}
	
	public MerchantListFormTable getCMSEntryByID(String pMerchantId,Connection aConn) throws SQLException{
		MerchantListFormTable ret = new MerchantListFormTable();
		LOVSetUpDAO lovDao = new LOVSetUpDAO();
		int count = 0;
		String query = "select count(*) c from cmsmerchantextracaption where MerchantID =?";
		PreparedStatement pstmt = aConn.prepareStatement(query);
		pstmt.setString(1, pMerchantId);
		ResultSet rs = pstmt.executeQuery();
		if(rs.next()){
			count = rs.getInt("c");
		}
		FieldData[] fData=new FieldData[count];
		query = "select a.*, b.UserName as name from cmsmerchantextra a , CMSMerchant b  where a.MerchantID =?";
		
		pstmt = aConn.prepareStatement(query);
		pstmt.setString(1, pMerchantId);
		ResultSet rs1 = pstmt.executeQuery();
		int i=0;
		if(rs1.next()){
			ret.setMerchantID(rs1.getString("MerchantID"));
			ret.setName(rs1.getString("name"));
			query = "select * from cmsmerchantextracaption where MerchantID =?";
			pstmt = aConn.prepareStatement(query);
			pstmt.setString(1, pMerchantId);
			ResultSet rs2 = pstmt.executeQuery();
			
			while(rs2.next()){
				FieldData fd = new FieldData();
				fd.setFieldCode(rs2.getString("FieldCode"));
				fd.setFieldLabel(rs2.getString("FieldLabel"));
				fd.setFieldRef(rs2.getString("FieldRef"));			
				String fieldref = fd.getFieldRef();
				fd.setLovData(lovDao.lovNobyID(fd.getFieldRef(), aConn).getData());
				
				String fieldcode = rs2.getString("FieldCode");
				 if(fieldcode.contains("D")){
					fd.setDatatype("date");
				}else if(fieldcode.contains("t")){
					fd.setDatatype("text");
				}else if(fieldcode.contains("n")){
					fd.setDatatype("number");
				}else if(fieldcode.contains("I")){
					fd.setDatatype("image");
				}else if(fieldcode.contains("B")){
					fd.setDatatype("checkbox");
				}else if(fieldcode.contains("L")){
					fd.setDatatype("reflov");
				}
				 switch (fd.getFieldCode()) {
					
					case "t1":
						fd.setFieldValue(rs1.getString(fd.getFieldCode()));
						break;
					case "t2":
						fd.setFieldValue(rs1.getString(fd.getFieldCode()));
						break;
					case "t3":
						fd.setFieldValue(rs1.getString(fd.getFieldCode()));
						break;
					case "t4":
						fd.setFieldValue(rs1.getString(fd.getFieldCode()));
					case "t5":
						fd.setFieldValue(rs1.getString(fd.getFieldCode()));
						break;
					case "t6":
						fd.setFieldValue(rs1.getString(fd.getFieldCode()));
						break;
					case "t7":
						fd.setFieldValue(rs1.getString(fd.getFieldCode()));
						break;
					case "t8":
						fd.setFieldValue(rs1.getString(fd.getFieldCode()));
						break;
					case "t9":
						fd.setFieldValue(rs1.getString(fd.getFieldCode()));
						break;
					case "t10":
						fd.setFieldValue(rs1.getString(fd.getFieldCode()));
						break;
					case "t11":
						fd.setFieldValue(rs1.getString(fd.getFieldCode()));
						break;
					case "t12":
						fd.setFieldValue(rs1.getString(fd.getFieldCode()));
						break;
					case "t13":
						fd.setFieldValue(rs1.getString(fd.getFieldCode()));
						break;
					case "t14":
						fd.setFieldValue(rs1.getString(fd.getFieldCode()));
						break;
					case "t15":
						fd.setFieldValue(rs1.getString(fd.getFieldCode()));
						break;
					case "t16":
						fd.setFieldValue(rs1.getString(fd.getFieldCode()));
						break;
					case "t17":
						fd.setFieldValue(rs1.getString(fd.getFieldCode()));
						break;
					case "t18":
						fd.setFieldValue(rs1.getString(fd.getFieldCode()));
						break;
					case "t19":
						fd.setFieldValue(rs1.getString(fd.getFieldCode()));
						break;
					case "t20":
						fd.setFieldValue(rs1.getString(fd.getFieldCode()));
						break;
					case "t21":
						fd.setFieldValue(rs1.getString(fd.getFieldCode()));
						break;
					case "t22":
						fd.setFieldValue(rs1.getString(fd.getFieldCode()));
						break;
					case "t23":
						fd.setFieldValue(rs1.getString(fd.getFieldCode()));
						break;
					case "t24":
						fd.setFieldValue(rs1.getString(fd.getFieldCode()));
						break;
					case "t25":
						fd.setFieldValue(rs1.getString(fd.getFieldCode()));
						break;
					case "t26":
						fd.setFieldValue(rs1.getString(fd.getFieldCode()));
						break;
					case "t27":
						fd.setFieldValue(rs1.getString(fd.getFieldCode()));
						break;
					case "t28":
						fd.setFieldValue(rs1.getString(fd.getFieldCode()));
						break;
					case "t29":
						fd.setFieldValue(rs1.getString(fd.getFieldCode()));
						break;
					case "t30":
						fd.setFieldValue(rs1.getString(fd.getFieldCode()));
						break;
					case "n1":
						fd.setFieldValue(rs1.getInt(fd.getFieldCode())+"");
						break;
					case "n2":
							fd.setFieldValue(rs1.getInt(fd.getFieldCode())+"");
						break;
					case "n3":
							fd.setFieldValue(rs1.getInt(fd.getFieldCode())+"");
						break;
					case "n4":
							fd.setFieldValue(rs1.getInt(fd.getFieldCode())+"");
					case "n5":
							fd.setFieldValue(rs1.getInt(fd.getFieldCode())+"");
						break;
					case "n6":
							fd.setFieldValue(rs1.getInt(fd.getFieldCode())+"");
						break;
					case "n7":
							fd.setFieldValue(rs1.getInt(fd.getFieldCode())+"");
						break;
					case "n8":
							fd.setFieldValue(rs1.getInt(fd.getFieldCode())+"");
						break;
					case "n9":
							fd.setFieldValue(rs1.getInt(fd.getFieldCode())+"");
						break;
					case "n10":
							fd.setFieldValue(rs1.getInt(fd.getFieldCode())+"");
						break;
					case "n11":
							fd.setFieldValue(rs1.getInt(fd.getFieldCode())+"");
						break;
					case "n12":
							fd.setFieldValue(rs1.getInt(fd.getFieldCode())+"");
						break;
					case "n13":
							fd.setFieldValue(rs1.getInt(fd.getFieldCode())+"");
						break;
					case "n14":
							fd.setFieldValue(rs1.getInt(fd.getFieldCode())+"");
						break;
					case "n15":
							fd.setFieldValue(rs1.getInt(fd.getFieldCode())+"");;
						break;
					case "n16":
							fd.setFieldValue(rs1.getInt(fd.getFieldCode())+"");
						break;
					case "n17":
							fd.setFieldValue(rs1.getInt(fd.getFieldCode())+"");
						break;
					case "n18":
							fd.setFieldValue(rs1.getInt(fd.getFieldCode())+"");
						break;
					case "n19":
							fd.setFieldValue(rs1.getInt(fd.getFieldCode())+"");
						break;
					case "n20":
							fd.setFieldValue(rs1.getInt(fd.getFieldCode())+"");
						break;
					case "Img1":
							fd.setFieldValue(rs1.getString(fd.getFieldCode()));
						break;
					case "Img2":
							fd.setFieldValue(rs1.getString(fd.getFieldCode()));
						break;
					case "Img3":
							fd.setFieldValue(rs1.getString(fd.getFieldCode()));
						break;
					case "Img4":
							fd.setFieldValue(rs1.getString(fd.getFieldCode()));
					case "Img5":
							fd.setFieldValue(rs1.getString(fd.getFieldCode()));
						break;
					case "Img6":
							fd.setFieldValue(rs1.getString(fd.getFieldCode()));
						break;
					case "Img7":
							fd.setFieldValue(rs1.getString(fd.getFieldCode()));
						break;
					case "Img8":
							fd.setFieldValue(rs1.getString(fd.getFieldCode()));
						break;
					case "Img9":
							fd.setFieldValue(rs1.getString(fd.getFieldCode()));
						break;
					case "Img10":
							fd.setFieldValue(rs1.getString(fd.getFieldCode()));
						break;
					case "Dte1":
							fd.setFieldValue(rs1.getString(fd.getFieldCode()));
						break;
					case "Dte2":
							fd.setFieldValue(rs1.getString(fd.getFieldCode()));
						break;
					case "Dte3":
							fd.setFieldValue(rs1.getString(fd.getFieldCode()));
						break;
					case "Dte4":
							fd.setFieldValue(rs1.getString(fd.getFieldCode()));
					case "Dte5":
							fd.setFieldValue(rs1.getString(fd.getFieldCode()));
						break;
					case "Dte6":
							fd.setFieldValue(rs1.getString(fd.getFieldCode()));
						break;
					case "Dte7":
							fd.setFieldValue(rs1.getString(fd.getFieldCode()));
						break;
					case "Dte8":
							fd.setFieldValue(rs1.getString(fd.getFieldCode()));
						break;
					case "Dte9":
							fd.setFieldValue(rs1.getString(fd.getFieldCode()));;
						break;
					case "Dte10":
							fd.setFieldValue(rs1.getString(fd.getFieldCode()));
						break;
					case "Lov1":
							fd.setFieldValue(rs1.getString(fd.getFieldCode()));
						break;
					case "Lov2":
							fd.setFieldValue(rs1.getString(fd.getFieldCode()));
						break;
					case "Lov3":
							fd.setFieldValue(rs1.getString(fd.getFieldCode()));
						break;
					case "Lov4":
							fd.setFieldValue(rs1.getString(fd.getFieldCode()));
					case "Lov5":
							fd.setFieldValue(rs1.getString(fd.getFieldCode()));
						break;
					case "Lov6":
							fd.setFieldValue(rs1.getString(fd.getFieldCode()));
						break;
					case "Lov7":
							fd.setFieldValue(rs1.getString(fd.getFieldCode()));
						break;
					case "Lov8":
							fd.setFieldValue(rs1.getString(fd.getFieldCode()));
						break;
					case "Lov9":
							fd.setFieldValue(rs1.getString(fd.getFieldCode()));
						break;
					case "Lov10":
							fd.setFieldValue(rs1.getString(fd.getFieldCode()));
						break;
					case "Bol1":
							fd.setFieldValue(rs1.getString(fd.getFieldCode()));
						break;
					case "Bol2":
							fd.setFieldValue(rs1.getString(fd.getFieldCode()));
						break;
					case "Bol3":
							fd.setFieldValue(rs1.getString(fd.getFieldCode()));
						break;
					case "Bol4":
							fd.setFieldValue(rs1.getString(fd.getFieldCode()));
					case "Bol5":
							fd.setFieldValue(rs1.getString(fd.getFieldCode()));
						break;
					case "Bol6":
							fd.setFieldValue(rs1.getString(fd.getFieldCode()));
						break;
					case "Bol7":
							fd.setFieldValue(rs1.getString(fd.getFieldCode()));
						break;
					case "Bol8":
							fd.setFieldValue(rs1.getString(fd.getFieldCode()));
						break;
					case "Bol9":
							fd.setFieldValue(rs1.getString(fd.getFieldCode()));
						break;
					case "Bol10":
							fd.setFieldValue(rs1.getString(fd.getFieldCode()));
					default:
						break;
					}			 
				
				fData[i] = fd;
				i++;
				
				
				//
			}
			ret.setFieldData(fData);
		}		
	return ret;
	}
	
	public ArrayList<MerchantListFormTable> getmerchantEntryList(Connection aConn) throws SQLException{
		ArrayList<MerchantListFormTable> ret = new ArrayList<MerchantListFormTable>();
		
		String query = "select  a.MerchantID as MerchantID , b.UserName as MerchantName from CMSMerchantExtra a, CMSMerchant b where a.MerchantID=b.UserId";
		PreparedStatement pstmt = aConn.prepareStatement(query);
		ResultSet rs = pstmt.executeQuery();
		
		while(rs.next()){
			MerchantListFormTable data = new MerchantListFormTable();
			
			data.setMerchantID(rs.getString("MerchantID"));
			data.setName(rs.getString("MerchantName"));
			ret.add(data);
		}		
	return ret;
	}
	
}	
