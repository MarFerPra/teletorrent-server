'use babel';
import React from 'react';
const {shell} = require('electron');

export default class FrontPage extends React.Component {

  openRepoLink(){
    shell.openExternal('https://github.com/MarFerPra/teletorrent-server');
  }

  render() {
    return (
      <div className="content-wrapper center-align valign-wrapper">
        <div className="valign frontpage-wrapper">
          <h5>Tele-Torrent Client</h5>
          <p className="flow-text">Marco Manuel Fernández Pranno</p>
          <p className="flow-text"><a className="clickable" onClick={this.openRepoLink}>Project repository</a></p>
        </div>
      </div>
    )
  }
}
