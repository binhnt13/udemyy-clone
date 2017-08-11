/**
 * Created by Lotus on 8/12/17.
 */
import React, {Component} from 'react'
import {Item} from './../components'

export default class Discovery extends Component{
    constructor() {
        super()
    }

    render() {
        return(
            <div className="container-channel">
                <div className="slider-list--slider-wrapper--3jv2F">
                    <div className="slider-list--slider-top--1zrpT">
                        <div className="course-list-unit--title-container--ih3Jq">
                            <h2 className="c_discovery-units__title" data-purpose="discovery-unit-18324">
                                Top Courses in
                                <i>"Development"</i>
                            </h2>
                        </div>
                    </div>
                    <div className="slider-list--slider-container--MqkC7">
                        <button aria-label="Next items" type="button" className="slider-list--course-nav-btn--1sFHw slider-list--next--38ruk btn btn-default">
                            <span className="udi-small udi udi-chevron-right" />
                        </button>

                    </div>
                </div>
            </div>
        )
    }
}