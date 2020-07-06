package com.employees.crud.dto;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="employees") //Mapejar mitjançant JPA, la taula EMPLOYEES amb la classe Employee
public class Employee  {
 
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@Column(name = "name")
	private String name;
	@Column(name = "job")
	private String job;
	@Column(name = "salary")
	private int salary;
	
	public Employee() {
		
	}

	public Employee(Long id, String name, String job, int salary) {
		this.id = id;
		this.name = name;
		this.job = job;
		this.salary = salary;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getJob() {
		return job;
	}

	public void setJob(String job) {
		this.job = job;
	}

	public int getSalary() {
		return salary;
	}

	public void setSalary(int salary) {
		this.salary = salary;
	}
	
	@Override
	public String toString() {
		return "Employee [id="+id+", name="+name+", job="+job+", salary="+salary+"]";
	}
	

}