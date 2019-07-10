package summer.config;

import javax.servlet.ServletContext;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.context.ContextLoader;
import org.springframework.web.context.WebApplicationContext;
import org.springframework.web.servlet.ViewResolver;
import org.springframework.web.servlet.config.annotation.DefaultServletHandlerConfigurer;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;
import org.springframework.web.servlet.view.InternalResourceViewResolver;
import org.thymeleaf.TemplateEngine;
import org.thymeleaf.spring4.SpringTemplateEngine;
import org.thymeleaf.spring4.view.ThymeleafViewResolver;
import org.thymeleaf.templatemode.TemplateMode;
import org.thymeleaf.templateresolver.ITemplateResolver;
import org.thymeleaf.templateresolver.ServletContextTemplateResolver;

@Configuration
@EnableWebMvc
@ComponentScan("summer")
public class WebConfig extends WebMvcConfigurerAdapter 
{

	
	/*
		public void addResourceHandler(ResourceHandlerRegistry registry) {
			registry.addResourceHandler("/images/**").addResourceLocations("classpath:/images/");
			registry.addResourceHandler("/css/**").addResourceLocations("classpath:/css/");
			super.addResourceHandlers(registry);
		}
	
	
	*/
		public void configureDefaultServletHandling(DefaultServletHandlerConfigurer configurer) {
			configurer.enable();
		}
	
	
	
		

		
		 
		@Bean // 配置生成模板解析器
		public ITemplateResolver templateResolver() {
			WebApplicationContext webApplicationContext = ContextLoader.getCurrentWebApplicationContext();
			// ServletContextTemplateResolver需要一个ServletContext作为构造参数，可通过WebApplicationContext 的方法获得
			ServletContextTemplateResolver templateResolver = new ServletContextTemplateResolver(
					webApplicationContext.getServletContext());
			templateResolver.setPrefix("/WEB-INF/");
			templateResolver.setSuffix(".html");
			// templateResolver.setCharacterEncoding("UTF-8");
			// 设置模板模式,也可用字符串"HTML"代替,此处不建议使用HTML5,原因看下图源码
			templateResolver.setTemplateMode(TemplateMode.HTML);
			return templateResolver;
		}
	 
		@Bean // 生成模板引擎并为模板引擎注入模板解析器
		public TemplateEngine templateEngine(ITemplateResolver templateResolver) {
			SpringTemplateEngine templateEngine = new SpringTemplateEngine();
			templateEngine.setTemplateResolver(templateResolver);
			return templateEngine;
		}
	 
		@Bean // 生成视图解析器并未解析器注入模板引擎
		public ViewResolver viewResolver(TemplateEngine templateEngine) {
			ThymeleafViewResolver viewResolver = new ThymeleafViewResolver();
			viewResolver.setContentType("text/html; charset=utf-8");
			viewResolver.setTemplateEngine(templateEngine);
			viewResolver.setViewNames(new String[] {"thymeleaf/*"});
			viewResolver.setOrder(2);
			return viewResolver;
		}

		
		
		@Bean
		public ViewResolver JspviewResolver() {
			InternalResourceViewResolver resolver=
					new InternalResourceViewResolver();
			//resolver.setOrder(1);
			resolver.setPrefix("/WEB-INF/");
			resolver.setSuffix(".jsp");
			resolver.setViewNames(new String[] {"jsp/*"});
			return resolver;
		}
	
	
}
