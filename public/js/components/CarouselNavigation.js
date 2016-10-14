/**
 * Created by Shin on 12/10/2016.
 */
import React from 'react';
import CarouselNavigationCosts from '../constants/CarouselNavigationConsts';

export default class CarouselNavigation extends React.Component {



    constructor() {
        super();
        this.state = {
            currentIndex: 0
        };
    }

    onNavClick(index, e) {
        e.preventDefault();
        this.props.onIndexNavigationClick(index);
        this.setState({
            currentIndex: index
        });
    }

    onNavLeftClick(e) {

        if(this.state.currentIndex > 0) {
            let prevIndex = this.state.currentIndex - 1;
            this.props.onIndexNavigationClick(prevIndex);
            this.setState({
                currentIndex: prevIndex
            });
        }
    }

    onNavRightClick(e) {
        if(this.state.currentIndex < CarouselNavigationCosts.MAX_NAVIGATION + 1) {
            let nextIndex = this.state.currentIndex + 1;

            this.props.onIndexNavigationClick(nextIndex);
            this.setState({
                currentIndex: nextIndex
            });
        }
    }


    render() {
        const {subtopics, incomingIndex} = this.props;
        const {currentIndex} = this.state;


        const carouselNavigation = subtopics.map( (subtopic, index) => {
            var currentIndex = currentIndex !== incomingIndex ? incomingIndex : currentIndex;
            let navClass = '';

            //Associate correct class according to current index state
            if(index < currentIndex) {
                navClass = 'below-current-index';
            } else if (index === currentIndex) {
                navClass = 'current-index';
            } else {
                navClass = 'after-current-index';
            }

            return (
                <li key={'nav-'+index} class={navClass} onClick={this.onNavClick.bind(this, index)}>
                    <div class="carousel-navigation-line"></div>
                    <span>{subtopic.index}</span>
                </li>
            );

        });



        return (
            <div>
                <span class="carousel-navigation-left" onClick={this.onNavLeftClick.bind(this)}><i class="fa fa-angle-left" aria-hidden="true"></i></span>
                <div class="carousel-navigation-items"><div>{carouselNavigation}</div></div>
                <span class="carousel-navigation-right" onClick={this.onNavRightClick.bind(this)}><i class="fa fa-angle-right" aria-hidden="true"></i></span>
            </div>
        );

    }

}