package summer.entity;

import java.io.Serializable;
import javax.persistence.*;

/**
 * The primary key class for the reading database table.
 * 
 */
@Embeddable
public class ReadingPK implements Serializable {
	//default serial version id, required for serializable classes.
	private static final long serialVersionUID = 1L;

	@Column(name="user_no", insertable=false, updatable=false)
	private String userNo;

	@Column(name="article_no", insertable=false, updatable=false)
	private String articleNo;

	public ReadingPK() {
	}
	public String getUserNo() {
		return this.userNo;
	}
	public void setUserNo(String userNo) {
		this.userNo = userNo;
	}
	public String getArticleNo() {
		return this.articleNo;
	}
	public void setArticleNo(String articleNo) {
		this.articleNo = articleNo;
	}

	public boolean equals(Object other) {
		if (this == other) {
			return true;
		}
		if (!(other instanceof ReadingPK)) {
			return false;
		}
		ReadingPK castOther = (ReadingPK)other;
		return 
			this.userNo.equals(castOther.userNo)
			&& this.articleNo.equals(castOther.articleNo);
	}

	public int hashCode() {
		final int prime = 31;
		int hash = 17;
		hash = hash * prime + this.userNo.hashCode();
		hash = hash * prime + this.articleNo.hashCode();
		
		return hash;
	}
}