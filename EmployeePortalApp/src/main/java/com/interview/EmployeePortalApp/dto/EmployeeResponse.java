package com.interview.EmployeePortalApp.dto;

import java.time.LocalDateTime;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class EmployeeResponse {
    private Long employeeId;
    private String name;
    private String contactNumber;
    private String department;
    private String email;
    private String jobTitle;
    private LocalDateTime createdAt;
    private LocalDateTime modifiedAt;
    private String createdBy;
    private String modifiedBy;
}
