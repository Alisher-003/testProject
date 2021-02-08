import {BrowserRouter, Switch, Route} from "react-router-dom";
import More from "./components/More";
import Header from "./components/Header";
import Home from "./components/Home";
import Web from "./components/Web";
import WebDevelopment from "./components/WebDevelopment";
import Services from "./components/Services";
import WebServices from "./components/WebServices";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import Testing from "./components/Testing";
import MobDevelop from "./components/MobDevelop";
import UiDesign from "./components/UiDesign";
import Automation from "./components/Automation";
import Deployment from "./components/Deployment";
import OnlineStore from "./components/OnlineStore";


function App() {
  return (
    <div>


      <BrowserRouter>

        {/*<Home/>*/}
        {/*<Home/>*/}
        {/*<Home/>*/}
        {/*<Home/>*/}
        {/*<Home/>*/}


        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/webDevelop' component={WebDevelopment}/>
            <Route exact path='/testing' component={Testing}/>
            <Route exact path='/mobDevelop' component={MobDevelop}/>
            <Route exact path='/ui:uxDesign' component={UiDesign}/>
            <Route exact path='/automation' component={Automation}/>
            <Route exact path='/deployment' component={Deployment}/>
            <Route exact path='/onlineStore' component={OnlineStore}/>


            <Route exact path='/services' component={Services}/>
            <Route exact path='/contacts' component={ContactUs}/>
            <Route exact path='/about' component={Footer}/>


        </Switch>

      </BrowserRouter>



    </div>
  );
}

export default App;