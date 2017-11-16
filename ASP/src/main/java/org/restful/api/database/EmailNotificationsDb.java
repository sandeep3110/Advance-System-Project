package org.restful.api.database;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import org.restful.api.model.Profile;

public  class EmailNotificationsDb {
	
	private static Connection con = null;
	
	//INSERT INTO `Email_Notifications` (`serial_number`, `email_id`) VALUES (NULL, 'prashanth6353@gmail.com');
	public static void insertEmail(Profile profile) throws Exception{
		
		     con = DatabaseConnection.getCon();
		     PreparedStatement pst = null;;
		     ResultSet rs = null;;
		     boolean flag = false;
		     
		try{
    		
   		 //Inserting in Email_Notofications database
			 
   		      pst = con.prepareStatement("select email_id from  Email_Notifications");
   		      rs = pst.executeQuery();
   		     while(rs.next()){
   		    	 if(rs.getString("email_id").equalsIgnoreCase(profile.getEmail())){
   		    		 System.out.println( profile.getEmail() + " This Email_Id already registred with us");
   		    		 flag = true;
   		    		}		    	 
   		     }
   		     
   		     if(!flag){
   		    	  		 pst.clearBatch();
	   		    		 pst = con.prepareStatement("INSERT INTO Email_Notifications  VALUES (?,?)");
	   		    		 pst.setString(1,null);
		                 pst.setString(2, profile.getEmail());
		                 pst.executeUpdate();   		    	    
   		             }    
   	    
         }catch (SQLException e) {				
			          System.err.println("Got an exception!! in Email_Notifications table ");
		              System.err.println(e.getMessage());
		      }finally{
        	              pst.close();
	    		          rs.close();
	    		          con.close();
                      }
		
		
	}

}
