import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Work from './Work';
import Jobplus from './Jobplus';
import Delivery4You from './Delivery4You';
import Around from './Around';
import Starlink from './Starlink';
import Tinnews from './Tinnews';

export default class Main extends Component {
    render() {
        return (
            <div className="main">
                <Switch>
                    <Route path="/home" component={Home}/>
                    <Route path="/work" component={Work}/>
                    <Route path="/jobplus" component={Jobplus}/>
                    <Route path="/delivery4you" component={Delivery4You}/>
                    <Route path="/around" component={Around}/>
                    <Route path="/starlink" component={Starlink}/>
                    <Route path="/tinnews" component={Tinnews}/>
                    <Route component={Home}/>
                </Switch>
            </div>
        )
    }
}
