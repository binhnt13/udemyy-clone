/**
 * Created by Lotus on 8/12/17.
 */
import React, {Component} from 'react'

export default class Item extends Component{
    constructor() {
        super()
    }

    render() {

        return(
            <div className="container-item ">
            <div className="merchandising-course-card--card--18b3i merchandising-course-card--responsive--2gbJO">
                {
                    this.props.bestSell
                    &&
                    <div className="exp_c_badge exp_bestseller-badge-course-card">
                        <span className="exp_c_badge--bestseller">
                            <span className="c_badge__inner">Bestselling</span>
                        </span>
                    </div>
                }
                <a href="/the-web-developer-bootcamp/" className="merchandising-course-card--mask--22Fbx">
                    <span className="merchandising-course-card--card__options--2qpEK">
                        <img src={this.props.img}
                             alt="The Web Developer Bootcamp" className="merchandising-course-card--card__image--3XfHl"
                        />
                    </span>
                    <span className="merchandising-course-card--card__details--2yDtK">
                        <span data-purpose="course-card-title" className="merchandising-course-card--details__name--f-IuD">
                            {this.props.title}
                        </span>
                        <div className="merchandising-course-card--card__instructor-titles--2G1cg">
                            <span className="db">{this.props.insTitle}</span>
                        </div>
                        <span aria-label="Rating: 4.7 out of 5, 1 review" className="star-rating--details__rating--3ldWC">
                            <span className="star-rating--star-rating--static--37uZx star-rating--star-rating--smaller--1eEd_">
                                <span style={{width: '93.5%'}} />
                            </span>
                            <span>
                                <span data-purpose="course-card-star-rating" className="star-rating--reviews__stats--BPxPC">
                                    {this.props.starRating}
                                    <span data-purpose="course-card-review-count" className="star-rating--reviews__count--2F4MI" >
                                        {`(${this.props.reviewCount})`}
                                    </span>
                                </span>
                            </span>
                        </span>
                        <div className="merchandising-course-card--card__pricing--2WOFo">
                            <span>
                                <span>
                                    <span className="sr-only">Discount:</span>
                                    <span className="price--list-price--1tTm9">
                                        <span className="sr-only">Original price:</span>
                                        {this.props.originalPrice}
                                    </span>
                                    <span className="price--price--3DRkq">
                                        <span className="sr-only">Current price:</span>
                                        {this.props.currentPrice}
                                    </span>
                                </span>
                            </span>
                        </div>
                    </span>
                </a>
            </div>
            </div>
        )
    }
}