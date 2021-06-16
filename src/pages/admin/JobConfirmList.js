import React, { useEffect, useState } from 'react'
import JobPostingService from '../../services/jobPostingService'
import EmployeeService from '../../services/employeeService'
import {  Table,Button,Icon } from "semantic-ui-react";

export default function JobConfirmList() {
    let employeeService= new EmployeeService()
    const [jobPosting, setJobPosting] = useState([])
   
   
    useEffect(() => {
      let jobPostingService = new JobPostingService()
      
      jobPostingService.getAllConfirmed().then(result => setJobPosting(result.data.data))
      
    }, [])
  
    
    const confirmPosting=(postId)=>{
       let status={
         status:{id:1},
         jobPosting:{id:postId},
         employee:{userId:3}
       }

      console.log(postId)
      //employeeService.confirm(status)
    }
   

    return (
        <div>
          
             <Table celled >
        <Table.Header>
          <Table.Row>
          
            <Table.HeaderCell>Website</Table.HeaderCell>
            <Table.HeaderCell>Job Title</Table.HeaderCell>
            <Table.HeaderCell>Salary</Table.HeaderCell>
            <Table.HeaderCell>Application Date</Table.HeaderCell>
            
            
            <Table.HeaderCell>Confirm</Table.HeaderCell>
            
          </Table.Row>
        </Table.Header>
        
        <Table.Body>
          {
             
            
            jobPosting.map((job => (
              <Table.Row key={job.id}>
               <Table.Cell>{job.jobPosting?.employer?.website}</Table.Cell>
                <Table.Cell>{job.jobPosting?.jobs?.name}</Table.Cell>
                <Table.Cell>{job.jobPosting?.salary}</Table.Cell>
                <Table.Cell>{job.jobPosting?.appDate}</Table.Cell>
                <Table.Cell> <Button onClick={confirmPosting(job.jobPosting?.id)}  >{job.status?.name  } </Button></Table.Cell>
            
              </Table.Row>
            
            )))
          }


        </Table.Body>

       
      </Table>
        </div>
    )
}
