import React from 'react'
import { Route } from 'react-router';
import Container from './Container';
import Admin from './admin/Admin';
import Employer from './employer/Employer';


//import CityList from '../pages/jobhunter/cv/CityList';

export default function Dashboard() {
    return (
        <div>
          
          <Route path="/home" component={Container} />
          <Route path="/admin" component={Admin} />
          <Route path="/employer" component={Employer} />
       
        </div>
    )
}
