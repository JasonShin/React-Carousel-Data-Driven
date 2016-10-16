import React from 'react';
import ReactDOM from 'react-dom';

/**
 * IMPORTING PAGES
 */
import GeometryPage from './pages/GeometryPage'

/**
 * IMPORTING STYLES
 */
import '../css/style.scss';

/**
 * Rendering page to app root
 */
ReactDOM.render(<GeometryPage></GeometryPage>, document.getElementById('app'));