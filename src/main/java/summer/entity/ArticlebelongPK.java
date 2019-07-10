package summer.entity;

import java.io.Serializable;
import javax.persistence.*;

/**
 * The primary key class for the articlebelong database table.
 * 
 */
@Embeddable
public class ArticlebelongPK implements Serializable {
	//default serial version id, required for serializable classes.
	private static final long serialVersionUID = 1L;

	@Column(name="section_no", insertable=false, updatable=false)
	private String sectionNo;

	@Column(name="article_no", insertable=false, updatable=false)
	private String articleNo;

	public ArticlebelongPK() {
	}
	public String getSectionNo() {
		return this.sectionNo;
	}
	public void setSectionNo(String sectionNo) {
		this.sectionNo = sectionNo;
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
		if (!(other instanceof ArticlebelongPK)) {
			return false;
		}
		ArticlebelongPK castOther = (ArticlebelongPK)other;
		return 
			this.sectionNo.equals(castOther.sectionNo)
			&& this.articleNo.equals(castOther.articleNo);
	}

	public int hashCode() {
		final int prime = 31;
		int hash = 17;
		hash = hash * prime + this.sectionNo.hashCode();
		hash = hash * prime + this.articleNo.hashCode();
		
		return hash;
	}
}