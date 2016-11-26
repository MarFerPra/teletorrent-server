'use babel';
import React from 'react';
import FrontPage from './frontPage';
import NewTorrent from './newTorrent';
import Downloads from './downloads';
import Uploads from './uploads';
import Paused from './paused';
import Settings from './settings';

var Main = React.createClass({

    getInitialState: function() {
        return {optionSelected: "frontpage"}
    },

    componentDidMount: function() {
        this.optionChangeListener();
    },

    optionChangeListener: function() {
        $(document).on('option-changed', (ev, value) => {
            this.setState({optionSelected: value})
        })
    },

    getSelectedOption: function() {
        switch (this.state.optionSelected) {
            case 'new_torrent':
                return <NewTorrent />
                break;
            case 'downloads':
                return <Downloads />
                break
            case 'uploads':
                return <Uploads />
                break
            case 'paused':
                return <Paused />
                break
            case 'settings':
                return <Settings />
                break
            default:
                return <FrontPage />
        }
    },

    render: function() {
        return (
            <div>
                {this.getSelectedOption()}
            </div>
        )
    }
});

export default Main
