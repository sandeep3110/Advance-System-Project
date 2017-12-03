package org.restful.api.database;

import java.sql.Connection;
import java.sql.PreparedStatement;


public class Test {

	public static void main(String[] args) throws Exception {
		
		Connection conn = DatabaseConnection.getCon();
		PreparedStatement statement = conn.prepareStatement("insert into test_table values (?, ?)");
		statement.setString(1, "sandeep");
		statement.setString(2, "sandeep@101");
		int result = statement.executeUpdate();
		System.out.println("result is " + result);
	}

}
