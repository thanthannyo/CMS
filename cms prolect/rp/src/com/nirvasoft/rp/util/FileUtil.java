package com.nirvasoft.rp.util;
/* 
TUN THURA THET 2011 04 21
*/
import java.util.*;
import java.text.*;
import java.io.*;


/**
 *   
 * TUN THURA THET @ NTU 2007-2009
 */
public class FileUtil{
	static public String LogFile;

    public static ArrayList<String> readTable(String pTable){
        ArrayList<String> arlRecords =null;
        try{
        	arlRecords = new ArrayList<String>();
            File f = new File(pTable); 
            File [] fileList = f.listFiles();
            for (int i=0;i<fileList.length;i++){
                if (fileList[i].isFile() ){
                	String fname= fileList[i].getAbsolutePath();
                	//System.out.println(fname);
                	if (fname.endsWith("txt")) arlRecords.add(readALine(fname) + "__|" + fname);
                }
            }
        } catch (Exception e){
            System.out.println(e.toString());
        }
        return arlRecords;
    }
    public static void writeTable(String pTable, String id, String data){
        try{
        	writeText(pTable +"/"+ id + ".txt", data, false);
        } catch (Exception e){
            System.out.println(e.toString());
        }
    }

    public static boolean deleteFile( String f) {
     boolean isdeleted=false;
       File file = new File(f);
       try{
       isdeleted =   file.delete();  

       } catch (Exception e){
           System.out.println("File Delete: " + e.toString());
       }
     	return isdeleted;
     }
    public static ArrayList<String> getFileList(String strPath){
        ArrayList<String> arlFiles =null;
        try{
            arlFiles = new ArrayList<String>();
            File f = new File(strPath); 
            File [] fileList = f.listFiles();
            for (int i=0;i<fileList.length;i++){
                if (fileList[i].isFile() ){
                    arlFiles.add(fileList[i].getAbsolutePath());
                } else {
                    ArrayList<String> arlSubFiles = getFileList(fileList[i].getAbsolutePath());
                    arlFiles.addAll(arlSubFiles);
                }
            }
        } catch (Exception e){
            System.out.println(e.toString());
        }
        return arlFiles;
    }
    public static String [] getFileArray(String strPath){
        ArrayList<String> arl = getFileList(strPath);
        String []  a = new String[arl.size()];
        a =    arl.toArray(a);
        return a;
    }
    public static String readText(String strPath){
        StringBuffer sbTemp=new StringBuffer();
        try {
            BufferedReader in = new BufferedReader(new FileReader(strPath));
            String str;
            while ((str = in.readLine()) != null) {
                sbTemp.append(str + "\r");
            }
            in.close();
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
        return sbTemp.toString();
    }   
    public static String readALine(String strPath){
        StringBuffer sbTemp=new StringBuffer();
        try {
            BufferedReader in = new BufferedReader(new FileReader(strPath));
            String str;
            while ((str = in.readLine()) != null) {
                sbTemp.append(str);
            }
            in.close();
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
        return sbTemp.toString();
    }
    public static void logTime(String strMsg){  
    	logTime(strMsg,LogFile);
    }
    public static void logTime(String strMsg,String File){  
        logln(getTime() + " : "+strMsg+ "\r\n", File);
    }
    public static String getTime(){  
        Date d = new Date(System.currentTimeMillis()); //liftOffApollo11.getTime();
        DateFormat df1 = DateFormat.getDateTimeInstance(DateFormat.MEDIUM, DateFormat.MEDIUM);
        String s1 = df1.format(d);
        return s1;
      }
    
    public static String datetoString()
	{
		String l_date = "";
		java.util.Date l_Date = new java.util.Date();
		SimpleDateFormat l_sdf = new SimpleDateFormat("yyyy-MM-dd");	
		l_date = l_sdf.format(l_Date);
		
		return l_date;
	}
    public static String datetoDBString()
  	{
  		String l_date = "";
  		java.util.Date l_Date = new java.util.Date();
  		SimpleDateFormat l_sdf = new SimpleDateFormat("yyyyMMdd");	
  		l_date = l_sdf.format(l_Date);
  		
  		return l_date;
  	}
    
    public static void log(String strContent){
    	log(strContent, LogFile);
    }
    public static void log(String strContent, String File){
    	//System.out.print(strContent);
    	writeText(File,strContent,true);
    }
    public static void logln(String strContent){
    	logln(strContent,LogFile);
    }
    public static void logln(String strContent, String File){
    	log(strContent+"\r\n",File);
    }
    public static void logEmpty(){
    	writeText(LogFile,"",false);
    }
    public static void writeText(String strPath,String strContent,boolean bAppend){
        try {
            BufferedWriter out = new BufferedWriter(new FileWriter(strPath, bAppend));
            out.write(strContent);
            out.close();
        } catch (IOException e) {
            System.out.println(e.toString());
        }
    }
    public static void writeALine(String strPath,String strContent,boolean bAppend){
    	writeText(strPath,strContent + (char) 13 + (char) 10,bAppend);
    }
    public static PrintWriter openWriter(String strPath,boolean bAppend){
    PrintWriter out = null;
        try {
            out = new PrintWriter( new FileWriter(strPath,bAppend));
        }catch (IOException e) {}
        return out;
    }
    public static void writeln(String strContent,PrintWriter out){
        try {
            out.println(strContent);
        } catch (Exception e) {}
    }
    public static void writeList(String strPath,ArrayList<String> arlContent,boolean bAppend){
        StringBuffer sbTemp=new StringBuffer();
        for (int i=0; i < arlContent.size();i++){
            sbTemp.append(arlContent.get(i) + (char) 13 + (char) 10);
        }
        writeText(strPath,sbTemp.toString(),bAppend);
    }
    public static ArrayList<String> readList(String strPath){
        return readList(strPath,false);
    }
    public static ArrayList<String> readList(String strPath,boolean stem){
        ArrayList<String> arlTemp=new ArrayList<String> ();
        try {
            BufferedReader in = new BufferedReader(new FileReader(strPath));
            String str;
            while ((str = in.readLine()) != null) {
                String strOK= str;
                if (stem){
                    strOK =str;
                }
                if (!str.equals(""))
                    arlTemp.add(strOK);
            }
            in.close();
        } catch (Exception e) { System.out.println("Error @ readList" +  e.getMessage());}
        return arlTemp;
    }
    public static BufferedReader  openReader(String strPath){
        BufferedReader in= null;
        try {
            in = new BufferedReader(new FileReader(strPath));
        } catch (Exception e) {}
        return in;
    }
    public static String readln(BufferedReader in){
        String str="";
        try {
            str=in.readLine();
        } catch (Exception e) {}
        return str;
    }
    public static boolean deleteFiles( String d) {
     boolean isdeleted=false;
     File dir = new File(d);
     String[] list = dir.list();
     File file;
     if (list.length == 0) 
      	return isdeleted;
     for (int i = 0; i < list.length; i++) {
       file = new File(d + list[i]);
       isdeleted =   file.delete();      
       }
     	return isdeleted;
     }
   public static boolean deleteFiles( String d, String start) {
        boolean isdeleted=false;
        File dir = new File(d);
        String[] list = dir.list();
        File file;
        if (list.length == 0) 
         	return isdeleted;
        for (int i = 0; i < list.length; i++) {
        	if (list[i].startsWith(start))	{
	        	file = new File(d + list[i]);
	        	isdeleted =   file.delete(); 
        		System.out.println("deleted: " +d + list[i]);	    
        	}
          }
        	return isdeleted;
   }
   public static void makeDir(String d){
        try {new File(d).mkdirs();} catch (Exception e){}
   }
    public static String runFile(String exe) {
        //setPath();
        String sbs=new String();
        StringBuffer sb= new StringBuffer();
        try{
            StringBuffer buff = new StringBuffer();
            String modelCommand = exe;
            Runtime r1 = Runtime.getRuntime();
            Process p = r1.exec(modelCommand);
            BufferedInputStream bufIn = new BufferedInputStream(p.getInputStream());

            int ch;
            while ((ch = bufIn.read()) > -1) {
                buff.append((char)ch);
            }
            bufIn.close();
            sbs = buff.toString();
            System.out.println(sbs);
            sb.append(sbs);
            System.out.println(sbs);
        }
        catch(Exception e){
            e.printStackTrace();
            System.out.println(e.getMessage());
        }
        return sb.toString();
    }
	
}