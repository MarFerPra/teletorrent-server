"use strict";

const client = require('./clientInitializer');

module.exports = {

  /* Torrent: magnet uri(string), torrent file (buffer), persed torrent,
      http url to torrent file, filesystem path to torrent. */
  addDownload: (torrent) => {
    console.log("Download added: ", torrent);
    let downloadAdded = client.add(torrent, (torrent) => {
      console.log("Downloaded: ", torrent);
    });
    console.log("Downloading: ", downloadAdded);
  },

  getTorrents: () => {
    console.log("Get torrents!");
    return client.torrents;
  }

}
