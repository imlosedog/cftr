package summer.mapper;

import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Repository;

import summer.entity.Administration;
import summer.entity.Article;
import summer.entity.Articlebelong;
import summer.entity.Userlevelpower;
import summer.entity.Webuser;
import summer.entity.Comment;
import summer.entity.Datadictionary;
import summer.entity.Datatype;
import summer.entity.Feedback;
import summer.entity.Managesection;
import summer.entity.Picture;
import summer.entity.Proxy;
import summer.entity.Reading;
import summer.entity.Section;
import summer.entity.Video;
import summer.entity.Webpicture;

import java.util.List;

//定义数据库访问函数
@Repository
public interface UserMapper {
	@Select("select * from Webuser")
	public List<Webuser> Find_Webuser_All();
	
	@Select("select * from Administration")
	public List<Administration> Find_Administration_All();
	
	@Select("select * from Video")
	public List<Video> Find_Video_All();
	
	@Select("select * from Article")
	public List<Article> Find_Article_All();
	
	@Select("select * from Articlebelong")
	public List<Articlebelong> Find_Articlebelong_All();
	
	@Select("select * from Comment")
	public List<Comment> Find_Comment_All();
	
	@Select("select * from Datadictionary")
	public List<Datadictionary> Find_Datadictionary_All();
	
	@Select("select * from Datatype")
	public List<Datatype> Find_Datatype_All();
	
	@Select("select * from Feedback")
	public List<Feedback> Find_Feedback_All();
	
	@Select("select * from Managesection")
	public List<Managesection> Find_Managesection_All();
	
	@Select("select * from Picture")
	public List<Picture> Find_Picture_All();
	
	@Select("select * from Proxy")
	public List<Proxy> Find_Proxy_All();
	
	@Select("select * from Reading")
	public List<Reading> Find_Reading_All();
	
	@Select("select * from Section")
	public List<Section> Find_Section_All();
	
	@Select("select * from Userlevelpower")
	public List<Userlevelpower> Find_Userlevelpower_All();
	
	@Select("select * from Webpicture")
	public List<Webpicture> Find_Webpicture_All();
	
}