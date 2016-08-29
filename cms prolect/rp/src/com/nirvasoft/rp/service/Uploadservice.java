package com.nirvasoft.rp.service;

import java.io.File;
import java.util.List;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.Consumes;
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

import com.nirvasoft.rp.bl.UploadMgr;
import com.nirvasoft.rp.dao.DAOManager;
import com.nirvasoft.rp.shared.Result;


@Path("/uploadservice")
public class Uploadservice {
	
	@Context
	HttpServletRequest request;
	
	@javax.ws.rs.core.Context 
	ServletContext context;
	
	@POST
	@Path("savePhoto")
	@Consumes(MediaType.MULTIPART_FORM_DATA)
	@Produces(MediaType.APPLICATION_JSON)
	public Result savePhoto(@QueryParam("f") String filePath, @QueryParam("fn") String inputFileName) {
		
		Result res = new Result();
		
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
