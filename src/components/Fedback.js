import React, {Component} from 'react';
import './main.css'
import feedbackphoto from '../images/feedback.png'


class Fedback extends Component {
    render() {
        return (
            <section id='fedback'>
                <div className="container">
                    <div className="row">
                        <div className="col-3 pr-3 pl-0">
                            <div className="chiziq-6">
                            </div>
                            <h1 className='mt-5'>Feedback from our clients</h1>
                        </div>
                        <div className="col-9">
                            <div className="row">
                                <div className="col-4">
                                    <img src={feedbackphoto} alt=""/>
                                </div>
                                <div className="col-8">
                                    <div className='knopka d-flex float-right'>
                                        <button type='button' className='h-50 btn btn-outline-secondary mr-3'>&#8592;</button>
                                        <button type='button' className='h-50 btn btn-outline-secondary'>&#8594;</button>
                                    </div>

                                    <div>
                                        <h4 className='text-white'>— Billy Gach</h4>
                                        <p className=' mt-4'>“We are a web & app development company that provides excellent solutions to
                                            your problems pushing your business forward.</p>
                                        <p>Our team consists of senior developers to deliver projects on time and
                                            maintain high code standards.</p>
                                        <p>“We are a web & app development company that provides excellent solutions to
                                            your problems pushing your business forward.</p>
                                        <p>Our team consists of senior developers to deliver projects on time and
                                            maintain high code standards.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        );
    }
}

export default Fedback;