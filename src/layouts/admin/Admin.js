import React from 'react'
import JobConfirmList from '../../pages/admin/JobConfirmList'
import AdminBar from './AdminBar'
import { Grid } from "semantic-ui-react";
import { Route } from 'react-router';
export default function Admin() {
    return (
        <div>
                <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
          <AdminBar/>
          </Grid.Column>
          <Grid.Column width={12}>
             
            <Route path="/admin/confirmjobs" component={JobConfirmList} />
            
           
           
           
            
          </Grid.Column>
        </Grid.Row>
      </Grid> 
        </div>
    )
}
