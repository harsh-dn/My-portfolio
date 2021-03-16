import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {MDBAnimation } from "mdbreact";
import { Button } from 'react-bootstrap';

class TopNav extends React.Component {
    render() {
        return (
           <div className="top-content">
               <div className="row">

                   <div className="col-lg-8">
                     <div className="row about-image">
                     <div className="about-pic col-lg-4">
                     <img className="profile-pic" src={require("./Images/harsh.jpg")} alt="Harsh vardhan"/>
                     </div>
                     <div className="about-text col-lg-8">
                     <h1>Harsh Vardhan</h1>
                     <h4 className="about-h3">Full Stack Web Developer</h4>
                     <a className="about-social" href="https://www.linkedin.com/in/harsh-vardhan-552838171/"><i class="fab fa-linkedin"></i></a>
                     <a className="about-social" href="https://www.facebook.com/profile.php?id=100026002803901"><i class="fab fa-facebook-square"></i></a>
                     <a className="about-social" href="https://github.com/harsh-dn"><i class="fab fa-github-square"></i></a>
                     <a className="about-social" href="mailto:harshvardhan.mec18@iitbhu.ac.in"><i class="far fa-envelope"></i></a>
                     </div>
                    </div>
                   </div>

                   <div className="col-lg-4">
                     <div className="button-div">
                         <div className="row">
                             <div className="col-sm-12">
                             <Button className="button-1"  variant="success" href={require("./Images/resume.png")}><i class="fas fa-arrow-circle-right"></i> Resume</Button>{' '}
                             <Button className="button-2" href="mailto:harshvardhan.mec18@iitbhu.ac.in"  variant="success"> <i class="fab fa-telegram-plane"></i> Contact Me</Button>{' '}
                             </div>

                         </div>
                     </div>
                   </div>
               </div>
           </div>
        );
    }

}

export default TopNav;
