/**
 * Created by Lotus on 8/12/17.
 */
import React, {Component} from 'react'
import Flickity from 'react-flickity-component'

import './../stylesheets/lib/flickity.css'

const flickityOptions = {
    initialIndex: 0,
    cellAlign: 'left',
    imagesLoaded: true,
    lazyLoad: true,
    pageDots: false,
    contain: true,
    groupCells: true,
    friction: 0.2,
    arrowShape: {
        x0: 10,
        x1: 60, y1: 50,
        x2: 75, y2: 35,
        x3: 40
    }
};

export default class ItemAchieve extends Component{
    constructor() {
        super()
    }

    render() {
        return(
            <div className="container-item-achieve" >
                <div className="fxw db-xs pos-r c_discovery-units__header ">
                    <div className="c_discovery-units__title-container">
                        <h2 className="c_discovery-units__title">
                            Meet Our Featured Instructors
                        </h2>
                    </div>
                </div>
                <Flickity
                    className={'carousel'}
                    elementType={'div'}
                    options={flickityOptions}
                    disableImagesLoaded={false}
                >
                    {
                        
                    }
                </Flickity>
            </div>
        )
    }
}