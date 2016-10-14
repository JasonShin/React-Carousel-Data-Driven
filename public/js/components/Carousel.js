/**
 * Created by Shin on 12/10/2016.
 */
import React from 'react';
import Slider from 'react-slick';
import {observer} from 'mobx-react';
import SlickConsts from '../constants/SlickConsts';
import Slide from './Slide';
import CarouselNavigation from './CarouselNavigation';

@observer
export default class Carousel extends React.Component {

    constructor() {
        super();
        this.state ={
            carouselIndex: 0
        }
    }

    componentWillMount() {
        SlickConsts['afterChange'] = this.onSliderSwipe.bind(this);
    }

    onSliderSwipe(index) {
        this.setState({
            carouselIndex: index
        });
    }

    onIndexNavigationClick(index) {
        this.refs.slider.slickGoTo(index);
    }

    getSlideItems(subtopics) {
        return subtopics.map(subtopic => {
            return (<div key={subtopic.index}><Slide subtopic={subtopic} /></div>)
        });
    }

    render() {
        const {carouselIndex} = this.state;
        let subtopics = this.props.store.subtopics;
        const slides = this.getSlideItems(subtopics);
        const carouselNavigation = <CarouselNavigation subtopics={subtopics} onIndexNavigationClick={this.onIndexNavigationClick.bind(this)} incomingIndex={carouselIndex} />;
        const settings = SlickConsts;

        return (
            <div class="carousel">

                <div class="carousel-navigation">
                    {carouselNavigation}
                </div>

                <Slider {...settings} ref="slider">
                    {slides}
                </Slider>
            </div>
        );

    }
}