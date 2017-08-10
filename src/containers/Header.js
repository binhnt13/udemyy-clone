/**
 * Created by Lotus on 8/9/17.
 */
import React, { Component } from 'react'
import './../stylesheets/Header.css'

export default class Header extends Component {
    constructor() {
        super();
        this.state = {
            ahoyClass: 'hello-bar ahoy open',
            displayHelloBarBorder: false,
            menuLinkClass: 'menu__link'
        }
    }

    openHelloBar = () => {
        this.setState({
            ahoyClass: 'ahoy open',
            displayHelloBarBorder: false
        })
    };

    closeHelloBar = () => {
        this.setState({
            ahoyClass: 'ahoy',
            displayHelloBarBorder: true
        })
    };

    openMenuLink = () => {
       this.setState({
            menuLinkClass: 'menu__link maintain-hover'
       })
    };

    closeMenuLink = () => {
       this.setState({
            menuLinkClass: 'menu__link'
       })
    };

    render() {
        return(
            <div className="container-header c_header--desktop ud-angular-loader js-hellobar has-hello-bar white">
                {/*-------- hello bar container ----------*/}
                <div className="hello-bar-container" data-purpose="hello-bar-container">
                    { this.state.displayHelloBarBorder && <a onClick={this.openHelloBar} className="hello-bar-border" data-purpose="toggle-hello-bar" /> }
                    <div className={`hello-bar ${this.state.ahoyClass}`} style={{cursor: 'auto'}}>
                        <a onClick={this.closeHelloBar} className="udi udi-minus close" data-purpose="close-hello-bar" aria-label="Close" />
                        <div className="container">
                            <div className="tal hello-spacing-wrapper">
                                <div className="hello-titles">
                                    <span className="hello-title active-link" data-href="" data-purpose="hello-bar-title" data-usertracker-type="hello-bar-click-title">
                                        New student discount—6 hours only!
                                    </span>
                                    <span className="hello-desc active-link" data-href="" data-purpose="hello-bar-description" data-usertracker-type="hello-bar-click-subtitle">
                                        Change your life through learning. Over 40,000 courses are $10 each for a limited time.
                                    </span>
                                </div>
                                <div className="hello-timer">
                                    <figcaption>Offer ends in</figcaption>
                                    <span className="hello-bar-timer timeTo timeTo-green" style={{fontSize: 28, fontFamily: 'Verdana, sans-serif'}}>
                                        <figure style={{maxWidth: 55}}>
                                            <div className="first" style={{width: 26, height: 30}}>
                                                <ul style={{left: 3, top: -30}}>
                                                    <li>0</li><li>0</li>
                                                </ul>
                                            </div>
                                            <div style={{width: 26, height: 30}} className="">
                                                <ul style={{left: 3, top: -30}} className="">
                                                    <li>0</li><li>0</li>
                                                </ul>
                                            </div>
                                            <figcaption style={{fontSize: 10}}>hours</figcaption>
                                        </figure>
                                        <span>:</span>
                                        <figure style={{maxWidth: 55}}>
                                            <div className="first" style={{width: 26, height: 30}}>
                                                <ul style={{left: 3, top: -30}} className="">
                                                    <li>0</li><li>0</li>
                                                </ul>
                                            </div>
                                            <div style={{width: 26, height: 30}} className="">
                                                <ul style={{left: 3, top: -30}} className="">
                                                    <li>0</li><li>0</li>
                                                </ul>
                                            </div>
                                            <figcaption style={{fontSize: 10}}>minutes</figcaption>
                                        </figure>
                                    </span>
                                </div>
                                <div className="mobile-number">
                                    <span className="btn send-bt active-link" data-href="https://www.udemy.com/courses/" data-purpose="click-hello-bar-cta" data-usertracker-type="hello-bar-click-cta">
                                        Explore Courses
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/*------------ Navigation --------------*/}
                <div className="c_header__inner" role="navigation">
                    <div className="c_header__logo-container">
                        <a className="c_header__logo-wrap" href="/">
                            <img className="udemy-logo" src="https://www.udemy.com/staticx/udemy/images/v5/logo-green.svg" alt="udemy" width="100" />
                        </a>
                    </div>
                    <div className="c_header__left">
                        <button className="c_header__mobile-bt mobile-bt--overflow udi udi-menu" />
                        <div id="dropdownButton" className="dropdown dropdown--topics">
                            <div className="dropdown__toggle">
                                <span className="dropdown__main-link" aria-expanded="false" tabIndex="0" role="button">
                                    <div className="ellipsis">
                                        Categories
                                    </div>
                                    <span className="caret" />
                                </span>
                            </div>
                            <div className="dropdown__menu">
                                <ul className="dropdown__menu-list" role="dialog" aria-label="Categories">
                                    <li className={this.state.menuLinkClass} role="presentation">
                                        <a href="/courses/development/"
                                           onMouseEnter={this.openMenuLink}
                                           onMouseLeave={this.closeMenuLink}
                                           className="main-cat" aria-expanded="false" role="button"
                                        >
                                            <b className="menu__icon udi udi-development" />
                                            <span className="menu__title"> Development </span>

                                            <span className="udi udi-next menu__arrow" />
                                        </a>
                                        <div className="dropdown__menu dropdown__menu--sub skin6">
                                            <div className="fxdc h100p">
                                                <ul className="menu__sub-list" role="dialog" aria-label="Development">
                                                    <li>
                                                        <a href="/courses/development/">
                                                            <span className="menu__main-title">
                                                                All Development
                                                            </span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="/courses/development/web-development/">
                                                            <b className="menu__icon udi udi-web-development" />
                                                            <span className="menu__title">Web Development</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="/courses/development/web-development/">
                                                            <b className="menu__icon udi udi-web-development" />
                                                            <span className="menu__title">Web Development</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="/courses/development/web-development/">
                                                            <b className="menu__icon udi udi-web-development" />
                                                            <span className="menu__title">Web Development</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>

                                    <li className={this.state.menuLinkClass} role="presentation">
                                        <a href="/courses/business/"
                                           onMouseEnter={this.openMenuLink}
                                           onMouseLeave={this.closeMenuLink}
                                           className="main-cat" aria-expanded="false" role="button"
                                        >
                                            <b className="menu__icon udi udi-business" />
                                            <span className="menu__title"> Business </span>
                                            <span className="udi udi-next menu__arrow" />
                                        </a>
                                        <div className="dropdown__menu dropdown__menu--sub skin5">
                                            <div className="fxdc h100p">
                                                <ul className="menu__sub-list" role="dialog" aria-label="Business">
                                                    <li>
                                                        <a href="/courses/business/">
                                                            <span className="menu__main-title">
                                                                All Business
                                                            </span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="/courses/business/finance/" header-tracking="topics.subcategory" tracking-detail="24">
                                                            <b className="menu__icon udi udi-finance"></b>
                                                            <span className="menu__title">Finance</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>

                                    <li className={this.state.menuLinkClass} role="presentation">
                                        <a href="/courses/it-and-software/"
                                           onMouseEnter={this.openMenuLink}
                                           onMouseLeave={this.closeMenuLink}
                                           className="main-cat" aria-expanded="false" role="button"
                                        >
                                            <b className="menu__icon udi udi-it-and-software" />
                                            <span className="menu__title"> IT &amp; Software </span>
                                            <span className="udi udi-next menu__arrow" />
                                        </a>
                                        <div className="dropdown__menu dropdown__menu--sub skin6">
                                            <div className="fxdc h100p">
                                                <ul className="menu__sub-list" role="dialog" aria-label="IT &amp; Software">
                                                    <li>
                                                        <a href="/courses/it-and-software/" header-tracking="topics.category" tracking-detail="294">
                                                            <span className="menu__main-title">
                                                                All IT &amp; Software
                                                            </span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                </ul>

                            </div>
                        </div>

                        <div className="c_header__search">
                            <button className="c_header__mobile-bt mobile-bt--search udi udi-search" aria-label="Search" />
                            <div className="c_quick-search__form h100p" search_autocompletes_field="search-v5" show-overlay-on="showAutocompletes" show-overlay-className="overlay--search-show">


                                <form id="searchbox" action="/courses/search/" className="h100p ng-pristine ng-valid ng-valid-maxlength" header-tracking="search.submit" tracking-event="submit">
                                    <label for="q" className="sr-only">Search:</label>
                                    <input type="text" name="q" id="q" value="" autoComplete="off" maxLength="200" placeholder="Search for Courses" className="c_quick-search__input ng-pristine ng-untouched ng-valid ng-empty ng-valid-maxlength" />
                                        <input type="hidden" name="src" value="ukw" autocomplete="off" />
                                            <button type="submit" data-purpose="do-search" className="udi udi-search c_quick-search__btn" aria-label="Search"form />
                                </form>

                                <div dropdown="" is-open="showAutocompletes" className="dropdown">
                                    <ul className="dropdown-menu" />
                                </div></div>
                            <button className="mobile-bt--search-cancel" header-tracking="search.close" ng-click="closeSearchField()">Cancel</button>
                        </div>
                    </div>

                    <div className="c_header__mobile-spacer">&nbsp;</div>

                    <div className="c_header__right">
                        <div className="dropdown dropdown--ufb">
                            <div className="dropdown__toggle">
                                <a href="https://business.udemy.com/?ref=ufb_header" className="dropdown__main-link" target="_blank" header-tracking="ufb.main" data-purpose="ufb-link" rel=" noopener noreferrer">
                                    Udemy for Business
                                </a>
                            </div>
                        </div>
                        <div className="dropdown dropdown--instructor  ">
                            <div className="dropdown__toggle" header-tracking="teaching.progressbar-shown" tracking-event="mouseenter">
                                <a className="dropdown__main-link" data-purpose="instructor-dropdown" href="/teaching/?ref=teach_header" header-tracking="teaching.main" tracking-detail="become-an-instructor">
                                    Become an Instructor
                                </a>
                            </div>
                        </div>
                        <div className="dropdown dropdown--login">
                            <div className="dropdown__toggle">
                                <require-auth data-purpose="login" show-login="true" header-tracking="login"><div data-purpose="require-auth" ng-click="attemptAction($event)" ng-transclude="">
                                    <a className="dropdown__main-link" href="javascript:void(0)">Login</a>
                                </div> </require-auth>
                            </div>
                        </div>
                        <div className="dropdown dropdown--signup">
                            <div className="dropdown__toggle">
                                <require-auth data-purpose="header-signup" header-tracking="signup"><div data-purpose="require-auth" ng-click="attemptAction($event)" ng-transclude="">
                                    <a className="dropdown__main-link" href="javascript:void(0)">Sign Up</a>
                                </div> </require-auth>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}