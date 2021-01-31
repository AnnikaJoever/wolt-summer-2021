import React from 'react';
import { Blurhash } from "react-blurhash";
import { Section } from '../types';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const RestaurantCard: React.FC<Section> = (props) => {

    const slides = window.matchMedia('(max-width: 790px)').matches ? 2 : 3;

    return (
        <>
            <CarouselProvider
                naturalSlideWidth={160}
                naturalSlideHeight={130}
                totalSlides={props.restaurants.length}
                visibleSlides={slides}
                infinite={true}
            >
                <ButtonBack>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="nav_button">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                    </svg>
                </ButtonBack>
                <ButtonNext>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="nav_button">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                </ButtonNext>
                <Slider>
                    { props.restaurants.map((item, index) => (
                        <Slide index={ index } key={ item.name } >
                            <div className="list_item">
                                <div className="restaurant_card">
                                    <div className="card_image">
                                        <Blurhash
                                            className="blurhash"
                                            hash={ item.blurhash }
                                            width={ '100% '}
                                            height={ '56.38889%' }
                                            punch={1}
                                        />
                                        { item.online ? '' : <div className="offline">Suljettu</div>}
                                    </div>
                                    <div className="card_info_container">
                                        <div className="card_title">
                                            <div className="card_header">
                                                { item.name }
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </div>
                        </Slide>
                    )) }
                </Slider>
            </CarouselProvider>
        </>
    )
}

export default RestaurantCard;