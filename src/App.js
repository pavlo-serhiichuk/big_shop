import './index.css';
import React from "react";
import Navigation from "./components/Navigation/Navigation";
import {Switch, Route} from "react-router-dom";
import Store from "./components/Store/Store";
import Cart from "./components/Cart/Cart";
import SingleItemContainer from "./components/SingleItem/SingleItemContainer";
import AboutUs from "./components/AboutUs/AboutUs";
import Footer from "./components/Footer/Footer";

function App(props) {
    return (
        <div className="App">
                <Navigation/>
            <Switch>
                <Route exact path={'/cart'} component={Cart}/>
                <Route exact path={'/store'} component={Store}/>
                <Route exact path={'/store/:id'} component={SingleItemContainer}/>
                <Route exact path={'/aboutUs'} component={AboutUs}/>
            </Switch>
            <Footer />
        </div>
    );
}

export default App;
