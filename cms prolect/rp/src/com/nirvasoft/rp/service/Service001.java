package com.nirvasoft.rp.service;
import java.io.File;
import java.util.ArrayList;
import java.util.List;

import javax.naming.spi.DirStateFactory.Result;
import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest; 
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;

import org.apache.commons.fileupload.FileItem;
import org.apache.commons.fileupload.FileItemFactory;
import org.apache.commons.fileupload.disk.DiskFileItemFactory;
import org.apache.commons.fileupload.servlet.ServletFileUpload;

import com.nirvasoft.rp.bl.DBCMSMerchantExtraLOVMgr;
import com.nirvasoft.rp.bl.DBCMSMerchantExtraMgr;
import com.nirvasoft.rp.bl.DBMerchantEntryMgr;
import com.nirvasoft.rp.bl.LOVSetUpMgr;
import com.nirvasoft.rp.bl.UploadMgr;
import com.nirvasoft.rp.dao.DAOManager;
import com.nirvasoft.rp.framework.Bean001;
import com.nirvasoft.rp.framework.E001;
import com.nirvasoft.rp.framework.Lov3;
import com.nirvasoft.rp.framework.Profile;
import com.nirvasoft.rp.shared.CMSMerchantData;
import com.nirvasoft.rp.shared.CMSMerchantSetUpAllData;
import com.nirvasoft.rp.shared.LOVSetUpData;
import com.nirvasoft.rp.shared.LOVSetUpDataArr;
import com.nirvasoft.rp.shared.MerchantListFormTable;
  
@Path("/service001")
public class Service001 {
	@Context
	HttpServletRequest request;
	
	@javax.ws.rs.core.Context 
	ServletContext context;
	
	@GET
	@Path("method001")
	@Produces(MediaType.APPLICATION_JSON)
	public Bean001 test1() { 
		System.out.print("Path: " + context.getRealPath("/"));
		Bean001 res = new Bean001();    
		return res;
	}
	@POST
	@Path("method002")
	@Produces(MediaType.APPLICATION_JSON)    
	@Consumes(MediaType.APPLICATION_JSON)
	public Bean001 test2(Bean001 p){ 
		System.out.print("Path: " + context.getRealPath("/"));
		p.setT1(p.getT1()+" *");
		System.out.println(p.getT1()  + p.getT2()+ p.getT3()); 
	return p;
	}

	@POST
	@Path("signin")
	@Produces(MediaType.APPLICATION_JSON)    
	@Consumes(MediaType.APPLICATION_JSON)
	public Profile signin(Profile p){ 
		if (p!=null && p.getUserID()!=null  && p.getPassword()!=null ) {
			System.out.println("Sign In Path: " + context.getRealPath("/"));
			System.out.println(p.getUserID()  + p.getPassword()); 
			if (p.getUserID().equalsIgnoreCase(p.getPassword())   ){
				p.setPassword("*");  //reset 
			} else {p.setRole(0);}
		}else {p.setRole(0);}
	return p;
	}

	@GET
	@Path("gete001")
	@Produces(MediaType.APPLICATION_JSON)
	public E001 getE001() { 
		System.out.print("Path: " + context.getRealPath("/"));
		E001 res = new E001();  
		return res;
	}
	@POST
	@Path("poste001")
	@Produces(MediaType.APPLICATION_JSON)    
	@Consumes(MediaType.APPLICATION_JSON)
	public E001 postE001(E001 p){  
		System.out.print("Path: " + context.getRealPath("/"));
		System.out.println("POST E001 > " + p.getT1()  + p.getT2()+ p.getUdf()[0].getValue());   
			p.setT1("T1POST");
			p.getUdf()[0].setValue("UDF1POST"); 
	return p;
	}
	
	//for LOV Setup
		@POST
		@Path("savelovSetUp")
		@Produces(MediaType.APPLICATION_JSON)    
		@Consumes(MediaType.APPLICATION_JSON)
		public LOVSetUpData savelovSetUp(LOVSetUpData p){  
			System.out.print("Path: " + context.getRealPath("/"));
				
				DAOManager.AbsolutePath = context.getRealPath("");
				LOVSetUpMgr lovmgr = new LOVSetUpMgr();	           
	            p = lovmgr.savelovSetUp(p);	
		return p;
		}
		
		@POST
		@Path("lovSetUplist")
		@Produces(MediaType.APPLICATION_JSON)
		@Consumes(MediaType.APPLICATION_JSON)
		public LOVSetUpDataArr lovSetUplist(LOVSetUpDataArr data) { 
			System.out.print("Path: " + context.getRealPath("/"));
			DAOManager.AbsolutePath = context.getRealPath("");
			LOVSetUpDataArr res = new LOVSetUpDataArr();  
			LOVSetUpMgr lovmgr = new LOVSetUpMgr();
			res =lovmgr.lovSetUplist(data);
			return res;
		}
		
		@POST
		@Path("lovNobyID") 
		@Produces(MediaType.APPLICATION_JSON)
		@Consumes(MediaType.APPLICATION_JSON)
		public LOVSetUpData lovNobyID(LOVSetUpData p){
				System.out.print("Path: " + context.getRealPath("/"));
				LOVSetUpData res = new LOVSetUpData(); 
		 		DAOManager.AbsolutePath = context.getRealPath("");
		 		LOVSetUpMgr lovmgr = new LOVSetUpMgr();
		        res = lovmgr.lovNobyID(p.getLovNo());
		        System.out.println(res.getLovNo());
		return res;
		}

		//CMS Setup
		
		//CMS
				@GET	
				@Path("getCMSMerchantList")
				@Produces(MediaType.APPLICATION_JSON)
				public ArrayList<CMSMerchantData> getCMSMerchantList() { 
					DAOManager.AbsolutePath = context.getRealPath("");		
					ArrayList<CMSMerchantData> res = new ArrayList<CMSMerchantData>();
					DBCMSMerchantExtraMgr cmsMgr = new DBCMSMerchantExtraMgr(); 
					res =cmsMgr.getCMSMerchantList();
					return res;
				}
				
				
				//readCMSMerchantByID		
				@GET
				@Path("getCMSMerchantByID")
				@Produces(MediaType.APPLICATION_JSON)
				public CMSMerchantData getCMSMerchantByID() { 
					String merchantid = request.getParameter("cmsMerchantID");	
					CMSMerchantData res = new CMSMerchantData();	
					DAOManager.AbsolutePath = context.getRealPath("");
					DBCMSMerchantExtraMgr dbMgr =new DBCMSMerchantExtraMgr(); 			
					res = dbMgr.getCMSMerchantByID(merchantid);
					return res; 
				}
				
				//getLOV
				@GET	
				@Path("getLoadLOV")
				@Produces(MediaType.APPLICATION_JSON)
				public Lov3 getLoadLOV() { 
					DAOManager.AbsolutePath = context.getRealPath("");
					Lov3 res = new Lov3();
					DBCMSMerchantExtraLOVMgr dbmgr = new DBCMSMerchantExtraLOVMgr();
					res = dbmgr.getLoadLOV();			
					return res;
				}
				
				//getLOVbyLOVNo		
				@POST
				@Path("getLOVByLOVNo")
				@Produces(MediaType.APPLICATION_JSON)
				@Consumes(MediaType.APPLICATION_JSON)
				public LOVSetUpData getLOVByLOVNo(LOVSetUpData p) { 
					LOVSetUpData res = new LOVSetUpData();	
					DAOManager.AbsolutePath = context.getRealPath("");
					DBCMSMerchantExtraLOVMgr dbMgr =new DBCMSMerchantExtraLOVMgr(); 			
					res = dbMgr.getLOVByLOVNo(p.getLovNo());
					return res; 
				}
				
				//SaveCMSMerchantExtraSetup
				
				@POST
				@Path("SaveCMSMerchantExtraSetup")
				@Produces(MediaType.APPLICATION_JSON)
				@Consumes(MediaType.APPLICATION_JSON)
				public CMSMerchantSetUpAllData SaveCMSMerchantExtraSetup(CMSMerchantSetUpAllData p) { 
					CMSMerchantSetUpAllData res = new CMSMerchantSetUpAllData();	
					DAOManager.AbsolutePath = context.getRealPath("");
					DBCMSMerchantExtraMgr dbMgr =new DBCMSMerchantExtraMgr(); 			
					res = dbMgr.saveCMSMerchantExtraSetup((p));
					return res; 
				}
				
				@GET	
				@Path("getCMSMerchantExtraList")
				@Produces(MediaType.APPLICATION_JSON)
				public ArrayList<CMSMerchantData> getCMSMerchantExtraList() { 
					DAOManager.AbsolutePath = context.getRealPath("");		
					ArrayList<CMSMerchantData> res = new ArrayList<CMSMerchantData>();
					DBCMSMerchantExtraMgr cmsMgr = new DBCMSMerchantExtraMgr(); 
					res =cmsMgr.getCMSMerchantExtraList();
					return res;
				}
				
				@POST
				@Path("getCMSMerchantExtrBymerchantID")
				@Produces(MediaType.APPLICATION_JSON)
				@Consumes(MediaType.APPLICATION_JSON)
				public CMSMerchantSetUpAllData getCMSMerchantExtrBymerchantID(CMSMerchantSetUpAllData p) { 
					DAOManager.AbsolutePath = context.getRealPath("");
					CMSMerchantSetUpAllData res = new CMSMerchantSetUpAllData();  
					DBCMSMerchantExtraMgr dbmgr = new DBCMSMerchantExtraMgr();
					res = dbmgr.getCMSMerchantSetupAllDataByID(p.getmerchantid());
					return res;
				}
				
				//CMSMerchantEntry Form ()
				@POST
				@Path("saveMerchant")
				@Produces(MediaType.APPLICATION_JSON)
				@Consumes(MediaType.APPLICATION_JSON)
				public MerchantListFormTable saveMerchantEntry(MerchantListFormTable p) {
					System.out.print("Path: " + context.getRealPath("/"));

					DAOManager.AbsolutePath = context.getRealPath("");
					DBMerchantEntryMgr dbmgr = new DBMerchantEntryMgr();
					p = dbmgr.saveMerchantEntry(p);
					return p;
				}

				@GET
				@Path("getmerchantIDList")
				@Produces(MediaType.APPLICATION_JSON)
				public ArrayList<MerchantListFormTable> getmerchantIDList() {
					ArrayList<MerchantListFormTable> res = new ArrayList<MerchantListFormTable>();
					DAOManager.AbsolutePath = context.getRealPath("");
					DBMerchantEntryMgr dbmgr = new DBMerchantEntryMgr();
					res = dbmgr.getmerchantIDList();
					return res;
				}
				
				//bind cms entry form control when select id from popup
				@GET
				@Path("getMerchantEntryByID")
				@Produces(MediaType.APPLICATION_JSON)
				public MerchantListFormTable getMerchantEntryByID() {
					String merchantid = request.getParameter("merchantID");
					MerchantListFormTable res = new MerchantListFormTable();
					DAOManager.AbsolutePath = context.getRealPath("");
					DBMerchantEntryMgr dbmgr = new DBMerchantEntryMgr();
					res = dbmgr.getMerchantEntryByID(merchantid);

					return res;
				}

				// bind cms entry data when select id from listform.
				@GET
				@Path("getCMSEntryByID")
				@Produces(MediaType.APPLICATION_JSON)
				public MerchantListFormTable getCMSEntryByID() {
					String merchantid = request.getParameter("merchantID");
					MerchantListFormTable res = new MerchantListFormTable();
					DAOManager.AbsolutePath = context.getRealPath("");
					DBMerchantEntryMgr dbmgr = new DBMerchantEntryMgr();
					res = dbmgr.getCMSEntryByID(merchantid);

					return res;
				}

				// for List Button
				@GET
				@Path("getcmsEntryList")
				@Produces(MediaType.APPLICATION_JSON)
				public ArrayList<MerchantListFormTable> getmerchantEntryList() {
					ArrayList<MerchantListFormTable> res = new ArrayList<MerchantListFormTable>();
					DAOManager.AbsolutePath = context.getRealPath("");
					DBMerchantEntryMgr dbmgr = new DBMerchantEntryMgr();
					res = dbmgr.getmerchantEntryList();

					return res;
				}
				@POST
				@Path("savePhoto")
				@Consumes(MediaType.MULTIPART_FORM_DATA)
				@Produces(MediaType.APPLICATION_JSON)
				public Result savePhoto(@QueryParam("f") String filePath, @QueryParam("fn") String inputFileName) {
					
					Result res = new Result(inputFileName, null);
					
					FileItemFactory factory = new DiskFileItemFactory();
					ServletFileUpload upload = new ServletFileUpload(factory);
					DAOManager.AbsolutePath = context.getRealPath("");
					filePath = request.getServletContext().getRealPath("/") + "/" + filePath;  //save in project folder
					
					//filePath = "D:/" + filePath; // save in D:
					
					File dir = new File(filePath);
					if(!dir.exists())
						dir.mkdirs();
					
					filePath += "/" + inputFileName;
					
					File l_file = new File(filePath);
					try {
						@SuppressWarnings("unchecked")
						List<FileItem> items = upload.parseRequest(request);
						for (FileItem item : items) {
						  
							if (l_file.exists()) {
							  try {
									 l_file.delete();
								  } catch (Exception e) {
									e.printStackTrace();
								  }
							} 
							if (l_file.createNewFile()) {
									item.write(l_file);
							}
						}
					
						UploadMgr.savePhoto(l_file);
					 } catch (Exception e) {
						e.printStackTrace();
					}
						
					return res;
				}

}



