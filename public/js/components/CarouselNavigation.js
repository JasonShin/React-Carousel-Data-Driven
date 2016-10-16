import React from 'react';
import CarouselNavigationCosts from '../constants/CarouselNavigationConsts';

/**
 * Carousel navigation component that moves dynamically according to current index.
 * Animation uses CSS3
 */
export default class CarouselNavigation extends React.Component {

    constructor() {
        super();
        this.state = {
            currentIndex: 0,
            previousIndex: 0,
        };
    }

    /**
     * When carousel navigation such as 1,2,3,4,5 is clicked
     * @param index
     * @param e
     */
    onNavClick(index, e) {
        e.preventDefault();
        this.props.onIndexNavigationClick(index);
        this.setState({
            currentIndex: index
        });
    }

    /**
     * When carousel navigation left is click.
     * @param e
     */
    onNavLeftClick(e) {

        if(this.state.currentIndex > 0) {
            let prevIndex = this.state.currentIndex - 1;
            this.props.onIndexNavigationClick(prevIndex);
            this.setState({
                currentIndex: prevIndex
            });
        }
    }

    /**
     * When carousel navigation right is clicked
     * @param e
     */
    onNavRightClick(e) {
        if(this.state.currentIndex < this.props.subtopics.length - 1) {
            let nextIndex = this.state.currentIndex + 1;

            this.props.onIndexNavigationClick(nextIndex);
            this.setState({
                currentIndex: nextIndex
            });
        }
    }

    /**
     * Factory pattern to build pagination components
     * @param subtopics
     * @param currentIndex
     * @returns {XML}
     */
    buildPagination(subtopics, currentIndex) {
        const carouselNavigation = subtopics.map( (subtopic, index) => {
            let navClass = '';

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

        var innerPageWrapperWidth = CarouselNavigationCosts.pageWith * subtopics.length;
        var innerPageStyle = {
            width: innerPageWrapperWidth
        };

        if(currentIndex > CarouselNavigationCosts.PAGE_TO_WAIT && currentIndex < subtopics.length){
            let marginLeft = -1*CarouselNavigationCosts.pageWith*(currentIndex - CarouselNavigationCosts.PAGE_TO_WAIT);
            innerPageStyle['marginLeft'] = marginLeft;
        }

        return (
            <div style={innerPageStyle}>
                <ul>{carouselNavigation}</ul>
            </div>
        );
    }

    render() {
        const {subtopics, incomingIndex} = this.props;
        const {currentIndex} = this.state;

        //FilteredCurrentIndex = value is defined according to incomingIndex or currentIndex. Incoming index is set when user slide using slider
        //Current index is set when user uses left or right controller or clicking on each button
        var filteredCurrentIndex = currentIndex !== incomingIndex ? incomingIndex : currentIndex;
        const carouselNavigation = this.buildPagination(subtopics, filteredCurrentIndex);

        return (
            <div>
                <span class="carousel-navigation-left" onClick={this.onNavLeftClick.bind(this)}><i class="fa fa-angle-left" aria-hidden="true"></i></span>
                <div class="carousel-navigation-items">
                    {carouselNavigation}
                </div>
                <span class="carousel-navigation-right" onClick={this.onNavRightClick.bind(this)}><i class="fa fa-angle-right" aria-hidden="true"></i></span>
            </div>
        );

    }

}