import React from 'react';
import Navigation from '../components/Navigation';
import Carousel from '../components/Carousel';
import Footer from '../components/Footer';
import GeometryStore from '../stores/GeometryStore';

/**
 * Geometry page component. Serves various components
 */
export default class GeometryPage extends React.Component {

    constructor() {
        super();
    }

    componentWillMount(){
        GeometryStore.fetchGeometries();
    }

    /**
     * Sets current page title according to the title from Geometry store
     * @param topic
     */
    setPageTitle(topic) {
        document.title = `Topic - ${topic}`;
    }

    /**
     * Renders necessary components
     * @returns {XML}
     */
    render() {
        let pageTitle = GeometryStore.topic;
        this.setPageTitle(pageTitle);

        return (
            <div>
                <Navigation title={pageTitle} />
                <Carousel store={GeometryStore} />
                <Footer />
            </div>
        );

    }
}