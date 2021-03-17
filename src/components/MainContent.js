import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import LeftProject from "./LeftProject";
import RightAbout from "./RightAbout";
import Testimonial from "./Testimonial";
import Contact from "./Contact";
import Review from "./Review";
import {MDBAnimation } from "mdbreact";
import { Button } from 'react-bootstrap';

class MainContent extends React.Component {
    render() {
        return (
            <div className="main-content-div">
             <div className="row">
                <LeftProject /> 
                 <RightAbout />                
             </div>
             <hr className="hr-row"/>
             
             
             <div className="contact-mail">
               <Contact />
             </div>
             
             <div className="blog-main">
               <h5>Have got something for me? Show off your Technical Blogs <i class="fas fa-cog"></i></h5>
               <button type="" class="btn btn-outline-success submit-button"><a className="anchor-blog" href="/blog">WRITE A BLOG</a></button>
             </div>
             
             <div className="row">
                 <div className="col-lg-12 footer-game">
                     <p className="footer-p">Bored of all the technical stuffs, Let's play a <a className="code-links" href="https://harsh-dn.github.io/simon-game/">game</a> or <a className="code-links" href="https://harsh-dn.github.io/Ganna/#">music</a> or a <a className="code-links" href="https://harsh-dn.github.io/Music-notes/">band</a></p>
                 </div>
             </div>
             <div className="row">
                 <div className="col-lg-12 footer">
                     <p className="footer-p">Copyright © 2021 Harsh Vardhan</p>
                 </div>
             </div>
             
            </div>
        )
    }
}

export default MainContent;