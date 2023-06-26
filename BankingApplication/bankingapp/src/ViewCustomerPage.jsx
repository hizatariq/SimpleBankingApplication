import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';
import { Button } from 'antd';

const ViewCustomerPage = ({ match, history }) => {
  
  
  const { id } = match.params;
  const [customer, setCustomer] = useState({
    id:'',
    customerName: '',
    email: '',
    balance: '',
  });

  useEffect(() => {
    fetchCustomer();
  }, [id]);

  const fetchCustomer = async () => {
      
    try {
      const response = await axios.get(`http://localhost:8080/api/customers/${id}`);
      setCustomer(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const transferBalance = () => {
    history.push(`/TransferBalance/${id}`);
  };

  if (!customer) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>View Customer</h2>
      <p>Name: {customer.customerName}</p>
      <p>Email: {customer.email}</p>
      <p>Balance: {customer.balance}</p>
      <Button onClick={transferBalance}>Transfer Balance</Button>
      <Button type="primary" onClick={() => history.push('/customers')}>
              Close
            </Button>
    </div>
  );
};

export default ViewCustomerPage;
