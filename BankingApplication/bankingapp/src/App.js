// import logo from './logo.svg';
// import './App.css';
// import React from 'react';
// import Home from './Home';
// import { BrowserRouter as Router,Link, Route, Switch } from 'react-router-dom';
// import { Layout, Menu, Breadcrumb } from 'antd';
// import Customers from './CustomersPage';
// import AddCustomer from './AddCustomer';
// import ViewCustomerPage from './ViewCustomerPage';
// import TransferBalance from './TransferBalance';
// const { Header, Sider, Content, Footer } = Layout;

// const { SubMenu } = Menu;
// function App() {

  


//   return (
//     <Router>
//       <Switch>
//         <Route exact path="/" component={Home} />
//         <Route exact path="/customers" component={Customers} />
//         <Route exact path="/AddCustomer/:id" component={AddCustomer} />
//         <Route exact path="/viewcustomer/:id" component={ViewCustomerPage} />
//         <Route exact path="/TransferBalance/:id" component={TransferBalance} />
//       </Switch>
//     </Router>
//   );
// };


// export default App;



import logo from './logo.svg';
import './App.css';
import React from 'react';
import Home from './Home';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

import { Layout, Menu, Breadcrumb } from 'antd';
import Customers from './CustomersPage';
import AddCustomer from './AddCustomer';
import ViewCustomerPage from './ViewCustomerPage';
import TransferBalance from './TransferBalance';
import mypage from './Components/mypage';

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Router>
      <Layout style={{ minHeight: '100vh' }}>
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Link to="/">Banking Application</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/customers">Customers</Link>
            </Menu.Item>
           
          </Menu>
          
        </Header>
         <Layout>
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Customers</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-content">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/mypage" component={mypage}/>
              {/* <Route exact path="/customers" component={Customers} /> */}
              <Route exact path="/customers">
                <Customers />
              </Route>
              <Route exact path="/AddCustomer/:id" component={AddCustomer} />
              <Route exact path="/viewcustomer/:id" component={ViewCustomerPage} />
              <Route exact path="/TransferBalance/:id" component={TransferBalance} />
              
            </Switch>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Your App Footer</Footer>
      </Layout>
      </Layout>
    </Router>
  );
}

export default App;

