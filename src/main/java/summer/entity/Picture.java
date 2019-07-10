package summer.entity;

public class Picture {


	private String picutre_no;
	
	private String article_no;

	private int picutre_Position;

	private String picutre_url;


	public String getPicutre_no() {
		return this.picutre_no;
	}

	public void setPicutre_no(String picutre_no) {
		this.picutre_no = picutre_no;
	}

	public String getArticle_no() {
		return this.article_no;
	}

	public void setArticle_no(String article_no) {
		this.article_no = article_no;
	}
	
	public int getPicutre_Position() {
		return this.picutre_Position;
	}

	public void setPicutre_Position(int picutre_Position) {
		this.picutre_Position = picutre_Position;
	}

	public String getPicutre_url() {
		return this.picutre_url;
	}

	public void setPicutre_url(String picutre_url) {
		this.picutre_url = picutre_url;
	}


}