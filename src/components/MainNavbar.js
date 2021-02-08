import React from 'react';
import {Link} from "react-router-dom";

const MainNavbar = () => {
    return (
            <section id="mainNavbar" className='pt-3'>
                <navbar>
                    <div className="container">
                        <div className="row">
                            <nav className="navbar navbar-expand-sm bg-light navbar-light">
                                <Link to='/' className="navbar-brand" href="#">TECH YARD</Link>
                                <ul className="navbar-nav">
                                    <li className="nav-item px-2"><Link to='/' className="nav-link my-2" >HOME</Link></li>
                                    <li className="nav-item px-2"><Link to='/services' className="nav-link my-2 border-left"
                                                                     href="#">SERVICES</Link></li>
                                    <li className="nav-item px-2"><Link to='about' className="nav-link my-2 border-left" href="#">ABOUT
                                        US</Link></li>
                                    <li className="nav-item px-2"><a className="nav-link my-2 border-left" href="#">CASE
                                        STUDIES</a></li>
                                    <li className="nav-item px-2"><Link to='/contacts' className="nav-link my-2 border-left"
                                                                     href="#">CONTACTS</Link></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </navbar>
            </section>

    );
};

export default MainNavbar;