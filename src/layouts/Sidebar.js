import React from 'react'
import { Menu } from 'semantic-ui-react'
export default function Sidebar() {
    return (
        <div>
          <Menu pointing vertical>
        <Menu.Item
          name='employers'
          
        />
        <Menu.Item
          name='employees'
          
        />
        <Menu.Item
          name='jobHunter'
         
        />
      </Menu>
        </div>
    )
}
