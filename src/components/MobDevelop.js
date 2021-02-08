import React from 'react';
import MobileDevelopNavbar from "./MobileDevelopNavbar";
import MobDevelopServices from "./MobDevelopServices";
import Fedback from "./Fedback";
import ContactUs from "./ContactUs";
import Footer from "./Footer";

const MobDevelop = () => {
    return (
        <div>
            <MobileDevelopNavbar/>
            <Fedback/>
            <MobDevelopServices/>
            <ContactUs/>
            <Footer/>
        </div>
    );
};

export default MobDevelop;