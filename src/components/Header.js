import React from 'react';
import './main.css';
import instagram from "../images/instagram.png"
import telegram from "../images/telegram.svg"
import facebook from "../images/facebook.svg"
import {Link} from 'react-router-dom'


const Header = () => {
    return (
        <header>
            <div className="container ">
                <div className="row">
                    <nav className="navbar d-flex justify-content-between navbar-expand-sm bg-light navbar-light mt-5 fixed-top">
                        <div className="container">
                        <a className="navbar-brand" href="#">TECH YARD</a>
                        <ul className="navbar-nav">
                            <li className="nav-item px-2"><Link to='/' className="nav-link my-2" >HOME</Link></li>
                            <li className="nav-item px-2"><Link to='/services' className="nav-link my-2 border-left" href="#">SERVICES</Link></li>
                            <li className="nav-item px-2"><a className="nav-link my-2 border-left" href="#">ABOUT US</a></li>
                            <li className="nav-item px-2"><a className="nav-link my-2 border-left" href="#">CASE STUDIES</a></li>
                            <li className="nav-item px-2"><a className="nav-link my-2 border-left" href="#">CONTACTS</a></li>
                        </ul>
                </div>
                    </nav>

                    <div className='d-inline-block text-white'>
                        <h1>TECH YARD</h1>
                        <h2>SOLUTIONS</h2>
                        <h3>Your digital knight</h3>
                        <button type='button' className='btn btn-primary'>More</button>

                        <div className='d-flex '>
                            <p className='mr-5'>Follow us:</p>
                            <a href="#"><img className=' mt-3 mr-4' src={telegram} alt=""/></a>
                            <a href="#"><img className=' mt-3 mr-4' src={facebook} alt=""/></a>
                            <a href="#"><img className='bg-white w-75 h-25 mt-3' src={instagram} alt=""/></a>


                        </div>
                    </div>


                </div>
            </div>
        </header>

    );
};

export default Header;

