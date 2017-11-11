package org.restful.api.database;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.LinkedHashSet;
import java.util.Set;


public class AppointmentsDb{

	private static Connection con = null;
	
	
	 	    
	    public static Set<String> getReasonList() throws Exception {
	    	
	    	Set<String> dbReasonSet = new LinkedHashSet<String>();	    
	    	
	    	try{
	    		
	    		 //Fetching List of disease and adding in the Set	
	    		con = DatabaseConnection.getCon();
			    PreparedStatement pst = con.prepareStatement("SELECT disease FROM appointment_doctors_list");				
			     ResultSet rs = pst.executeQuery();
			     while(rs.next()){
			    	
			    	 dbReasonSet.add(rs.getString("disease"));			    				    	
			    }
			     
			   //  pst.clearBatch(); // Clears the list of objects in the pst statements
			     rs.close(); // Close the result set to re-use it
		     
			     //Fetching List of specialties and adding in the Set			     
			     
			     pst = con.prepareStatement("SELECT specialty FROM appointment_doctors_list");
			     rs = pst.executeQuery();
			     while(rs.next()){
				    	
			    	 dbReasonSet.add(rs.getString("specialty"));			    				    	
			    }
			     
			//     pst.clearBatch(); // Clears the list of objects in the pst statements
			     rs.close(); // Close the result set to re-use it
			     
			     //Fetching List of Doctor names and adding in the Set
			     
			     pst = con.prepareStatement("SELECT doctor_name FROM appointment_doctors_list");
			     rs = pst.executeQuery();
			     while(rs.next()){
				    	
			    	 dbReasonSet.add(rs.getString("doctor_name"));			    				    	
			    }
			    
			    rs.close();
			    pst.close();
			    con.close();
                // System.out.println(dbReasonSet);
	    	    return dbReasonSet;
	       }catch (SQLException e) {				
				System.err.println("Got an exception!! in appointment_doctors_list ");
			    System.err.println(e.getMessage());
			    return null;
              }
	    }
	    
	    
	    
	    
	    
	    
	    
}
