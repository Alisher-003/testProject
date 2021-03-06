import React, {Component} from 'react';
import './main.css'
import our1700 from '../images/achieve1700.png'
import our300 from '../images/our300.svg'
import our11900 from '../images/achieve11900.png'
import our157 from '../images/achieve157.png'
import Ourachivephoto from '../images/Ourachivephoto.png'


class Ourachive extends Component {
    render() {
        return (
            <section id='ourachive'>
                <div className="container mt-5 pb-5">

                    <div className='chiziq2 mt-5'>
                    </div>
                    <div className="row">

                        <div className="col-xl-4 col-12 mt-5">
                            <h2 className='text-white'>Our achive</h2>
                            <div className="row mt-5">
                                <div className="col-xl-3 col-2">
                                    <img src={our300} alt=""/>
                                </div>
                                    <h1 className='text-white '>300</h1>
                            </div>
                            <div className="row mt-5">
                                <div className="col-xl-3 col-2">
                                    <img src={our1700} alt=""/>
                                </div>
                                    <h1 className='text-white '>1700</h1>
                            </div>
                            <div className="row mt-5">
                                <div className="col-xl-3 col-2">
                                    <img src={our11900} alt=""/>
                                </div>
                                    <h1 className='text-white '>11900</h1>
                            </div>
                            <div className="row mt-5">
                                <div className="col-xl-3 col-2">
                                    <img src={our157} alt=""/>
                                </div>
                                    <h1 className='text-white '>157</h1>
                            </div>
                        </div>

                        <div className="col-xl-8 col-12">
                            <img src={Ourachivephoto} alt=""/>
                            <div className="chiziq3">

                            </div>
                            <div className="row">
                                <div className="col-md-2 col-12 mt-5">
                                    <h4 className='text-white'>We’re trusted</h4>
                                </div>
                                <div className="col-md-10 col-12 mt-5 float-right pr-0">
                                    <p className=' pr-0'>“We are a web & app development company that provides excellent solutions to your
                                        problems pushing your business forward.</p>
                                    <p className='mt-4 '>“We are a web & app development company that provides excellent solutions to your
                                        problems pushing your business forward.</p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </section>
        );
    }
}

export default Ourachive;