import React from "react";
import "./Filter.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Row";
import Dropdown from "react-bootstrap/Dropdown";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";



const Filter = () => {
    return (
        <Container>
            <div className = "styleBg">
                <Row className = "styleRow" xs={1} md={3}>
                    <Col>
                        <Row className = "styleRow">
                            <Col>
                                <span className = "dropTitle">Price</span>
                            </Col>

                            <Col className = "styleCol">
                                <Dropdown className = "styleDropdown" as={ButtonGroup}>

                                    <Button className = "styleBtnDrop">$0.00 - $100.00</Button>
                                    <Dropdown.Toggle split id="dropdown-basic" className = "styleToggle"/>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#">$ 50.00 - $100.00</Dropdown.Item>
                                        <Dropdown.Item href="#">$ 100.00 - $300.00</Dropdown.Item>
                                        <Dropdown.Item href="#">$ 300.00 - $600.00</Dropdown.Item>
                                        <Dropdown.Item href="#">$ 600 - more</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Col>
                        </Row>

                        <Row className = "styleSmRow">
                            <Col>
                                <span className = "dropTitle">Color</span>
                            </Col>

                            <Col className = "styleCol">
                                <div className = "styleBtnAll">
                                    <button className = "styleBtnWhite"/>
                                    <button className = "styleBtnLightBlue"/>
                                    <button className = "styleBtnBlack"/>
                                    <button className = "styleBtnGreen"/>
                                    <button className = "styleBtnBlue"/>
                                    <button className = "styleBtnOrange"/>
                                    <button className = "styleBtnRed"/>
                                    <button className = "styleBtnBeige"/>
                                </div>
                            </Col>
                        </Row>
                    </Col>

                    <Col>
                        <Row className = "styleRow">
                            <Col>
                                <span className = "dropTitle">Brands</span>
                            </Col>

                            <Col className = "styleCol">
                                <Dropdown className = "styleDropdown" as={ButtonGroup}>

                                    <Button className = "styleBtnDrop">Ukraine sport</Button>
                                    <Dropdown.Toggle split id="dropdown-basic" className = "styleToggle"/>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#">Swedish sport</Dropdown.Item>
                                        <Dropdown.Item href="#">American sport</Dropdown.Item>
                                        <Dropdown.Item href="#">Russian sport</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Col>
                        </Row>

                        <Row className = "styleSmRow">
                            <Col>
                                <span className = "dropTitle">Sort by</span>
                            </Col>

                            <Col className = "styleCol">
                                <Dropdown className = "styleDropdown" as={ButtonGroup}>

                                    <Button className = "styleBtnDrop">Recommended</Button>
                                    <Dropdown.Toggle split id="dropdown-basic" className = "styleToggle"/>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#">Top rated</Dropdown.Item>
                                        <Dropdown.Item href="#">Price low - high</Dropdown.Item>
                                        <Dropdown.Item href="#">Price high - low</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Col>
                        </Row>
                    </Col>

                    <Col>
                        <Row className = "styleRow">
                            <Col>
                                <span className = "dropTitle">Size</span>
                            </Col>

                            <Col className = "styleCol">
                                <Dropdown className = "styleDropdown" as={ButtonGroup}>

                                    <Button className = "styleBtnDrop">Small</Button>
                                    <Dropdown.Toggle split id="dropdown-basic" className = "styleToggle"/>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#">Small</Dropdown.Item>
                                        <Dropdown.Item href="#">Medium</Dropdown.Item>
                                        <Dropdown.Item href="#">CategoryLandingServices</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Col>
                        </Row>

                        <Row className = "styleSmRow">
                            <Col>
                                <span className = "dropTitle">Show</span>
                            </Col>

                            <Col className = "styleCol">
                                <Dropdown className = "styleDropdown" as={ButtonGroup}>

                                    <Button className = "styleBtnDrop">4 per page</Button>
                                    <Dropdown.Toggle split id="dropdown-basic" className = "styleToggle"/>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#">10 per page</Dropdown.Item>
                                        <Dropdown.Item href="#">20 per page</Dropdown.Item>
                                        <Dropdown.Item href="#">all</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Col>
                        </Row>
                    </Col>
                </Row>

            </div>
            
        </Container>
    );
};

export default Filter;


