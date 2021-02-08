import React from 'react';
import DeploymentNavbar from "./DeploymentNavbar";
import DeploymentServices from "./DeploymentServices";
import Fedback from "./Fedback";
import ContactUs from "./ContactUs";
import Footer from "./Footer";

const Deployment = () => {
    return (
        <div>
            <DeploymentNavbar/>
            <Fedback/>
            <DeploymentServices/>
            <ContactUs/>
            <Footer/>
        </div>
    );
};

export default Deployment;