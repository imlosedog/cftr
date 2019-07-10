package summer.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import summer.service.UserService;

import static org.springframework.web.bind.annotation.RequestMethod.*;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStreamWriter;
import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

import javax.servlet.http.HttpServletRequest;

@Controller
@RequestMapping("/")
public class IndexController {
	
	@Autowired
	UserService userService;
		@RequestMapping(method=GET)
		public String Home() {
			userService.Find_Administration_All();
			return "thymeleaf/backstage/index";
		}
		
		@RequestMapping(value="/a",method=GET)
		public String First(){
			
			return "jsp/index2";
		}
		
		@RequestMapping(value="myuser",method=POST)
		public String Login(@RequestParam("username")String username,@RequestParam("password")String password) {
			
			return "redirect:/"+username;
			
		}
		
		@RequestMapping(value="/{username}",method=GET)
		public String UserProfile(@PathVariable String username,Model model){
			model.addAttribute("username",username);
			return "jsp/profile";
			
		} 
		
		@RequestMapping(value="test",method=RequestMethod.POST)
		@ResponseBody
		public Map<String,String> getUsers(@RequestBody Map<String,String> ma){
			System.out.println(ma.get("mycontent"));
			Map<String,String> map=new HashMap<String,String>(3);
			map.put("user", "22");
			return map;
		} 
		
		@RequestMapping(value="mytest",method=POST)
		public String JsTest(@RequestParam("mycontent") String mycontent,HttpServletRequest request) throws IOException {
		
			System.out.println(request.getCharacterEncoding());
			File file=new File("E://DB/Summer/Articles/1.html");
			FileOutputStream f=new FileOutputStream(file);
			//URLDecoder.decode(mycontent, "GBK");
			mycontent=new String(mycontent.getBytes("ISO8859_1"),"utf-8");
			OutputStreamWriter fw=new OutputStreamWriter(f,"utf-8");
			System.out.println(mycontent);
			mycontent="<html><head><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /></head><body>"+mycontent+"</body></html>";
			fw.write(mycontent);
			fw.close();
			return "redirect:/news/"+"sss";
		}
		
		@RequestMapping(value="news/{title}")
		public String TitleTest(@PathVariable String title,Model model,HttpServletRequest request) throws IOException {
			Map<String,String> map=new HashMap<String,String>();
			String rootPath = request.getSession().getServletContext().getRealPath("/");
			Scanner sc=new Scanner(new File("E://DB/Summer/Articles/1.html"));
			map.put("title", title);
			
			//map.put("content",rootPath+"1.html");
			map.put("content", "http://localhost:8080/Articles/1.html");
			model.addAllAttributes(map);
			
			return "jsp/title";
			
		}
		
		@RequestMapping(value="articles/comment")
		public String comment() {
			return "thymeleaf/comment";
		}
		
		@RequestMapping(value="login",method=GET)
		public String Login() {
			
			return "jsp/register";
		}
		
}
