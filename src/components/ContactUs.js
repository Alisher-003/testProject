import React from 'react';
import './main.css'
import {Link} from "react-router-dom";


const ContactUs = () => {
    return (
        <section id='contactus'>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <h1 className='mb-4'>Contact us</h1>
                        <form method="post">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input type="name" name="text-Name" className="form-control"
                                               placeholder="Your Name"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="email"  className="form-control"
                                               placeholder="Your Email"/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                       <textarea className="form-control" placeholder="Send message"
                                       >{}</textarea>
                                    </div>
                                </div>
                            </div>
                            <button type='button' className='btn btn-primary btn-block'>Send</button>
                        </form>
                    </div>

                    <div className="col-6">
                        <Link to='/'><h2 className='text-dark text-decoration-none'>Let's talk</h2></Link>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/> Duis sed velit euismod, iaculis
                            velit et, viverra nisl. <br/> Mauris quis varius nulla</p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ContactUs;