import React from 'react';
import { Accordion, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../NavbarMenuResponsive/NavbarMenuResponsive.css';
import Facebook from '../Img/Socialicons/facebookIco.png';
import Google from '../Img/Socialicons/googleIco.png';
import Twitter from '../Img/Socialicons/twitterIco.png';
import Pinterest from '../Img/Socialicons/pinterestIco.png';
import Caret from '../Img/caret.png';

function FooterPages() {
    return(
        <div className="footerDetails"> 
            <div className="copyRight">
                <p>&copy;Copyright2019.<br />All rights reserved.</p>
            </div>

            <Accordion defaultActiveKey="0">
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="1">
                            <div className="accordion-title">
                                CONTACT
                            </div>
                            <div>
                                <img className="caret" src={Caret} alt="Caret" />
                            </div>
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                        <div className="details">
                            <p>Headquarters:<br />
                            5600, Blvd. des Galeries, Bur 530<br />
                            Quebec, Quebec G2K 2H6<br /><br />
                            contact@osf-global.com<br /><br />
                            +1 (888) 548-4344</p>
                        </div>
                    </Accordion.Collapse>
                </Card>

                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="2">
                            <div className="accordion-title">
                                CATEGORIES
                            </div>
                            <div>
                                <img className="caret" src={Caret} alt="Caret" />
                            </div>
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="2">
                        <div className="details">
                            <p>Add, copy, or remove a text</p>
                        </div>
                    </Accordion.Collapse>
                </Card>

                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="3">
                            <div className="accordion-title"> 
                                ABOUT
                            </div>
                            <div>
                                <img className="caret" src={Caret} alt="Caret" />
                            </div>
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="3">
                        <div className="details">
                            <p>Add, copy, or remove a text</p>
                        </div>
                    </Accordion.Collapse>
                </Card>
            </Accordion>

            <div className="socialIcons">
                <Link to={{ pathname: "https://facebook.com" }} target="_blank"><img className="facebook" src={Facebook} alt="Facebook" /></Link>
                <Link to={{ pathname: "https://www.google.com" }} target="_blank"><img className="google dist" src={Google} alt="Google" /></Link>
                <Link to={{ pathname: "https://twitter.com" }} target="_blank"><img className="twitter dist" src={Twitter} alt="Twitter" /></Link>
                <Link to={{ pathname: "https://www.pinterest.com" }} target="_blank"><img className="pinterest dist" src={Pinterest} alt="Pinterest" /></Link>
            </div>
        </div>
    );
};

export default FooterPages;

