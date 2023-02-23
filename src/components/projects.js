import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, CardMenu, Button, IconButton, CardText} from 'react-mdl';

import plotscriptExample from '../images/plotscript_example.png';
import guitarExample from '../images/guitarheropic.png';
import mipsDis from '../images/mips_dis.png';
import pfExample from '../images/pf_example.png';
import classifyShips from '../images/classify_ships.png';
import myWebsite from '../images/mywebsite.png';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories() {
        if(this.state.activeTab === 0){
            return(
                
                            <div class="mdl-grid portfolio-max-width">
                            <div class="mdl-cell mdl-card mdl-shadow--4dp portfolio-card">
                                <div class="mdl-card__media">
                                    <img class="article-image" src= {plotscriptExample} border="0" alt=""/>
                                </div>
                                <div class="mdl-card__title">
                                    <h2 class="mdl-card__title-text">Plot Script</h2>
                                </div>
                                <div class="mdl-card__supporting-text">
                                A kernel based notebook-style interpreter that performs numerical, graphical and symbolic computations. Similar to Jupyter Notebook and Mathematica, but much less complex. Developed with Visual Studio and Qt, and tested on a reference environemnt using Vagrant. 
                                </div>
                                <div class="mdl-card__actions mdl-card--border">
                                    <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect mdl-button--accent" href="https://www.github.com/manjunkoh/plotscript">GITHUB</a>
                                </div>
                            </div>
                            <div class="mdl-cell mdl-card mdl-shadow--4dp portfolio-card">
                                <div class="mdl-card__media">
                                    <img class="article-image" src= {guitarExample} border="0" alt=""/>
                                </div>
                                <div class="mdl-card__title">
                                    <h2 class="mdl-card__title-text">Guitar Hero</h2>
                                </div>
                                <div class="mdl-card__supporting-text">
                                A Guitar Hero like rhythm game using a microcontroller and its features such as ADC (Analog-to-Digital Converter), display, and PWM(Pulse-width modulation). Developed with BoosterPack MKII microcontroller and CCS (Code Composer Studio).
                                </div>
                                <div class="mdl-card__actions mdl-card--border">
                                    <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect mdl-button--accent" href="https://www.github.com/manjunkoh/guitarhero">GITHUB</a>
                                </div>
                            </div>
                            <div class="mdl-cell mdl-card mdl-shadow--4dp portfolio-card">
                                <div class="mdl-card__media">
                                    <img class="article-image" src= {mipsDis} border="0" alt=""/>
                                </div>
                                <div class="mdl-card__title">
                                    <h2 class="mdl-card__title-text">MIPS Disassembler</h2>
                                </div>
                                <div class="mdl-card__supporting-text">
                                MIPS core instruction disassembler using a higher level C++. The disassembler is a process where it converts the binary hex instructions that are executed by the MIPS processor to assembly source code that are readable by humans. The inputs were text files with a .obj extension, and the outputs were other text files with a .s extension.
                                </div>
                                <div class="mdl-card__actions mdl-card--border">
                                    <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect mdl-button--accent" href="https://www.github.com/manjunkoh/mips-disassembler">GITHUB</a>
                                </div>
                            </div>
                        </div>
            )
        }
        else if(this.state.activeTab === 1){
            return(
                            <div class="mdl-grid portfolio-max-width">
                            <div class="mdl-cell--5-col mdl-cell--4-col-tablet mdl-card mdl-card mdl-shadow--4dp portfolio-card">
                                <div class="mdl-card__media">
                                    <img class="article-image" src= {pfExample} border="0" alt=""/>
                                </div>
                                <div class="mdl-card__title">
                                    <h2 class="mdl-card__title-text">1-D Particle Filter(Tutorial)</h2>
                                </div>
                                <div class="mdl-card__supporting-text">
                                1 Dimensional Particle Filter for estimating and tracking a non-linear and non-Gaussian system that Kalman Filter can't solve. Jupyter Notebook tutorial Included.
                                </div>
                                <div class="mdl-card__actions mdl-card--border">
                                    <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect mdl-button--accent" href="https://www.github.com/manjunkoh/1DParticleFilter" rel="noopener noreferrer" target="_blank">GITHUB</a>
                                </div>
                            </div>
                            <div class="mdl-cell--1-col"></div>
                            <div class="mdl-cell--5-col mdl-cell--4-col-tablet mdl-card mdl-card mdl-shadow--4dp portfolio-card">
                                <div class="mdl-card__media">
                                    <img class="article-image" src= {classifyShips} border="0" alt=""/>
                                </div>
                                <div class="mdl-card__title">
                                    <h2 class="mdl-card__title-text">Classifying Ships in Satellite Image</h2>
                                </div>
                                <div class="mdl-card__supporting-text">
                                (Coming Soon) Developed with Keras deep learning library                                </div>
                                <div class="mdl-card__actions mdl-card--border">
                                    <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect mdl-button--accent" href="https://www.github.com/manjunkoh" rel="noopener noreferrer" target="_blank">GITHUB</a>
                                </div>
                            </div>
                        </div>
            )
        }
        else if(this.state.activeTab === 2){
            return(
            <div class="mdl-grid portfolio-max-width">
                <div class="mdl-cell mdl-card mdl-shadow--4dp portfolio-card">
                    <div class="mdl-card__media">
                        <img class="article-image" src= {plotscriptExample} border="0" alt=""/>
                    </div>
                    <div class="mdl-card__title">
                        <h2 class="mdl-card__title-text">Satellite Tracking Telescope</h2>
                    </div>
                    <div class="mdl-card__supporting-text">
                    (Coming soon) Undergraduate research project 
                    </div>
                    <div class="mdl-card__actions mdl-card--border">
                        <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect mdl-button--accent" href="portfolio-example01.html">Read more</a>
                    </div>
                </div>
                <div class="mdl-cell mdl-card mdl-shadow--4dp portfolio-card">
                    <div class="mdl-card__media">
                        <img class="article-image" src= {plotscriptExample} border="0" alt=""/>
                    </div>
                    <div class="mdl-card__title">
                        <h2 class="mdl-card__title-text">Spacecraft PNT</h2>
                    </div>
                    <div class="mdl-card__supporting-text">
                        (Coming soon) Codes from the class
                    </div>
                    <div class="mdl-card__actions mdl-card--border">
                        <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect mdl-button--accent" href="portfolio-example01.html">Read more</a>
                    </div>
                </div>
                <div class="mdl-cell mdl-card mdl-shadow--4dp portfolio-card">
                    <div class="mdl-card__media">
                        <img class="article-image" src= {plotscriptExample} border="0" alt=""/>
                    </div>
                    <div class="mdl-card__title">
                        <h2 class="mdl-card__title-text">Aerospace</h2>
                    </div>
                    <div class="mdl-card__supporting-text">
                    (Coming soon) Codes from the class
                    </div>
                    <div class="mdl-card__actions mdl-card--border">
                        <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect mdl-button--accent" href="portfolio-example01.html">Read more</a>
                    </div>
                </div>
            </div>
            )
        }
        else if(this.state.activeTab === 3){
            return(
                <div className="projects-grid">
                {/*Project 1*/}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '250px', background: 
                    `url(${ myWebsite }) center / cover`,flexWrap:'wrap'}} >Personal Website</CardTitle>
                    
                    <CardText>
                        The one you are on right now.
                    </CardText>
                    <CardActions border>
                        <a href="https://www.github.com/manjunkoh/my-website" rel="noopener noreferrer" target="_blank">
                            <Button colored>GitHub</Button></a>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
                </div>
            )
        }
    }
    render() {
        return(
            <div style={{height:'100%',margin:'auto',background:'#fff'}}>
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId})} ripple>
                    <Tab>C/C++</Tab>
                    <Tab>Python</Tab>
                    <Tab>MATLAB</Tab>
                    <Tab>React</Tab>
                </Tabs>

                <Grid>
                    <Cell col={12}>
                        <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Projects;