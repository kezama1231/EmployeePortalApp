package com.interview.EmployeePortalApp.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.interview.EmployeePortalApp.dto.EmployeeCreateRequest;
import com.interview.EmployeePortalApp.dto.EmployeeResponse;
import com.interview.EmployeePortalApp.dto.EmployeeUpdateRequest;
import com.interview.EmployeePortalApp.service.EmployeeService;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("api/employees")
@CrossOrigin(origins = "http://localhost:5173")
public class EmployeeController {

    private final EmployeeService service;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public EmployeeResponse createEmployee(@Valid @RequestBody EmployeeCreateRequest request){
        return service.createEmployee(request);
    }

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<EmployeeResponse> getEmployeeByDepartment(@RequestParam String department){
        return service.getEmployeesByDepartment(department);
    }
    
    @GetMapping("/{employeeId}")
    public EmployeeResponse getEmployeeById(@PathVariable Long employeeId){
        return service.getEmployeeById(employeeId);
    }

    @PutMapping("/{employeeId}")
    public EmployeeResponse updateEmployee(
        @PathVariable Long employeeId,
        @RequestBody @Valid EmployeeUpdateRequest request
    ){
        return service.updateEmployee(employeeId, request);
    }

    @DeleteMapping("/{employeeId}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteEmployee(@PathVariable Long employeeId){
        service.deleteEmployee(employeeId);
    }
}
