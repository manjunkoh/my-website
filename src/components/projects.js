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
                
                <div className="projects-grid">
                {/*Project 1*/}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto',flexWrap:'wrap'}}>
                    <CardTitle style={{color: '#3b3838f3', background: 
                    `url(${ plotscriptExample }) center / cover`,height:'250px', flexWrap:'wrap'}} >Plot Script</CardTitle>
                    
                    <CardText>
                        A kernel based notebook-style interpreter that performs numerical, graphical and symbolic computations. Similar to Jupyter Notebook and Mathematica, but much less complex.
                        Developed with Visual Studio and Qt, and tested on a reference environemnt using Vagrant. 
                    </CardText>
                    <CardActions border>
                        <a href="https://www.github.com/manjunkoh/plotscript" rel="noopener noreferrer" target="_blank">
                            <Button colored>GitHub</Button></a>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>

                {/*Project 2*/}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '250px', background: 
                    `url(${ guitarExample }) center / cover`,flexWrap:'wrap'}} >Guitar Hero</CardTitle>
                    
                    <CardText>
                        A Guitar Hero like rhythm game using a microcontroller and its features such as ADC (Analog-to-Digital Converter), display, and PWM(Pulse-width modulation).
                        Developed with BoosterPack MKII microcontroller and CCS (Code Composer Studio). 
                    </CardText>
                    <CardActions border>
                        <a href="https://www.github.com/manjunkoh/guitarhero" rel="noopener noreferrer" target="_blank">
                            <Button colored>GitHub</Button></a>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
                {/*Project 3*/}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: 'black', height: '250px', background: 
                    `url(${ mipsDis }) center / cover`,flexWrap:'wrap'}} >MIPS Disassembler</CardTitle>
                    
                    <CardText>
                    MIPS core instruction disassembler using a higher level C++. The disassembler is a process where it converts the binary hex
                    instructions that are executed by the MIPS processor to assembly source code that are readable by
                    humans. The inputs were text files with a .obj extension, and the outputs were other text files with a .s
                    extension.
                    </CardText>
                    <CardActions border>
                        <a href="https://www.github.com/manjunkoh/mips-disassembler" rel="noopener noreferrer" target="_blank">
                            <Button colored>GitHub</Button></a>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
                </div>
            )
        }
        else if(this.state.activeTab === 1){
            return(
                <div className="projects-grid">
                {/*Project 1*/}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: 'black', height: '250px', background: 
                    `url(${ pfExample }) center / cover`,flexWrap:'wrap'}} >1D Particle Filter</CardTitle>
                    
                    <CardText>
                        1 Dimensional Particle Filter for estimating and tracking a non-linear and non-Gaussian system that Kalman Filter can't solve. Jupyter Notebook tutorial Included.
                    </CardText>
                    <CardActions border>
                        <a href="https://www.github.com/manjunkoh/1DParticleFilter" rel="noopener noreferrer" target="_blank">
                            <Button colored>GitHub</Button></a>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>

                {/*Project 2*/}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: 'black', height: '250px', background: 
                    `url(${ classifyShips }) center / cover`,flexWrap:'wrap'}} >Classifying Ships in Satellite Image</CardTitle>
                    
                    <CardText>
                        (Coming Soon) Developed with Keras deep learning library  
                    </CardText>
                    <CardActions border>
                        <a href="https://www.github.com/manjunkoh" rel="noopener noreferrer" target="_blank">
                            <Button colored>GitHub</Button></a>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
                </div>
            )
        }
        else if(this.state.activeTab === 2){
            return(
                <div><h1>MATLAB Projects</h1></div>
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