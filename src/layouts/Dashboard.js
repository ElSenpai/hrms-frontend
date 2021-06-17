import React from 'react'
import { Route } from 'react-router';
import Container from './Container';
import Admin from './admin/Admin';
import Employer from './employer/Employer';
import { ToastContainer } from 'react-toastify'


//import CityList from '../pages/jobhunter/cv/CityList';

export default function Dashboard() {
    return (
        <div>
          <ToastContainer position="bottom-left"/>
          <Route path="/home" component={Container} />
          <Route path="/admin" component={Admin} />
          <Route path="/employer" component={Employer} />
       
        </div>
    )
}
