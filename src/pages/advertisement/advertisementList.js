
import { Icon, Menu, Table } from "semantic-ui-react";
import { useEffect, useState } from "react";
import JobAdvertisementService from "../../services/jobAdvertisement";
export default function AdvertisementList() {

  const [advertisements, setadvertisements] = useState([])
  useEffect(() => {
    let advertisementService = new JobAdvertisementService()
    advertisementService.getAll().then(result => setadvertisements(result.data.data))
  }, [])

  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Open Positons</Table.HeaderCell>
            <Table.HeaderCell>Salary</Table.HeaderCell>
            <Table.HeaderCell>Deadline</Table.HeaderCell>
            <Table.HeaderCell>Requirements</Table.HeaderCell>
            <Table.HeaderCell>Active</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {
            advertisements.map((advert => (
              <Table.Row key={advert.id}>
                <Table.Cell>{advert.name}</Table.Cell>
                <Table.Cell>{advert.openPositions}</Table.Cell>
                <Table.Cell>{advert.salary}</Table.Cell>
                <Table.Cell>{advert.appDeadline}</Table.Cell>
                <Table.Cell>{advert.requirements}</Table.Cell>
                <Table.Cell>{advert.isActive}</Table.Cell>
              </Table.Row>

            )))
          }


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