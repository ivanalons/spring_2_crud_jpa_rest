package com.employees.crud.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.employees.crud.dao.IEmployeeDAO;
import com.employees.crud.dto.Employee;

@Service
public class EmployeeServiceImpl implements IEmployeeService{
	
	public enum JobEnum { //Ha de coincidir amb la enumeració del camp job de la taula employees de  la base de dades
		EMPLOYEE,MANAGER,BOSS,VOLUNTEER
	}
	
	//Injecció de dependència del respositori JPA IEmployeeDAO
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
	
	//Al crear un empleat, en funcio de la feina de l'empleat se li assigna un salari concret
	@Override
	public Employee createEmployee(Employee employee) {
		
		String strJob = employee.getJob().toUpperCase();
		
		JobEnum job = JobEnum.valueOf(strJob);
		
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
			case VOLUNTEER :
				salary = 0;
				break;
			default : //No s'ha introduït una categoria de feina (job) vàlida
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
