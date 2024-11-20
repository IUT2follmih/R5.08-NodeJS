'use strict';

const utils = require('../utils/writer.js');
const TracksService = require('../service/TracksService');

module.exports.tracksGET = function tracksGET(req, res, next, limit, offset) {
    try {
        TracksService.tracksGET(limit, offset)
            .then(function (response) {
                utils.writeJson(res, response);
            })
            .catch(function (error) {
                console.error('Error in tracksGET:', error);
                utils.writeJson(res, {error: error.message}, 500);
            });
    } catch (error) {
        console.error('Unexpected error in tracksGET:', error);
        utils.writeJson(res, {error: 'Internal Server Error'}, 500);
    }
};

module.exports.tracksIdGET = function tracksIdGET(req, res, next, id) {
    try {
        TracksService.tracksIdGET(id)
            .then(function (response) {
                utils.writeJson(res, response);
            })
            .catch(function (error) {
                console.error('Error in tracksIdGET:', error);
                utils.writeJson(res, {error: error.message}, 404);
            });
    } catch (error) {
        console.error('Unexpected error in tracksIdGET:', error);
        utils.writeJson(res, {error: 'Internal Server Error'}, 500);
    }
};

module.exports.tracksIdMusical_infoGET = function tracksIdMusical_infoGET(req, res, next, id) {
    try {
        TracksService.tracksIdMusical_infoGET(id)
            .then(function (response) {
                utils.writeJson(res, response);
            })
            .catch(function (error) {
                console.error('Error in tracksIdMusical_infoGET:', error);
                utils.writeJson(res, {error: error.message}, 404);
            });
    } catch (error) {
        console.error('Unexpected error in tracksIdMusical_infoGET:', error);
        utils.writeJson(res, {error: 'Internal Server Error'}, 500);
    }
}

module.exports.tracksIdPUT = function tracksIdPUT(req, res, next, body, id) {
    try {
        TracksService.tracksIdPUT(body, id)
            .then(function (response) {
                utils.writeJson(res, response);
            })
            .catch(function (error) {
                console.error('Error in tracksIdPUT:', error);
                utils.writeJson(res, {error: error.message}, 404);
            });
    } catch (error) {
        console.error('Unexpected error in tracksIdPUT:', error);
        utils.writeJson(res, {error: 'Internal Server Error'}, 500);
    }
};

module.exports.tracksIdDELETE = function tracksIdDELETE(req, res, next, id) {
    try {
        TracksService.tracksIdDELETE(id)
            .then(function (response) {
                utils.writeJson(res, response);
            })
            .catch(function (error) {
                console.error('Error in tracksIdDELETE:', error);
                utils.writeJson(res, {error: error.message}, 404);
            });
    } catch (error) {
        console.error('Unexpected error in tracksIdDELETE:', error);
        utils.writeJson(res, {error: 'Internal Server Error'}, 500);
    }
};

module.exports.tracksPOST = function tracksPOST(req, res, next, body) {
    try {
        TracksService.tracksPOST(body)
            .then(function (response) {
                utils.writeJson(res, response, 201);
            })
            .catch(function (error) {
                console.error('Error in tracksPOST:', error);
                utils.writeJson(res, {error: error.message}, 400);
            });
    } catch (error) {
        console.error('Unexpected error in tracksPOST:', error);
        utils.writeJson(res, {error: 'Internal Server Error'}, 500);
    }
};
