import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';


import Header from './Header';
import Landing from './Landing';
const DashBoard = () => <h2>DashBoard</h2>;
const SurveryNew = () => <h2>SurveryNew</h2>;

class App extends Component {
    constructor(props){
        super(props);
        this.state = {

        };
    }
    componentDidMount() {
        this.props.fetchUser();
    }
    render() {
        return (
            <div className="container">
                <BrowserRouter>
                    <div>
                        <Header />
                        <Route exact path="/" component={Landing} />
                        <Route exact path="/surveys" component={DashBoard}/>
                        <Route path="/surveys/new" component={SurveryNew}/>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
};


export default connect(null, actions)(App);