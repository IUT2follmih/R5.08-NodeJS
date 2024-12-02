'use strict';

const utils = require('../utils/writer.js');
const ProducersService = require('../service/ProducersService');

module.exports.producersGET = function producersGET(req, res, next, limit, offset) {
    try {
        ProducersService.producersGET(limit, offset)
            .then(function (response) {
                utils.writeJson(res, response);
            })
            .catch(function (error) {
                console.error('Error in producersGET:', error);
                utils.writeJson(res, {error: error.message}, 500);
            });
    } catch (error) {
        console.error('Unexpected error in producersGET:', error);
        utils.writeJson(res, {error: 'Internal Server Error'}, 500);
    }
};

module.exports.producersIdGET = function producersIdGET(req, res, next, id) {
    try {
        ProducersService.producersIdGET(id)
            .then(function (response) {
                utils.writeJson(res, response);
            })
            .catch(function (error) {
                console.error('Error in producersIdGET:', error);
                utils.writeJson(res, {error: error.message}, 404);
            });
    } catch (error) {
        console.error('Unexpected error in producersIdGET:', error);
        utils.writeJson(res, {error: 'Internal Server Error'}, 500);
    }
};

module.exports.producersIdTracksGET = function producersIdTracksGET(req, res, next, id, limit, offset) {
    try {
        ProducersService.producersIdTracksGET(id, limit, offset)
            .then(function (response) {
                utils.writeJson(res, response);
            })
            .catch(function (error) {
                console.error('Error in producersIdTracksGET:', error);
                utils.writeJson(res, {error: error.message}, 404);
            });
    } catch (error) {
        console.error('Unexpected error in producersIdTracksGET:', error);
        utils.writeJson(res, {error: 'Internal Server Error'}, 500);
    }
};

module.exports.producersPost = function producersPost(req, res, next, body) {
    try {
        ProducersService.producersPOST(body)
            .then(function (response) {
                utils.writeJson(res, response, 201);
            })
            .catch(function (error) {
                console.error('Error in producersPost:', error);
                utils.writeJson(res, {error: error.message}, 400);
            });
    } catch (error) {
        console.error('Unexpected error in producersPost:', error);
        utils.writeJson(res, {error: 'Internal Server Error'}, 500);
    }
};

module.exports.producersIdPUT = function producersIdPUT(req, res, next, body, id) {
    try {
        ProducersService.producersIdPUT(body, id)
            .then(function (response) {
                utils.writeJson(res, response);
            })
            .catch(function (error) {
                console.error('Error in producersIdPUT:', error);
                utils.writeJson(res, {error: error.message}, 404);
            });
    } catch (error) {
        console.error('Unexpected error in producersIdPUT:', error);
        utils.writeJson(res, {error: 'Internal Server Error'}, 500);
    }
};

module.exports.producersIdDELETE = function producersIdDELETE(req, res, next, id) {
    try {
        ProducersService.producersIdDELETE(id)
            .then(function (response) {
                utils.writeJson(res, response);
            })
            .catch(function (error) {
                console.error('Error in producersIdDELETE:', error);
                utils.writeJson(res, {error: error.message}, 404);
            });
    } catch (error) {
        console.error('Unexpected error in producersIdDELETE:', error);
        utils.writeJson(res, {error: 'Internal Server Error'}, 500);
    }
};