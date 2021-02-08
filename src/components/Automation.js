import React from 'react';
import AutomationNavbar from "./AutomationNavbar";
import AutomationServices from "./AutomationServices";
import Fedback from "./Fedback";
import ContactUs from "./ContactUs";
import Footer from "./Footer";

const Automation = () => {
    return (
        <div>
            <AutomationNavbar/>
            <Fedback/>
            <AutomationServices/>
            <ContactUs/>
            <Footer/>
        </div>
    );
};

export default Automation;