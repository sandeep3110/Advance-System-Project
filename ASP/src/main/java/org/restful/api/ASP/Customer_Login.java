package org.restful.api.ASP;

import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.restful.api.database.AppointmentsDb;
import org.restful.api.model.Appointments;
import org.restful.api.model.DoctorsProfile;

@Path("customer")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public class Customer_Login {
	
	
	
@Path("reason")
@GET

   // API to get the List of Specialties, Reasons , doctors_names
   public Response getConsultingReason() throws Exception{
	
	Appointments appointment = new Appointments();
	appointment.setReasonSet(AppointmentsDb.getReasonList());  
	
	return (appointment.getReasonSet() != null)?   Response.status(200).entity(appointment).build() : Response.status(404).entity("No values found in Appointment_Doctor_table").build() ;
	  
   }

@Path("doctorsList")
@POST

   // API to get the List of Specialties, Reasons , doctors_names
   public Response getDoctorsList(DoctorsProfile profile) throws Exception{
	      
	   Appointments appointment = new Appointments();
	   appointment.setDoctorsAvailablityList(AppointmentsDb.getListOfDoctors(profile));
	   return (appointment.getDoctorsAvailablityList().get(0).getErrMsg() == null)?   Response.status(200).entity(appointment).build() : Response.status(404).entity(appointment).build() ;
   }


}
