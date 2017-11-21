package org.restful.api.ASP;

import java.util.Date;

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.restful.api.database.PatientAppointmentsInfo;
import org.restful.api.model.Appointments;
import org.restful.api.model.PatientAppointment;

/**
 * @author Prashanth Avasarala Venkata
 * 
 * This method returns the all the appointments for particular day.
 * @param {Object} patientAppointment - PatientAppointment Object which has doctorId
 * which is used in query to return appointments for that particular doctor.
 * @return {Object} Response - appointmentsList converted into response object with status code 200 for success or
 * 404 if the list is empty.
 */
@Path("doctor")
public class DoctorInfo {

	@Path("todayAppointments")
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response getAppointmentsForToday(PatientAppointment patientAppointment) throws Exception {
		// Creating an object for service call, to get records from the database.
		PatientAppointmentsInfo patientAppointmentsInfo = new PatientAppointmentsInfo();
		
		//Creating an object to store the result list of appointmenst. Appointments class object is return response (success: appointmentList, error: reasonSet)
		Appointments appointmentsList = new Appointments();
		
		//Making a service call to the database and setting the results to the appointmentList to return.
		appointmentsList.setAppointmentsList(patientAppointmentsInfo.getTodaysAppointments(new Date(), patientAppointment.getDoctorMemberId()));
       
    	return (appointmentsList.getAppointmentsList().get(0).getErrMessage() == null)?   Response.status(200).entity(appointmentsList).build() : Response.status(404).entity(appointmentsList).build() ;
	}
	
	@Path("pastAppointments")
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response getPastAppointments(PatientAppointment patientAppointment) throws Exception {
		// Creating an object for service call, to get records from the database.
		PatientAppointmentsInfo patientAppointmentsInfo = new PatientAppointmentsInfo();
		
		//Creating an object to store the result list of appointmenst. Appointments class object is return response (success: appointmentList, error: reasonSet)
		Appointments appointmentsList = new Appointments();
		
		//Making a service call to the database and setting the results to the appointmentList to return.
		appointmentsList.setAppointmentsList(patientAppointmentsInfo.getPastAppointments(new Date(), patientAppointment.getDoctorMemberId()));
       
    	return (appointmentsList.getAppointmentsList().get(0).getErrMessage() == null)?   Response.status(200).entity(appointmentsList).build() : Response.status(404).entity(appointmentsList).build() ;
	}
}
