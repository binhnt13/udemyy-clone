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

        const {
            discovery,
            isOtherTop,
            otherTop
        } = this.props;

        console.log(Object.keys(discovery));

        return(
            <div className="container-discovery discovery-unit-container fx">
                {
                    isOtherTop ?
                        Object.keys(otherTop).map((name, i) =>{
                            return (
                                <Channel key={i} name={name} info={otherTop[name]}/>
                            )
                        })
                        :
                        Object.keys(discovery).map((name, i) =>{
                            return (
                                <Channel key={i} name={name} info={discovery[name]}/>
                            )
                        })
                }
            </div>
        )
    }
}

Discovery.defaultProps = {
    discovery: {
        "Development": [
            {
                bestSell: true,
                img: 'https://udemy-images.udemy.com/course/240x135/625204_436a_2.jpg',
                title: 'The Web Developer Bootcamp',
                insTitle: 'Colt Steele',
                starRating: '4.7',
                reviewCount: '32,090',
                originalPrice: '$200',
                currentPrice: '$15'
            },
            {
                bestSell: true,
                img: 'https://udemy-images.udemy.com/course/240x135/567828_67d0.jpg',
                title: 'The Web Developer Bootcamp',
                insTitle: 'Colt Steele',
                starRating: '4.7',
                reviewCount: '32,090',
                originalPrice: '$200',
                currentPrice: '$15'
            },
            {
                bestSell: true,
                img: 'https://udemy-images.udemy.com/course/240x135/533682_c10c_3.jpg',
                title: 'The Web Developer Bootcamp',
                insTitle: 'Colt Steele',
                starRating: '4.7',
                reviewCount: '32,090',
                originalPrice: '$200',
                currentPrice: '$15'
            },
            {
                bestSell: true,
                img: 'https://udemy-images.udemy.com/course/240x135/764164_de03_2.jpg',
                title: 'The Web Developer Bootcamp',
                insTitle: 'Colt Steele',
                starRating: '4.7',
                reviewCount: '32,090',
                originalPrice: '$200',
                currentPrice: '$15'
            },
            {
                bestSell: true,
                img: 'https://udemy-images.udemy.com/course/240x135/756150_c033_2.jpg',
                title: 'The Web Developer Bootcamp',
                insTitle: 'Colt Steele',
                starRating: '4.7',
                reviewCount: '32,090',
                originalPrice: '$200',
                currentPrice: '$15'
            },
            {
                bestSell: true,
                img: 'https://udemy-images.udemy.com/course/240x135/657932_c7e0.jpg',
                title: 'The Web Developer Bootcamp',
                insTitle: 'Colt Steele',
                starRating: '4.7',
                reviewCount: '32,090',
                originalPrice: '$200',
                currentPrice: '$15'
            },
            {
                bestSell: true,
                img: 'https://udemy-images.udemy.com/course/240x135/625204_436a_2.jpg',
                title: 'The Web Developer Bootcamp',
                insTitle: 'Colt Steele',
                starRating: '4.7',
                reviewCount: '32,090',
                originalPrice: '$200',
                currentPrice: '$15'
            },
            {
                bestSell: true,
                img: 'https://udemy-images.udemy.com/course/240x135/567828_67d0.jpg',
                title: 'The Web Developer Bootcamp',
                insTitle: 'Colt Steele',
                starRating: '4.7',
                reviewCount: '32,090',
                originalPrice: '$200',
                currentPrice: '$15'
            },
            {
                bestSell: true,
                img: 'https://udemy-images.udemy.com/course/240x135/533682_c10c_3.jpg',
                title: 'The Web Developer Bootcamp',
                insTitle: 'Colt Steele',
                starRating: '4.7',
                reviewCount: '32,090',
                originalPrice: '$200',
                currentPrice: '$15'
            },
            {
                bestSell: true,
                img: 'https://udemy-images.udemy.com/course/240x135/764164_de03_2.jpg',
                title: 'The Web Developer Bootcamp',
                insTitle: 'Colt Steele',
                starRating: '4.7',
                reviewCount: '32,090',
                originalPrice: '$200',
                currentPrice: '$15'
            },
            {
                bestSell: true,
                img: 'https://udemy-images.udemy.com/course/240x135/756150_c033_2.jpg',
                title: 'The Web Developer Bootcamp',
                insTitle: 'Colt Steele',
                starRating: '4.7',
                reviewCount: '32,090',
                originalPrice: '$200',
                currentPrice: '$15'
            },
            {
                bestSell: true,
                img: 'https://udemy-images.udemy.com/course/240x135/657932_c7e0.jpg',
                title: 'The Web Developer Bootcamp',
                insTitle: 'Colt Steele',
                starRating: '4.7',
                reviewCount: '32,090',
                originalPrice: '$200',
                currentPrice: '$15'
            },
        ],
        "Business": [
            {
                bestSell: true,
                img: 'https://udemy-images.udemy.com/course/240x135/950390_270f_3.jpg',
                title: 'Machine Learning A-Z™: Hands-On Python & R In Data Science',
                insTitle: 'Kirill Eremenko, Hadelin de Ponteves, SuperDataScience Team',
                starRating: '4.7',
                reviewCount: '32,090',
                originalPrice: '$200',
                currentPrice: '$15'
            },
            {
                bestSell: true,
                img: 'https://udemy-images.udemy.com/course/240x135/637930_9a22_15.jpg',
                title: 'An Entire MBA in 1 Course:Award Winning Business School Prof',
                insTitle: 'Chris Haroun',
                starRating: '4.7',
                reviewCount: '32,090',
                originalPrice: '$200',
                currentPrice: '$15'
            },
            {
                bestSell: true,
                img: 'https://udemy-images.udemy.com/course/240x135/903744_8eb2.jpg',
                title: 'Python for Data Science and Machine Learning Bootcamp',
                insTitle: 'Jose Portilla',
                starRating: '4.7',
                reviewCount: '32,090',
                originalPrice: '$200',
                currentPrice: '$15'
            },
            {
                bestSell: false,
                img: 'https://udemy-images.udemy.com/course/240x135/1151632_de9b.jpg',
                title: 'Deep Learning A-Z™: Hands-On Artificial Neural Networks',
                insTitle: 'Kirill Eremenko, Hadelin de Ponteves, SuperDataScience Team',
                starRating: '4.7',
                reviewCount: '32,090',
                originalPrice: '$200',
                currentPrice: '$15'
            },
            {
                bestSell: true,
                img: 'https://udemy-images.udemy.com/course/240x135/648826_f0e5_2.jpg',
                title: 'The Complete Financial Analyst Course 2017',
                insTitle: '365 Careers',
                starRating: '4.7',
                reviewCount: '32,090',
                originalPrice: '$200',
                currentPrice: '$15'
            },
            {
                bestSell: true,
                img: 'https://udemy-images.udemy.com/course/240x135/762616_7693_3.jpg',
                title: 'The Complete SQL Bootcamp',
                insTitle: 'Jose Portilla',
                starRating: '4.7',
                reviewCount: '32,090',
                originalPrice: '$200',
                currentPrice: '$15'
            },
            {
                bestSell: true,
                img: 'https://udemy-images.udemy.com/course/240x135/950390_270f_3.jpg',
                title: 'Machine Learning A-Z™: Hands-On Python & R In Data Science',
                insTitle: 'Kirill Eremenko, Hadelin de Ponteves, SuperDataScience Team',
                starRating: '4.7',
                reviewCount: '32,090',
                originalPrice: '$200',
                currentPrice: '$15'
            },
            {
                bestSell: true,
                img: 'https://udemy-images.udemy.com/course/240x135/637930_9a22_15.jpg',
                title: 'An Entire MBA in 1 Course:Award Winning Business School Prof',
                insTitle: 'Chris Haroun',
                starRating: '4.7',
                reviewCount: '32,090',
                originalPrice: '$200',
                currentPrice: '$15'
            },
            {
                bestSell: true,
                img: 'https://udemy-images.udemy.com/course/240x135/903744_8eb2.jpg',
                title: 'Python for Data Science and Machine Learning Bootcamp',
                insTitle: 'Jose Portilla',
                starRating: '4.7',
                reviewCount: '32,090',
                originalPrice: '$200',
                currentPrice: '$15'
            },
            {
                bestSell: true,
                img: 'https://udemy-images.udemy.com/course/240x135/1151632_de9b.jpg',
                title: 'Deep Learning A-Z™: Hands-On Artificial Neural Networks',
                insTitle: 'Kirill Eremenko, Hadelin de Ponteves, SuperDataScience Team',
                starRating: '4.7',
                reviewCount: '32,090',
                originalPrice: '$200',
                currentPrice: '$15'
            },
            {
                bestSell: true,
                img: 'https://udemy-images.udemy.com/course/240x135/648826_f0e5_2.jpg',
                title: 'The Complete Financial Analyst Course 2017',
                insTitle: '365 Careers',
                starRating: '4.7',
                reviewCount: '32,090',
                originalPrice: '$200',
                currentPrice: '$15'
            },
            {
                bestSell: true,
                img: 'https://udemy-images.udemy.com/course/240x135/762616_7693_3.jpg',
                title: 'The Complete SQL Bootcamp',
                insTitle: 'Jose Portilla',
                starRating: '4.7',
                reviewCount: '32,090',
                originalPrice: '$200',
                currentPrice: '$15'
            },
        ],
        "IT&Software": [
            {
                bestSell: true,
                img: 'https://udemy-images.udemy.com/course/240x135/437490_c76a_4.jpg',
                title: 'Machine Learning A-Z™: Hands-On Python & R In Data Science',
                insTitle: 'Kirill Eremenko, Hadelin de Ponteves, SuperDataScience Team',
                starRating: '4.7',
                reviewCount: '32,090',
                originalPrice: '$200',
                currentPrice: '$15'
            },
            {
                bestSell: true,
                img: 'https://udemy-images.udemy.com/course/240x135/614772_233b_9.jpg',
                title: 'An Entire MBA in 1 Course:Award Winning Business School Prof',
                insTitle: 'Chris Haroun',
                starRating: '4.7',
                reviewCount: '32,090',
                originalPrice: '$200',
                currentPrice: '$15'
            },
            {
                bestSell: true,
                img: 'https://udemy-images.udemy.com/course/240x135/857010_8239_2.jpg',
                title: 'Python for Data Science and Machine Learning Bootcamp',
                insTitle: 'Jose Portilla',
                starRating: '4.7',
                reviewCount: '32,090',
                originalPrice: '$200',
                currentPrice: '$15'
            },
            {
                bestSell: true,
                img: 'https://udemy-images.udemy.com/course/240x135/362328_91f3_10.jpg',
                title: 'Deep Learning A-Z™: Hands-On Artificial Neural Networks',
                insTitle: 'Kirill Eremenko, Hadelin de Ponteves, SuperDataScience Team',
                starRating: '4.7',
                reviewCount: '32,090',
                originalPrice: '$200',
                currentPrice: '$15'
            },
            {
                bestSell: false,
                img: 'https://udemy-images.udemy.com/course/240x135/875974_b66d_3.jpg',
                title: 'The Complete Financial Analyst Course 2017',
                insTitle: '365 Careers',
                starRating: '4.7',
                reviewCount: '32,090',
                originalPrice: '$200',
                currentPrice: '$15'
            },
            {
                bestSell: false,
                img: 'https://udemy-images.udemy.com/course/240x135/437490_c76a_4.jpg',
                title: 'Machine Learning A-Z™: Hands-On Python & R In Data Science',
                insTitle: 'Kirill Eremenko, Hadelin de Ponteves, SuperDataScience Team',
                starRating: '4.7',
                reviewCount: '32,090',
                originalPrice: '$200',
                currentPrice: '$15'
            },
            {
                bestSell: true,
                img: 'https://udemy-images.udemy.com/course/240x135/614772_233b_9.jpg',
                title: 'An Entire MBA in 1 Course:Award Winning Business School Prof',
                insTitle: 'Chris Haroun',
                starRating: '4.7',
                reviewCount: '32,090',
                originalPrice: '$200',
                currentPrice: '$15'
            },
            {
                bestSell: true,
                img: 'https://udemy-images.udemy.com/course/240x135/857010_8239_2.jpg',
                title: 'Python for Data Science and Machine Learning Bootcamp',
                insTitle: 'Jose Portilla',
                starRating: '4.7',
                reviewCount: '32,090',
                originalPrice: '$200',
                currentPrice: '$15'
            },
            {
                bestSell: true,
                img: 'https://udemy-images.udemy.com/course/240x135/362328_91f3_10.jpg',
                title: 'Deep Learning A-Z™: Hands-On Artificial Neural Networks',
                insTitle: 'Kirill Eremenko, Hadelin de Ponteves, SuperDataScience Team',
                starRating: '4.7',
                reviewCount: '32,090',
                originalPrice: '$200',
                currentPrice: '$15'
            },
            {
                bestSell: true,
                img: 'https://udemy-images.udemy.com/course/240x135/875974_b66d_3.jpg',
                title: 'The Complete Financial Analyst Course 2017',
                insTitle: '365 Careers',
                starRating: '4.7',
                reviewCount: '32,090',
                originalPrice: '$200',
                currentPrice: '$15'
            },

        ],
        "Personal Development": [
            {
                bestSell: true,
                img: 'https://udemy-images.udemy.com/course/240x135/591930_e9a5_2.jpg',
                title: 'Machine Learning A-Z™: Hands-On Python & R In Data Science',
                insTitle: 'Kirill Eremenko, Hadelin de Ponteves, SuperDataScience Team',
                starRating: '4.7',
                reviewCount: '32,090',
                originalPrice: '$200',
                currentPrice: '$15'
            },
            {
                bestSell: true,
                img: 'https://udemy-images.udemy.com/course/240x135/774972_4936_3.jpg',
                title: 'An Entire MBA in 1 Course:Award Winning Business School Prof',
                insTitle: 'Chris Haroun',
                starRating: '4.7',
                reviewCount: '32,090',
                originalPrice: '$200',
                currentPrice: '$15'
            },
            {
                bestSell: true,
                img: 'https://udemy-images.udemy.com/course/240x135/1080376_3647_3.jpg',
                title: 'Python for Data Science and Machine Learning Bootcamp',
                insTitle: 'Jose Portilla',
                starRating: '4.7',
                reviewCount: '32,090',
                originalPrice: '$200',
                currentPrice: '$15'
            },
            {
                bestSell: true,
                img: 'https://udemy-images.udemy.com/course/240x135/904526_9e71_5.jpg',
                title: 'Deep Learning A-Z™: Hands-On Artificial Neural Networks',
                insTitle: 'Kirill Eremenko, Hadelin de Ponteves, SuperDataScience Team',
                starRating: '4.7',
                reviewCount: '32,090',
                originalPrice: '$200',
                currentPrice: '$15'
            },
            {
                bestSell: false,
                img: 'https://udemy-images.udemy.com/course/240x135/59527_ac27_15.jpg',
                title: 'The Complete Financial Analyst Course 2017',
                insTitle: '365 Careers',
                starRating: '4.7',
                reviewCount: '32,090',
                originalPrice: '$200',
                currentPrice: '$15'
            },
            {
                bestSell: false,
                img: 'https://udemy-images.udemy.com/course/240x135/591930_e9a5_2.jpg',
                title: 'Machine Learning A-Z™: Hands-On Python & R In Data Science',
                insTitle: 'Kirill Eremenko, Hadelin de Ponteves, SuperDataScience Team',
                starRating: '4.7',
                reviewCount: '32,090',
                originalPrice: '$200',
                currentPrice: '$15'
            },
            {
                bestSell: false,
                img: 'https://udemy-images.udemy.com/course/240x135/774972_4936_3.jpg',
                title: 'An Entire MBA in 1 Course:Award Winning Business School Prof',
                insTitle: 'Chris Haroun',
                starRating: '4.7',
                reviewCount: '32,090',
                originalPrice: '$200',
                currentPrice: '$15'
            },
            {
                bestSell: false,
                img: 'https://udemy-images.udemy.com/course/240x135/1080376_3647_3.jpg',
                title: 'Python for Data Science and Machine Learning Bootcamp',
                insTitle: 'Jose Portilla',
                starRating: '4.7',
                reviewCount: '32,090',
                originalPrice: '$200',
                currentPrice: '$15'
            },
            {
                bestSell: false,
                img: 'https://udemy-images.udemy.com/course/240x135/904526_9e71_5.jpg',
                title: 'Deep Learning A-Z™: Hands-On Artificial Neural Networks',
                insTitle: 'Kirill Eremenko, Hadelin de Ponteves, SuperDataScience Team',
                starRating: '4.7',
                reviewCount: '32,090',
                originalPrice: '$200',
                currentPrice: '$15'
            },
            {
                bestSell: false,
                img: 'https://udemy-images.udemy.com/course/240x135/59527_ac27_15.jpg',
                title: 'The Complete Financial Analyst Course 2017',
                insTitle: '365 Careers',
                starRating: '4.7',
                reviewCount: '32,090',
                originalPrice: '$200',
                currentPrice: '$15'
            },

        ]
    },
    otherTop: {
        "Development": [
            {
                bestSell: true,
                img: 'https://udemy-images.udemy.com/course/240x135/625204_436a_2.jpg',
                title: 'The Web Developer Bootcamp',
                insTitle: 'Colt Steele',
                starRating: '4.7',
                reviewCount: '32,090',
                originalPrice: '$200',
                currentPrice: '$15'
            },
            {
                bestSell: true,
                img: 'https://udemy-images.udemy.com/course/240x135/567828_67d0.jpg',
                title: 'The Web Developer Bootcamp',
                insTitle: 'Colt Steele',
                starRating: '4.7',
                reviewCount: '32,090',
                originalPrice: '$200',
                currentPrice: '$15'
            },
            {
                bestSell: true,
                img: 'https://udemy-images.udemy.com/course/240x135/533682_c10c_3.jpg',
                title: 'The Web Developer Bootcamp',
                insTitle: 'Colt Steele',
                starRating: '4.7',
                reviewCount: '32,090',
                originalPrice: '$200',
                currentPrice: '$15'
            },
            {
                bestSell: true,
                img: 'https://udemy-images.udemy.com/course/240x135/764164_de03_2.jpg',
                title: 'The Web Developer Bootcamp',
                insTitle: 'Colt Steele',
                starRating: '4.7',
                reviewCount: '32,090',
                originalPrice: '$200',
                currentPrice: '$15'
            },
            {
                bestSell: true,
                img: 'https://udemy-images.udemy.com/course/240x135/756150_c033_2.jpg',
                title: 'The Web Developer Bootcamp',
                insTitle: 'Colt Steele',
                starRating: '4.7',
                reviewCount: '32,090',
                originalPrice: '$200',
                currentPrice: '$15'
            },
            {
                bestSell: true,
                img: 'https://udemy-images.udemy.com/course/240x135/657932_c7e0.jpg',
                title: 'The Web Developer Bootcamp',
                insTitle: 'Colt Steele',
                starRating: '4.7',
                reviewCount: '32,090',
                originalPrice: '$200',
                currentPrice: '$15'
            },
            {
                bestSell: true,
                img: 'https://udemy-images.udemy.com/course/240x135/625204_436a_2.jpg',
                title: 'The Web Developer Bootcamp',
                insTitle: 'Colt Steele',
                starRating: '4.7',
                reviewCount: '32,090',
                originalPrice: '$200',
                currentPrice: '$15'
            },
            {
                bestSell: true,
                img: 'https://udemy-images.udemy.com/course/240x135/567828_67d0.jpg',
                title: 'The Web Developer Bootcamp',
                insTitle: 'Colt Steele',
                starRating: '4.7',
                reviewCount: '32,090',
                originalPrice: '$200',
                currentPrice: '$15'
            },
            {
                bestSell: true,
                img: 'https://udemy-images.udemy.com/course/240x135/533682_c10c_3.jpg',
                title: 'The Web Developer Bootcamp',
                insTitle: 'Colt Steele',
                starRating: '4.7',
                reviewCount: '32,090',
                originalPrice: '$200',
                currentPrice: '$15'
            },
            {
                bestSell: true,
                img: 'https://udemy-images.udemy.com/course/240x135/764164_de03_2.jpg',
                title: 'The Web Developer Bootcamp',
                insTitle: 'Colt Steele',
                starRating: '4.7',
                reviewCount: '32,090',
                originalPrice: '$200',
                currentPrice: '$15'
            },
            {
                bestSell: true,
                img: 'https://udemy-images.udemy.com/course/240x135/756150_c033_2.jpg',
                title: 'The Web Developer Bootcamp',
                insTitle: 'Colt Steele',
                starRating: '4.7',
                reviewCount: '32,090',
                originalPrice: '$200',
                currentPrice: '$15'
            },
            {
                bestSell: true,
                img: 'https://udemy-images.udemy.com/course/240x135/657932_c7e0.jpg',
                title: 'The Web Developer Bootcamp',
                insTitle: 'Colt Steele',
                starRating: '4.7',
                reviewCount: '32,090',
                originalPrice: '$200',
                currentPrice: '$15'
            },
        ]
    }
};