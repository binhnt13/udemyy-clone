/**
 * Created by Lotus on 8/12/17.
 */
import React, {Component} from 'react'
import {Item} from './../components'
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

export default class Channel extends Component{
    constructor() {
        super();
        this.state = {
            mobile: false
        }
    }

    updateDimensions() {
        if(window.innerWidth < 768) {
            this.setState({ mobile: true });
        } else {
            this.setState({ mobile: false });
        }
    }

    componentDidMount() {
        this.updateDimensions();
        window.addEventListener("resize", this.updateDimensions.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions.bind(this));
    }

    render() {

        const {
            name,
            info
        } = this.props;

        return(
            <div className="container-channel">
                <div className="slider-list--slider-wrapper--3jv2F slider-list--slider-mask--1imJz">
                    <div className="slider-list--slider-top--1zrpT">
                        <div className="course-list-unit--title-container--ih3Jq">
                            <h2 className="c_discovery-units__title" data-purpose="discovery-unit-18324">
                                Top Courses in
                                <i style={{textTransform: 'capitalize'}}> {`"${name}"`}</i>
                            </h2>
                        </div>
                    </div>

                    {
                        this.state.mobile ?
                        info.map((o, i) =>{
                            return (
                                <Item key={i}
                                      img={o.img}
                                      bestSell={o.bestSell}
                                      title={o.title}
                                      insTitle={o.insTitle}
                                      starRating={o.starRating}
                                      reviewCount={o.reviewCount}
                                      originalPrice={o.originalPrice}
                                      currentPrice={o.currentPrice}
                                />
                            )
                        })
                        :
                        <div className="list-item">
                            <Flickity
                                className={'carousel'}
                                elementType={'div'}
                                options={flickityOptions}
                                disableImagesLoaded={false}
                            >
                            {
                                info.map((o, i) =>{
                                    return (
                                        <Item key={i}
                                              img={o.img}
                                              bestSell={o.bestSell}
                                              title={o.title}
                                              insTitle={o.insTitle}
                                              starRating={o.starRating}
                                              reviewCount={o.reviewCount}
                                              originalPrice={o.originalPrice}
                                              currentPrice={o.currentPrice}
                                        />
                                    )
                                })
                            }
                            </Flickity>
                        </div>
                    }
                </div>
            </div>
        )
    }
}