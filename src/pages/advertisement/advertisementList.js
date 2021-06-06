import React from 'react'
import { Icon, Menu, Table } from "semantic-ui-react";
export default function advertisementList() {
    return (
        <div>
              <Table celled>
        <Table.Header>   
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Open Positons</Table.HeaderCell>
            <Table.HeaderCell>Publish Date</Table.HeaderCell>
            <Table.HeaderCell>Deadline</Table.HeaderCell>
            <Table.HeaderCell>Requirements</Table.HeaderCell>
            <Table.HeaderCell>Active</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          
            <Table.Row>
              <Table.Cell>React Company</Table.Cell>
              <Table.Cell>45</Table.Cell>
              <Table.Cell>12-06-2021</Table.Cell>
              <Table.Cell>11-07-2021</Table.Cell>
              <Table.Cell>Javascript,react,mongoDb,RabbitMq</Table.Cell>
              <Table.Cell>True</Table.Cell>
            </Table.Row>
         
        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="6">
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
