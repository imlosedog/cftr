package summer.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import summer.entity.Section;
import summer.mapper.SectionMapper;
import summer.service.SectionService;

@Service("SectionService")
public class SectionServiceImpl implements SectionService{

	@Autowired
	private SectionMapper sectionMapper;
	
	public List<Section> getAllSection() {
		return sectionMapper.getAllSection();
	}

	public String addSection(String sName) {
		Section newSection=new Section(sName);
		newSection.setSection_no(String.valueOf(sectionMapper.getCount()+1));
		sectionMapper.addSection(newSection);
			return "success to insert section "+sName;
	}
	
	
	
	

}
