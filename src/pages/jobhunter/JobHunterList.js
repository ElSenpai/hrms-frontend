import React, { useEffect,useState } from 'react'
import { Icon,  Menu, Table } from "semantic-ui-react";
import JobHunterService from '../../services/jobHunterService';
export default function JobHunterList() {
const [jobhunters, setJobhunters] = useState([])

  useEffect(()=>{
    let jobhunterService= new JobHunterService()
    jobhunterService.getAll().then(result=>setJobhunters(result.data.data))
  },[])
    return (
        <div>
               <Table celled>
        <Table.Header>   
          <Table.Row>
            <Table.HeaderCell>First Name</Table.HeaderCell>
            <Table.HeaderCell>Last Name</Table.HeaderCell>
            <Table.HeaderCell>Birth Date</Table.HeaderCell>
            <Table.HeaderCell>National Id</Table.HeaderCell>
            <Table.HeaderCell>E mail</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {
          jobhunters.map((hunter)=>(

            <Table.Row key={hunter.userId}>
              <Table.Cell>{hunter.firstName}</Table.Cell>
              <Table.Cell>{hunter.lastName}</Table.Cell>
              <Table.Cell>{hunter.birthDate}</Table.Cell>
              <Table.Cell>{hunter.nationalIdentity}</Table.Cell>
              <Table.Cell>{hunter.email}</Table.Cell>
            </Table.Row>
          ))
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
