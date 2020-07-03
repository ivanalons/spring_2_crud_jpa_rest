package com.employees.crud.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.employees.crud.dto.Employee;

public interface IEmployeeDAO extends JpaRepository<Employee, Long>{
	
	@Query(value="select e from Employee e where e.job=:jobName")
	public List<Employee> listAllEmployeesByJob( @Param("jobName")String job );

}
