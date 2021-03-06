package org.restful.api.database;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

import org.restful.api.model.DoctorQualifications;

public class DoctorProfileDb {

	public DoctorQualifications getDoctorProfile(int doctorMemberId) throws Exception {
		Connection conn = DatabaseConnection.getCon();
		PreparedStatement query = null;
		ResultSet resultSet = null;
		DoctorQualifications docQualifications = new DoctorQualifications();

		try {
			query = conn.prepareStatement("SELECT * FROM health_db.doctor_profile where doctor_member_id=?");

			query.setInt(1, doctorMemberId);
			resultSet = query.executeQuery();
			System.out.println("Get doc Profile " + docQualifications.getDoctorMemberId());
			while (resultSet.next()) {
				docQualifications.setDoctorMemberId(resultSet.getInt("doctor_member_id"));
				docQualifications.setDoctorFirstName(resultSet.getString("first_name"));
				docQualifications.setDoctorLastName(resultSet.getString("last_name"));
				docQualifications.setEducation(resultSet.getString("education"));
				docQualifications.setHospitalAffliation(resultSet.getString("hospital_affliation"));
				docQualifications.setLanguagesSpoken(resultSet.getString("languages"));
				docQualifications.setProfessionalMemberships(resultSet.getString("professional_Memberships"));
				docQualifications.setBoardCertification(resultSet.getString("board_certification"));
				docQualifications.setAffiliatedInsurance(resultSet.getString("affliated_insurance"));
				docQualifications.setSpecialities(resultSet.getString("specialities"));
			}
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			conn.close();
		}

		if (docQualifications.getDoctorFirstName() == null && docQualifications.getDoctorLastName() == null) {
			docQualifications.setErrMessage("No Doctor profile found");
		}

		return docQualifications;
	}

	public DoctorQualifications updateDoctorProfile(DoctorQualifications docQualifications) throws Exception {
		Connection conn = DatabaseConnection.getCon();
		PreparedStatement query = null;
		int count;

		try {
			if (docQualifications.isProfileExists()) {
				query = conn.prepareStatement(
						"UPDATE health_db.doctor_profile SET first_name=?, last_name=?, education=?, hospital_affliation=?, languages=?, professional_Memberships=?, board_certification=?, affliated_insurance=?, specialities=? WHERE doctor_member_id=?");

				query.setString(1, docQualifications.getDoctorFirstName());
				query.setString(2, docQualifications.getDoctorLastName());
				query.setString(3, docQualifications.getEducation());
				query.setString(4, docQualifications.getHospitalAffliation());
				query.setString(5, docQualifications.getLanguagesSpoken());
				query.setString(6, docQualifications.getProfessionalMemberships());
				query.setString(7, docQualifications.getBoardCertification());
				query.setString(8, docQualifications.getAffiliatedInsurance());
				query.setString(9, docQualifications.getSpecialities());

				// query.setInt(10, 12344);
				query.setInt(10, docQualifications.getDoctorMemberId());
				count = query.executeUpdate();

				if (count > 0) {
					docQualifications.setSuccessMessage("Succesfully updated");
				} else {
					docQualifications
							.setErrMessage("There was some error while updating your profile, please try again later");
				}

			} else {
				query = conn.prepareStatement(
						"INSERT into health_db.doctor_profile values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?) ");

				System.out.println("This is doctor first name" + docQualifications.getDoctorFirstName());

				query.setInt(1, docQualifications.getDoctorMemberId());
				query.setString(2, docQualifications.getDoctorFirstName());
				query.setString(3, docQualifications.getDoctorLastName());
				query.setString(4, docQualifications.getEducation());
				query.setString(5, docQualifications.getHospitalAffliation());
				query.setString(6, docQualifications.getLanguagesSpoken());
				query.setString(7, docQualifications.getProfessionalMemberships());
				query.setString(8, docQualifications.getBoardCertification());
				query.setString(9, docQualifications.getAffiliatedInsurance());
				query.setString(10, docQualifications.getSpecialities());

				count = query.executeUpdate();

				if (count > 0) {
					docQualifications.setSuccessMessage("Succesfully updated");
				} else {
					docQualifications
							.setErrMessage("There was some error while updating your profile, please try again later");
				}
			}
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			conn.close();
		}

		return docQualifications;
	}
}
