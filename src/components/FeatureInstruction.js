/**
 * Created by Lotus on 8/12/17.
 */
import React, {Component} from 'react'
import Flickity from 'react-flickity-component'

import './../stylesheets/lib/flickity.css'

const flickityOptions = {
    initialIndex: 1,
    cellAlign: 'center',
    wrapAround: true,
    prevNextButtons: false
};

export default class FeatureInstruction extends Component{
    constructor() {
        super()
    }

    render() {

        const {
            item
        } = this.props;

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
                        item.map((o, i) =>{
                            return(
                                <div key={i} className="container-feature-instruction slick-carousel slick-slide slick-current slick-center" tabIndex="-1" role="option" aria-hidden="false">
                                    <div className="editorial-instructor-unit--c_editorial-unit--hwtt0 editorial-instructor-unit--c_editorial-unit--bg--22q83" style={{backgroundColor: 'rgb(255, 255, 255)'}}>
                                        <img alt="" src={o.img} className="editorial-instructor-unit--c_editorial-unit__bg-image-force--4B_R4"/>
                                        <div className="editorial-instructor-unit--c_editorial-unit__inner--3_uHk">
                                            <div className="editorial-instructor-unit--c_editorial-unit__left--2dDd5">
                                                <a href="/user/robpercival/" className="editorial-instructor-unit--c_editorial-unit__click-area--1P_OQ" tabIndex="0">
                                                    <div className="editorial-instructor-unit--c_editorial-unit__label--goMVQ" style={{color: 'rgb(255, 255, 255)'}}>
                                                    </div>
                                                    <div className="editorial-instructor-unit--c_editorial-unit__title--3e1Au" style={{color: 'rgb(255, 255, 255)'}}>
                                                        <h1 data-purpose="editorial-instructor-unit-name">{o.name}</h1>
                                                    </div>
                                                    <p className="editorial-instructor-unit--c_editorial-unit__text-block--3wstc" style={{color: 'rgb(255, 255, 255)'}}>
                                                        {o.des1}
                                                    </p>
                                                    <div className="editorial-instructor-unit--c_editorial-unit__student-count--2B7eK">
                                                <span className="editorial-instructor-unit--c_editorial-unit__secondary-info--raUln" style={{color: 'rgb(255, 255, 255)'}}>
                                                    {o.des2}
                                                </span>
                                                    </div>
                                                </a>
                                                <div className="editorial-instructor-unit--c_editorial-unit__footer--35Zi2" style={{color: 'rgb(255, 255, 255)'}}>
                                            <span className="editorial-instructor-unit--c_editorial-unit__featured-label--3fZCy">
                                                {o.des3}
                                            </span>
                                                    <a href="/the-complete-web-developer-course-2/" className="editorial-instructor-unit--c_editorial-unit__instructor-cta--3Jx7q" tabIndex="0">
                                                        <img alt="" src={o.imgDes4}/>
                                                        <span>{o.des4}</span>
                                                    </a>
                                                    <a href="/complete-ios-10-developer-course/" className="editorial-instructor-unit--c_editorial-unit__instructor-cta--3Jx7q" tabIndex="0">
                                                        <img alt="" src={o.imgDes5}/>
                                                        <span>{o.des5}</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <span style={{fontSize: 0}}/>
                                    </div>
                                </div>
                            )
                        })
                    }
                </Flickity>
            </div>
        )
    }
}

FeatureInstruction.defaultProps = {
    item: [
        {
            img: 'https://udemy-images.udemy.com/editorial_instructor_unit_background_image/1163x365/18292_0a8e_6.jpg',
            name: 'Rob Percival',
            des1: 'A math teacher turned web developer, Rob continues his passion for education with over 15 top-rated courses.',
            des2: '355,832 Students in 22 Courses',
            des3: 'Popular Courses',
            des4: 'The Complete Web Developer Course 2.0',
            imgDes4: 'https://udemy-images.udemy.com/course/50x50/764164_de03_2.jpg',
            des5: 'The Complete iOS 10 &amp; Swift 3 Developer Course',
            imgDes5: 'https://udemy-images.udemy.com/course/50x50/895786_7b4b_2.jpg',
        },
        {
            img: 'https://udemy-images.udemy.com/editorial_instructor_unit_background_image/1163x365/18288_850c_2.jpg',
            name: 'Rob Percival',
            des1: 'A math teacher turned web developer, Rob continues his passion for education with over 15 top-rated courses.',
            des2: '355,832 Students in 22 Courses',
            des3: 'Popular Courses',
            des4: 'The Complete Web Developer Course 2.0',
            imgDes4: 'https://udemy-images.udemy.com/course/50x50/587486_d25f_3.jpg',
            des5: 'The Complete iOS 10 &amp; Swift 3 Developer Course',
            imgDes5: 'https://udemy-images.udemy.com/course/50x50/830160_e77f_3.jpg',
        },
        {
            img: 'https://udemy-images.udemy.com/editorial_instructor_unit_background_image/1163x365/18286_4f4b_3.jpg',
            name: 'Rob Percival',
            des1: 'A math teacher turned web developer, Rob continues his passion for education with over 15 top-rated courses.',
            des2: '355,832 Students in 22 Courses',
            des3: 'Popular Courses',
            des4: 'The Complete Web Developer Course 2.0',
            imgDes4: 'https://udemy-images.udemy.com/course/50x50/764164_de03_2.jpg',
            des5: 'The Complete iOS 10 &amp; Swift 3 Developer Course',
            imgDes5: 'https://udemy-images.udemy.com/course/50x50/895786_7b4b_2.jpg',
        },
        {
            img: 'https://udemy-images.udemy.com/editorial_instructor_unit_background_image/1163x365/18290_aa9d_2.jpg',
            name: 'Rob Percival',
            des1: 'A math teacher turned web developer, Rob continues his passion for education with over 15 top-rated courses.',
            des2: '355,832 Students in 22 Courses',
            des3: 'Popular Courses',
            des4: 'The Complete Web Developer Course 2.0',
            imgDes4: 'https://udemy-images.udemy.com/course/50x50/587486_d25f_3.jpg',
            des5: 'The Complete iOS 10 &amp; Swift 3 Developer Course',
            imgDes5: 'https://udemy-images.udemy.com/course/50x50/830160_e77f_3.jpg',
        },
        {
            img: 'https://udemy-images.udemy.com/editorial_instructor_unit_background_image/1163x365/18282_bdef_2.jpg',
            name: 'Rob Percival',
            des1: 'A math teacher turned web developer, Rob continues his passion for education with over 15 top-rated courses.',
            des2: '355,832 Students in 22 Courses',
            des3: 'Popular Courses',
            des4: 'The Complete Web Developer Course 2.0',
            imgDes4: 'https://udemy-images.udemy.com/course/50x50/587486_d25f_3.jpg',
            des5: 'The Complete iOS 10 &amp; Swift 3 Developer Course',
            imgDes5: 'https://udemy-images.udemy.com/course/50x50/830160_e77f_3.jpg',
        },
    ]
};