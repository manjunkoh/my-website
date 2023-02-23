import React from 'react';
import './App.css';
import {Layout, Header, Navigation, Drawer, Content,Footer, FooterSection, FooterLinkList} from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';


function App() {
  return (
    <div className="demo-big-content">
    <Layout>
  <Header className="header-color3" title={<Link to="/" style={{ color: 'inherit', textDecoration: 'none', fontFamily: 'Pacifico', fontWeight: 'bold'}}>Man Jun Koh</Link>} scroll>
            <Navigation style={{fontFamily:'Lato', fontWeight: 'bolder'}}>
                {/*<Link to="/"><i className="fa fa-home-square /"></i></Link>*/}
                <Link to="/aboutme" style={{fontWeight: 'bold'}}>About Me</Link>
                <Link to="/projects" style={{fontWeight: 'bold'}}>Projects</Link>
                <Link to="/gallery" style={{fontWeight: 'bold'}}>Gallery</Link>
            </Navigation>
        </Header>
        <Drawer title={<Link to="/" style={{ color: 'inherit', textDecoration: 'none',fontFamily: 'Pacifico', fontWeight: 'bold'}}>Man Jun Koh</Link>}>
            <Navigation style={{fontFamily:'Lato'}}>
                <Link to="/aboutme" style={{fontWeight: 'bold'}}>About Me</Link>
                <Link to="/projects" style={{fontWeight: 'bold'}}>Projects</Link>
                <Link to="/gallery" style={{fontWeight: 'bold'}}>Gallery</Link>
            </Navigation>
        </Drawer>
        <Content>
            <Main/>
        </Content>
        <Footer size="mini">
                    <FooterSection type="left" logo="Copyright 2020 Man Jun. Co">
                        <FooterLinkList>
                            <br/> Powered by JavaScript React and hosted on Github.
                        </FooterLinkList>
                    </FooterSection>
        </Footer>
    </Layout>
</div>
  );
}

export default App;
