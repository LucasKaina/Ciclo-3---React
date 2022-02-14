import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
} from 'reactstrap';

export const Menu = (props) => {
    const [isOpen, setIsopen] = useState(false);

    const toggle = () => setIsopen(!isOpen);

    return (
        <div>
            <Navbar
                color="info"
                expand="md"
                dark
            >
                <Container>
                    <NavbarBrand href="/">
                        TI Academy
                    </NavbarBrand>
                    <NavbarToggler onClick={function noRefCheck() { }} />
                    <Collapse navbar>
                        <Nav
                            className="me-auto"
                            navbar
                        >
                            <NavItem>
                                <NavLink href="/">
                                    Home
                                </NavLink>
                            </NavItem>


                        </Nav>

                    </Collapse>
                </Container>

            </Navbar>
        </div>
    );
};

