'use babel';
import React from 'react';
import FrontPage from './frontPage';

var Main = React.createClass({

  getInitialState: function() {
    return{
      optionSelected: "frontpage"
    }
  },

  componentDidMount: function() {
    this.optionChangeListener();
  },

  optionChangeListener: function() {
    $(document).on('option-changed', (ev, value) => {
      this.setState({
        optionSelected: value
      })
    })
  },

  renderSelectedOption: function(){
    return(
      <div>{this.state.optionSelected}</div>
    );
  },

  render: function() {
    return (
      <div>
        { this.state.optionSelected === 'frontpage'  ? <FrontPage /> : this.renderSelectedOption() }
      </div>
    )
  }
});

export default Main
