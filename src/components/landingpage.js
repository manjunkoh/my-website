import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';
/*import defaultPic from "./default_pic.jpg"
import bgPic from "../images/background.jpg"*/

var bgPic=require('../images/background.jpg')

class Landing extends Component {
    render() {
        return(
            <div style={{height: '100%', margin: 'auto', backgroundImage: `url(${ bgPic })`, backgroundSize:'cover',backgroundRepeat:'no-repeat', backgroundPosition:'center'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        {/*<img
                            src={defaultPic} 
                            alt="avatar"
                            className="avatar-img"
                        />*/}
                    <div className="opening-quotes">
                        <p>
                            "Survive and Advance"
                        </p>
                    </div>
                    <div className="banner-text">
                        <h1>A Day in the Life of ManJun</h1>
                    <hr/>
                    <p>
                        Tools I like to use: <br/>
                        C/C++ | Python | Linux | MATLAB | JavaScript(React)
                    </p>
                    <div className="social-links">
                        {/* Github */}
                        <a href="https://github.com/manjunkoh" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-github" aria-hidden="true"/>
                        </a>
                        {/* Github */}
                        <a href="https://instagram.com/junniboi" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-instagram" aria-hidden="true"/>
                        </a>
                        {/* Github */}
                        <a href="https://open.spotify.com/user/junniboi?si=86JNKdyYR9GjwwgfNtnNyA" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-spotify"aria-hidden="true"/>
                        </a>
                    </div>
                    </div>
                    </Cell>
                    <Cell col={12}>
                        <span><p style={{ paddingTop: '10%',paddingLeft:'70%',color: 'pink'}}>
                            photo taken by me with a Google Pixel 2 <br/>
                            @ Grand Teton National Park 
                        </p></span>
                    </Cell>
                </Grid>
            </div>
            
        )
    }
}

export default Landing;