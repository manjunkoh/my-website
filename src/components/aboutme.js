import React, { Component } from 'react';
import defaultPic from "../images/default.JPG"
import { Grid, Cell} from 'react-mdl';

class About extends Component {
    render() {
        return(
<React.Fragment>
<section id="about">
<div style={{height:'100%',background:'#fff',margin:'auto'}}>

        

<div class="mdl-grid portfolio-max-width">
  <div class="mdl-cell mdl-cell--12-col mdl-card mdl-shadow--4dp">

    {/*<div class="mdl-card__media">
        <img class="profile-pic" src={defaultPic} border="0" alt="avatar"/>
        </div>*/}

    <div class="mdl-grid portfolio-copy">

        {/*<h3 class="mdl-cell mdl-cell--12-col mdl-typography--headline">Introduction</h3>*/}
        <div class="mdl-cell mdl-cell--12-col mdl-card__supporting-text no-padding ">
          <h2> About</h2>
          <img class="profile-pic" src={defaultPic} border="0" alt="avatar"/>
          <p> 
          Hey guys welcome to my (work in progress) website. My name is Man Jun. 
          Thanks to my parents I had the opportunity to live abroad in the US for about 10 years and survive with a 
          degree in aerospace engineering from Virginia Tech; 
          I also studied a good amount of computer engineering. Aerospace is something I have been deeply passionate about since day 1, 
          and eventually I hope to use my skills to found an asteroid-mining company. 
          <br /> Two things I can't live without are food and sports especially football and baseball, 
          but I also love learning/trying new things. My taste of music varies time to time, but I generally 
          enjoy most genres except country and heavy metal. I'm an extremely adventurous guy; 
          top things on my bucket list are going to space, visiting North/South Pole, seeing an Aurora, and hiking 
          across the Patagonia. 
          <br/>Currently I'm serving my mandatory military conscription as an Intel/Intepretation officer in the Republic of Korea Army. 
          After my discharge end of 2023 I hope to continue my passion and work on projects related controls and estimation. 
          Thanks for visiting!
          </p>
    

        {/*<h3 class="mdl-cell mdl-cell--12-col mdl-typography--headline">Irure mollit est sit labore</h3>*/}

     
          <h2>Contact</h2>
          <p className="address" >
            If you're gonna prank-call me at least be super creative or somewhat hilarious please<br/>
            <span><i className="fa fa-phone /"></i> +82 (010) 9466-3989</span><br />
            <span><i className="fa fa-envelope-square /"></i> mjk18@vt.edu</span> <br/>
            <span><a style={{color: 'inherit',fontWeight:'bold'}}href="https://drive.google.com/file/d/14IEFrYlU5o0OQEeCfMXiWfKcUkoHvkBf/view?usp=sharing" rel="noopener noreferrer" target="_blank"className="button" download><i className="fa fa-download" />Download Resume</a></span>
          </p>
        </div>
    </div>
</div>


</div>
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