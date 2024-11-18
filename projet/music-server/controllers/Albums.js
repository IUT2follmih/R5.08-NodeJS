'use strict';

var utils = require('../utils/writer.js');
var Albums = require('../service/AlbumsService');

module.exports.albumsGET = function albumsGET (req, res, next, limit, offset) {
  Albums.albumsGET(limit, offset)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.albumsIdDELETE = function albumsIdDELETE (req, res, next, id) {
  Albums.albumsIdDELETE(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.albumsIdGET = function albumsIdGET (req, res, next, id) {
  Albums.albumsIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.albumsIdPUT = function albumsIdPUT (req, res, next, body, id) {
  Albums.albumsIdPUT(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.albumsIdTracksGET = function albumsIdTracksGET (req, res, next, id, limit, offset) {
  Albums.albumsIdTracksGET(id, limit, offset)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.albumsPOST = function albumsPOST (req, res, next, body) {
  Albums.albumsPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
