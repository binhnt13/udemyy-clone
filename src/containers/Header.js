/**
 * Created by Lotus on 8/9/17.
 */
import React, { Component } from 'react'

import './../stylesheets/Header.scss'

export default class Header extends Component {
    constructor() {
        super()
    }

    render() {
        return(
            <div className="container-header">
                <div className="hello-bar-container" data-purpose="hello-bar-container">

                    <a href="javascript:void(0);" className="hello-bar-border" data-purpose="toggle-hello-bar" style={{display: 'none'}} />
                    <div className="hello-bar ahoy open" style={{cursor: 'auto'}}>
                        <a href="javascript:void(0);" className="udi udi-minus close" data-purpose="close-hello-bar" aria-label="Close" />
                        <div className="container">
                            <div className="tal hello-spacing-wrapper">
                                <div className="hello-titles">
                                    <span className="hello-title" data-href="" data-purpose="hello-bar-title" data-usertracker-type="hello-bar-click-title">
                                        New student discount—6 hours only!
                                    </span>
                                    <span className="hello-desc" data-href="" data-purpose="hello-bar-description" data-usertracker-type="hello-bar-click-subtitle">
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}