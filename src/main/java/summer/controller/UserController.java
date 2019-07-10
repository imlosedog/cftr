package summer.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import summer.entity.User;
import summer.entity.Userlevelpower;

import summer.entity.Webuser;
import summer.service.UserService;

@Controller
@RequestMapping("/user/")
public class UserController {
		@Autowired
		UserService userService;
		
		
		
		@RequestMapping(value="login",method=RequestMethod.POST)
		public String UserLogin(@RequestParam String username,@RequestParam String password) {
			return "jsp/login";
		}
		
			//数据库输出测试
			@RequestMapping(value="webuser",method=RequestMethod.GET)
			@ResponseBody
		public void getWebuser(){				
				userService.Find_Webuser_All();
				
			}
			
			@RequestMapping(value="administration",method=RequestMethod.GET)
			@ResponseBody
			public void getAdministration(){
				userService.Find_Administration_All();
			}
			
			@RequestMapping(value="video",method=RequestMethod.GET)
			@ResponseBody
			public void getVideo(){
				userService.Find_Video_All();
			}
			
			@RequestMapping(value="article",method=RequestMethod.GET)
			@ResponseBody
			public void getArticle(){
				userService.Find_Article_All();
			}
			
			@RequestMapping(value="articlebelong",method=RequestMethod.GET)
			@ResponseBody
			public void getArticlebelong(){
				userService.Find_Articlebelong_All();
			}
			
			@RequestMapping(value="comment",method=RequestMethod.GET)
			@ResponseBody
			public void getComment(){
				userService.Find_Comment_All();
			}
			
			@RequestMapping(value="datadictionary",method=RequestMethod.GET)
			@ResponseBody
			public void getDatadictionary(){
				userService.Find_Datadictionary_All();
			}
			
			@RequestMapping(value="datatype",method=RequestMethod.GET)
			@ResponseBody
			public void getDatatype(){
				userService.Find_Datatype_All();
			}
			
			@RequestMapping(value="feedback",method=RequestMethod.GET)
			@ResponseBody
			public void getFeedback(){
				userService.Find_Feedback_All();
			}
			
			@RequestMapping(value="managesection",method=RequestMethod.GET)
			@ResponseBody
			public void getManagesection(){
				userService.Find_Managesection_All();
			}
			
			@RequestMapping(value="picture",method=RequestMethod.GET)
			@ResponseBody
			public void getPicture(){
				userService.Find_Picture_All();
			}
			
			@RequestMapping(value="proxy",method=RequestMethod.GET)
			@ResponseBody
			public void getProxy(){
				userService.Find_Proxy_All();
			}
			
			@RequestMapping(value="reading",method=RequestMethod.GET)
			@ResponseBody
			public void getReading(){
				userService.Find_Reading_All();
			}
			
			@RequestMapping(value="section",method=RequestMethod.GET)
			@ResponseBody
			public void getSection(){
				userService.Find_Section_All();
			}
			
			@RequestMapping(value="userlevelpower",method=RequestMethod.GET)
			@ResponseBody
			public void getUserlevelpower(){
				userService.Find_Userlevelpower_All();
			}
			
			@RequestMapping(value="webpicture",method=RequestMethod.GET)
			@ResponseBody
			public void getWebpicture(){
				userService.Find_Webpicture_All();
			}
			
			
			
		
}
