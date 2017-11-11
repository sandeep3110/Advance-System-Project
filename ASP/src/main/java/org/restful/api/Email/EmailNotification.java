package org.restful.api.Email;

import java.util.Properties;

import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import javax.xml.bind.annotation.XmlRootElement;

import org.restful.api.model.Profile;

@XmlRootElement
public class EmailNotification {
	
	
	
	
@SuppressWarnings("finally")
public static boolean email(Profile profile){
	
	  
	
	  /*For detail explanation visit this site
	   "https://www.tutorialspoint.com/javamail_api/javamail_api_gmail_smtp_server.htm"
	    
	    1) Adding the mail.jar and jar's from lib folder in javamail-1.4.7
         2) Adding Dependency in Maven project 
                    <groupId>javax.mail</groupId>
                      <artifactId>mail</artifactId>
                         <version>1.4.7</version>*/
		
		// Recipient's email ID needs to be mentioned.
	      String to = profile.getEmail();//change accordingly

	      // Sender's email ID needs to be mentioned
	      String from = "notifications.firsthealth@gmail.com";//change accordingly
	      final String username = "notifications.firsthealth";//change accordingly
	      final String password = "FirstHealthInsurance@786";//change accordingly

	      // Assuming you are sending email through relay.jangosmtp.net
	      String host = "smtp.gmail.com";

	      Properties props = new Properties();
	      props.put("mail.smtp.auth", "true");
	      props.put("mail.smtp.starttls.enable", "true");
	      props.put("mail.smtp.host", host);
	      props.put("mail.smtp.port", "587");
	      // Here the host is set as smtp.gmail.com and port is set as 587. Here we have enabled TLS connection.

	      // Get the Session object.
	      Session session = Session.getInstance(props,
	      new javax.mail.Authenticator() {
	         protected PasswordAuthentication getPasswordAuthentication() {
	            return new PasswordAuthentication(username, password);
	         }
	      });

	      try {
	         // Create a default MimeMessage object.
	         Message message = new MimeMessage(session);

	         // Set From: header field of the header.
	         message.setFrom(new InternetAddress(from));

	         // Set To: header field of the header.
	         message.setRecipients(Message.RecipientType.TO,InternetAddress.parse(to));

	         // Set Subject: header field
	         message.setSubject("first-Health Insurance NewsLetter subscription succcesful!");

	         // Now set the actual message
	         message.setContent("<h1>Hello, this is sample for to check send email using JavaMailAPI</h1> " , "text/html");

	         // Send message
	         Transport.send(message);

	         System.out.println("Sent message successfully....");
	         profile.setErrorMsg(" Email with News letter has been Sent,Please check your Inbox !....");
	         
	         

	      } catch (MessagingException e) {
	    	 
	            throw new RuntimeException(e);
	            
	      } finally{
	    	           if(profile.getErrorMsg()!=null){
	    		              return true;
	    	              }else{
	    		               profile.setErrorMsg("Looks like this Email address doesn't Exist ,Please enter Correct email address !!");
	    		               return false;
	    	                  } 
	                } 

	}

}
