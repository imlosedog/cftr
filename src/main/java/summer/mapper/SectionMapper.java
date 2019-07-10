package summer.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.SelectKey;
import org.springframework.stereotype.Repository;

import summer.entity.Section;

@Repository
public interface SectionMapper {

	
	@Select("select * from section")
	public List<Section> getAllSection();
	
	@Select("select count(*)from section")
	public int getCount();
	
	@Insert("insert into section values (#{section_No},#{section_Name},#{section_Vearlist},#{section_Vlast},#{section_Vtotal})")
	public void addSection(Section section);
	
	@Delete("delete from section where section=#{{id}")
	public void deleteSection(String id);
}
