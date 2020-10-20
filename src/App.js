import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomeNav from './components/homenav';
import HomePage from './components/homepage';
import Philosophy from './components/philosophy';


function App() {

  return (

        <Router>

            <HomeNav />

            <Switch>
                <Route exact path="/" >
                    <HomePage />
                </Route>

                <Route path="/philosophy" >
                    <Philosophy />
                </Route>
            </Switch>

        </Router>
  );
}

export default App;
