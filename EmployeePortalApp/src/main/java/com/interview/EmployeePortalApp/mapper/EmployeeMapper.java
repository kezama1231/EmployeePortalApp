package com.interview.EmployeePortalApp.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;

import com.interview.EmployeePortalApp.dto.EmployeeCreateRequest;
import com.interview.EmployeePortalApp.dto.EmployeeResponse;
import com.interview.EmployeePortalApp.dto.EmployeeUpdateRequest;
import com.interview.EmployeePortalApp.entity.Employee;

@Mapper(componentModel="spring")
public interface EmployeeMapper {

    @Mapping(target = "employeeId", ignore = true)
    @Mapping(target = "createdAt", ignore = true)
    @Mapping(target = "createdBy", ignore = true)
    @Mapping(target = "modifiedAt", ignore = true)
    @Mapping(target = "modifiedBy", ignore = true)
    Employee toEntity(EmployeeCreateRequest request);


    @Mapping(target = "employeeId", ignore = true)
    @Mapping(target = "createdAt", ignore = true)
    @Mapping(target = "createdBy", ignore = true)
    @Mapping(target = "modifiedAt", ignore = true)
    @Mapping(target = "modifiedBy", ignore = true)
    void updateEntityFromRequest(EmployeeUpdateRequest request, @MappingTarget Employee employee);

    EmployeeResponse toResponse(Employee employee);
}
