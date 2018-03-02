import React, {Component} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {Container} from 'reactstrap';
import Header from '../../components/Header/';
import Sidebar from '../../components/Sidebar/';
import Breadcrumb from '../../components/Breadcrumb/';
// import Aside from '../../components/Aside/';
import Footer from '../../components/Footer/';
import Dashboard from '../../views/Dashboard/';

import ListVideo from '../../views/ListVideo/';
import ListActivity from '../../views/ListActivity/';
import ReleaseActivity from '../../views/ReleaseActivity/';
import SpaceState from '../../views/SpaceState/';
import SchoolSpace from '../../views/SchoolSpace/';


class Full extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <div className="app-body">
          <Sidebar {...this.props}/>
          <main className="main">
            <Breadcrumb />
            <Container fluid>
              <Switch>
                <Route path="/dashboard" name="Dashboard" component={Dashboard}/>
                <Route path="/list_video" name="ListVideo" component={ListVideo}/>
                <Route path="/list_activity" name="ListActivity" component={ListActivity}/>
                <Route path="/release_activity" name="ReleaseActivity" component={ReleaseActivity}/>
                <Route path="/space_state" name="SpaceState" component={SpaceState}/>
                <Route path="/school_space" name="SchoolSpace" component={SchoolSpace}/>

                <Redirect from="/" to="/dashboard"/>
              </Switch>
            </Container>
          </main>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Full;
