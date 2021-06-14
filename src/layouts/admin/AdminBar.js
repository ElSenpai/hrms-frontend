import React from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
export default function AdminBar() {
    return (
        <div>
             <Menu pointing vertical>
            <Link to="/admin/confirmjobs"><Menu.Item  name='Confirm Job List'/></Link>
           <Menu.Item  name='Some'/>
            <Menu.Item  name='Other'/>
           
        
      </Menu>
        </div>
    )
}
