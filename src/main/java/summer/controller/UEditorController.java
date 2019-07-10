package summer.controller;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.io.PrintWriter;
import java.nio.file.Files;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import com.baidu.ueditor.ActionEnter;

@Controller
@Scope("prototype")
@RequestMapping("/ueditor")
public class UEditorController {
 
	@RequestMapping("/a")
	
	public void config(HttpServletRequest request,HttpServletResponse response)
	{
 
		response.setContentType("application/json");
		String rootPath = request.getSession().getServletContext().getRealPath("/");
		System.out.println(rootPath);
		try
		{
			String exec = new ActionEnter(request, rootPath).exec();
			Files a = (Files) request.getSession().getAttribute("file");
			if (a != null)
			{
				//f.Ins(a);
				System.out.println(a.toString());
				request.getSession().removeAttribute("file");
			}
			PrintWriter writer = response.getWriter();
			writer.write(exec);
			writer.flush();
			writer.close();
		}
		catch (IOException e)
		{
			e.printStackTrace();
		}
 
	}
    }
    
    

    
    
    
    
    
  
