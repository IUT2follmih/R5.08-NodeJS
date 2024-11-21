'use strict';

const data = require('../data/donnees.json');

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
            const producer = data.producers.find(producer => producer.id === id);
            if (!producer) {
                reject({
                    code: 404,
                    message: 'Producer not found'
                });
            } else {
                resolve(producer);
            }
        } catch (error) {
            reject(error);
        }
    });
}

exports.producersIdTracksGET = function (id, limit, offset) {
    return new Promise(function (resolve, reject) {
        try {
            const producer = data.producers.find(producer => producer.id === id);
            if (!producer) {
                reject({
                    code: 404,
                    message: 'Producer not found'
                });
            } else {
                const producerTracks = data.tracks
                    .filter(track => track.producerId === id)
                    .slice(offset, Math.min(offset + limit, data.tracks.length));
                resolve(producerTracks);
            }
        } catch (error) {
            reject(error);
        }
    });
}

exports.producersPOST = function (body) {
    return new Promise(function (resolve, reject) {
        try {
            const newProducer = {
                id: `producer_${data.producers.length + 1}`,
                ...body
            };
            data.producers.push(newProducer);
            resolve(newProducer);
        } catch (error) {
            reject(error);
        }
    });
}

exports.producersIdPUT = function (body, id) {
    return new Promise(function (resolve, reject) {
        try {
            const index = data.producers.findIndex(producer => producer.id === id);
            if (index === -1) {
                reject({
                    code: 404,
                    message: 'Producer not found'
                });
            } else {
                data.producers[index] = {...data.producers[index], ...body};
                resolve();
            }
        } catch (error) {
            reject(error);
        }
    });
}

exports.producersIdDELETE = function (id) {
    return new Promise(function (resolve, reject) {
        try {
            const index = data.producers.findIndex(producer => producer.id === id);
            if (index === -1) {
                reject({
                    code: 404,
                    message: 'Producer not found'
                });
            } else {
                data.producers.splice(index, 1);
                resolve();
            }
        } catch (error) {
            reject(error);
        }
    });
}