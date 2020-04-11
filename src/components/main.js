import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './landingpage';
import AboutMe from './aboutme';
import Gallery from './gallery';
import Projects from './projects';



const Main = () => (
    <Switch>
        <Route exact path={`/`} component={LandingPage} />
        <Route exact path={`/aboutme`} component={AboutMe} />
        <Route exact path={`/gallery`} component={Gallery} />
        <Route exact path={`/projects`} component={Projects} />
    </Switch>
)

export default Main;