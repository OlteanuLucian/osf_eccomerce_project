import React from 'react'

import './Filter.css'
class Filter extends React.Component{
    state={
        divcontainer:false
    }
    render(){
        var HandleChange = e =>
        {
            this.setState({divcontainer:!this.state.divcontainer});
        }
        const x=this.state.divcontainer;
        return(
            <div>
                <div className="aaa">
                        <button className="handleChange" onClick={HandleChange}>{x?'Hide Filter':"Show Filter"}</button>
                        {
                            x&&(
                                <div className="filter">
                                    <div className="row">
                                        <div className="name">Price</div>
                                        <div className="dropdown">
                                            <div className="customSelect">
                                                <select>
                                                    <option selected value="price1">$0.00 - $100.00</option>
                                                    <option value="price2">$100.00 - $300.00</option>
                                                    <option value="price3">$300.00 - $600.00</option>
                                                    <option value="price4">$600.00 - more</option>
                                                </select>
                                                <span className="customArrow"></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="name">Color</div>
                                        <div className="list">
                                            <ol>
                                                <li className="color1"></li>
                                                <li className="color2"></li>
                                                <li className="color3"></li>
                                                <li className="color4"></li>
                                                <li className="color5"></li>
                                                <li className="color6"></li>
                                                <li className="color7"></li>
                                                <li className="color8"></li>
                                            </ol>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="name">Brands</div>
                                        <div className="dropdown">
                                            <div className="customSelect">
                                                <select>
                                                    <option selected value="price1">Ukraine sport</option>
                                                    <option value="price2">Ukraine sport</option>
                                                    <option value="price3">Ukraine sport</option>
                                                </select>
                                                <span className="customArrow"></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="name">Sort By</div>
                                        <div className="dropdown">
                                            <div className="customSelect">
                                                <select>
                                                    <option selected value="price1">Recommended</option>
                                                    <option value="price2">Top Rated</option>
                                                    <option value="price3">Price High-Low</option>
                                                    <option value="price4">Price Low-High</option>
                                                </select>
                                                <span className="customArrow"></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="name">Size</div>
                                        <div className="dropdown">
                                            <div className="customSelect">
                                                <select>
                                                    <option selected value="price1">Small</option>
                                                    <option value="price2">Medium</option>
                                                    <option value="price3">Large</option>
                                                </select>
                                                <span className="customArrow"></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="name">Show</div>
                                        <div className="dropdown">
                                            <div className="customSelect">
                                                <select>
                                                    <option selected value="price1">5 per page</option>
                                                    <option value="price2">10 per page</option>
                                                    <option value="price3">15 per page</option>
                                                    <option value="price4">all</option>
                                                </select>
                                                <span className="customArrow"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            )
                        }
                </div>
                <div className="filterForDesktop">
                    <div className="filter">
                        <div className="row">
                            <div className="name">Price</div>
                            <div className="dropdown">
                                <div className="customSelect">
                                    <select>
                                        <option selected value="price1">$0.00 - $100.00</option>
                                        <option value="price2">$100.00 - $300.00</option>
                                        <option value="price3">$300.00 - $600.00</option>
                                        <option value="price4">$600.00 - more</option>
                                    </select>
                                    <span className="customArrow"></span>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="name">Brands</div>
                            <div className="dropdown">
                                <div className="customSelect">
                                    <select>
                                        <option selected value="price1">Ukraine sport</option>
                                        <option value="price2">Ukraine sport</option>
                                        <option value="price3">Ukraine sport</option>
                                    </select>
                                    <span className="customArrow"></span>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="name">Size</div>
                            <div className="dropdown">
                                <div className="customSelect">
                                    <select>
                                        <option selected value="price1">Small</option>
                                        <option value="price2">Medium</option>
                                        <option value="price3">Large</option>
                                    </select>
                                    <span className="customArrow"></span>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="name">Color</div>
                            <div className="list">
                                <ol>
                                    <li className="color1"></li>
                                    <li className="color2"></li>
                                    <li className="color3"></li>
                                    <li className="color4"></li>
                                    <li className="color5"></li>
                                    <li className="color6"></li>
                                    <li className="color7"></li>
                                    <li className="color8"></li>
                                </ol>
                            </div>
                        </div>

                        <div className="row">
                            <div className="name">Sort By</div>
                            <div className="dropdown">
                                <div className="customSelect">
                                    <select>
                                        <option selected value="price1">Recommended</option>
                                        <option value="price2">Top Rated</option>
                                        <option value="price3">Price High-Low</option>
                                        <option value="price4">Price Low-High</option>
                                    </select>
                                    <span className="customArrow"></span>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="name">Show</div>
                            <div className="dropdown">
                                <div className="customSelect">
                                    <select>
                                        <option selected value="price1">5 per page</option>
                                        <option value="price2">10 per page</option>
                                        <option value="price3">15 per page</option>
                                        <option value="price4">all</option>
                                    </select>
                                    <span className="customArrow"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Filter;