package com.interview.EmployeePortalApp.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.interview.EmployeePortalApp.dto.EmployeeCreateRequest;
import com.interview.EmployeePortalApp.dto.EmployeeResponse;
import com.interview.EmployeePortalApp.dto.EmployeeUpdateRequest;
import com.interview.EmployeePortalApp.entity.Employee;
import com.interview.EmployeePortalApp.exception.EmployeeNotFoundException;
import com.interview.EmployeePortalApp.mapper.EmployeeMapper;
import com.interview.EmployeePortalApp.repository.EmployeeRepository;
import com.interview.EmployeePortalApp.service.EmployeeService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class EmployeeServiceImpl implements EmployeeService {

    private final EmployeeRepository repository;
    private final EmployeeMapper mapper;

    @Override
    public EmployeeResponse createEmployee(EmployeeCreateRequest request){
        Employee employee = mapper.toEntity(request);
        Employee savedEmployee = repository.save(employee);
        return mapper.toResponse(savedEmployee);
    }

    @Override
    public List<EmployeeResponse> getEmployeesByDepartment(String department){
        List<EmployeeResponse> list = repository.findByDepartmentOrderByNameAsc(department)
                                        .stream()
                                        .map(mapper::toResponse)
                                        .toList();
        return list;

    }

    @Override
    public EmployeeResponse getEmployeeById(Long employeeId){
        Employee emp = repository.findById(employeeId)
                        .orElseThrow(() -> new EmployeeNotFoundException(employeeId));
        return mapper.toResponse(emp);

    }

    @Override
    public EmployeeResponse updateEmployee(Long employeeId, EmployeeUpdateRequest request){
        Employee emp = repository.findById(employeeId)
                        .orElseThrow(() -> new EmployeeNotFoundException(employeeId));
        mapper.updateEntityFromRequest(request, emp);
        return mapper.toResponse(repository.save(emp));
    }

    @Override
    public EmployeeResponse deleteEmployee(Long employeeId){
        Employee emp = repository.findById(employeeId)
                        .orElseThrow(() -> new EmployeeNotFoundException(employeeId));
        repository.delete(emp);
        return mapper.toResponse(emp);
    }
}
