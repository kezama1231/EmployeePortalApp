package com.interview.EmployeePortalApp.exception;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(EmployeeNotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public Map<String, Object> handleEmployeeNoutFound(EmployeeNotFoundException ex){
        Map<String, Object> response = new HashMap<>();
        response.put("timestamp: ", LocalDateTime.now());
        response.put("status :", 404 );
        response.put("error :", "NOT FOUND");
        response.put("message :", ex.getMessage());
        return response;
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public Map<String, Object> handleRequestValidation (MethodArgumentNotValidException ex){
        Map<String, Object> response = new HashMap<>();
        response.put("timestamp: ", LocalDateTime.now());
        response.put("status :", 400 );
        response.put("error :", "BAD REQUEST");
        response.put("message :", ex.getMessage());
        return response;
    } 
}
