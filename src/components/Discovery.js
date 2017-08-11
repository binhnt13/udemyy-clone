/**
 * Created by Lotus on 8/12/17.
 */
import React, {Component} from 'react'
import {Channel} from './../components'

export default class Discovery extends Component{
    constructor() {
        super()
    }

    render() {
        return(
            <div className="container-discovery">
                <div className="fxw db-xs pos-r c_discovery-units__header dn-force">
                    <div className="c_discovery-units__title-container">
                        <h2 className="c_discovery-units__title">
                            Top Courses in
                            <i>"Development"</i>
                        </h2>
                    </div>
                </div>
            </div>
        )
    }
}