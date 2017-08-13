/**
 * Created by Lotus on 8/9/17.
 */
import React, { Component } from 'react'
import './../stylesheets/Homepage.css'
import Discovery from './Discovery'
import {ChannelAchieve, FeatureInstruction} from './../components'

export default class Homepage extends Component {
    constructor() {
        super()
    }

    render() {
        return(
            <div className="container-homepage">

                {/*------------ Streamer -----------*/}
                <div className="streamer streamer--base">
                    <div className="container">
                        <div className="streamer__content">
                            <div className="streamer__headline">
                                Be Able.
                            </div>
                            <div className="streamer__text">
                                From programming to photography, take in-depth online courses and meet any challenge with skill.
                            </div>
                            <div>
                                <form action="/courses/search/" className="form pos-r fxac ng-pristine ng-valid">
                                    <input type="hidden" name="ref" value="home" autoComplete="off" />
                                        <input type="hidden" name="src" value="ukw" autoComplete="off" />
                                            <div className="streamer-search input-group">
                                                <label htmlFor="search-field-home" className="sr-only">Search:</label>
                                                <input type="search" name="q" id="search-field-home"
                                                       className="form-control ng-pristine ng-untouched ng-valid ng-empty"
                                                       placeholder="What do you want to learn?" autoComplete="off"
                                                />
                                                <span className="input-group-btn">
                                                    <button className="btn btn-primary" type="submit" aria-label="Search" style={{height: '100%'}}>
                                                        <span className="udi udi-search" />
                                                    </button>
                                                </span>
                                            </div>
                                </form>
                                <div className="dropdown">
                                    <ul className="dropdown-menu" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/*--------------- New Chanel -----------------*/}
                <div className="new-channel">
                    <div className="how-udemy-works-container carousel-fullscreen-sidebar">
                        <div className="how-udemy-works" data-purpose="how-udemy-works">
                            <div className="how-udemy-works__col">
                                <img className="how-udemy-works__icon" src="https://www.udemy.com/staticx/udemy/images/v6/home/how-udemy-works/explore.svg" alt="" />
                                    <div className="how-udemy-works__text">
                                        <b>Explore</b> over 45,000 courses taught by expert instructors
                                    </div>
                            </div>
                            <div className="how-udemy-works__col">
                                <img className="how-udemy-works__icon" src="https://www.udemy.com/staticx/udemy/images/v6/home/how-udemy-works/enroll.svg" alt="" />
                                    <div className="how-udemy-works__text">
                                        <b>Enroll</b> in courses at any time, with lifetime access
                                    </div>
                            </div>
                            <div className="how-udemy-works__col">
                                <img className="how-udemy-works__icon how-udemy-works__icon--small" src="https://www.udemy.com/staticx/udemy/images/v6/home/how-udemy-works/learn.svg" alt="" />
                                    <div className="how-udemy-works__text">
                                        <b>Learn</b> at your own pace, from any device
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-fullscreen-sidebar">
                        <ui-view>
                            <div className="channels">
                                <div className="discovery-unit-container fx">
                                    <Discovery />
                                    <ChannelAchieve />
                                    <FeatureInstruction />
                                    <Discovery isOtherTop={true}/>
                                </div>
                            </div>
                        </ui-view>
                    </div>
                </div>

                {/*------------------ *** --------------------*/}
                <div className="non-student-cta">
                    <div className="non-student-cta__block">
                        <div className="non-student-cta__text">
                            <div className="non-student-cta__header">
                                <a href="/teaching/?ref=teach_home-body">Become an Instructor</a>
                            </div>
                            <div className="non-student-cta__content">
                                Teach what you love. Udemy gives you the tools to create an online course.
                            </div>
                            <div className="non-student-cta__link">
                                <a href="/teaching/?ref=teach_home-body" className="btn btn-primary">Start teaching</a>
                            </div>
                        </div>
                    </div>

                    <div className="non-student-cta__block">
                        <div className="non-student-cta__text">
                            <div className="non-student-cta__header">
                                <a href="https://business.udemy.com/?ref=ufb_home-body">Udemy for Business</a>
                            </div>
                            <div className="non-student-cta__content">
                                Get unlimited access to 2,000 of Udemy’s top courses for your team.
                            </div>
                            <div className="non-student-cta__link">
                                <a href="https://business.udemy.com/?ref=ufb_home-body" className="btn btn-primary">Get Udemy for Business</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}