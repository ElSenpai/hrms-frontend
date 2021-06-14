import React, { useEffect, useState } from 'react'
import JobPostingService from '../../services/jobPostingService'
import {  Table,Button,Icon } from "semantic-ui-react";

export default function JobConfirmList() {

    const [jobPosting, setJobPosting] = useState([])

    useEffect(() => {
      let jobPostingService = new JobPostingService()
      jobPostingService.getAll().then(result => setJobPosting(result.data.data))
    }, [])
  
   

    return (
        <div>
             <Table celled >
        <Table.Header>
          <Table.Row>
          
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Open Positons</Table.HeaderCell>
            <Table.HeaderCell>Salary</Table.HeaderCell>
            <Table.HeaderCell>Deadline</Table.HeaderCell>
            
            
            <Table.HeaderCell>Confirm</Table.HeaderCell>
            
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {
            
            jobPosting.map((job => (
              <Table.Row key={job.id}>
               
                <Table.Cell>{job.jobPosting?.jobs.name}</Table.Cell>
                <Table.Cell>{job.jobPosting.openPositions}</Table.Cell>
                <Table.Cell>{job.jobPosting.salary}</Table.Cell>
                <Table.Cell>{job.jobPosting.appDeadline}</Table.Cell>
                
               
               <Table.Cell> {job.confirmed ? <Icon color='green' name='checkmark' size='large' />:<Button   basic  icon>
        <Icon color='red' name='wait' />
      </Button>}</Table.Cell>
               
              </Table.Row>
            
            )))
          }


        </Table.Body>

       
      </Table>
        </div>
    )
}
