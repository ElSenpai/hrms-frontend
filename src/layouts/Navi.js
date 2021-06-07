import React from 'react'

import { Dropdown, Icon, Container, Menu, Button, Image } from 'semantic-ui-react'
export default function Navi() {
    return (
        <div>
            <Container>
                <Menu stackable >

                    <Menu.Item>
                        <Icon circular inverted color='black' name='users' />
                       
                    </Menu.Item>

                    {/* <Menu.Item
                        name='features'

                    >

                    </Menu.Item>

                    <Menu.Item
                        name='testimonials'

                    >
                        Testimonials
        </Menu.Item > */}
                    <Dropdown item text='Advertisements'>
                        <Dropdown.Menu>
                            <Dropdown.Item>Coming</Dropdown.Item>
                            <Dropdown.Item>Active</Dropdown.Item>
                            <Dropdown.Item>Home</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Menu.Item position="right"
                        name='sign-in'

                    >
                        <Button.Group>
                            <Button positive>Login</Button>
                            <Button.Content />
                            <Button negative color='teal'>Sign up</Button>
                        </Button.Group>
                    </Menu.Item>

                </Menu>
            </Container>
        </div>
    )
}
