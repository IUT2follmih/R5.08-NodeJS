'use strict';

var utils = require('../utils/writer.js');
var Artists = require('../service/ArtistsService');

module.exports.artistsGET = function artistsGET (req, res, next, limit, offset) {
  Artists.artistsGET(limit, offset)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.artistsIdDELETE = function artistsIdDELETE (req, res, next, id) {
  Artists.artistsIdDELETE(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.artistsIdGET = function artistsIdGET (req, res, next, id) {
  Artists.artistsIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.artistsIdPUT = function artistsIdPUT (req, res, next, body, id) {
  Artists.artistsIdPUT(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.artistsIdTracksGET = function artistsIdTracksGET (req, res, next, id, limit, offset) {
  Artists.artistsIdTracksGET(id, limit, offset)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.artistsPOST = function artistsPOST (req, res, next, body) {
  Artists.artistsPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
