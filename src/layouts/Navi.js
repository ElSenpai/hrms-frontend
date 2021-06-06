import React from 'react'
import { Container, Menu,Button } from 'semantic-ui-react'
export default function Navi() {
    return (
        <div> 
            <Container>
            <Menu stackable >
               
                <Menu.Item>
                HRMS
                </Menu.Item>

                <Menu.Item
                    name='features'

                >
                    Features
        </Menu.Item>

                <Menu.Item
                    name='testimonials'

                >
                    Testimonials
        </Menu.Item >

                <Menu.Item  position="right"
                    name='sign-in'

                >
                    <Button.Group>
    <Button>Login</Button>
    <Button.Or />
    <Button positive>Sign up</Button>
  </Button.Group>
        </Menu.Item>
        
            </Menu>
            </Container>
        </div>
    )
}
