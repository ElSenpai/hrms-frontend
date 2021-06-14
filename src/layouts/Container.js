import React from 'react'
import Sidebar from './Sidebar'
import { Grid } from "semantic-ui-react";
import EmployeeList from '../pages/employee/EmployeeList';

import JobHunterList from '../pages/jobhunter/JobHunterList';
import EmployerList from '../pages/employer/EmployerList';
import { Route } from 'react-router';
import JobPostingList from '../pages/job/JobPostingList';
import JobPostingDetails from '../pages/job/JobPostingDetails';
import JobPostingAdd from '../pages/job/JobPostingAdd';

export default function Container() {
    return (
        <div>
            <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
          <Sidebar />
          </Grid.Column>
          <Grid.Column width={12}>
             
            <Route path="/home/employees" component={EmployeeList} />
            <Route path="/home/employers" component={EmployerList} />
            <Route path="/home/jobhunters" component={JobHunterList} />
            <Route path="/home/advertisements" component={JobPostingList} />
            <Route exact path="/home/jobposting/:employerId" component={JobPostingDetails}/>
            <Route path="/home/jobpostingadd" component={JobPostingAdd}/>
            {/* <Route path="/cities" component={CityList} /> */}
            
          </Grid.Column>
        </Grid.Row>
      </Grid>  
        </div>
    )
}
