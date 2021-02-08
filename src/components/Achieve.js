import React from 'react';
import "./main.css";
import our1 from "../images/our300.svg"
import our2 from "../images/our1700.svg"
import our3 from "../images/our11900.svg"

const Achieve = () => {
    return (
        <section id='achieve'>
            <div className="container">

                <div>
                    <div className='chizziq-achieve'></div>
                    <h2 className='text-white mb-5'>Our Achieve</h2>
                </div>
                        <div className="row flex-column">
                            <div className="col-3">
                                <div className="row">
                                    <div className="col-3 mt-2 mb-5">
                                        <img src={our1} alt=""/>
                                    </div>
                                    <div className="col-9">
                                        <h1 className='text-white ml-3'>300</h1>
                                    </div>

                                </div>
                            </div>
                            <div className="col-3">
                                <div className="row">
                                    <div className="col-3 mt-2 mb-5">
                                        <img src={our2} alt=""/>
                                    </div>
                                    <div className="col-9">
                                        <h1 className='text-white ml-3'>1700</h1>
                                    </div>

                                </div>
                            </div>
                            <div className="col-3">
                                <div className="row">
                                    <div className="col-3 mt-2 mb-5">
                                        <img src={our3} alt=""/>
                                    </div>
                                    <div className="col-9">
                                        <h1 className='text-white ml-3'>11900</h1>
                                    </div>

                                </div>
                            </div>
                            <div className="col-3">
                                <div className="row">
                                    <div className="col-3 mt-2 mb-5">
                                        <img src={our1} alt=""/>
                                    </div>
                                    <div className="col-9">
                                        <h1 className='text-white ml-3'>157</h1>
                                    </div>

                                </div>
                            </div>


                            <div className="col-9">
                                ssdsdsd
                            </div>
                        </div>
                </div>

        </section>
    );
};

export default Achieve;