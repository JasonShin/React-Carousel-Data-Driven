/**
 * Created by Shin on 12/10/2016.
 */
import React from 'react';
import Navigation from '../components/Navigation';
import Carousel from '../components/Carousel';
import Footer from '../components/Footer';
import GeometryStore from '../stores/GeometryStore';


export default class GeometryPage extends React.Component {

    constructor() {
        super();
    }

    componentWillMount(){
        GeometryStore.fetchGeometries();
    }

    setPageTitle(topic) {
        document.title = `Topic - ${topic}`;
    }

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