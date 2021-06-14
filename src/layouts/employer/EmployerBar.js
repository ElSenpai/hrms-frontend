import React from 'react'
import { Menu } from 'semantic-ui-react'
import JobPostingAdd from '../../pages/job/JobPostingAdd'
export default function EmployerBar() {
    return (
        <div>
             <Menu pointing vertical>
           <Menu.Item  name='Create Job Posting'/>
           <JobPostingAdd/>
           <Menu.Item  name='Some'/>
            <Menu.Item  name='Other'/>
           
        
      </Menu>
        </div>
    )
}
