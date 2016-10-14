/**
 * Created by Shin on 12/10/2016.
 */
import React from 'react';

export default class Navigation extends React.Component {

    render() {

        const {title} = this.props;

        return (
            <div id="Navigation">
                <div class="navigation-top-wrapper">
                    <div class="burger-menu"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/378995/menu@2x.png" /></div>
                    <header class="page-title"><h2>{title}</h2></header>
                    <div class="avatar"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/378995/avatar@2x.png" /></div>
                </div>
            </div>
        );

    }
}