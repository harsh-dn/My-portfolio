import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {MDBAnimation } from "mdbreact";
import { Button } from 'react-bootstrap';

class Review extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            review: ["This is a eye-catching website, I love it 🔥 🔥", "Yash Vardhan, You have done a tremendous job!",
             "You are giving serious styling motivation 👏", "Could have been better as well in appearance",
            "Slightly disappointed with the theme of website", "Good efforts, Keep going well and keep learning", 
            "I would rate it 7/10 overall frontend and backend", "I liked the multiple page linking and the blog part 💎"],
            note: ""
        }
        this.AddReview = this.AddReview.bind(this);
        this.SubmitForm = this.SubmitForm.bind(this);
    }

    SubmitForm = (event) => {
        event.preventDefault();
        this.state.review.push(this.state.note);
        this.setState({
            review: this.state.review
        });
        this.setState({
            note: ""
        })
    }

    AddReview = (event) => {
        this.setState({note: event.target.value});
    }

    componentDidMount(){

    }
    render(){
        return(
            <div className="">
            <div className="review-head">
                <h5 className="review-head-h5">REVIEW THE PORTFOLIO <i class="fas fa-balance-scale"></i></h5>
                <p>Constructive criticism is always welcome </p>
            </div>
            <div className="review-all">
            
           <div className="row review-main">
               {this.state.review.map((review) => {
                return (
                 <div className="review-div col-lg-3 col-md-6 col-sm-12">
                  <h5>{review}</h5>
                </div>
                );
               })}
           </div>
           <div className="formWrapper">
            <form onSubmit={this.SubmitForm}>         
             <input className="noteInput" type='text' placeholder="Write Your Review" onChange={this.AddReview} />
             <input className="noteButton" type='submit' />
            </form>
           </div>


           </div>
           </div>
        );
    }
}

export default Review;