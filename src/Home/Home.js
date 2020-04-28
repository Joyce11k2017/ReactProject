import React, { Component } from "react";
import { Button } from 'react-bootstrap';
import history from './../history';
import "./Home.css";

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="lander">
          <h1>Home page</h1>
          <p>A simple app listing Git Users and their details</p>
          <form>
            <Button variant="btn btn-success" onClick={() => history.push('/GitUsers')}>Click button to view List of Git Users</Button>
          </form>
        </div>
      </div>
    );
  }
}
