'use strict';

const utils = require('../utils/writer.js');
const AlbumsService = require('../service/AlbumsService');

module.exports.albumsGET = function albumsGET(req, res, next, limit, offset) {
    try {
        AlbumsService.albumsGET(limit, offset)
            .then(function (response) {
                utils.writeJson(res, response);
            })
            .catch(function (error) {
                console.error('Error in albumsGET:', error);
                utils.writeJson(res, {error: error.message}, 500);
            });
    } catch (error) {
        console.error('Unexpected error in albumsGET:', error);
        utils.writeJson(res, {error: 'Internal Server Error'}, 500);
    }
};

module.exports.albumsIdGET = function albumsIdGET(req, res, next, id) {
    try {
        AlbumsService.albumsIdGET(id)
            .then(function (response) {
                utils.writeJson(res, response);
            })
            .catch(function (error) {
                console.error('Error in albumsIdGET:', error);
                utils.writeJson(res, {error: error.message}, error.code || 404);
            });
    } catch (error) {
        console.error('Unexpected error in albumsIdGET:', error);
        utils.writeJson(res, {error: 'Internal Server Error'}, 500);
    }
};

module.exports.albumsIdDELETE = function albumsIdDELETE(req, res, next, id) {
    try {
        AlbumsService.albumsIdDELETE(id)
            .then(function (response) {
                utils.writeJson(res, response);
            })
            .catch(function (error) {
                console.error('Error in albumsIdDELETE:', error);
                utils.writeJson(res, {error: error.message}, error.code || 404);
            });
    } catch (error) {
        console.error('Unexpected error in albumsIdDELETE:', error);
        utils.writeJson(res, {error: 'Internal Server Error'}, 500);
    }
};

module.exports.albumsIdPUT = function albumsIdPUT(req, res, next, body, id) {
    try {
        AlbumsService.albumsIdPUT(body, id)
            .then(function (response) {
                utils.writeJson(res, response);
            })
            .catch(function (error) {
                console.error('Error in albumsIdPUT:', error);
                utils.writeJson(res, {error: error.message}, error.code || 404);
            });
    } catch (error) {
        console.error('Unexpected error in albumsIdPUT:', error);
        utils.writeJson(res, {error: 'Internal Server Error'}, 500);
    }
};

module.exports.albumsIdTracksGET = function albumsIdTracksGET(req, res, next, id, limit, offset) {
    try {
        AlbumsService.albumsIdTracksGET(id, limit, offset)
            .then(function (response) {
                utils.writeJson(res, response);
            })
            .catch(function (error) {
                console.error('Error in albumsIdTracksGET:', error);
                utils.writeJson(res, {error: error.message}, error.code || 404);
            });
    } catch (error) {
        console.error('Unexpected error in albumsIdTracksGET:', error);
        utils.writeJson(res, {error: 'Internal Server Error'}, 500);
    }
};

module.exports.albumsPOST = function albumsPOST(req, res, next, body) {
    try {
        AlbumsService.albumsPOST(body)
            .then(function (response) {
                utils.writeJson(res, response, 201);
            })
            .catch(function (error) {
                console.error('Error in albumsPOST:', error);
                utils.writeJson(res, {error: error.message}, 400);
            });
    } catch (error) {
        console.error('Unexpected error in albumsPOST:', error);
        utils.writeJson(res, {error: 'Internal Server Error'}, 500);
    }
};
