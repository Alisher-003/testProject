import React from 'react';
import UiDesignNavbar from "./UiDesignNavbar";
import UiDesignServices from "./UiDesignServices";
import Fedback from "./Fedback";
import ContactUs from "./ContactUs";
import Footer from "./Footer";

const UiDesign = () => {
    return (
        <div>
            <UiDesignNavbar/>
            <Fedback/>
            <UiDesignServices/>
            <ContactUs/>
            <Footer/>
        </div>
    );
};

export default UiDesign;