import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {MDBAnimation } from "mdbreact";
import WOW from "wowjs";
import { Button } from 'react-bootstrap';

class About extends React.Component {
    componentDidMount() {
        const wow = new WOW.WOW();
        wow.init();
    }
    render() {
        return (
            <div className=" col-lg-12">
            <div className="about-me col-lg-10">
            <h3 className="text-area-h3">About Me</h3><br />
            <div className="text-area">
                <p>Hi There! <br />
                 Myself Harsh Vardhan, a third year undergrad at IIT(BHU)
                 Varanasi with Mechanical Engineering as majors. Being a tech enthusiast
                 I like to be updated with the newer technologies.
                 I keep it simple and enjoy the challenges encountered along the way and try to learn from them.
                 My interest lies primarily in the field of Web Development,
                 both front and back-end preferably MERN-stack.
                 I am also interested in Competitive Programming, puzzles.
                 Apart from these I love Cricket and chess and enjoy deep discussions over them.</p>
            </div>
            </div>
            </div>
        )
    }
}

export default About;
