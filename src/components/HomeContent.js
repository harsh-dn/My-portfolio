import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import TopNav from "./TopNav";
import { Sugar } from 'react-preloaders';
import MainContent from "./MainContent";
import {MDBAnimation } from "mdbreact";
import { Button } from 'react-bootstrap';

class HomeContent extends React.Component {
    render() {
        return (
            <div className="App">
             <React.Fragment>
              <TopNav />
              <MainContent />
              <Sugar background="linear-gradient(0deg, rgba(26,18,69,1) 40%, rgba(55,114,147,1) 100%)" color="#f5f5f5"/> 
             </React.Fragment>
            </div>
        )
    }
}

export default HomeContent;