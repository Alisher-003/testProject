import React, {Component} from 'react';
import WebNavbar from "./WebNavbar";
import Fedback from "./Fedback";
import WebServices from "./WebServices";
import ContactUs from "./ContactUs";
import Footer from "./Footer";
import MainNavbar from "./MainNavbar";
import MobDevelopServices from "./MobDevelopServices";
import UiDesignServices from "./UiDesignServices";
import AutomationServices from "./AutomationServices";
import DeploymentServices from "./DeploymentServices";
import TestingNavbar from "./TestingNavbar";

class WebDevelopment extends Component {
    render() {
        return (
            <div>
                {/*<TestingNavbar/>*/}
                <WebNavbar/>
                <Fedback/>
                <WebServices/>
                <ContactUs/>
                <Footer/>

                {/*<MobDevelopServices/>*/}
                {/*<UiDesignServices/>*/}
                {/*<AutomationServices/>*/}
                {/*<DeploymentServices/>*/}
            </div>
        );
    }
}

export default WebDevelopment;