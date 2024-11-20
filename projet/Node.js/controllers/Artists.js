'use strict';

const utils = require('../utils/writer.js');
const ArtistsService = require('../service/ArtistsService');

module.exports.artistsGET = function artistsGET(req, res, next, limit, offset) {
    try {
        ArtistsService.artistsGET(limit, offset)
            .then(function (response) {
                utils.writeJson(res, response);
            })
            .catch(function (error) {
                console.error('Error in artistsGET:', error);
                utils.writeJson(res, {error: error.message}, 500);
            });
    } catch (error) {
        console.error('Unexpected error in artistsGET:', error);
        utils.writeJson(res, {error: 'Internal Server Error'}, 500);
    }
};

module.exports.artistsIdGET = function artistsIdGET(req, res, next, id) {
    try {
        ArtistsService.artistsIdGET(id)
            .then(function (response) {
                utils.writeJson(res, response);
            })
            .catch(function (error) {
                console.error('Error in artistsIdGET:', error);
                utils.writeJson(res, {error: error.message}, error.code || 404);
            });
    } catch (error) {
        console.error('Unexpected error in artistsIdGET:', error);
        utils.writeJson(res, {error: 'Internal Server Error'}, 500);
    }
};

module.exports.artistsIdDELETE = function artistsIdDELETE(req, res, next, id) {
    try {
        ArtistsService.artistsIdDELETE(id)
            .then(function (response) {
                utils.writeJson(res, response);
            })
            .catch(function (error) {
                console.error('Error in artistsIdDELETE:', error);
                utils.writeJson(res, {error: error.message}, error.code || 404);
            });
    } catch (error) {
        console.error('Unexpected error in artistsIdDELETE:', error);
        utils.writeJson(res, {error: 'Internal Server Error'}, 500);
    }
};

module.exports.artistsIdPUT = function artistsIdPUT(req, res, next, body, id) {
    try {
        ArtistsService.artistsIdPUT(body, id)
            .then(function (response) {
                utils.writeJson(res, response);
            })
            .catch(function (error) {
                console.error('Error in artistsIdPUT:', error);
                utils.writeJson(res, {error: error.message}, error.code || 404);
            });
    } catch (error) {
        console.error('Unexpected error in artistsIdPUT:', error);
        utils.writeJson(res, {error: 'Internal Server Error'}, 500);
    }
};

module.exports.artistsIdTracksGET = function artistsIdTracksGET(req, res, next, id, limit, offset) {
    try {
        ArtistsService.artistsIdTracksGET(id, limit, offset)
            .then(function (response) {
                utils.writeJson(res, response);
            })
            .catch(function (error) {
                console.error('Error in artistsIdTracksGET:', error);
                utils.writeJson(res, {error: error.message}, error.code || 404);
            });
    } catch (error) {
        console.error('Unexpected error in artistsIdTracksGET:', error);
        utils.writeJson(res, {error: 'Internal Server Error'}, 500);
    }
};

module.exports.artistsPOST = function artistsPOST(req, res, next, body) {
    try {
        ArtistsService.artistsPOST(body)
            .then(function (response) {
                utils.writeJson(res, response, 201);
            })
            .catch(function (error) {
                console.error('Error in artistsPOST:', error);
                utils.writeJson(res, {error: error.message}, 400);
            });
    } catch (error) {
        console.error('Unexpected error in artistsPOST:', error);
        utils.writeJson(res, {error: 'Internal Server Error'}, 500);
    }
};
