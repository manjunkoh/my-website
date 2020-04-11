import React, { Component } from 'react';
import defaultPic from "./default_pic.jpg"

class About extends Component {
    render() {
        return(
<React.Fragment>
<section id="about">
  <div className="row">
    <div className="three columns">
      <img className="profile-pic" src={defaultPic} alt="avatar" />
    </div>
    <div className="about-me">
      <h2>About Me</h2>
      <p> 
        Hey guys welcome to my page. My name is Man Jun and I just graduated from Virginia Tech with a degree in 
        aerospace engineering; I also studied a good amount of computer engineering. Two things I can't live without are food and sports, but 
        I also love learning and trying new things especially in math and science. 
        I am currently applying for a position 
        in the Republic of Korea Air Force to complete my mandatory military service. Aerospace is something I have been 
        deeply passionate about since day 1 and eventually I wanna use my aerospace and computer engineering skills to found an asteroid-mining 
        company

      </p>
      <div className="row2">
        <div className="columns contact-details">
          <h2>Contact</h2>
          <p className="address">
            <span><i className="fa fa-phone /"></i> +82 (010) 9466-3989</span><br />
            <span><i className="fa fa-envelope-square /"></i> mjk18@vt.edu</span>
          </p>
        </div>
        <div className="columns download">
          <p>
            <a href="assets/CV-Daniel_Paes.doc" className="button" download><i className="fa fa-download" />Download Resume</a>
          </p>
        </div>
      </div> {/* end row */}
    </div> {/* end .main-col */}
  </div>
  </section>
  </React.Fragment>
        )
    }
}

export default About;