package com.employees.crud.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.employees.crud.dto.Employee;

// Interficie amb operacions basiques d'operacio sobre la taula EMPLOYEES de la BBDD relacional 
// treballant sobre objectes Employee mapejats mitjançant la Java Persistent API d'Hibernate

public interface IEmployeeDAO extends JpaRepository<Employee, Long>{
	
	//Definicio de mètode de la interficie DAO per a consultar empleats segons la seva feina
	//La feina amb la qual es vol fer la consulta correspon al parametre "job" del metode
	
	@Query(value="select e from Employee e where e.job=:jobName")
	public List<Employee> listAllEmployeesByJob( @Param("jobName")String job );

}
