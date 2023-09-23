import React from "react";
import Home from "./components/home/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./components/about/About";
import Admissions from "./components/admissions/Admission";
import Contact from "./components/contact/Contact";
import Programs from "./components/programs/Programs";
import Nav from "./Navbar/nav/Nav";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Router>
        <div className="App">
          <Nav />
          <div className="content">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/programs">
                <Programs />
              </Route>
              <Route path="/admissions">
                <Admissions />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
              <Route path="*">
                <Home />
              </Route>
            </Switch>
          </div>
        </div>
        <Footer/>
      </Router>
    </div>
  );
};

export default App;
