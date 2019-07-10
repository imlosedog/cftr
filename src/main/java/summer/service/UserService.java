package summer.service;

import java.util.List;

import summer.entity.User;
import summer.entity.Userlevelpower;
import summer.entity.Administration;
import summer.entity.Comment;
import summer.entity.Webuser;
//UserServiceImpl父类定义
public interface UserService {
	public void Find_Webuser_All();
	
	//public List<User> UserList();
	
	//public void UserLevel();
	
	public void Find_Administration_All();
	
	public void Find_Video_All();
	
	public void Find_Article_All();
	
	public void Find_Articlebelong_All();
	
	public void Find_Comment_All();
	
	public void Find_Datadictionary_All();
	
	public void Find_Datatype_All();
	
	public void Find_Feedback_All();
	
	public void Find_Managesection_All();
	
	public void Find_Picture_All();
	
	public void Find_Proxy_All();
	
	public void Find_Reading_All();
	
	public void Find_Section_All();
	
	public void Find_Userlevelpower_All();
	
	public void Find_Webpicture_All();
}
