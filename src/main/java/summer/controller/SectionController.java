package summer.controller;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import summer.entity.Section;
import summer.service.SectionService;
import summer.utils.SummerUtils;

@Controller
@RequestMapping("/section/")
public class SectionController {

	@Autowired
	SectionService sectionService;
	
	@RequestMapping(value="all",method=RequestMethod.GET)
	@ResponseBody
	public List<Section> SectionList(){
		return sectionService.getAllSection();
	}

	@RequestMapping(value="add",method=RequestMethod.POST)
	@ResponseBody
	public Map<String,String> AddSection(@RequestParam String sName){
		Map<String,String> res=new HashMap<String,String>();
		res.put("state", sectionService.addSection(sName));
		return res;
	}
	
	@RequestMapping(value="delete",method=RequestMethod.GET)
	@ResponseBody
	public Map<String,String> DeleteSection(@RequestParam String id){
		Map<String,String> res=new HashMap<String,String>();
		System.out.println(id);
		//res.put("state", sectionService.addSection(sName));
		return res;
	}
	
	
}
