import React from 'react';
import OnlineStoreNavbar from "./OnlineStoreNavbar";
import Services from "./Services";
import Fedback from "./Fedback";
import ContactUs from "./ContactUs";
import Footer from "./Footer";

const OnlineStore = () => {
    return (
        <div>
            <OnlineStoreNavbar/>
            <Fedback/>
            <Services/>
            <ContactUs/>
            <Footer/>

        </div>
    );
};

export default OnlineStore;