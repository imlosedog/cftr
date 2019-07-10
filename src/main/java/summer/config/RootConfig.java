package summer.config;

import org.apache.ibatis.mapping.Environment;
import org.mybatis.spring.SqlSessionFactoryBean;
import org.mybatis.spring.mapper.MapperScannerConfigurer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.FilterType;
import org.springframework.context.annotation.PropertySource;
import org.springframework.context.annotation.ComponentScan.Filter;
import org.springframework.jdbc.datasource.DataSourceTransactionManager;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

import com.mchange.v2.c3p0.ComboPooledDataSource;


@Configuration
@ComponentScan(basePackages= {"summer"},
				excludeFilters= {@Filter(type=FilterType.ANNOTATION,value=EnableWebMvc.class)})
public class RootConfig {

	//@Value("${password}")
	private String username="root";
	
	//@Value("${password}")
	private String password="root";
	
	//@Value("${jdbcUrl}")
	private String  url="jdbc:mysql://localhost:3306/summer";
	
	//@Value("${driverClass}")
	private String driverClassName="com.mysql.jdbc.Driver";
	
	//@Value("${initialPoolSize}")
	private int initialPoolSize=5;
	
	//@Value("maxPoolSize")
	private int maxPoolSize=30;
	
	@Bean
	public ComboPooledDataSource dataSource() throws Exception {
		ComboPooledDataSource ds=new ComboPooledDataSource();
		ds.setUser(username);
		ds.setPassword(password);
		ds.setJdbcUrl(url);
		ds.setDriverClass(driverClassName);
		ds.setInitialPoolSize(initialPoolSize);
		ds.setMaxPoolSize(maxPoolSize);
		return ds;
	}
	
	
	@Bean 
	public DataSourceTransactionManager transactionManager(ComboPooledDataSource dataSource) throws Exception {
		DataSourceTransactionManager dstm = new DataSourceTransactionManager();
		dstm.setDataSource(dataSource);
		return dstm;
	}
	
	@Bean
	public SqlSessionFactoryBean sqlSessionFactoryBean(ComboPooledDataSource dataSource,org.apache.ibatis.session.Configuration configuration ) {
		SqlSessionFactoryBean ssfb=new SqlSessionFactoryBean();
		ssfb.setDataSource(dataSource);
		ssfb.setConfiguration(configuration);
		return ssfb;
	}
	
	@Bean
	public MapperScannerConfigurer mapperScannerConfigurer() {
		MapperScannerConfigurer msc=new MapperScannerConfigurer();
		msc.setBasePackage("summer.mapper");
		return msc;
	}
	
	@Bean
	public org.apache.ibatis.session.Configuration configuration() {
		org.apache.ibatis.session.Configuration conf=new org.apache.ibatis.session.Configuration();
		conf.getTypeAliasRegistry().registerAliases("summer.entity");
		conf.addMappers("summer.mapper");
		return conf;
	}
	
}
