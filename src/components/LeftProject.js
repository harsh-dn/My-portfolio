import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {MDBAnimation } from "mdbreact";
import WOW from "wowjs";
import About from "./About";
import Projects from "./Projects";
import { Button } from 'react-bootstrap';

class LeftProject extends React.Component {
  componentDidMount() {
    const wow = new WOW.WOW();
    wow.init();
  }
    render() {
        return (
            <div className="col-lg-8">                 
                  <div className="row wow bounceIn">
                     <About /> 
                  </div>
                  <Projects />                          
                  <Button href="https://github.com/harsh-dn" className="button-2 left-button"  variant="success"> <i class="fas fa-external-link-alt"></i> More on Github</Button>{' '}
                  </div>
        )
    }
}

export default LeftProject;