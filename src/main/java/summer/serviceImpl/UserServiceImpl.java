package summer.serviceImpl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import summer.entity.Administration;
import summer.entity.Article;
import summer.entity.Articlebelong;
import summer.entity.Comment;
import summer.entity.Datadictionary;
import summer.entity.Datatype;
import summer.entity.Feedback;
import summer.entity.Managesection;
import summer.entity.Picture;
import summer.entity.Proxy;
import summer.entity.Reading;
import summer.entity.Section;
import summer.entity.Userlevelpower;
import summer.entity.Webuser;
import summer.entity.Video;
import summer.entity.Webpicture;
import summer.mapper.UserMapper;
import summer.service.UserService;

@Service("UserService")
public class UserServiceImpl implements UserService{

	@Autowired
	private UserMapper userMapper;
	
//定义数据库实现
	/*
	public void find_webuser_all() {
		Webuser webuser=userMapper.Find_Webuser_All();
		
		System.out.println("--------------------------------------------------------------");
		System.out.println(webuser.getUser_id());
	}
	*/
	
	/*public List<User> UserList() {
		List<User> users=new ArrayList<User>();
		for(int i=0;i<20;i++) {
			User user=new User();
			user.setUser_name(String.valueOf(i));
			users.add(user);
		}
		return users;
	}*/

	public void Find_Webuser_All() {
		// TODO Auto-generated method stub
		List<Webuser> webuser=new ArrayList<Webuser>();
		webuser=userMapper.Find_Webuser_All();
        for (int i = 0; i < webuser.size(); i++) {
            System.out.print(String.format("%-10s", webuser.get(i).getUser_no()));
            System.out.print(String.format("%-10s", webuser.get(i).getLp_nho()));
            System.out.print(String.format("%-10s", webuser.get(i).getUser_name()));
            System.out.print(String.format("%-6s", webuser.get(i).getUser_sex()));
            System.out.print(String.format("%-22s", webuser.get(i).getUser_id()));
            System.out.print(String.format("%-50s", webuser.get(i).getUser_institute()));
            System.out.print(String.format("%-12s", webuser.get(i).getUser_tele()));
            System.out.print(String.format("%-30s", webuser.get(i).getUser_mail()));
            System.out.println(String.format("%-30s", webuser.get(i).getUser_mobile()));
        }
	}

	public void Find_Administration_All() {
		// TODO Auto-generated method stub
		List<Administration> administration=new ArrayList<Administration>();
		administration=userMapper.Find_Administration_All();
		for (int i=0; i<administration.size(); i++)
		{
			System.out.print(String.format("%-10s", administration.get(i).getAdministration_no()));
			System.out.print(String.format("%-10s", administration.get(i).getUser_no()));
			System.out.print(String.format("%-50s", administration.get(i).getAdministration_name()));
			System.out.print(String.format("%-50s", administration.get(i).getAdministration_addr()));
			System.out.print(String.format("%-12s", administration.get(i).getAdministration_recordno()));
			System.out.print(String.format("%-10s", administration.get(i).getAdministration_pc()));
			System.out.print(String.format("%-16s", administration.get(i).getAdministration_tel()));
			System.out.print(String.format("%-30s", administration.get(i).getAdministration_mail()));
			System.out.println(String.format("%-30s", administration.get(i).getAdministration_worktime()));
		}
	
	}
	
	public void Find_Video_All()
	{
		List<Video> video=new ArrayList<Video>();
		video=userMapper.Find_Video_All();
		for (int i=0; i<video.size(); i++)
		{
			System.out.print(String.format("%-10s", video.get(i).getVideo_no()));
			System.out.print(String.format("%-10s", video.get(i).getArticle_no()));
			System.out.print(String.format("%-100s", video.get(i).getVideo_url()));
			System.out.println(String.format("%-10s", video.get(i).getVideo_position()));
		}
	}
	
	public void Find_Article_All()
	{
		List<Article> article=new ArrayList<Article>();
		article=userMapper.Find_Article_All();
		for (int i=0; i<article.size(); i++)
		{
			System.out.print(String.format("%-10s", article.get(i).getArticle_no()));
			System.out.print(String.format("%-10s", article.get(i).getUser_no()));
			System.out.print(String.format("%-60s", article.get(i).getArticle_name()));
			System.out.print(String.format("%-30s", article.get(i).getArticle_time()));
			System.out.print(String.format("%-12s", article.get(i).getArticle_view()));
			System.out.print(String.format("%-12s", article.get(i).getArticle_trans()));
			System.out.print(String.format("%-12s", article.get(i).getArticle_comment()));
			System.out.println(String.format("%-12s", article.get(i).getAtricle_agree()));
			System.out.println(String.format("%s", article.get(i).getArticle_content()));
		}
	}
	
	public void Find_Articlebelong_All()
	{
		List<Articlebelong> articlebelong=new ArrayList<Articlebelong>();
		articlebelong=userMapper.Find_Articlebelong_All();
		for (int i=0; i<articlebelong.size(); i++)
		{
			System.out.print(String.format("%-10s", articlebelong.get(i).getSection_no()));
			System.out.println(String.format("%-10s", articlebelong.get(i).getArticle_no()));
		}
	}
	
	public void Find_Comment_All()
	{
		List<Comment> comment=new ArrayList<Comment>();
		comment=userMapper.Find_Comment_All();
		for (int i=0; i<comment.size(); i++)
		{
			System.out.print(String.format("%-10s", comment.get(i).getComment_no()));
			System.out.print(String.format("%-10s", comment.get(i).getUser_no()));
			System.out.print(String.format("%-10s", comment.get(i).getArticle_no()));
			System.out.print(String.format("%-30s", comment.get(i).getComment_time()));
			System.out.print(String.format("%-10s", comment.get(i).getComment_responseno()));
			System.out.println(String.format("%-12s", comment.get(i).getComment_agree()));
			System.out.println(String.format("%s", comment.get(i).getComment_content()));
		}
	}
	
	public void Find_Datadictionary_All()
	{
		List<Datadictionary> datadictionary=new ArrayList<Datadictionary>();
		datadictionary=userMapper.Find_Datadictionary_All();
		for (int i=0; i<datadictionary.size(); i++)
		{
			System.out.print(String.format("%-10s", datadictionary.get(i).getData_no()));
			System.out.print(String.format("%-10s", datadictionary.get(i).getData_typecode()));
			System.out.print(String.format("%-15s", datadictionary.get(i).getData_code()));
			System.out.print(String.format("%-14s", datadictionary.get(i).getData_name()));
			System.out.println(String.format("%-20s", datadictionary.get(i).getData_memo()));
		}
	}
	
	public void Find_Datatype_All()
	{
		List<Datatype> datatype=new ArrayList<Datatype>();
		datatype=userMapper.Find_Datatype_All();
		for (int i=0; i<datatype.size(); i++)
		{
			System.out.print(String.format("%-10s", datatype.get(i).getDatatype_code()));
			System.out.print(String.format("%-14s", datatype.get(i).getDatatype_name()));
			System.out.println(String.format("%-20s", datatype.get(i).getDatatype_memo()));
		}
	}
	
	public void Find_Feedback_All()
	{
		List<Feedback> feedback=new ArrayList<Feedback>();
		feedback=userMapper.Find_Feedback_All();
		for (int i=0; i<feedback.size(); i++)
		{
			System.out.print(String.format("%-10s", feedback.get(i).getFeedback_no()));
			System.out.print(String.format("%-10s", feedback.get(i).getUser_no()));
			System.out.print(String.format("%-30s", feedback.get(i).getFeedback_Time()));
			System.out.println(String.format("%-10s", feedback.get(i).getFeedback_status()));
			System.out.println(String.format("%s", feedback.get(i).getFeedback_content()));
		}
	}
	
	public void Find_Managesection_All()
	{
		List<Managesection> managesection=new ArrayList<Managesection>();
		managesection=userMapper.Find_Managesection_All();
		for (int i=0; i<managesection.size(); i++)
		{
			System.out.print(String.format("%-10s", managesection.get(i).getUser_no()));
			System.out.println(String.format("%-10s", managesection.get(i).getSection_no()));
		}
	}
	
	public void Find_Picture_All()
	{
		List<Picture> picture=new ArrayList<Picture>();
		picture=userMapper.Find_Picture_All();
		for (int i=0; i<picture.size(); i++)
		{
			System.out.print(String.format("%-10s", picture.get(i).getPicutre_no()));
			System.out.print(String.format("%-10s", picture.get(i).getArticle_no()));
			System.out.print(String.format("%-150s", picture.get(i).getPicutre_url()));
			System.out.println(String.format("%-10s", picture.get(i).getPicutre_Position()));
		}
	}
	
	public void Find_Proxy_All()
	{
		List<Proxy> proxy=new ArrayList<Proxy>();
		proxy=userMapper.Find_Proxy_All();
		for (int i=0; i<proxy.size(); i++)
		{
			System.out.print(String.format("%-10s", proxy.get(i).getProxy_no()));
			System.out.print(String.format("%-10s", proxy.get(i).getUser_no()));
			System.out.print(String.format("%-50s", proxy.get(i).getProxy_name()));
			System.out.print(String.format("%-50s", proxy.get(i).getProxy_work()));
			System.out.print(String.format("%-12s", proxy.get(i).getProxy_tele()));
			System.out.print(String.format("%-50s", proxy.get(i).getProxy_addr()));
			System.out.println(String.format("%-30s", proxy.get(i).getProxy_mail()));
		}
	}
	
	public void Find_Reading_All()
	{
		List<Reading> reading=new ArrayList<Reading>();
		reading=userMapper.Find_Reading_All();
		for (int i=0; i<reading.size(); i++)
		{
			System.out.print(String.format("%-10s", reading.get(i).getUser_no()));
			System.out.println(String.format("%-10s", reading.get(i).getArticle_no()));
		}
	}
	
	public void Find_Section_All()
	{
		List<Section> section=new ArrayList<Section>();
		section=userMapper.Find_Section_All();
		for (int i=0; i<section.size(); i++)
		{
			System.out.print(String.format("%-10s", section.get(i).getSection_no()));
			System.out.print(String.format("%-14s", section.get(i).getSection_name()));
			System.out.print(String.format("%-12s", section.get(i).getSection_vearlist()));
			System.out.print(String.format("%-12s", section.get(i).getSection_vlast()));
			System.out.println(String.format("%-10s", section.get(i).getSection_vtotal()));
		}
	}
	
	public void Find_Userlevelpower_All()
	{
		List<Userlevelpower> userlevelpower=new ArrayList<Userlevelpower>();
		userlevelpower=userMapper.Find_Userlevelpower_All();
		for (int i=0; i<userlevelpower.size(); i++)
		{
			System.out.print(String.format("%-10s", userlevelpower.get(i).getLp_nho()));
			System.out.print(String.format("%-10s", userlevelpower.get(i).getLp_level()));
			System.out.println(String.format("%-10s", userlevelpower.get(i).getLp_power()));
		}
	}
	
	public void Find_Webpicture_All()
	{
		List<Webpicture> webpicture=new ArrayList<Webpicture>();
		webpicture=userMapper.Find_Webpicture_All();
		for (int i=0; i<webpicture.size(); i++)
		{
			System.out.print(String.format("%-10s", webpicture.get(i).getWebpicture_no()));
			System.out.print(String.format("%-14s", webpicture.get(i).getWebpicture_name()));
			System.out.println(String.format("%-150s", webpicture.get(i).getWebpicture_url()));
		}
	}
}
