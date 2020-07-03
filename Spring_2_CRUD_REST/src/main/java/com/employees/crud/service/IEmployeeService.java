package com.employees.crud.service;

import java.util.List;

import com.employees.crud.dto.Employee;

public interface IEmployeeService {

	public List<Employee> listAllEmployees(); 
	
	public List<Employee> listAllEmployeesByJob( String job );
	
	public Employee saveEmployee(Employee employee);
	
	public Employee getEmployeeById(Long id);
	
	public Employee updateEmployee(Employee employee);
	
	public void deleteEmployee(Long id);
	
}
