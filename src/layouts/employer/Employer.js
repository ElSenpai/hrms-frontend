import React from 'react'
import { Grid } from "semantic-ui-react";
//import { Route } from 'react-router';
import EmployerBar from './EmployerBar';
//import JobPostingAdd from '../../pages/job/JobPostingAdd';
export default function Employer() {
    return (
        <div>
              <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
         <EmployerBar/>
          </Grid.Column>
          <Grid.Column width={12}>
           
            
           
           
           
            
          </Grid.Column>
        </Grid.Row>
      </Grid> 
        </div>
    )
}
