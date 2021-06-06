import React from 'react'
import { Icon, Menu, Table } from "semantic-ui-react";
export default function EmployeeList() {
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
          
            <Table.Row>
              <Table.Cell>Ceren</Table.Cell>
              <Table.Cell>Budak</Table.Cell>
              <Table.Cell>Ceren@Ahmet.com</Table.Cell>
            </Table.Row>
         
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
