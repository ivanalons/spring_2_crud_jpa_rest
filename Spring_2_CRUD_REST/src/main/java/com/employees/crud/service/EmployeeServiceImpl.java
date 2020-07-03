package com.employees.crud.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.employees.crud.dao.IEmployeeDAO;
import com.employees.crud.dto.Employee;

@Service
public class EmployeeServiceImpl implements IEmployeeService{

	private static final String EMPLOYEE = "EMPLOYEE";
	private static final String MANAGER = "MANAGER";
	private static final String BOSS = "BOSS";
	private static final String VOLUNTEER = "VOLUNTEER";
	
	@Autowired
	IEmployeeDAO iEmployeeDAO;
	
	@Override
	public List<Employee> listAllEmployees() {
		
		return iEmployeeDAO.findAll();
	}
	
	@Override
	public List<Employee> listAllEmployeesByJob( String job ){
		
	    List<Employee> empList = iEmployeeDAO.listAllEmployeesByJob(job);
	    
	    return empList;

	}
	
	@Override
	public Employee saveEmployee(Employee employee) {
		
		String job = employee.getJob().toUpperCase();
		
		int salary = 0;
		
		switch(job) {
			case EMPLOYEE :
				salary = 1000;
				break;
			case MANAGER :
				salary = 2000;
				break;
			case BOSS :
				salary = 3000;
				break;
			default :
				salary = 0;
				break;
		}
		
		employee.setSalary(salary);
		
		return iEmployeeDAO.save(employee);
	}

	@Override
	public Employee getEmployeeById(Long id) {

		return iEmployeeDAO.findById(id).get();
	}

	@Override
	public Employee updateEmployee(Employee employee) {

		return iEmployeeDAO.save(employee);
	}

	@Override
	public void deleteEmployee(Long id) {

		iEmployeeDAO.deleteById(id);
	}
	
	

	
}
