
package com.FYP.AIA.model;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;

public class TransferMoney  {


 
    private String tocustomerName;
    
    private String fromcustomerName;

    private double amount;

	

	public double getAmount() {
		return amount;
	}

	public void setAmount(double amount) {
		this.amount = amount;
	}

	public String getTocustomerName() {
		return tocustomerName;
	}

	public void setTocustomerName(String tocustomerName) {
		this.tocustomerName = tocustomerName;
	}

	public String getFromcustomerName() {
		return fromcustomerName;
	}

	public void setFromcustomerName(String fromcustomerName) {
		this.fromcustomerName = fromcustomerName;
	}

	@Override
	public String toString() {
		return "TransferMoney [tocustomerName=" + tocustomerName + ", fromcustomerName=" + fromcustomerName
				+ ", amount=" + amount + "]";
	}

	public TransferMoney() {
		super();
		// TODO Auto-generated constructor stub
	}

	public TransferMoney(String tocustomerName, String fromcustomerName, double amount) {
		super();
		this.tocustomerName = tocustomerName;
		this.fromcustomerName = fromcustomerName;
		this.amount = amount;
	}

	
    
    
    
}
