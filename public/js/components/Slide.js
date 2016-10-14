/**
 * Created by Shin on 12/10/2016.
 */
import React from 'react';
import {observer} from 'mobx-react';

@observer
export default class Slide extends React.Component {

    onLetGoClick(e) {
        e.preventDefault();
        this.props.subtopic.completed = true;
    }

    render() {

        const {subtopic} = this.props;

        let tickBox = '';

        if(subtopic.completed) {
            tickBox = (<i class="fa fa-check complete" aria-hidden="true"></i>);
        } else {
            tickBox = (<i class="fa fa-times incomplete" aria-hidden="true"></i>);
        }

        return (
            <div class="slide-item">

                <div class="slide-background"></div>

                <div class="slide-meta-container">
                    <div class="slide-meta-details">
                        <h3>{subtopic.index} . {subtopic.title}</h3>
                        <div class="slide-tick-box">{tickBox}</div>
                    </div>
                </div>

                <div class="lets-go-button" onClick={this.onLetGoClick.bind(this)}>Let's Go</div>
            </div>
        );

    }
}