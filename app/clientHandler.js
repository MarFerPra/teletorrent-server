"use strict";

module.exports = function(client){

  /* Torrent: magnet uri(string), torrent file (buffer), persed torrent,
      http url to torrent file, filesystem path to torrent. */
  addDownload: (torrent) => {
    console.log("Download added: ", torrent);
    let downloadAdded = client.add(torrent, (torrent) => {
      console.log("Downloaded: ", torrent);
    });
    console.log("Downloading: ", ownloadAdded);
  }

  getTorrents: () => {
    return client.torrents;
  };

};
