import React, { Component } from 'react'
import { BrowserRouter as Router,Link, Route, Switch } from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
        <div>
        <h2>Banking Application</h2>
        <Link to="/customers" >Customers</Link>
        </div>
     

    )
  }
}
