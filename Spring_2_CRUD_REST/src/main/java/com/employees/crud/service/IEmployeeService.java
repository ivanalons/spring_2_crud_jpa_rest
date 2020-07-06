package com.employees.crud.service;

import java.util.List;

import com.employees.crud.dto.Employee;

public interface IEmployeeService {

	//Retorna un llistat amb tots els empleats
	public List<Employee> listAllEmployees(); 
	
	//Retorna un llistat amb els empleats que tenen la feina pasasada per paràmetre
	public List<Employee> listAllEmployeesByJob( String job );
	
	//Crea un nou empleat. Retorna l'objecte empleat creat.
	public Employee createEmployee(Employee employee);
	
	//Retorna l'empleat que te com a identificador el id passat per parametre
	public Employee getEmployeeById(Long id);
	
	//Modifica un empleat amb valors dels atributs de l'objecte empleat passat per parametre
	public Employee updateEmployee(Employee employee);
	
	//Elimina l'empleat que te com a identificador l'id passat per parametre
	public void deleteEmployee(Long id);
	
}
