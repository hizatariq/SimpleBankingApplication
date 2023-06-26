import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { Table, Button } from 'antd';


const CustomersPage = () => {
  const [customers, setCustomers] = useState([]);
  const history = useHistory();

  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/customers');
      setCustomers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const addCustomer = () => {
    history.push('/AddCustomer/_add');
  };
  const viewCustomer = (customerId) => {
    history.push(`/viewcustomer/${customerId}`);
  };

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Name',
      dataIndex: 'customerName',
      key: 'customerName',
      render: (text, record) => (
        <a onClick={() => viewCustomer(record.id)}>{text}</a>
      ),
    
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Balance',
      dataIndex: 'balance',
      key: 'balance',
    },
  ];

  return (
    <div>
      <h2>Customers List</h2>
      <Button type="primary" onClick={addCustomer}>Add Customer</Button>
      <Table dataSource={customers} columns={columns} pagination={{ pageSize: 10 }} />
      
    </div>
  );
};

export default CustomersPage;
