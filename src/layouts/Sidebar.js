import React from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

export default function Sidebar() {
    return (
        <div>
          <Menu pointing vertical>
            <Link to="/home/employees"><Menu.Item  name='employees'/></Link>
            <Link to="/home/employers"><Menu.Item  name='employers'/></Link>
            <Link to="/home/jobHunters"><Menu.Item  name='jobHunter'/></Link>
           
        
      </Menu>
        </div>
    )
}
