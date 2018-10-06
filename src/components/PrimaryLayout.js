import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import '../assets/stylesheets/components/PrimaryLayout.scss';
import HomePage from './HomePage';
import PrimaryHeader from './Header/PrimaryHeader';
import PrimaryFooter from './Footer/PrimaryFooter';
import $ from 'jquery';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const PrimaryLayout = props => {
    return (
        <div className="primary-layout">
            <PrimaryHeader />
            <main>
                <Switch>
                    <Route path="/" exact component={HomePage} />
                    {/* <Route path="/products" component={Product} />
                    <Route path="/contact" component={Contact} /> */}
                    <Redirect to="/" />
                </Switch>
            </main>
            <PrimaryFooter />
        </div>
    );
}

export default PrimaryLayout;
