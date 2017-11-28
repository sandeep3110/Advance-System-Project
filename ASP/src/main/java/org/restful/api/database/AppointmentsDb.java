package org.restful.api.database;

import java.sql.Connection;
import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Set;

import org.restful.api.model.Appointments;
import org.restful.api.model.DoctorsProfile;
import org.restful.api.model.PatientAppointment;

public class AppointmentsDb {

	private static Connection con = null;

	// Method to fill the data in Appointment status reason/disease/doctor name
	public static Set<String> getReasonList() throws Exception {

		Set<String> dbReasonSet = new LinkedHashSet<String>(); // To avoid
																// duplicates

		try {

			// Fetching List of disease and adding in the Set
			con = DatabaseConnection.getCon();
			PreparedStatement pst = con.prepareStatement("SELECT disease FROM appointment_doctors_list");
			ResultSet rs = pst.executeQuery();
			while (rs.next()) {

				dbReasonSet.add(rs.getString("disease"));
			}

			// pst.clearBatch(); // Clears the list of objects in the pst
			// statements
			rs.close(); // Close the result set to re-use it

			// Fetching List of specialties and adding in the Set

			pst = con.prepareStatement("SELECT specialty FROM appointment_doctors_list");
			rs = pst.executeQuery();
			while (rs.next()) {

				dbReasonSet.add(rs.getString("specialty"));
			}

			// pst.clearBatch(); // Clears the list of objects in the pst
			// statements
			rs.close(); // Close the result set to re-use it

			// Fetching List of Doctor names and adding in the Set

			pst = con.prepareStatement("SELECT doctor_name FROM appointment_doctors_list");
			rs = pst.executeQuery();
			while (rs.next()) {

				dbReasonSet.add(rs.getString("doctor_name"));
			}

			rs.close();
			pst.close();
			con.close();
			System.out.println(dbReasonSet);
			return dbReasonSet;
		} catch (SQLException e) {
			System.err.println("Got an exception!! in appointment_doctors_list ");
			System.err.println(e.getMessage());
			return null;
		}
	}

	// Method to get the doctors list when searched with parameters
	// reason,zipcode,carrier

	/*
	 * select * from doctor_availability_list where member_id IN ( SELECT
	 * member_id FROM appointment_doctors_list where zip_code = 19341 AND(
	 * disease = "eye" OR specialty = "eye" OR doctor_name = "eye" ))
	 */

	public static List<DoctorsProfile> getListOfDoctors(DoctorsProfile profile) throws Exception {

		List<DoctorsProfile> doctorsAvailablityList = new ArrayList<DoctorsProfile>();

		try {

			// Fetching List of Doctors and theirs address,availability,address
			// and adding in the doctorsAvailablityLists
			con = DatabaseConnection.getCon();
			PreparedStatement pst = con.prepareStatement("select * from doctor_availability_list where member_id IN "
					+ "(SELECT member_id FROM appointment_doctors_list where zip_code = ? AND ( disease = ? OR specialty = ? OR doctor_name = ?))");
			pst.setInt(1, profile.getZipcode());
			pst.setString(2, profile.getDisease());
			pst.setString(3, profile.getSpecialty());
			pst.setString(4, profile.getDoctorName());
			ResultSet rs = pst.executeQuery();

			while (rs.next()) {
				DoctorsProfile dp = new DoctorsProfile();
				dp.setDoctorName(rs.getString("first_name"));
				dp.setRating(rs.getFloat("rating"));
				dp.setAddress(rs.getString("address"));
				dp.setAvailbleDate(rs.getDate("available_date"));
				dp.setMemberId(rs.getInt("member_id"));				
				doctorsAvailablityList.add(dp);
				System.out.println(dp.getDoctorName());
			}

			if (doctorsAvailablityList.size() == 0) {
				profile.setErrMsg(
						"Sorry no matches found for your selection !!  First Health Insurance regrets for not having doctors in your locations.");
				doctorsAvailablityList.add(profile);
				return doctorsAvailablityList;
			} else {
				rs.close();
				pst.close();
				con.close();
				return doctorsAvailablityList;
			}

		} catch (SQLException e) {
			System.err.println("Got an exception!! in appointment_doctors_list or doctor_availability_list ");
			System.err.println(e.getMessage());
			return null;
		}
	}
	
	//Method to book Appointment for selected doctor and for selected Date
	
	public static boolean fixPatientAppointment(PatientAppointment profile) throws Exception {

		
		boolean status = false;
		/*While inserting into database I'm not initializing the Date date so it taking as null value always
		1) Take input date as string store in appointDate.
	    2) Using appointDate value convert in to Date Date by setter and getters*/
		profile.setDate(profile.getAppointDate());

		try {

			// Fetching List of Doctors and theirs address,availability,address
			// and adding in the doctorsAvailablityLists
			con = DatabaseConnection.getCon();
			System.err.println("Im Inserting");
	 	   	   PreparedStatement pst = con.prepareStatement("INSERT INTO patient_appointments  VALUES (?,?,?,?,?,?,?,?)");
				pst.setInt(1, profile.getMemberId());
				pst.setString(2, profile.getPatientFirstName());
				pst.setString(3, profile.getPatientLastName());
				pst.setString(4, profile.getContactNum());
				pst.setString(5, profile.getCarrierName());
				System.out.println();
				pst.setObject(6, profile.getDate());
				pst.setString(7, profile.getReason());
				pst.setInt(8, profile.getDoctorMemberId());
				
				int result = pst.executeUpdate();
				/*System.out.println("hi from db class result is " + result);*/
				
				if(result > 0){
					System.out.println("Inserted");
					pst.close();
				    con.close();
				    
				    profile.setErrMessage("Appointment has been booked");
				    status = true;
				}else{
					System.out.println("Not Inserted");
					profile.setErrMessage("Appointment has been not booked , due to some other reasons");
					status = false;
				   }
		        }catch (SQLException e) {				
					System.err.println("Got an exception!! in patient_appointments ");
					System.err.println(profile.getDate());
				    System.err.println(e.getMessage());
				    
				}
		return status;
	}
	
	
	

}
