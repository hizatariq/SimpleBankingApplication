
import React, { useState, useEffect } from 'react';

import { Form, Input, Button, message } from 'antd';
import axios from 'axios';

const AddCustomer = ({ match, history }) => {

  const { id } = match.params;

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [updating, setUpdate] = useState(false);

  const [customer, setCustomer] = useState({
  
    customerName: '',
    email: '',
    balance: '',
  });

  useEffect(() => {
    if (id === '_add') {
      return;
    } else {
      const fetchData = async () => {
        const response = await axios.get(`http://localhost:8080/api/customers/${id}`);
        setCustomer(response.data);
      };

      fetchData();
    }
  }, [id]);

  const onSubmit = async () => {
    const data = {
     
      customerName: customer. customerName,
      email: customer.email,
      balance: customer.balance,
    };

    setCustomer(data);
   console.log(data);
    if (id === '_add') {
      try {
        const response = await axios.post('http://localhost:8080/api/customers', data);
        console.log(response.data);
        message.success('Customer created successfully!');
      
      
        history.push('/customers');
      } catch (error) {
        console.error(error);
      }
    } else {
      try {
        await axios.put(`http://localhost:8080/api/customers/${id}`, data);
        history.goBack();
      } catch (error) {
        console.error(error);
      }
    }
  };

  const handleChange = (name, value) => {
    setCustomer((prevState) => ({ ...prevState, [name]: value }));
  };

  const Update = (event) => {
    const name = event.target.name;
    if (updating) {
      if (name === 'id') {
        setUpdate(true);
      } else {
        setUpdate(false);
      }
    }
  };

  return (
    <div style={{ textAlign: 'center', backgroundColor: 'white', padding: '50px' }}>
      <h1 style={{ fontSize: '30px', fontWeight: 'bold', textAlign: 'center', color: 'steelblue', fontFamily: 'serif' }}>Add Customer</h1>
      {formSubmitted ? (
        <div>Form submitted successfully!</div>
      ) : (
        <Form onFinish={onSubmit}>


          <Form.Item label="Customer Name">
            <Input
              type="text"
              name=" customerName"
              placeholder="Customer Name"
              value={customer. customerName}
              disabled={updating}
              onChange={(e) => handleChange('customerName', e.target.value)}
            />
          </Form.Item>

        

          <Form.Item label="Email">
            <Input
              type="email"
              name="email"
              placeholder="Email Address"
              value={customer.email}
              disabled={updating}
              onChange={(e) => handleChange('email', e.target.value)}
            />
          </Form.Item>

          <Form.Item label="Balance">
            <Input
              type="number"
              name="balance"
              placeholder="balace"
              value={customer.balance}
              disabled={updating}
              onChange={(e) => handleChange('balance', e.target.value)}
            />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              {updating ? 'Update' : 'Save'}
            </Button>
            <Button type="button" onClick={() => history.push('/customers')}>
              Close
            </Button>
          </Form.Item>
        </Form>
      )}
    </div>
  );
};

export default AddCustomer;



