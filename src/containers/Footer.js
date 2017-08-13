/**
 * Created by Lotus on 8/9/17.
 */
import React, { Component } from 'react'
import './../stylesheets/Footer.css'

export default class Footer extends Component {
    constructor() {
        super()
    }

    render() {

        const {
            location
        } = this.props;

        return(
                <div className="container-footer ud-component--footer--app footer-v42--tall ud-react-loaded">
                    <div className="ud-component--eu-cookie-message--app ud-react-loaded">
                        <div className="ud-component--footer--eu-cookie-message"/>
                    </div>
                    <div className="footer-v42 footer-v42--tall">
                        <div className="container">
                            <ul className="fxw fxwrap">
                                <li>
                                    <a href="https://about.udemy.com/" className=" white-text" >About Us</a>
                                </li>
                                <li>
                                    <a href="https://business.udemy.com/?ref=footer" className="ud-click-tracking white-text">Udemy for Business</a>
                                </li>
                                <li>
                                    <a href="/teaching/?ref=teach_footer" className=" white-text">Become an Instructor</a>
                                </li>
                                <li>
                                    <a href="/affiliate/" className=" white-text" title="Udemy Affiliate Program">Affiliate</a>
                                </li>
                                <li>
                                    <a href="https://about.udemy.com/blog?ref=footer" className=" white-text">Blog</a>
                                </li>
                                <li>
                                    <a href="/topics/" className=" white-text">Topics</a>
                                </li>
                                <li>
                                    <a href="/mobile/" className=" white-text">Mobile Apps</a>
                                </li>
                                <li>
                                    <a href="/support/" className=" white-text">Support</a>
                                </li>
                                <li>
                                    <a href="https://about.udemy.com/careers" className=" white-text">Careers</a>
                                </li>
                                <li>
                                    <a href="https://blog.udemy.com/?ref=footer" className=" white-text">Resources</a>
                                </li>
                            </ul>
                            <ul className="fxw fxwrap mt10">
                                <li>
                                    <div className="ud-component--footer--locale-dropdown">
                                        <div data-reactroot="" className="btn-group lang-dropdown dropup">
                                            <a aria-label="Select language" id="locale-dropdown" role="button" className="gray-link dropdown-toggle" href="">
                                                <span>
                                                    <span className="mr5 udi udi-globe"/>
                                                    &nbsp; English &nbsp;
                                                    <span className="user-caret ml5 udi udi-caret-up"/>
                                                </span>
                                            </a>
                                            <ul role="menu" className="dropdown-menu" aria-labelledby="locale-dropdown">
                                                {
                                                    location.map((o, i) => {
                                                        return(
                                                            <li key={i} className="">
                                                                <a tabIndex="-1" href="">{o.name}</a>
                                                            </li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <span className="gray-text copyright">
                                        Copyright © 2017 Udemy, Inc.
                                    </span>
                                </li>
                                <li>
                                    <a href="/terms/" className="gray-text">
                                        Terms
                                    </a>
                                </li>
                                <li>
                                    <a href="/terms/privacy/" className="gray-text">
                                        Privacy Policy and Cookie Policy
                                    </a>
                                </li>
                                <li>
                                    <a href="/terms/copyright/" className="gray-text">
                                        Intellectual Property
                                    </a>
                                </li>
                            </ul>

                            <ul className="fxw fxwrap mt10 international-links">
                                <li>
                                    <strong>English</strong>
                                </li>
                                <li data-purpose="site-language-de">
                                    <a href="/de/">Deutsch</a>
                                </li>
                                <li data-purpose="site-language-es">
                                    <a href="/es/">Español</a>
                                </li>
                                <li data-purpose="site-language-fr">
                                    <a href="/fr/">Français</a>
                                </li>
                                <li data-purpose="site-language-pt">
                                    <a href="/pt/">Português</a>
                                </li>
                                <li data-purpose="site-language-jp">
                                    <a href="/jp/">日本語</a>
                                </li>
                            </ul>

                        </div>
                    </div>
                    <div className="ud-component--footer--pixels" />
                </div>
        )
    }
}

Footer.defaultProps = {
    location: [
        {name: 'English'},
        {name: 'Deutsch'},
        {name: 'Español'},
        {name: 'Français'},
        {name: 'Italiano'},
        {name: '日本語'},
        {name: '한국어'},
        {name: 'Nederlands'},
        {name: 'Português'},
        {name: 'Русский'},
        {name: 'Türkçe'},
        {name: '中文(简体)'},
        {name: '中文(繁體)'}
    ]
};