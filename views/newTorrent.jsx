'use babel';
import React from 'react';

var NewTorrent = React.createClass({

  updateMagnetLink: function(ev){
    this.setState({
      magnetLink: ev.target.value
    });
  },

  updateTorrentFile: function(){
    this.setState({
      torrentFile: document.getElementById("torrent-file-input").files[0].path
    });
  },

  addTorrent: function(){
    if(this.state.magnetLink){
      this.props.addTorrent(this.state.magnetLink);
    } else if(this.state.torrentFile){
      this.props.addTorrent(this.state.torrentFile);
    }
  },

  render: function() {
      return (
          <div className="content-wrapper container">
              <div className="frontpage-wrapper">

                  <div className="row">
                      <div className="col s7 offset-s3">
                          <div className="input-field magnet-link-input">
                              <input id="icon_prefix" type="text" className="validate" onChange={ (ev) => this.updateMagnetLink(ev) }></input>
                              <label htmlFor="icon_prefix">MAGNET LINK</label>
                          </div>
                      </div>

                      <div className="col s7 offset-s5">
                          <form action="#">
                              <div className="file-field input-field">

                                  <div className="btn red">
                                      <span>torrent file</span>
                                      <input onChange={ this.updateTorrentFile } type="file" id="torrent-file-input"></input>
                                  </div>

                              </div>
                          </form>
                      </div>

                      <div className="col s4 offset-s5 add-torrent-btn">
                        <button className="btn waves-effect waves-light red" onClick={this.addTorrent} name="action">
                          <i className="material-icons right">send</i>
                          Add torrent
                        </button>
                      </div>

                  </div>

              </div>
          </div>
      )
  }
});

export default NewTorrent
