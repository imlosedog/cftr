package summer.entity;

public class Comment{
	
	
	private String article_no;
	
	private String user_no;

	private String comment_no;

	private String comment_agree;

	private String comment_content;


	private String comment_responseno;


	private String comment_time;

	
	public String getUser_no() {
		return this.user_no;
	}

	public void setUser_no(String user_no) {
		this.user_no = user_no;
	}
	
	public String getArticle_no() {
		return this.article_no;
	}

	public void setArticle_no(String article_no) {
		this.article_no = article_no;
	}
	
	
	public String getComment_no() {
		return this.comment_no;
	}

	public void setComment_no(String comment_no) {
		this.comment_no = comment_no;
	}

	public String getComment_agree() {
		return this.comment_agree;
	}

	public void setComment_agree(String comment_agree) {
		this.comment_agree = comment_agree;
	}

	public String getComment_content() {
		return this.comment_content;
	}

	public void setComment_content(String comment_content) {
		this.comment_content = comment_content;
	}

	public String getComment_responseno() {
		return this.comment_responseno;
	}

	public void setComment_responseno(String comment_responseno) {
		this.comment_responseno = comment_responseno;
	}

	public String getComment_time() {
		return this.comment_time;
	}

	public void setComment_time(String comment_time) {
		this.comment_time = comment_time;
	}

}