'use strict';

var utils = require('../utils/writer.js');
var Tracks = require('../service/TracksService');

module.exports.tracksGET = function tracksGET (req, res, next, limit, offset) {
  Tracks.tracksGET(limit, offset)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.tracksGenreGenreGET = function tracksGenreGenreGET (req, res, next, genre, limit, offset) {
  Tracks.tracksGenreGenreGET(genre, limit, offset)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.tracksIdDELETE = function tracksIdDELETE (req, res, next, id) {
  Tracks.tracksIdDELETE(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.tracksIdGET = function tracksIdGET (req, res, next, id) {
  Tracks.tracksIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.tracksIdMusical_infoGET = function tracksIdMusical_infoGET (req, res, next, id) {
  Tracks.tracksIdMusical_infoGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.tracksIdPUT = function tracksIdPUT (req, res, next, body, id) {
  Tracks.tracksIdPUT(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.tracksIdStatsGET = function tracksIdStatsGET (req, res, next, id) {
  Tracks.tracksIdStatsGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.tracksPOST = function tracksPOST (req, res, next, body) {
  Tracks.tracksPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
