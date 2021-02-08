import React, {Component} from 'react';
import './main.css'
import storiesphoto from '../images/stoiesPhoto.png'
import {Link} from "react-router-dom";

class Stories extends Component {
    render() {
        return (
            <section id='stories'>
                <div className="container">

                    <div className="chiziq-4">
                    </div>
                    <div className="d-flex justify-content-between">
                        <h1 className='mt-4'>Stories of Success</h1>
                    </div>

                    <div className="row mt-5">

                        <div className="col-8">
                            <img src={storiesphoto} alt=""/>
                        </div>

                        <div className="col-4">
                            <h2 className='mt-5'>Atlantic Cargo</h2>
                            <p className='mt-4'>“Android, IOS app development, UI and UX beautiful design,
                                web-application, - nothing to
                                worry about because Perfectness is what our project managers love. We use iterative
                                development methodology (ссылка) to pay 100% attention to every single part of the
                                project but still finish everything on time.”
                            </p>
                            <div className='d-flex'>
                                <a href="#" className='nav-link mr-3'>Next</a>
                                <button type='button' className='btn btn-outline-secondary'>&#8594;</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Stories;