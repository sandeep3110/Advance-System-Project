package org.restful.api.ASP;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import org.restful.api.Email.EmailNotification;



@Path("/email")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.TEXT_PLAIN)

public class Email {

	
	
    @GET
    public String emailTest(){
    	
    	return EmailNotification.email();
    }
	
}
