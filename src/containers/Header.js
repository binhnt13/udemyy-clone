/**
 * Created by Lotus on 8/9/17.
 */
import React, { Component } from 'react'
import $ from 'jquery'
import './../stylesheets/Header.css'

export default class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ahoyClass: 'hello-bar ahoy open',
            displayHelloBarBorder: false,
            maintainHoverClass: {},
            searchMobileClass: '',
            menuMobileClass: '',
            subMenuMobileClass: ''
        }
    }

    componentDidUpdate() {
        const navMobileMenu = $("#nav-mobile-menu");
        const buttonOpen = $("#bt-open-mobile-menu");
        const buttonOpenSub = $("#bt-open-mobile-sub-menu");
        const buttonBackMenu = $("#bt-back-mobile-menu");
        buttonOpen.click(function (e) {
            e.stopPropagation();
            navMobileMenu.addClass('nav-open')
        });
        buttonOpenSub.click(function (e) {
            e.stopPropagation();
            navMobileMenu.addClass('nav-open--sub')
        });
        buttonBackMenu.click(function (e) {
            e.stopPropagation();
            navMobileMenu.removeClass('nav-open--sub');

        });
        $(document).click(function (e)
        {
            if (!navMobileMenu.is(e.target) && navMobileMenu.has(e.target).length === 0)
            {
                navMobileMenu.removeClass('nav-open');
            }
        });
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

    openMenuLink = (key) => {
        console.log(12312);
        let selected = {};
        selected[key] = this.state.maintainHoverClass[key] === 'maintain-hover' ? '' : 'maintain-hover';
        this.setState({
            maintainHoverClass: selected
        })
    };

    openSearchMobile = () => {
        this.setState({
            searchMobileClass: 'search-open'
        })
    };

    closeSearchMobile = () => {
        this.setState({
            searchMobileClass: ''
        })
    };

    openMenuMobile = () => {
        this.setState({
            menuMobileClass: 'nav-open'
        })
    };

    render() {

        const {
            menu
        } = this.props;

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

                {/*------------ Main Navigation --------------*/}
                <div className="c_header__inner" role="navigation">
                    <div className="c_header__logo-container">
                        <a className="c_header__logo-wrap" href="/">
                            <img className="udemy-logo" src="https://www.udemy.com/staticx/udemy/images/v5/logo-green.svg" alt="udemy" width="100" />
                        </a>
                    </div>
                    <div className="c_header__left">
                        <button id="bt-open-mobile-menu" onClick={this.openMenuMobile} className="c_header__mobile-bt mobile-bt--overflow udi udi-menu" />
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
                                    {
                                        menu.map((o, i) => {
                                            return (
                                                <li key={i} className={`menu__link ${this.state.maintainHoverClass[i]}`} role="presentation">
                                                    <a href="/courses/development/"
                                                       onMouseEnter={() => this.openMenuLink(i)}
                                                       className="main-cat" aria-expanded="false" role="button"
                                                    >
                                                        <b className={`menu__icon udi ${o.icon}`} />
                                                        <span className="menu__title"> {o.name} </span>

                                                        <span className="udi udi-next menu__arrow" />
                                                    </a>
                                                    <div className={`dropdown__menu dropdown__menu--sub ${o.skin}`}>
                                                        <div className="fxdc h100p">
                                                            <ul className="menu__sub-list" role="dialog" aria-label="Development">
                                                                <li>
                                                                    <a href="/courses/development/">
                                                                        <span className="menu__main-title">
                                                                            All {o.name}
                                                                        </span>
                                                                    </a>
                                                                </li>
                                                                {
                                                                    o.sub.map((o, i) =>{
                                                                        return (
                                                                            <li key={i}>
                                                                                <a href="/courses/development/web-development/">
                                                                                    <b className={`menu__icon udi ${o.icon}`} />
                                                                                    <span className="menu__title">{o.name}</span>
                                                                                </a>
                                                                            </li>
                                                                        )
                                                                    })
                                                                }
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>

                            </div>
                        </div>

                        <div className={`c_header__search ${this.state.searchMobileClass}`}>
                            <button onClick={this.openSearchMobile} className="c_header__mobile-bt mobile-bt--search udi udi-search" aria-label="Search" />
                            <div className="c_quick-search__form h100p">


                                <form id="searchbox" action="/courses/search/" className="h100p ng-pristine ng-valid ng-valid-maxlength">
                                    <label htmlFor="q" className="sr-only">Search:</label>
                                    <input type="text" name="q" id="q" value="" autoComplete="off" maxLength="200" placeholder="Search for Courses" className="c_quick-search__input ng-pristine ng-untouched ng-valid ng-empty ng-valid-maxlength" />
                                        <input type="hidden" name="src" value="ukw" autoComplete="off" />
                                            <button type="submit" data-purpose="do-search" className="udi udi-search c_quick-search__btn" aria-label="Search"form />
                                </form>

                                <div className="dropdown">
                                    <ul className="dropdown-menu" />
                                </div></div>
                            <button onClick={this.closeSearchMobile} className="mobile-bt--search-cancel">Cancel</button>
                        </div>
                    </div>

                    <div className="c_header__mobile-spacer">&nbsp;</div>

                    <div className="c_header__right">
                        <div className="dropdown dropdown--ufb">
                            <div className="dropdown__toggle">
                                <a href="https://business.udemy.com/?ref=ufb_header" className="dropdown__main-link" target="_blank" rel=" noopener noreferrer">
                                    Udemy for Business
                                </a>
                            </div>
                        </div>
                        <div className="dropdown dropdown--instructor  ">
                            <div className="dropdown__toggle">
                                <a className="dropdown__main-link" data-purpose="instructor-dropdown" href="/teaching/?ref=teach_header">
                                    Become an Instructor
                                </a>
                            </div>
                        </div>
                        <div className="dropdown dropdown--login">
                            <div className="dropdown__toggle">
                                <require-auth data-purpose="login" show-login="true"><div data-purpose="require-auth">
                                    <a className="dropdown__main-link" href="">Login</a>
                                </div> </require-auth>
                            </div>
                        </div>
                        <div className="dropdown dropdown--signup">
                            <div className="dropdown__toggle">
                                <require-auth data-purpose="header-signup"><div data-purpose="require-auth">
                                    <a className="dropdown__main-link" href="">Sign Up</a>
                                </div> </require-auth>
                            </div>
                        </div>
                    </div>
                </div>

                {/*--------------- Mobile Navigation ------------*/}
                <nav id="nav-mobile-menu" className={`overflow-nav ${this.state.menuMobileClass} ${this.state.subMenuMobileClass}`}>
                    <div className="overflow-nav--main">

                        <ul className="overflow-nav__links">
                            <li className="menu__link">
                                <a href="http://ude.my/android">
                                    <span className="menu__title">Download the App</span>
                                    <span className="get-app">GET</span>
                                </a>
                            </li>
                            <li className="menu__link">
                                <a id="bt-open-mobile-sub-menu">
                                    <span className="menu__title ellipsis">Categories</span>
                                    <span className="udi udi-next" />
                                </a>
                            </li>
                            <li className="menu__link menu__link--bottom">
                                <require-auth>
                                    <div>
                                        <a href="">
                                            <span className="menu__title">Sign Up</span>
                                        </a>
                                    </div>
                                </require-auth>
                            </li>
                            <li className="menu__link menu__link--bottom">
                                <require-auth>
                                    <div data-purpose="require-auth">
                                        <a href="">
                                            <span className="menu__title">Login</span>
                                        </a>
                                    </div>
                                </require-auth>
                            </li>
                            <li className="menu__link menu__link--bottom">
                                <a href="/teaching/?ref=teach_header">
                                    <span className="menu__title">Become an Instructor</span>
                                </a>
                            </li>
                            <li className="menu__link menu__link--bottom">
                                <a href="https://business.udemy.com/?ref=ufb_header">
                                    <span className="menu__title">Udemy for Business</span>
                                </a>
                            </li>
                            <li className="menu__link menu__link--bottom">
                                <a href="/support/">
                                    <span className="menu__title">Help</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="overflow-nav--sub">
                        <header>
                            <button id="bt-back-mobile-menu" className="overflow-nav__back-bt">
                                <span className="udi udi-previous" />
                                Menu
                            </button>
                            <div className="ellipsis fx ml20">
                                Categories
                            </div>
                        </header>
                        <ul>
                            {
                                menu.map((o, i) =>{
                                    return(
                                        <li key={i} className="menu__link">
                                            <a href="/courses/development/">
                                                <b className={`menu__icon udi ${o.icon}`} />
                                                <span className="menu__title">{o.name}</span>
                                            </a>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>

                </nav>
            </div>
        )
    }
}

Header.defaultProps = {
    menu: [
        {
            name: 'Development',
            icon: 'udi-development',
            sub: [
                {
                    name: 'Web development',
                    icon: 'udi-web-development'
                },
                {
                    name: 'Web development',
                    icon: 'udi-web-development'
                },
            ],
            skin: 'skin6'
        },
        {
            name: 'Business',
            icon: 'udi-business',
            sub: [
                {
                    name: 'Finance',
                    icon: 'udi-finance'
                },
                {
                    name: 'Finance',
                    icon: 'udi-finance'
                }
            ],
            skin: 'skin5'
        },
        {
            name: 'IT & Software',
            icon: 'udi-it-and-software',
            sub: [
                {
                    name: 'IT Certification',
                    icon: 'udi-it-certification'
                },
                {
                    name: 'IT Certification',
                    icon: 'udi-it-certification'
                }
            ],
            skin: 'skin6'
        },
        {
            name: 'Office Productivity',
            icon: 'udi-office-productivity',
            sub: [
                {
                    name: 'Web development',
                    icon: 'udi-web-development'
                },
                {
                    name: 'Web development',
                    icon: 'udi-web-development'
                },
            ],
            skin: 'skin5'
        },
        {
            name: 'Personal Development',
            icon: 'udi-personal-development',
            sub: [
                {
                    name: 'Finance',
                    icon: 'udi-finance'
                },
                {
                    name: 'Finance',
                    icon: 'udi-finance'
                }
            ],
            skin: 'skin2'
        },
        {
            name: 'Design',
            icon: 'udi-design',
            sub: [
                {
                    name: 'IT Certification',
                    icon: 'udi-it-certification'
                },
                {
                    name: 'IT Certification',
                    icon: 'udi-it-certification'
                }
            ],
            skin: 'skin3'
        },
        {
            name: 'Marketing',
            icon: 'udi-marketing',
            sub: [
                {
                    name: 'Finance',
                    icon: 'udi-finance'
                },
                {
                    name: 'Finance',
                    icon: 'udi-finance'
                }
            ],
            skin: 'skin5'
        },
        {
            name: 'Design',
            icon: 'udi-design',
            sub: [
                {
                    name: 'IT Certification',
                    icon: 'udi-it-certification'
                },
                {
                    name: 'IT Certification',
                    icon: 'udi-it-certification'
                }
            ],
            skin: 'skin3'
        },
        {
            name: 'Marketing',
            icon: 'udi-marketing',
            sub: [
                {
                    name: 'Finance',
                    icon: 'udi-finance'
                },
                {
                    name: 'Finance',
                    icon: 'udi-finance'
                }
            ],
            skin: 'skin5'
        },
        {
            name: 'Design',
            icon: 'udi-design',
            sub: [
                {
                    name: 'IT Certification',
                    icon: 'udi-it-certification'
                },
                {
                    name: 'IT Certification',
                    icon: 'udi-it-certification'
                }
            ],
            skin: 'skin3'
        },
        {
            name: 'Lifestyle',
            icon: 'udi-lifestyle',
            sub: [
                {
                    name: 'Finance',
                    icon: 'udi-finance'
                },
                {
                    name: 'Finance',
                    icon: 'udi-finance'
                }
            ],
            skin: 'skin2'
        },
        {
            name: 'Photography',
            icon: 'udi-photography',
            sub: [
                {
                    name: 'IT Certification',
                    icon: 'udi-it-certification'
                },
                {
                    name: 'IT Certification',
                    icon: 'udi-it-certification'
                }
            ],
            skin: 'skin3'
        },
        {
            name: 'Health & Fitness',
            icon: 'udi-health-and-fitness',
            sub: [
                {
                    name: 'Finance',
                    icon: 'udi-finance'
                },
                {
                    name: 'Finance',
                    icon: 'udi-finance'
                }
            ],
            skin: 'skin2'
        },
        {
            name: 'Teacher Training',
            icon: 'udi-teacher-training',
            sub: [
                {
                    name: 'IT Certification',
                    icon: 'udi-it-certification'
                },
                {
                    name: 'IT Certification',
                    icon: 'udi-it-certification'
                }
            ],
            skin: 'skin4'
        },
        {
            name: 'Music',
            icon: 'udi-music',
            sub: [
                {
                    name: 'Finance',
                    icon: 'udi-finance'
                },
                {
                    name: 'Finance',
                    icon: 'udi-finance'
                }
            ],
            skin: 'skin3'
        },
        {
            name: 'Academics',
            icon: 'udi-academics',
            sub: [
                {
                    name: 'IT Certification',
                    icon: 'udi-it-certification'
                },
                {
                    name: 'IT Certification',
                    icon: 'udi-it-certification'
                }
            ],
            skin: 'skin4'
        },
        {
            name: 'Language',
            icon: 'udi-language',
            sub: [
                {
                    name: 'Finance',
                    icon: 'udi-finance'
                },
                {
                    name: 'Finance',
                    icon: 'udi-finance'
                }
            ],
            skin: 'skin4'
        },
        {
            name: 'Test Prep',
            icon: 'udi-test-prep',
            sub: [
                {
                    name: 'IT Certification',
                    icon: 'udi-it-certification'
                },
                {
                    name: 'IT Certification',
                    icon: 'udi-it-certification'
                }
            ],
            skin: 'skin4'
        }
    ]
};

