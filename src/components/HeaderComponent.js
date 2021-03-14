import React, { Component } from 'react';
import {Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron} from 'reactstrap';
import { NavLink } from 'react-router-dom';


class Header extends Component {

    //"Header" implemented as class component as need to store state info for "isNavOpen" which tracks if collapsable navabr is toggled
    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false
        };

        //need to bind the toggleNav function to constructor for it to be able to be called upon in JSX code (this. method)
        //this js variable "toggleNav" will be pointing to the user-defined function toggleNav
        this.toggleNav=this.toggleNav.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }


    render() {
        return(
            <>
                {/* make "Navbar" appear in non-collapsed state for md and above screen sizes */}
                <Navbar dark expand="md">
                    <div className='container'>
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="/"> <img src="assets/images/logo.png" height="30" width="41" /* src is with ref to index.html file location */
                        alt="Ristorante Con Fusion"/>
                        </NavbarBrand>

                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>

                                {/* each "NavItem" is a Navlink with <a></a> html property, + can add icons from font awesome inside for webpage navigation */}
                                <NavItem>
                                    <NavLink className="nav-link" to="/home">
                                        <span className="fa fa-home fa-lg"></span> Home
                                    </NavLink>
                                </NavItem>

                                <NavItem>
                                    <NavLink className="nav-link" to="/aboutus">
                                        <span className="fa fa-info fa-lg"></span> About Us
                                    </NavLink>
                                </NavItem>

                                <NavItem>
                                    <NavLink className="nav-link" to="/menu">
                                        <span className="fa fa-list fa-lg"></span> Menu
                                    </NavLink>
                                </NavItem>

                                <NavItem>
                                    <NavLink className="nav-link" to="/contactus">
                                        <span className="fa fa-address-card fa-lg"></span> Contact Us
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                <Jumbotron>
                    <div className='container'>
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1> Ristorante Con Fusion </h1>
                                <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                            </div>
                        </div>

                    </div>
                </Jumbotron>
            </>
        );

    }
}
export default Header;