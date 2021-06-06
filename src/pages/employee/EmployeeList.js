import React, { useEffect,useState } from 'react'
import { Icon, Menu, Table } from "semantic-ui-react";
import EmployeeService from '../../services/employeeService';

export default function EmployeeList() {
const [employees, setEmployees] = useState([])
useEffect(()=>{
  let employeeService = new EmployeeService()
  employeeService.getAll().then(result=>setEmployees(result.data.data))

})
    return (
        <div>
            <Table celled>
        <Table.Header>   
          <Table.Row>
            <Table.HeaderCell>First Name</Table.HeaderCell>
            <Table.HeaderCell>Last Name</Table.HeaderCell>
            <Table.HeaderCell>Email</Table.HeaderCell>
            
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {
             employees.map((emp)=>(
                <Table.Row key={emp.userId}>
              <Table.Cell>{emp.firsName}</Table.Cell>
              <Table.Cell>{emp.lastName}</Table.Cell>
              <Table.Cell>{emp.email}</Table.Cell>
            </Table.Row>
             ))
          }
           
         
        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="3">
              <Menu floated="right" pagination>
                <Menu.Item as="a" icon>
                  <Icon name="chevron left" />
                </Menu.Item>
                <Menu.Item as="a">1</Menu.Item>
                <Menu.Item as="a">2</Menu.Item>
                <Menu.Item as="a">3</Menu.Item>
                <Menu.Item as="a">4</Menu.Item>
                <Menu.Item as="a" icon>
                  <Icon name="chevron right" />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
        </div>
    )
}
