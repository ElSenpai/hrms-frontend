import React from 'react'
import { Icon,  Menu, Table } from "semantic-ui-react";
export default function EmployerList() {
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
          
            <Table.Row>
              <Table.Cell>Ahmet</Table.Cell>
              <Table.Cell>uçar</Table.Cell>
              <Table.Cell>www.selam.com</Table.Cell>
              <Table.Cell>SSG gaming</Table.Cell>
              <Table.Cell>555 22 33</Table.Cell>
            </Table.Row>
         
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
