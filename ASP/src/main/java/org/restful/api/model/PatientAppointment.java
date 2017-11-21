package org.restful.api.model;



import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class PatientAppointment {

	private int memberId;
	private String patientFirstName;
	private String patientLastName;
	private String carrierName;
	private String contactNum;
	private Date date;
	private int doctorMemberId;
	private String reason;
	private String errMessage;
	private String patientName;
	
	
	public String getPatientFirstName() {
		return patientFirstName;
	}
	public void setPatientFirstName(String patientFirstName) {
		this.patientFirstName = patientFirstName;
	}
	public String getPatientLastName() {
		return patientLastName;
	}
	public void setPatientLastName(String patientLastName) {
		this.patientLastName = patientLastName;
	}
	public String getCarrierName() {
		return carrierName;
	}
	public void setCarrierName(String carrierName) {
		this.carrierName = carrierName;
	}
	public Date getDate() {
		return date;
	}
	public void setDate(Date date) {
		String dateString = date.toString();
		SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd HH:mm");
		try {
			this.date = formatter.parse(dateString);
		} catch (ParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	public String getReason() {
		return reason;
	}
	public void setReason(String reason) {
		this.reason = reason;
	}
	public int getMemberId() {
		return memberId;
	}
	public void setMemberId(int memberId) {
		this.memberId = memberId;
	}
	public String getContactNum() {
		return contactNum;
	}
	public void setContactNum(String contactNum) {
		this.contactNum = contactNum;
	}
	public String getErrMessage() {
		return errMessage;
	}
	public void setErrMessage(String errMessage) {
		this.errMessage = errMessage;
	}
	public int getDoctorMemberId() {
		return doctorMemberId;
	}
	public void setDoctorMemberId(int doctorMemberId) {
		this.doctorMemberId = doctorMemberId;
	}
	public String getPatientName() {
		return patientName;
	}
	public void setPatientName(String patientName) {
		this.patientName = patientName;
	}
}
