package summer.utils;



public class SummerUtils {

	public static String Decode(String cont) {
		try {
			cont=new String(cont.getBytes("ISO8859_1"),"utf-8");
	}catch(Exception e) {
		e.printStackTrace();
	}
		return cont;
	}
}
