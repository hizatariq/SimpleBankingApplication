package com.FYP.AIA.service;

import com.FYP.AIA.model.Customer;
import com.FYP.AIA.model.TransferMoney;
import com.FYP.AIA.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CustomerService {

    @Autowired
    private CustomerRepository customerRepository;

    public List<Customer> getAllCustomers() {
        return customerRepository.findAll();
    }

    public Customer getCustomerById(Long id) {
        return customerRepository.findById(id).orElse(null);
    }

    public Customer saveCustomer(Customer customer) {
    	
        return customerRepository.save(customer);
    }

     public void addtransfer(TransferMoney newtransfer) {
    	
    	  //change balances of customers 
    	 Customer fromcustomer=customerRepository.findByName(newtransfer.getFromcustomerName());
    	Customer tocustomer= customerRepository.findByName(newtransfer.getTocustomerName());
    	//update balance of fromcustomer
    	double balance=fromcustomer.getBalance()-newtransfer.getAmount();
    	fromcustomer.setBalance(balance);
    	customerRepository.save(fromcustomer);
    	//update balance of tocustomer
    	double tobalance=tocustomer.getBalance()+newtransfer.getAmount();
        tocustomer.setBalance(tobalance);
        customerRepository.save(tocustomer);
    			
     
    }

    public void deleteCustomer(Long id) {
        customerRepository.deleteById(id);
    }
    
    public Customer findByName(String name)
    {
		return customerRepository.findByName(name);
    	
    }
    public List<String> getcustomernames(){
    	return customerRepository.findDistinctcustomerName();
    }
    
}
