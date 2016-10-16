import React from 'react';
import ImageResponsive, {Source} from 'react-image-responsive';

/**
 * Navigation component generally located on the head of each page
 */
export default class Navigation extends React.Component {

    render() {
        const {title} = this.props;

        return (
            <div id="Navigation">
                <div class="navigation-top-wrapper">
                    <div class="burger-menu">
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/378995/menu@2x.png" />
                    </div>
                    <header class="page-title"><h2>{title}</h2></header>
                    <div class="avatar">
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/378995/avatar@2x.png" alt="Avatar Image"/>
                    </div>
                </div>
            </div>
        );

    }
}