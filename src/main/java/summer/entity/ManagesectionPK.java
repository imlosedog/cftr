package summer.entity;

import java.io.Serializable;
import javax.persistence.*;

/**
 * The primary key class for the managesection database table.
 * 
 */
@Embeddable
public class ManagesectionPK implements Serializable {
	//default serial version id, required for serializable classes.
	private static final long serialVersionUID = 1L;

	@Column(name="user_no", insertable=false, updatable=false)
	private String userNo;

	@Column(name="section_no", insertable=false, updatable=false)
	private String sectionNo;

	public ManagesectionPK() {
	}
	public String getUserNo() {
		return this.userNo;
	}
	public void setUserNo(String userNo) {
		this.userNo = userNo;
	}
	public String getSectionNo() {
		return this.sectionNo;
	}
	public void setSectionNo(String sectionNo) {
		this.sectionNo = sectionNo;
	}

	public boolean equals(Object other) {
		if (this == other) {
			return true;
		}
		if (!(other instanceof ManagesectionPK)) {
			return false;
		}
		ManagesectionPK castOther = (ManagesectionPK)other;
		return 
			this.userNo.equals(castOther.userNo)
			&& this.sectionNo.equals(castOther.sectionNo);
	}

	public int hashCode() {
		final int prime = 31;
		int hash = 17;
		hash = hash * prime + this.userNo.hashCode();
		hash = hash * prime + this.sectionNo.hashCode();
		
		return hash;
	}
}