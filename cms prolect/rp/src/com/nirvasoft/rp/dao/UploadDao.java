package com.nirvasoft.rp.dao;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public class UploadDao {
	
public static void savePhoto(File file,Connection conn) throws SQLException{
		
		try{	
			System.out.println("save photo dao");
			   FileInputStream fis = new FileInputStream(file);
			   int len = (int)file.length();
	           String query = ("INSERT INTO ImagePhoto VALUES(?)");
	           PreparedStatement pstmt = conn.prepareStatement(query);
	           pstmt.setBinaryStream(1, fis, len); // Method used to insert a stream of bytes
	           pstmt.executeUpdate();
		}
		catch(Exception fne){
			fne.printStackTrace();
		}

	}
}
