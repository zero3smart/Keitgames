import React from 'react';
import { IndexLink } from 'react-router';
import '../assets/stylesheets/components/HomePage.scss';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="home-container">
                <div id="mainContent">
                    <br/>
                    Check out my latest app:<br/>PTW - Leaderboard of Champions!<br/>
                    <a href="PTW/" className="largebuttonLightblue">PTW</a>
                    <br/><br/><br/>
                    View all games:<br/>
                    <a href="products.html#games" className="largebutton">Games</a>
                    <br/><br/>
                    View non-games:<br/>
                    <a href="products.html#apps" className="largebutton">Apps</a>
                    <br/><br/>
                    <br/>

                    {/* Begin MailChimp Signup Form */}
                    <div id="mc_embed_signup">
                        <form
                            action="//keitgames.us10.list-manage.com/subscribe/post?u=8fba46b663b9a09f05f1e8275&amp;id=f548e81d86"
                            method="post"
                            id="mc-embedded-subscribe-form"
                            name="mc-embedded-subscribe-form"
                            className="validate"
                            style={{ 'padding': 0, 'padding-top': '10px' }}
                            target="_blank"
                            novalidate>
                            <div id="mc_embed_signup_scroll">
                                <h2 style={{ 'text-align': 'center' }}>
                                    Be the <b>1st</b> to hear about new Apps:
                                </h2>
                                <div className="indicates-required">
                                    <span className="asterisk">*</span> indicates required
                                </div>
                                <div className="mc-field-group">
                                    <label for="mce-EMAIL">
                                        Email Address:  <span className="asterisk">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        value=""
                                        name="EMAIL"
                                        className="required email"
                                        id="mce-EMAIL"
                                        style={{ 'border-radius': '6px' }} />
                                </div>
                                <div className="mc-field-group">
                                    <label for="mce-FNAME">First Name: </label>
                                    <input
                                        type="text"
                                        value=""
                                        name="FNAME"
                                        className=""
                                        id="mce-FNAME"
                                        style={{ 'border-radius': '6px' }} />
                                </div>
                                <div id="mce-responses" className="clear">
                                    <div
                                        className="response"
                                        id="mce-error-response"
                                        style={{ 'display': 'none' }}>
                                    </div>
                                    <div
                                        className="response"
                                        id="mce-success-response"
                                        style={{ 'display': 'none' }}>
                                    </div>
                                </div>
                                {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups */}
                                <div style={{ 'position': 'absolute', 'left': '-5000px' }}>
                                    <input
                                        type="text"
                                        name="b_8fba46b663b9a09f05f1e8275_f548e81d86"
                                        tabindex="-1"
                                        value="" />
                                </div>
                                <div className="clear">
                                <input
                                    type="submit"
                                    value="Subscribe"
                                    name="subscribe"
                                    id="mc-embedded-subscribe"
                                    className="testbutton"
                                    style={{ 'border': 0, 'margin': 'auto', 'font': 'inherit', 'font-size': '3vh' }} />
                            </div>
                            </div>
                        </form>
                    </div>
                    {/* End mc_embed_signup */}
                    <br/>
                </div>
            </div>
        );
    }
}

export default HomePage;
