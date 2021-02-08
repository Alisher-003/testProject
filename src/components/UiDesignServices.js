import React from 'react';
import webDev from "../images/services1.png";
import {Link} from "react-router-dom";
import testingicon from "../images/services2.png";
import Ulicon from "../images/services3.png";
import automation from "../images/services6.png";
import deployicon from "../images/services5.png";
import mobDevelop from "../images/services4.png";


const UiDesignServices = () => {
    return (
        <section id="uiDesignServices">
            <div className="container">

                <div className='d-inline-block'>
                    <div className="chiziq mb-5">

                    </div>
                    <h2>Other Services</h2>
                </div>
                <div className="row">
                    <div className="col-4 mb-4">
                        <div className="card">
                            <div className="row">
                                <div className="col-3 pt-4 ">
                                    <img src={testingicon} alt=""/>
                                </div>
                                <div className="col-9 text-white ">
                                    <h4>Testing</h4>
                                    <p>There is a web design for the bridge to be beautiful and for the customers...</p>
                                    <Link to="/third">more...</Link>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-4 mb-4">
                        <div className="card">
                            <div className="row">
                                <div className="col-3 pt-4">
                                    <img src={webDev} alt=""/>
                                </div>
                                <div className="col-9">
                                    <h4>Web Develop</h4>
                                    <p>There is a web design for the bridge to be beautiful and for the customers...</p>
                                    <Link to='/second'>more...</Link>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-4 mb-4">
                        <div className="card">
                            <div className="row">
                                <div className="col-3 pt-4">
                                    <img src={mobDevelop} alt=""/>
                                </div>
                                <div className="col-9 text-white">
                                    <h4>Mobile Dev</h4>
                                    <p>There is a web design for the bridge to be beautiful and for the customers...</p>
                                    <Link to='/fourth'>more...</Link>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='d-flex justify-content-center'>
                        <div className="col-4 mb-4">
                            <div className="card">
                                <div className="row">
                                    <div className="col-3 pt-4">
                                        <img src={deployicon} alt=""/>
                                    </div>
                                    <div className="col-9 ">
                                        <h4>Deployment</h4>
                                        <p>There is a web design for the bridge to be beautiful and for the customers...</p>
                                        <Link>more...</Link>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-4 mb-4">
                            <div className="card">
                                <div className="row">
                                    <div className="col-3 pt-4">
                                        <img src={automation} alt=""/>
                                    </div>
                                    <div className="col-9 text-white">
                                        <h4>Automation</h4>
                                        <p>There is a web design for the bridge to be beautiful and for the customers...</p>
                                        <Link>more...</Link>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UiDesignServices;