'use strict';

const data = require('../data/donnees.json');

exports.tracksGET = function (limit = 20, offset = 0) {
    return new Promise(function (resolve, reject) {
        try {
            const tracks = data.tracks
                .slice(offset, Math.min(offset + limit, data.tracks.length));
            resolve(tracks);
        } catch (error) {
            reject(error);
        }
    });
}

exports.tracksIdDELETE = function (id) {
    return new Promise(function (resolve, reject) {
        try {
            const index = data.tracks.findIndex(track => track.id === id);
            if (index === -1) {
                reject({
                    code: 404,
                    message: 'Track not found'
                });
            } else {
                data.tracks.splice(index, 1);
                resolve();
            }
        } catch (error) {
            reject(error);
        }
    });
}

exports.tracksIdGET = function (id) {
    return new Promise(function (resolve, reject) {
        try {
            const track = data.tracks.find(track => track.id === id);
            if (!track) {
                reject({
                    code: 404,
                    message: 'Track not found'
                });
            } else {
                resolve(track);
            }
        } catch (error) {
            reject(error);
        }
    });
}

exports.tracksIdMusical_infoGET = function (id) {
    return new Promise(function (resolve, reject) {
        try {
            const track = data.tracks.find(track => track.id === id);
            if (!track) {
                reject({
                    code: 404,
                    message: 'Track not found'
                });
            } else {
                resolve(track.musicalInfo);
            }
        } catch (error) {
            reject(error);
        }
    });
}


exports.tracksIdPUT = function (body, id) {
    return new Promise(function (resolve, reject) {
        try {
            const index = data.tracks.findIndex(track => track.id === id);
            if (index === -1) {
                reject({
                    code: 404,
                    message: 'Track not found'
                });
            } else {
                data.tracks[index] = {...data.tracks[index], ...body};
                resolve();
            }
        } catch (error) {
            reject(error);
        }
    });
}

exports.tracksIdStatsGET = function (id) {
    return new Promise(function (resolve, reject) {
        try {
            const track = data.tracks.find(track => track.id === id);
            if (!track) {
                reject({
                    code: 404,
                    message: 'Track not found'
                });
            } else {
                resolve(track.stats);
            }
        } catch (error) {
            reject(error);
        }
    });
}

exports.tracksByStyleGET = function (style, limit = 20, offset = 0) {
    return new Promise(function (resolve, reject) {
        try {
            const filteredTracks = data.tracks
                .filter(track => track.musicalInfo.style.toLowerCase() === style.toLowerCase())
                .slice(offset, Math.min(offset + limit, data.tracks.length));
            resolve(filteredTracks);
        } catch (error) {
            reject(error);
        }
    });
}

exports.tracksPOST = function (body) {
    return new Promise(function (resolve, reject) {
        try {
            const newTrack = {
                id: `track_${data.tracks.length + 1}`,
                ...body
            };
            data.tracks.push(newTrack);
            resolve(newTrack);
        } catch (error) {
            reject(error);
        }
    });
}
