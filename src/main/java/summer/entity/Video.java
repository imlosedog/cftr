package summer.entity;


public class Video  {
	

	private String video_no;


	private int video_Position;

	private String video_url;

	private String article_no;

	
	public String getVideo_no() {
		return this.video_no;
	}

	public void setVideo_no(String video_no) {
		this.video_no = video_no;
	}

	public int getVideo_position() {
		return this.video_Position;
	}

	public void setVideo_position(int video_Position) {
		this.video_Position = video_Position;
	}

	public String getVideo_url() {
		return this.video_url;
	}

	public void setVideo_url(String video_url) {
		this.video_url = video_url;
	}

	public String getArticle_no() {
		return this.article_no;
	}

	public void setArticle_no(String article_no) {
		this.article_no = article_no;
	}

}