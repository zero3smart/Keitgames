import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import '../../assets/stylesheets/components/Header/PrimaryHeader.scss';
import logo from '../../assets/images/logo.png';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

const PrimaryHeader = props => {
    return (
        <div className="primary-header">
            <div id="header">
                <div id="headerContent">
                    <a href="index.html" >
                        <img src={logo} id="headerlogo" />
                    </a>
                    <div id="headerbuttons">
                        <a href="products.html" className="testbutton">Apps</a>
                        <a href="contact.html" className="testbutton">Contact</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PrimaryHeader;