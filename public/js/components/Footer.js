import React from 'react';
import GeometryStore from '../stores/GeometryStore';

/**
 * Footer component that supports Add New subtopic dialog
 */
export default class Footer extends React.Component {

    ADD_NEW_LABEL = 'Add new';
    CLOSE_DIALOG = 'Close dialog';
    ADD_NEW_ERROR = 'Title be an empty string';

    constructor() {
        super();
        this.state = {
            showAddNewField: -500,
            addNewTriggerLabel: this.ADD_NEW_LABEL,
            addNewError: ''
        };
    }

    onClickAddNewItem(e) {
        e.preventDefault();
        let newSubtopic = {
            title: this.topicTitleField.value,
            completed: this.topicCompleteField.checked
        };

        if(!GeometryStore.addNew(newSubtopic)) {
            this.setState({
                addNewError: this.ADD_NEW_ERROR
            });
        }
    }


    onClickAddNewTrigger(e) {
        e.preventDefault();
        const {showAddNewField} = this.state;

        if(showAddNewField) {
            this.openAddNew();
        } else {
            this.closeAddNew();
        }
    }

    onClickDialogClose(e) {
        e.preventDefault();
        console.log('yoyo! closing');
        this.closeAddNew();
    }

    closeAddNew() {
        this.setState({
            showAddNewField: -500,
            addNewTriggerLabel: this.ADD_NEW_LABEL
        });
    }

    openAddNew() {
        console.log('invoked close add new!');
        this.setState({
            showAddNewField: 0,
            addNewTriggerLabel: this.CLOSE_DIALOG,
            addNewError: ''
        });
    }


    render() {
        const {showAddNewField, addNewTriggerLabel, addNewError} = this.state;
        console.log(showAddNewField);
        var addContainerStyle = {
            marginBottom: showAddNewField
        };

        return (
            <div>

                <div style={addContainerStyle} id="AddNewContainer">
                    <div>
                        <div class="add_new_errors">{addNewError}</div>
                        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                            <input class="mdl-textfield__input" type="text" id="TopicTitle" ref={c => this.topicTitleField = c} />
                            <label class="mdl-textfield__label" for="TopicTitle">Title</label>
                        </div>
                        <div>
                            <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="TopicCompete">
                                <input type="checkbox" id="TopicCompete" class="mdl-checkbox__input" ref={c => this.topicCompleteField = c} />
                                <span class="mdl-checkbox__label">Completed</span>
                            </label>
                        </div>
                        <div class="addNewButtonWrapper">
                            <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored" onClick={this.onClickAddNewItem.bind(this)}>
                                Add new
                            </button>
                            <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" onClick={this.onClickDialogClose.bind(this)}>
                                Close
                            </button>
                        </div>
                    </div>
                </div>

                <div id="Footer">

                    <div class="footer-addNew" onClick={this.onClickAddNewTrigger.bind(this)}>
                        <span>{addNewTriggerLabel}</span>
                    </div>

                    <div>
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/378995/piechart@2x.png" />
                    </div>

                    <div>
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/378995/piechart@2x.png" />
                    </div>
                </div>
            </div>
        );
    }
}