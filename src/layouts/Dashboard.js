import React from 'react'
import Sidebar from './Sidebar'
import { Grid } from "semantic-ui-react";
import EmployeeList from '../pages/employee/EmployeeList';
import AdvertisementList from '../pages/advertisement/AdvertisementList';
import JobHunterList from '../pages/jobhunter/JobHunterList';
import EmployerList from '../pages/employer/EmployerList';
export default function Dashboard() {
    return (
        <div>
           <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <Sidebar />
          </Grid.Column>
          <Grid.Column width={12}>
            <EmployeeList/>
            <AdvertisementList/>
            <JobHunterList/>
            <EmployerList/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
        </div>
    )
}
