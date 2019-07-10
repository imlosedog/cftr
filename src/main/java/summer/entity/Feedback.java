package summer.entity;

public class Feedback {
	
	
	private String feedback_no;

	
	private String feedback_content;

	
	private String feedback_status;

	
	private String feedback_Time;

	private String user_no;

	
	public String getFeedback_no() {
		return this.feedback_no;
	}

	public void setFeedback_no(String feedback_no) {
		this.feedback_no = feedback_no;
	}

	public String getFeedback_content() {
		return this.feedback_content;
	}

	public void setFeedback_content(String feedback_content) {
		this.feedback_content = feedback_content;
	}

	public String getFeedback_status() {
		return this.feedback_status;
	}

	public void setFeedback_status(String feedback_status) {
		this.feedback_status = feedback_status;
	}

	public String getFeedback_Time() {
		return this.feedback_Time;
	}

	public void setFeedback_Time(String feedback_Time) {
		this.feedback_Time = feedback_Time;
	}

	public String getUser_no() {
		return this.user_no;
	}

	public void setUser_no(String user_no) {
		this.user_no = user_no;
	}

}