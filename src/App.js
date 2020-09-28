import React from 'react';
import logo from './logo.svg';
import './App.css';

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Search from "./components/Search";
import Nav from "./components/Nav";
import Layout from "./components/Layout";
import EmployeeTable from "./components/EmployeeTable";

function App() {
  return (
    <>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      <Nav />
      <Layout>
      {/* two rows with one col, in the first col have a search, in the second col have an employee table */}
          <Row >
            <Col>
              <Search></Search>
            </Col>
          </Row>
          <Row >
            <Col>
              <EmployeeTable></EmployeeTable>
            </Col>
          </Row>
      </Layout>


    </>
  );
}

export default App;
