package org.restful.api.database;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.restful.api.model.PatientAppointment;

public class PatientAppointmentsInfo {

	public List<PatientAppointment> getTodaysAppointments(Date date, int doctorMemberId) throws Exception {
		List<PatientAppointment> appointmentList = new ArrayList<PatientAppointment>(); // Creating an object to store the appointmentList.
		Connection conn = DatabaseConnection.getCon(); // Creating a database connection to execute query.
		PreparedStatement query = null;
		ResultSet result = null;

		SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
		String today = formatter.format(date) + " 00:00";
		String dayEnd = formatter.format(date) + " 23:59";

		try {
			query = conn.prepareStatement(
					"SELECT * FROM health_db.patient_appointments where appointment_date >= ? AND appointment_date <= ? AND doctor_member_id=?");
			query.setObject(1, today);
			query.setObject(2, dayEnd);
			query.setInt(3, doctorMemberId);

			result = query.executeQuery();

			while (result.next()) {
				PatientAppointment appointment = new PatientAppointment();
				appointment.setMemberId(result.getInt("member_id"));
				appointment.setPatientFirstName(result.getString("first_name"));
				appointment.setPatientLastName(result.getString("last_name"));
				appointment.setContactNum(result.getString("contact_num"));
				appointment.setCarrierName(result.getString("carrier"));
				appointment.setDate(result.getTimestamp("appointment_date"));
				appointment.setReason(result.getString("reason"));
				appointment.setDoctorMemberId(result.getInt("doctor_member_id"));
                appointment.setPatientName(appointment.getPatientFirstName() + " " + appointment.getPatientLastName());
				appointmentList.add(appointment);
				System.out.println(appointment.getMemberId());
			}

		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} finally {
			conn.close();
		}

		if (appointmentList.size() == 0) {
			PatientAppointment appointment = new PatientAppointment();
			appointment.setDoctorMemberId(doctorMemberId);
			appointment.setErrMessage("No Appointments for today");
			appointmentList.add(appointment);
		}

		return appointmentList;

	}
	
	public List<PatientAppointment> getPastAppointments(Date date, int doctorMemberId) throws Exception {
		List<PatientAppointment> appointmentList = new ArrayList<PatientAppointment>(); // Creating an object to store the appointmentList.
		Connection conn = DatabaseConnection.getCon(); // Creating a database connection to execute query.
		PreparedStatement query = null;
		ResultSet result = null;

		SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
		String today = formatter.format(date) + " 00:00";

		try {
			query = conn.prepareStatement(
					"SELECT * FROM health_db.patient_appointments where appointment_date < ? AND doctor_member_id=?");
			query.setObject(1, today);
			query.setInt(2, doctorMemberId);

			result = query.executeQuery();

			while (result.next()) {
				PatientAppointment appointment = new PatientAppointment();
				appointment.setMemberId(result.getInt("member_id"));
				appointment.setPatientFirstName(result.getString("first_name"));
				appointment.setPatientLastName(result.getString("last_name"));
				appointment.setContactNum(result.getString("contact_num"));
				appointment.setCarrierName(result.getString("carrier"));
				appointment.setDate(result.getTimestamp("appointment_date"));
				appointment.setReason(result.getString("reason"));
				appointment.setDoctorMemberId(result.getInt("doctor_member_id"));
                appointment.setPatientName(appointment.getPatientFirstName() + " " + appointment.getPatientLastName());
				appointmentList.add(appointment);
				System.out.println(appointment.getMemberId());
			}

		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} finally {
			conn.close();
		}

		if (appointmentList.size() == 0) {
			PatientAppointment appointment = new PatientAppointment();
			appointment.setDoctorMemberId(doctorMemberId);
			appointment.setErrMessage("No Appointments for today");
			appointmentList.add(appointment);
		}

		return appointmentList;

	}
	

	public boolean addAppointments(PatientAppointment patientAppointment) throws Exception {
		Connection conn = DatabaseConnection.getCon();
		PreparedStatement query = null;
		boolean result = false;

		SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd HH:mm");
		String today = formatter.format(patientAppointment.getDate());

		try {
			query = conn.prepareStatement("Insert into health_db.patient_appointments values (?, ?, ?, ?, ?, ?)");

			query.setInt(1, patientAppointment.getMemberId());
			query.setString(2, patientAppointment.getPatientFirstName());
			query.setString(3, patientAppointment.getPatientLastName());
			query.setString(4, patientAppointment.getContactNum());
			query.setString(5, patientAppointment.getCarrierName());
			query.setObject(6, today);
			query.setString(7, patientAppointment.getReason());
			query.setInt(8, patientAppointment.getDoctorMemberId());

			result = query.execute();

		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} finally {
			conn.close();
		}

		return result;
	}
}
