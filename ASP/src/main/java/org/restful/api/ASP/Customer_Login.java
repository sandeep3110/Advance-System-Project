package org.restful.api.ASP;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.restful.api.database.AppointmentsDb;
import org.restful.api.model.Appointments;

@Path("customer")
public class Customer_Login {
	
@Path("reason")
@GET
@Produces(MediaType.APPLICATION_JSON)

   // API to get the List of Specialties, Reasons , doctors_names
   public Response getConsultingReason() throws Exception{
	Appointments appointment = new Appointments();
	appointment.setReasonSet(AppointmentsDb.getReasonList());  
	
	return (appointment.getReasonSet() != null)?   Response.status(200).entity(appointment).build() : Response.status(404).entity("No values found in Appointment_Doctor_table").build() ;
	  
}

}
