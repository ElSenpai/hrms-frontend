import React from 'react'
import { NavLink } from 'react-router-dom'


import { Dropdown, Icon, Container, Menu,  Button } from 'semantic-ui-react'
import JobPostingAdd from '../pages/job/JobPostingAdd'
export default function Navi() {
    return (
        <div>
            <Container>
                <Menu stackable >

                    <Menu.Item>
                    <NavLink to={"/home"} ><Icon circular inverted color='black' name='users' /></NavLink>
                        

                    </Menu.Item>

                
                    
                    
                    <Menu.Item position="right"
                        name='sign-in'

                    >
                        <Button.Group>
                            <Button positive>Login</Button>
                            <Button.Content />
                            <Button negative color='teal'>Sign up</Button>
                        </Button.Group>
                    </Menu.Item>

                  

                        <Dropdown item icon="user" text="UserName" >
                            <Dropdown.Menu>
                              <Dropdown.Item> <NavLink to={"/admin"} >Admin Page</NavLink></Dropdown.Item>
                              <Dropdown.Item>  <NavLink to={"/employer"} > Employer</NavLink></Dropdown.Item>
                             </Dropdown.Menu>
                             </Dropdown>
                          
                    
                </Menu>
            </Container>
        </div>
    )
}
