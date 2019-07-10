package summer.entity;


public class Section { 
	
	private String section_no;

	
	private String section_name;

	
	private String section_vearlist;

	
	private String section_vlast;

	
	private String section_vtotal;

	public Section(String sName) {
		this.section_name=sName;
		this.section_vearlist=String.valueOf(0);
		this.section_vlast=String.valueOf(0);
		this.section_vtotal=String.valueOf(0);
	}

	
	public String getSection_no() {
		return this.section_no;
	}

	public void setSection_no(String section_no) {
		this.section_no = section_no;
	}

	public String getSection_name() {
		return this.section_name;
	}

	public void setSection_name(String section_name) {
		this.section_name = section_name;
	}

	public String getSection_vearlist() {
		return this.section_vearlist;
	}

	public void setSection_vearlist(String section_vearlist) {
		this.section_vearlist = section_vearlist;
	}

	public String getSection_vlast() {
		return this.section_vlast;
	}

	public void setSection_vlast(String section_vlast) {
		this.section_vlast = section_vlast;
	}

	public String getSection_vtotal() {
		return this.section_vtotal;
	}

	public void setSection_vtotal(String section_vtotal) {
		this.section_vtotal = section_vtotal;
	}

}