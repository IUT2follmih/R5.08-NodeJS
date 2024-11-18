'use strict';

var utils = require('../utils/writer.js');
var Producers = require('../service/ProducersService');

module.exports.producersGET = function producersGET (req, res, next, limit, offset) {
  Producers.producersGET(limit, offset)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.producersIdDELETE = function producersIdDELETE (req, res, next, id) {
  Producers.producersIdDELETE(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.producersIdGET = function producersIdGET (req, res, next, id) {
  Producers.producersIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.producersIdPUT = function producersIdPUT (req, res, next, body, id) {
  Producers.producersIdPUT(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.producersIdTracksGET = function producersIdTracksGET (req, res, next, id, limit, offset) {
  Producers.producersIdTracksGET(id, limit, offset)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.producersPOST = function producersPOST (req, res, next, body) {
  Producers.producersPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
