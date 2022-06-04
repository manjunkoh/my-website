import React, { Component } from 'react';
import defaultPic from "../images/default_pic.jpg"
import { Grid, Cell} from 'react-mdl';

class About extends Component {
    render() {
        return(
<React.Fragment>
<section id="about">
<div style={{height:'100%',background:'#fff',margin:'auto'}}>
  <Grid className="row">
      <Cell col={2}></Cell>
    <Cell col={2}>
      <img className="profile-pic" src={defaultPic} alt="avatar" />
    </Cell>
    <Cell col={7}>
    <div className="about-me">
      <h2>About Me</h2>
      <p> 
        Hey guys welcome to my (work in progress) website. My name is Man Jun. Thanks to my parents I just graduated from Virginia Tech with a degree in aerospace engineering; I also studied a good amount of computer engineering. Aerospace is something I have been deeply passionate about since day 1 and eventually I wanna use my skills to found an asteroid-mining company. <br /> Two things I can't live without are food and sports especially meat and baseball, but I also love learning and trying new things. My taste of music varies time to time, but I generally enjoy most genres except country and heavy metal. I'm an extremely adventurous guy; top things on my bucket list are going to space, visiting North/South Pole, seeing an Aurora, and hiking in Patagonia. I am currently an officer in the Republic of Korea Army to complete my mandatory military service. After my discharge I wanna go to grad school hopefully doing some computer engineering based space projects. Thanks for visiting!

      </p>
      <div className="row2">
        <div className="columns contact-details">
          <h2>Contact</h2>
          <p className="address" >
            Hit me up especially for sports debates<br/>
            <span><i className="fa fa-phone /"></i> +82 (010) 9466-3989</span><br />
            <span><i className="fa fa-envelope-square /"></i> mjk18@vt.edu</span> <br/>
            <span><a style={{color: 'inherit',fontWeight:'bold'}}href="https://drive.google.com/file/d/14IEFrYlU5o0OQEeCfMXiWfKcUkoHvkBf/view?usp=sharing" rel="noopener noreferrer" target="_blank"className="button" download><i className="fa fa-download" />Download Resume</a></span>
          </p>
        </div>

      </div> {/* end row */}
    </div> {/* end .main-col */}
    </Cell>
    
  </Grid>
  {/*<Grid className="skills-row">
      <Cell col={12}>
          <div className="tools-header">
          <h1><span>Tools I like to use: </span></h1>
          </div>
          <div className="skills-icons">

          </div>
      </Cell>
        </Grid>*/}
        </div>
  </section>
  </React.Fragment>
        )
    }
}

export default About;