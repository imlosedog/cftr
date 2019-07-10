package summer.service;

import java.io.UnsupportedEncodingException;
import java.util.List;

import summer.entity.Section;


public interface SectionService {

	
	public List<Section> getAllSection();

	public String addSection(String sName);
}
