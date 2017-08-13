/**
 * Created by Lotus on 8/12/17.
 */
import React, {Component} from 'react'

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
                            Achieve Your Goals
                        </h2>
                    </div>
                </div>
                <featured-collections-unit>
                    <div className="c_collection c_collection--seven">
                        <a href="/collection/expand-your-programming-knowledge/" className="c_collection__item">
                        <span className="c_collection__img-wrap">
                            <img alt="" src="https://udemy-images.udemy.com/featured_collections_item/360x220/58_01fb_3.jpg" />
                        </span>
                            <p className="c_collection__desc">Expand Your Programming Knowledge</p>
                        </a>
                        <a href="/collection/be-your-own-boss/" className="c_collection__item">
                        <span className="c_collection__img-wrap">
                            <img alt="" src="https://udemy-images.udemy.com/featured_collections_item/360x220/56_64c8_3.jpg"/>
                        </span>
                            <p className="c_collection__desc">Be Your Own Boss</p>
                        </a>
                        <a href="/collection/land-an-exciting-new-tech-job/" className="c_collection__item">
                        <span className="c_collection__img-wrap">
                            <img alt="" src="https://udemy-images.udemy.com/featured_collections_item/360x220/44_ef8c_3.jpg"/>
                        </span>
                            <p className="c_collection__desc">Land an Exciting New Tech Job</p>
                        </a>
                        <a href="/collection/indulge-your-curiosity/" className="c_collection__item" >
                        <span className="c_collection__img-wrap">
                            <img alt="" src="https://udemy-images.udemy.com/featured_collections_item/360x220/42_d546_3.jpg"/>
                        </span>
                            <p className="c_collection__desc">Indulge Your Curiosity</p>
                        </a>
                        <a href="/collection/invest-in-your-passion/" className="c_collection__item">
                        <span className="c_collection__img-wrap">
                            <img alt="" src="https://udemy-images.udemy.com/featured_collections_item/360x220/46_15bc_3.jpg"/>
                        </span>
                            <p className="c_collection__desc">Invest in Your Passion</p>
                        </a>
                        <a href="/collection/unlock-your-potential/" className="c_collection__item">
                        <span className="c_collection__img-wrap">
                            <img alt="" src="https://udemy-images.udemy.com/featured_collections_item/360x220/50_4653_3.jpg"/>
                        </span>
                            <p className="c_collection__desc">Unlock Your Potential</p>
                        </a>
                        <a href="/collection/make-analytics-work-for-you/" className="c_collection__item">
                        <span className="c_collection__img-wrap">
                            <img alt="" src="https://udemy-images.udemy.com/featured_collections_item/360x220/52_7ea5_3.jpg"/>
                        </span>
                            <p className="c_collection__desc">Make Analytics Work for You</p>
                        </a>
                    </div>
                </featured-collections-unit>
                <div className="tac">
                    <span className="udi-medium udi udi-circle-loader dn"/>
                </div>
            </div>    
        )
    }
}