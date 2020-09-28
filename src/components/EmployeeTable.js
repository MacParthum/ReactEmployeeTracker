import React from "react";
import Table from "react-bootstrap/Table";
import employeeData from "../employee.json"

export default function Layout(props) {
  console.log(employeeData);
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Image</th>
          <th>Name</th>
          <th>Email</th>
          <th>DOB</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Image</td>
          <td>Mark Oto</td>
          <td>mark@gmail.com</td>
          <td>01-01-01</td>
        </tr>
      </tbody>
    </Table>
  );
}
