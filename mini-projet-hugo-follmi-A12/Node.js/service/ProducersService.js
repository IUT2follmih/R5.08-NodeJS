'use strict';

const data = require('../data/music_data.json');

exports.producersGET = function (limit, offset) {
    return new Promise(function (resolve, reject) {
        try {
            const producers = data.producers
                .slice(offset, Math.min(offset + limit, data.producers.length));
            resolve(producers);
        } catch (error) {
            reject(error);
        }
    });
}

exports.producersIdGET = function (id) {
    return new Promise(function (resolve, reject) {
        try {
            if (!id || typeof id !== 'string' || !id.trim()) {
                reject({
                    code: 400,
                    message: 'Invalid ID: ID must be a non-empty string'
                });
            }

            const idPattern = /^prod_\d+$/;
            if (!idPattern.test(id)) {
                reject({
                    code: 400,
                    message: 'Invalid ID format: ID must be in the format "prod_NUMBER"'
                });
            }

            const producer = data.producers.find(producer => producer.id === id);

            if (!producer) {
                reject({
                    code: 404,
                    message: `Producer with ID ${id} not found`
                });
            }

            resolve(producer);
        } catch (error) {
            reject({
                code: 500,
                message: 'Internal server error',
                error: error.message
            });
        }
    });
}

exports.producersIdTracksGET = function (id, limit, offset) {
    return new Promise(function (resolve, reject) {
        try {
            if (!id || typeof id !== 'string' || !id.trim()) {
                reject({
                    code: 400,
                    message: 'Invalid ID: ID must be a non-empty string'
                });
            }

            const idPattern = /^prod_\d+$/;
            if (!idPattern.test(id)) {
                reject({
                    code: 400,
                    message: 'Invalid ID format: ID must be in the format "prod_NUMBER"'
                });
            }

            const producer = data.producers.find(producer => producer.id === id);

            if (!producer) {
                reject({
                    code: 404,
                    message: `Producer with ID ${id} not found`
                });
            }
            const producerTracks = data.tracks
                .filter(track => track.producerId === id)
                .slice(offset, Math.min(offset + limit, data.tracks.length));

            if (producerTracks.length === 0) {
                reject({
                    code: 404,
                    message: `No tracks found for producer ${id}`
                });
            }

            resolve(producerTracks);
        } catch (error) {
            reject({
                code: 500,
                message: 'Internal server error',
                error: error.message
            });
        }
    });
}

exports.producersPOST = function (body) {
    return new Promise(function (resolve, reject) {
        try {
            if (!body || typeof body !== 'object') {
                reject({
                    code: 400,
                    message: 'Invalid body'
                });
            }

            const newProducer = {
                id: `producer_${data.producers.length + 1}`,
                ...body
            };
            data.producers.push(newProducer);
            resolve(newProducer);
        } catch (error) {
            reject({
                code: 500,
                message: 'Internal server error',
                error: error.message
            })
        }
    });
}

exports.producersIdPUT = function (body, id) {
    return new Promise(function (resolve, reject) {
        try {
            if (!id || typeof id !== 'string' || !id.trim()) {
                reject({
                    code: 400,
                    message: 'Invalid ID: ID must be a non-empty string'
                });
            }

            const idPattern = /^prod_\d+$/;
            if (!idPattern.test(id)) {
                reject({
                    code: 400,
                    message: 'Invalid ID format: ID must be in the format "prod_NUMBER"'
                });
            }

            if (!body || typeof body !== 'object') {
                reject({
                    code: 400,
                    message: 'Invalid body: Body must be a non-empty object'
                });
            }

            const index = data.producers.findIndex(producer => producer.id === id);
            if (index === -1) {
                reject({
                    code: 404,
                    message: `Producer with ID ${id} not found`
                });
            }
            data.producers[index] = {...data.producers[index], ...body};
            resolve({
                code: 200,
                message: `Producer with ID ${id} successfully updated`,
                producer: data.producers[index]
            });
        } catch (error) {
            reject({
                code: 500,
                message: 'Internal server error',
                error: error.message
            });
        }
    });
}

exports.producersIdDELETE = function (id) {
    return new Promise(function (resolve, reject) {
        try {
            if (!id || typeof id !== 'string' || !id.trim()) {
                reject({
                    code: 400,
                    message: 'Invalid ID: ID must be a non-empty string'
                });
            }

            const idPattern = /^prod_\d+$/;
            if (!idPattern.test(id)) {
                reject({
                    code: 400,
                    message: 'Invalid ID format: ID must be in the format "prod_NUMBER"'
                });
            }

            const index = data.producers.findIndex(producer => producer.id === id);
            if (index === -1) {
                reject({
                    code: 404,
                    message: `Producer with ID ${id} not found`
                });
            }

            data.producers.splice(index, 1);
            resolve();
        } catch (error) {
            reject({
                code: 500,
                message: 'Internal server error',
                error: error.message
            });
        }
    });
}