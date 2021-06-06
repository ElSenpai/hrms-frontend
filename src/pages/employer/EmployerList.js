import React, { useEffect,useState } from 'react'
import { Icon,  Menu, Table } from "semantic-ui-react";
import EmployerService from '../../services/employerService';
export default function EmployerList() {

  const [employers, setEmployers] = useState([])
  useEffect(()=>{
    let employerService = new EmployerService()
    employerService.getAll().then(result=>setEmployers(result.data.data))
    
    
  },[])
    return (
        <div>
             <Table celled>
        <Table.Header>   
          <Table.Row>
            <Table.HeaderCell>First Name</Table.HeaderCell>
            <Table.HeaderCell>Last Name</Table.HeaderCell>
            <Table.HeaderCell>website</Table.HeaderCell>
            <Table.HeaderCell>Company Name</Table.HeaderCell>
            <Table.HeaderCell>Phone number</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          
          {
           
          employers.map((emp=>(
            <Table.Row key={emp.useId}>
              <Table.Cell>{emp.firstName}</Table.Cell>
              <Table.Cell>{emp.lastName}</Table.Cell>
              <Table.Cell>{emp.website}</Table.Cell>
              <Table.Cell>{emp.companyName}</Table.Cell>
              <Table.Cell>{emp.phoneNumber}</Table.Cell>
            </Table.Row>
          )))
          }       
        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="5">
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
