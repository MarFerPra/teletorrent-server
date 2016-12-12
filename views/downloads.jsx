'use babel';
import React from 'react';

var Downloads = React.createClass({

  getInitialState: function(){
    return{
      torrentInfo: this.props.getTorrents()
    }
  },

  renderTorrent: function(torrent){
    console.log(torrent);
    return(
      <tr>
        <td>{ torrent.files[0].name }</td> {/* Name */}
        <td>{ parseFloat(torrent.length / 10e9).toFixed(2) } GB</td> {/* Size */}
        <td>{ torrent.downloaded }</td> {/* Downloaded */}
        <td>{ torrent.downloadSpeed }</td> {/* Down Speed */}
        <td>{ torrent.uploaded }</td> {/* Uploaded */}
        <td>{ torrent.uploadSpeed }</td> {/* Upload Speed */}
        <td>Not set</td> {/* State */}
      </tr>
    )
  },

  render: function() {
      return (
          <div>
              <table>
                <thead>
                  <tr>
                    <th data-field="">Name</th>
                    <th data-field="">Size</th>
                    <th data-field="">Downloaded</th>
                    <th data-field="">Down Speed</th>
                    <th data-field="">Uploaded</th>
                    <th data-field="">Upload Speed</th>
                    <th data-field="">State</th>
                  </tr>
                </thead>

                <tbody>
                  { this.state.torrentInfo.map((torrent) => {
                    return this.renderTorrent(torrent);
                  })}
                </tbody>

              </table>
          </div>
      )
  }
});

export default Downloads
