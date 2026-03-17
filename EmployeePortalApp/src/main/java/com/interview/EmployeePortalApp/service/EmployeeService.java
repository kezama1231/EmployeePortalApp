package com.interview.EmployeePortalApp.service;

import java.util.List;

import com.interview.EmployeePortalApp.dto.EmployeeCreateRequest;
import com.interview.EmployeePortalApp.dto.EmployeeResponse;
import com.interview.EmployeePortalApp.dto.EmployeeUpdateRequest;

public interface EmployeeService {

    EmployeeResponse createEmployee(EmployeeCreateRequest request);

    List<EmployeeResponse> getEmployeesByDepartment(String department);

    EmployeeResponse getEmployeeById(Long employeeId);

    EmployeeResponse updateEmployee(Long employeeId, EmployeeUpdateRequest request);

    EmployeeResponse deleteEmployee(Long employeeId);
    
}
