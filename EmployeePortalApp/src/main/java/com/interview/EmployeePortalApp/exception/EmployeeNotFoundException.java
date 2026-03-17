package com.interview.EmployeePortalApp.exception;

public class EmployeeNotFoundException extends RuntimeException {
    public EmployeeNotFoundException(Long employeeID){
        super("Employee not found with id: " + employeeID);
    }
    
}
