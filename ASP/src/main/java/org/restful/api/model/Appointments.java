package org.restful.api.model;

import java.util.LinkedHashSet;
import java.util.Set;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class Appointments {
	
	private  Set<String> reasonSet = new LinkedHashSet<String>();
	

	public  Set<String> getReasonSet() {
		return reasonSet;
	}

	public  void setReasonSet(Set<String> reasonSet) {
		this.reasonSet = reasonSet;
	}

}
