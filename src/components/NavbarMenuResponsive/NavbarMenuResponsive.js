import React from 'react';

import {Link} from 'react-router-dom';
import { Navbar,Nav,NavDropdown, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavbarMenuResponsive.css';
import Hamburger from '../../../node_modules/hamburger-react';

import logo from '../Img/logo.webp';
import NavImage from '../Img/dropdown-img.webp';

function NavbarMenu() {
    return(
        // Navigation bar
        <Navbar bg="light" expand="lg" sticky="top">
                
                <Navbar.Toggle aria-controls="basic-navbar-nav" >
                    <Hamburger></Hamburger>
                </Navbar.Toggle>

                <Navbar.Brand href="#home" className="logo">
                    <Link to="/Home"><img className="logoImg" src={logo} alt="Logo" /></Link>
                </Navbar.Brand>
                
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto" sticky="none">
                        <NavDropdown title="SERVICES" id="basic-nav-dropdown" sticky="none">
                            <NavDropdown title="PRODUCT CATEGORIES" id="nav-drop-categ" sticky="none">
                                <Link to="/404"><NavDropdown.Item href="#action/3.1">Accessories</NavDropdown.Item></Link>
                                <Link to="/404"><NavDropdown.Item href="#action/3.2">Alcohol</NavDropdown.Item></Link>
                                <Link to="/404"><NavDropdown.Item href="#action/3.3">Art</NavDropdown.Item></Link>
                                <Link to="/404"><NavDropdown.Item href="#action/3.4">Books</NavDropdown.Item></Link>
                                <Link to="/404"><NavDropdown.Item href="#action/3.5">Drink</NavDropdown.Item></Link>
                                <Link to="/404"><NavDropdown.Item href="#action/3.6">Electronics</NavDropdown.Item></Link>
                                <Link to="/404"><NavDropdown.Item href="#action/3.7">Flower & Plants</NavDropdown.Item></Link>
                                <Link to="/404"><NavDropdown.Item href="#action/3.8">Food</NavDropdown.Item></Link>
                                <Link to="/404"><NavDropdown.Item href="#action/3.9">Gadgets</NavDropdown.Item></Link>
                                <Link to="/404"><NavDropdown.Item href="#action/3.10">Garden</NavDropdown.Item></Link>
                                <Link to="/404"><NavDropdown.Item href="#action/3.11">Grocery</NavDropdown.Item></Link>
                                <Link to="/404"><NavDropdown.Item href="#action/3.12">Home</NavDropdown.Item></Link>
                                <Link to="/404"><NavDropdown.Item href="#action/3.13">Jewelry</NavDropdown.Item></Link>
                                <Link to="/404"><NavDropdown.Item href="#action/3.14">Kids & Baby</NavDropdown.Item></Link>
                                <Link to="/404"><NavDropdown.Item href="#action/3.15">Men's Fashion</NavDropdown.Item></Link>
                                <Link to="/404"><NavDropdown.Item href="#action/3.16">Mobile</NavDropdown.Item></Link>
                                <Link to="/404"><NavDropdown.Item href="#action/3.17">Motorcycles</NavDropdown.Item></Link>
                                <Link to="/404"><NavDropdown.Item href="#action/3.18">Movies</NavDropdown.Item></Link>
                                <Link to="/404"><NavDropdown.Item href="#action/3.19">Music</NavDropdown.Item></Link>
                                <Link to="/404"><NavDropdown.Item href="#action/3.20">Ofiice</NavDropdown.Item></Link>
                                <Link to="/404"><NavDropdown.Item href="#action/3.21">Pets</NavDropdown.Item></Link>
                                <Link to="/404"><NavDropdown.Item href="#action/3.22">Romantic</NavDropdown.Item></Link>
                                <Link to="/404"><NavDropdown.Item href="#action/3.23">Sport</NavDropdown.Item></Link>
                                <Link to="/404"><NavDropdown.Item href="#action/3.24">Toys</NavDropdown.Item></Link>
                            </NavDropdown>
                        
                            <NavDropdown title="SALE" id="nav-drop-categ" sticky="none">
                                <Link to="/404"><NavDropdown.Item href="#action/3.1">Accessories</NavDropdown.Item></Link>
                                <Link to="/404"><NavDropdown.Item href="#action/3.2">Alcohol</NavDropdown.Item></Link>
                                <Link to="/404"><NavDropdown.Item href="#action/3.3">Art</NavDropdown.Item></Link>
                                <Link to="/404"><NavDropdown.Item href="#action/3.4">Books</NavDropdown.Item></Link>
                                <Link to="/404"><NavDropdown.Item href="#action/3.5">Drink</NavDropdown.Item></Link>
                                <Link to="/404"><NavDropdown.Item href="#action/3.6">Electronics</NavDropdown.Item></Link>
                                <Link to="/404"><NavDropdown.Item href="#action/3.7">Flower & Plants</NavDropdown.Item></Link>
                                <Link to="/404"><NavDropdown.Item href="#action/3.8">Food</NavDropdown.Item></Link>
                            </NavDropdown>
                        </NavDropdown>
                        <NavDropdown title="COMPANY" id="basic-nav-dropdown" sticky="none"></NavDropdown>

                        <NavDropdown title="LIBRARY" id="basic-nav-dropdown" sticky="none"></NavDropdown>   

                        <NavDropdown title="CONTACT US" id="basic-nav-dropdown" sticky="none"></NavDropdown>
                        
                        <Image src={NavImage} fluid sticky="none"/>
                    </Nav>   
                </Navbar.Collapse>
        </Navbar>
        
    );
}

export default NavbarMenu;




