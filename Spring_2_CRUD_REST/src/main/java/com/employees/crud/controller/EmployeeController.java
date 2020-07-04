package com.employees.crud.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.employees.crud.dto.Employee;
import com.employees.crud.service.EmployeeServiceImpl;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api")
public class EmployeeController {
	
	@Autowired
	EmployeeServiceImpl employeeServiceImpl;
	
	@GetMapping("/employees")
	public List<Employee> listAllEmployees(){
		return employeeServiceImpl.listAllEmployees();
	}
	
	@PostMapping("/employees")
	public Employee saveEmployee(@RequestBody Employee employee) {
		
		return employeeServiceImpl.saveEmployee(employee);
	}
	
	@GetMapping("/employees/{id}")
	public Employee getEmployeeById(@PathVariable(name="id") Long id) {
		
		Employee employeeById= new Employee();
		
		employeeById = employeeServiceImpl.getEmployeeById(id);
				
		return employeeById;
	}
	
	@PutMapping("/employees/{id}")
	public Employee updateEmployee(@PathVariable(name="id")Long id,@RequestBody Employee employee) {
		
		Employee selectedEmployee = new Employee();
		Employee updatedEmployee = new Employee();
		
		selectedEmployee= employeeServiceImpl.getEmployeeById(id);
		
		selectedEmployee.setName(employee.getName());
		selectedEmployee.setJob(employee.getJob());
		selectedEmployee.setSalary(employee.getSalary());
		
		updatedEmployee = employeeServiceImpl.updateEmployee(selectedEmployee);
				
		return updatedEmployee;
	}
	
	@DeleteMapping("/employees/{id}")
	public void deleteEmployee(@PathVariable(name="id")Long id) {
		employeeServiceImpl.deleteEmployee(id);
	}
	
	@GetMapping("/employees/job/{job}")
	public List<Employee> listAllEmployeesByJob(@PathVariable(name="job")String job){
		return employeeServiceImpl.listAllEmployeesByJob(job);
	}
}
