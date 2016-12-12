'use babel';
import React from 'react';

var Downloads = React.createClass({
    render: function() {
      console.log(this.props.getTorrents());
        return (
            <div>
                DOWNLOADS
            </div>
        )
    }
});

export default Downloads
