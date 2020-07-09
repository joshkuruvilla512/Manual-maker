import React, { Component, useState } from 'react';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from 'reactstrap';

const MenuNavigation = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">Manual Maker</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="../pages/landing">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="../TestForm">Create</NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Options
                </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem href="../pages/aboutUs">
                                    About Us
                                </DropdownItem>
                                <DropdownItem>
                                    Placeholder
                  </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem href="../pages/contactUs">
                                    Contact Us
                  </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                </Collapse>
            </Navbar>
        </div >
    );
}

export default MenuNavigation;