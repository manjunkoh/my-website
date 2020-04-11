import React, { Component } from 'react';
import FbImageGrid from 'react-fb-image-grid'
import vawterFive from '../images/vawter_five.jpg'
import bgpic from '../images/background.jpg'
import yosemiteEntrance from '../images/yosemite_entrance.jpg'
import yosemiteMain from '../images/yosemite_main.jpg'
import yosemiteHalfDome from '../images/yosemite_halfdome.jpg'
import meAndMerl from '../images/me_and_merl.jpg'
import nolaGroup from '../images/nola_group.jpg'
import cubsGame from '../images/cubsgame.jpg'
import denverMain from '../images/denver_main.jpg'
import newYearsBoys from '../images/newyears_boys.jpg'
import tailgate from '../images/tailgate.png'

const photos = [vawterFive,cubsGame,denverMain,meAndMerl,tailgate,bgpic,newYearsBoys,nolaGroup,yosemiteEntrance,yosemiteMain,yosemiteHalfDome]

class Gallery extends Component {
    render() {
        return(
            
            <div style={{height: '100%', background:'#fff', margin:'auto'}}>
                <span><p className='gallery-header' style={{fontFamily:'Shadows Into Light Two', fontSize:'25px',fontWeight:'bold', paddingLeft:'5%',paddingTop:'5%'}}>
                    Gallery: it's just me and the boys boppin 
                </p></span>
                <p></p>
                <div style={{width: '50%', margin:'auto', paddingTop:'1%'}}>
                    <FbImageGrid images={photos} 
                                countFrom={6}
                                            />
            </div>
              <span><h1 style={{fontFamily:'Lato', fontSize:'20px', textAlign:'center'}}>
                Click the image to fit them to your screen
              </h1></span>

            </div>
        )
    }
}

export default Gallery;

/*
import React, { Component } from 'react'

import ReactBnbGallery from 'react-bnb-gallery'
const photos = [{
  photo: "https://source.unsplash.com/aZjw7xI3QAA/1144x763",
  caption: "Viñales, Pinar del Río, Cuba",
  subcaption: "Photo by Simon Matzinger on Unsplash",
  thumbnail: "https://source.unsplash.com/aZjw7xI3QAA/100x67",
}, {
  photo: "https://source.unsplash.com/c77MgFOt7e0/1144x763",
  caption: "La Habana, Cuba",
  subcaption: "Photo by Gerardo Sanchez on Unsplash",
  thumbnail: "https://source.unsplash.com/c77MgFOt7e0/100x67",
}, {
  photo: "https://source.unsplash.com/QdBHnkBdu4g/1144x763",
  caption: "Woman smoking a tobacco",
  subcaption: "Photo by Hannah Cauhepe on Unsplash",
  thumbnail: "https://source.unsplash.com/QdBHnkBdu4g/100x67",
}];

class Gallery extends Component {
  constructor() {
    super(...arguments);
    this.state = { galleryOpened: false };
    this.toggleGallery = this.toggleGallery.bind(this);
  }

  toggleGallery() {
    this.setState(prevState => ({
      galleryOpened: !prevState.galleryOpened
    }));
  }

  render () {
    return (
    <React.Fragment>
      <button onClick={this.toggleGallery}>Open photo gallery</button>
      <ReactBnbGallery show={this.state.galleryOpened} photos={photos} onClose={this.toggleGallery} />
      </React.Fragment>
    )
  }
}

export default Gallery;*/