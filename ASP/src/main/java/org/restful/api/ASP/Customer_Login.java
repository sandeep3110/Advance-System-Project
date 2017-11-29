package org.restful.api.ASP;

import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.restful.api.Email.EmailAppointment;
import org.restful.api.database.AppointmentsDb;
import org.restful.api.model.AllPatientDetails;
import org.restful.api.model.DoctorsProfile;
import org.restful.api.model.PatientAppointment;

@Path("customer")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public class Customer_Login {

	@Path("reason")
	@GET

	// API to get the List of Specialties, Reasons , doctors_names
	public Response getConsultingReason() throws Exception {

		AllPatientDetails appointment = new AllPatientDetails();
		appointment.setReasonSet(AppointmentsDb.getReasonList());

		return (appointment.getReasonSet() != null) ? Response.status(200).entity(appointment).build()
				: Response.status(404).entity("No values found in Appointment_Doctor_table").build();

	}

	@Path("doctorsList")
	@POST

	// API to get the List of Specialties, Reasons , doctors_names
	public Response getDoctorsList(DoctorsProfile profile) throws Exception {

		AllPatientDetails appointment = new AllPatientDetails();
		appointment.setDoctorsAvailablityList(AppointmentsDb.getListOfDoctors(profile));
		return (appointment.getDoctorsAvailablityList().get(0).getErrMsg() == null)
				? Response.status(200).entity(appointment).build() : Response.status(404).entity(appointment).build();
	}
	
	
	@Path("bookAppoint")
	@POST
	
	//API for booking appointment for selected doctor and for selected date
	public Response bookAppointment(PatientAppointment profile) throws Exception {
		
		
		boolean confirm = AppointmentsDb.fixPatientAppointment(profile);

		 if(confirm){
			 EmailAppointment.sendEmailAppointDateAndTime(profile);
			 return Response.status(200).entity("Appointment has been booked").build();
		}else{ 
			return Response.status(404).entity("Appointment has been not booked , due to some other reasons").build();
			 }
		 }
	}
	
	


