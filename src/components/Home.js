import React, {Component} from 'react';
import Header from "./Header";
import Advantages from "./Advantages";
import Services from "./Services";
import Achieve from "./Achieve";
import Team from "./Team";
import WebNavbar from "./WebNavbar";
import Stories from "./Stories";
import Fedback from "./Fedback";
import ContactUs from "./ContactUs";
import Footer from "./Footer";
import Ourachive from "./Ourachive";

class Home extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Advantages/>
                <Services/>
                <Ourachive/>
                {/*<Achieve/>*/}
                <Stories/>
                <Team/>
                <Fedback/>
                <ContactUs/>
                <Footer/>







            </div>
        );
    }
}

export default Home;