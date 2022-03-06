import React from "react";
import { Menu , Container } from "semantic-ui-react";


export default function NavBar() {
    return (
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item header>
                    Amadeus Scanner
                </Menu.Item>
            </Container>
        </Menu>
    )
}