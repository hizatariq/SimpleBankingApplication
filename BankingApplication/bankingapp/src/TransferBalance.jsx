import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { Form, Input, Select, Button,message } from 'antd';

const { Option } = Select;
const TransferBalance = ({ match, history }) => {
  
  
    const { id } = match.params;
    const [customer, setCustomer] = useState({
      id:'',
      customerName: '',
      email: '',
      balance: '',
    });
  const [customernames, setCustomernames] = useState([]);
 
  const [transfermoney,settransfermoney]=useState({
    tocustomerName: '',  
    fromcustomerName: '',  
    amount: '',
  } 
  );

  useEffect(() => {
    fetchCustomer();
    fetchCustomers();
  }, [],[id]);
 

const fetchCustomer = async () => {
    
  try {
    const response = await axios.get(`http://localhost:8080/api/customers/${id}`);
    setCustomer(response.data);
  } catch (error) {
    console.log(error);
  }
};
 
  const fetchCustomers = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/customers/customernames');
      setCustomernames(response.data);
      console.log(customernames);
    } catch (error) {
      console.log(error);
    }
  };


  const onFinish  = async (values) =>{

    const data = {
       
        tocustomerName: values.tocustomerName,
        fromcustomerName: customer.customerName,
        amount: values.amount,
      };
      settransfermoney(data);
      console.log(data);
  
         try {
           const response = await axios.post('http://localhost:8080/api/customers/transfermoney', data);
           console.log(response.data);
           message.success('Transferred successfully!');
          
         
           history.push('/customers');
         } catch (error) {
           console.error(error);
         }

    
  };

  // const customerOptions = customernames.map((customer) => ({
  //   label: customer.customerName,
  //   value: customer.customerName,
  // }));

  return (
    <div>
      <h2>Transfer Balance</h2>
      <Form onFinish={onFinish}>
       
       
          <Form.Item
  name="amount"
  label="Amount"
  rules={[
    { required: true, message: 'Please enter the amount' },
    ({ getFieldValue }) => ({
      validator(_, value) {
        if (value >= 1 && value <= customer.balance) {
          return Promise.resolve();
        }
        return Promise.reject(new Error(`Amount should be between 1 and ${customer.balance}`));
      },
    }),
  ]}
>
  <Input type="number" min={1} max={customer.balance} />
</Form.Item>

        <Form.Item
          name="tocustomerName"
          label="Customer Name"
          rules={[{ required: true, message: 'Please select the customer name' }]}
        >
          <Select placeholder="Select customer">
            {customernames.map(type => (
                        <Option key={type} value={type}>
                          {type}
                        </Option>
                      ))}
           
          </Select>

         
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Transfer
          </Button>
          <Button type="primary" onClick={() => history.push('/customers')}>
              Close
            </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default TransferBalance;
