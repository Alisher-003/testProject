import React from 'react';
import "./main.css"
import {Link} from "react-router-dom";
import testingicon from "../images/services2.png"
import webicon from "../images/services1.png"
import Ulicon from "../images/services3.png"
import Mobileicon from "../images/services4.png"
import deployicon from "../images/services5.png"
import automation from "../images/services6.png"


const Services = () => {
    return (
        <section id='services'>
            <div className="container">

                    <div className='d-inline-block'>
                        <div className="chiziq mb-5">

                        </div>
                        <h2>Services</h2>
                    </div>
                <div className="row">
                    <div className="col-md-6 col-xl-4 col-12 mb-4">
                        <div className="card">
                            <div className="row">
                                <div className="col-3 pt-4">
                                    <img src={webicon} alt=""/>
                            </div>
                                <div className="col-9">
                                    <h4>Web development</h4>
                                    <p>There is a web design for the bridge to be beautiful and for the customers...</p>
                                    <Link to="/webDevelop">more...</Link>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='col-md-6 col-xl-4 col-12 mb-4'>
                        <div className="card">
                            <div className="row">
                                <div className="col-3 pt-4 ">
                                    <img src={testingicon} alt=""/>
                                </div>
                                <div className="col-9 text-white">
                                    <h4>Testing</h4>
                                    <p>There is a web design for the bridge to be beautiful and for the customers...</p>
                                    <Link to="/testing">more...</Link>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-md-6 col-xl-4 col-12 mb-4">
                        <div className="card">
                            <div className="row">
                                <div className="col-3 pt-4">
                                    <img src={Ulicon} alt=""/>
                                </div>
                                <div className="col-9">
                                    <h4>UI/UX Design</h4>
                                    <p>There is a web design for the bridge to be beautiful and for the customers...</p>
                                    <Link to="/uiDesign">more...</Link>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-md-6 col-xl-4 col-12 mb-4">
                        <div className="card">
                            <div className="row">
                                <div className="col-3 pt-4">
                                    <img src={Mobileicon} alt=""/>
                                </div>
                                <div className="col-9 text-white">
                                    <h4>Mobile Dev</h4>
                                    <p>There is a web design for the bridge to be beautiful and for the customers...</p>
                                    <Link to='/mobDevelop'>more...</Link>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-md-6 col-xl-4 col-12 mb-4">
                        <div className="card">
                            <div className="row">
                                <div className="col-3 pt-4">
                                    <img src={deployicon} alt=""/>
                                </div>
                                <div className="col-9">
                                    <h4>Deployment</h4>
                                    <p>There is a web design for the bridge to be beautiful and for the customers...</p>
                                    <Link to='/deployment'>more...</Link>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-md-6 col-xl-4 col-12 mb-4">
                        <div className="card">
                            <div className="row">
                                <div className="col-3 pt-4">
                                    <img src={automation} alt=""/>
                                </div>
                                <div className="col-9 text-white">
                                    <h4>Automation</h4>
                                    <p>There is a web design for the bridge to be beautiful and for the customers...</p>
                                    <Link to='/automation'>more...</Link>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Services;