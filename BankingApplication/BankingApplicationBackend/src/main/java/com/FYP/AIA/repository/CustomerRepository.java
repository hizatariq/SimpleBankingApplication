package com.FYP.AIA.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.FYP.AIA.model.Customer;

import java.util.*;


@Repository
public interface CustomerRepository extends JpaRepository<Customer, Long>{
	 @Query("SELECT DISTINCT a.customerName FROM Customer a")
		List<String> findDistinctcustomerName();
	 
	 @Query("SELECT a FROM Customer a WHERE a.customerName = :name")
	    Customer findByName(String name); 
	    
	   
		
//	@Query("Select DISTINCT c.customerName from Customer c ")
//	List Customernames;
//	
//	@Query("SELECT a FROM Customer a WHERE a.customerName = :name")
//	Customer findByName(String customerName);
}
