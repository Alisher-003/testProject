import React, {Component} from 'react';
import './main.css'
import telegramm from  '../images/telegram.svg'
import facebook from '../images/facebookFooter.png'
import instagramm from '../images/instaFooter.png'
import {Link} from "react-router-dom";

class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="container">
                    <div className="row pt-5">
                        <div className="col-5 text-white mt-4 ml-auto">
                            <Link to='/'><h4 className='text-white'>TECH YARD SOLUTION</h4></Link>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/> Duis sed velit euismod, iaculis
                                velit et, viverra nisl. Mauris <br/> quis varius nulla</p>
                        </div>
                        <div className="col-4 text-white mt-5 ml-auto pl-5">
                            <h4>Address</h4>
                            <p>6100 Lake Ellenor Drive STE 174 <br/> Orlando FL 32809</p>
                        </div>

                        <div className="col-3 text-white mt-5 pl-5">
                            <h4>Contact us</h4>
                            <p>1 (518) 401-8276 <br/>
                                info@techyardsolutions.com</p>
                        </div>
                    </div>
                    <div className='d-flex mt-4 '>
                        <h3 className='mr-4 text-white'>Follow us:</h3>
                        <a href="#"><img className=' mt-2 mr-4' src={telegramm} alt=""/></a>
                        <a href="#"><img className=' mt-2 mr-4' src={facebook} alt=""/></a>
                        <a href="#"><img className='bg-white mt-2 bg-secondary' src={instagramm} alt=""/></a>
                    </div>
                    <div className="chiziqfooter">
                    </div>
                    <div className="row justify-content-between">
                        <h6>Copyrights &copy; 2021 All Rights Reserved by Tech Yard Solutions</h6>
                        <h6>Privacy policy</h6>
                    </div>
                </div>

            </footer>

        );
    }
}

export default Footer;