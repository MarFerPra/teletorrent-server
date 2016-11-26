"use strict";

var WebTorrent = require('webtorrent');

const client = new WebTorrent();

client.on('error', function (err) {
  console.log("Client fatal error: ", err);
});

client.on('torrent', function (torrent) {
  console.log("Torrent ready: ", torrent);
});

module.exports = client;
