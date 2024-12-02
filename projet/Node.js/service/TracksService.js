'use strict';

const data = require('../data/music_data.json');

exports.tracksGET = function (limit, offset) {
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

exports.tracksIdGET = function (id) {
    return new Promise(function (resolve, reject) {
        try {
            if (!id || typeof id !== 'string' || !id.trim()) {
                reject({
                    code: 400,
                    message: 'Invalid ID: ID must be a non-empty string'
                });
                return;
            }

            const idPattern = /^track_\d+$/;
            if (!idPattern.test(id)) {
                reject({
                    code: 400,
                    message: 'Invalid ID format: ID must be in the format "album_NUMBER"'
                });
                return;
            }

            const track = data.tracks.find(track => track.id === id);

            if (!track) {
                reject({
                    code: 404,
                    message: `Track with ID ${id} not found`
                });
                return;
            }

            resolve(track);
        } catch (error) {
            reject({
                code: 500,
                message: 'Internal server error',
                error: error.message
            });
        }
    });
}

const VALID_STYLES = [
    'dance-pop',
    'hip-hop',
    'electronic',
    'electropop',
    'pop-rock',
    'synthpop',
    'pop',
    'rock',
    'indie',
    'disco-pop',
    'dark-pop',
    'r&b'
];

exports.tracksByStyleGET = function (style, limit = 20, offset = 0) {
    return new Promise(function (resolve, reject) {
        try {
            if (!style || typeof style !== 'string' || !style.trim()) {
                reject({
                    code: 400,
                    message: 'Invalid style: style must be a non-empty string'
                });
                return;
            }

            const normalizedStyle = style.toLowerCase().trim();
            if (!VALID_STYLES.includes(normalizedStyle)) {
                reject({
                    code: 400,
                    message: `Invalid style: "${style}". Valid styles are: ${VALID_STYLES.join(', ')}`
                });
                return;
            }

            const filteredTracks = data.tracks
                .filter(track => track.musicalInfo.style.toLowerCase() === normalizedStyle);

            if (filteredTracks.length === 0) {
                reject({
                    code: 404,
                    message: `No track found for style "${style}"`
                });
                return;
            }

            const paginatedTracks = filteredTracks
                .slice(offset, Math.min(offset + limit, filteredTracks.length));

            resolve(paginatedTracks);
        } catch (error) {
            reject({
                code: 500,
                message: 'Internal server error',
                error: error.message
            });
        }
    });
}

exports.tracksIdStatsGET = function (id) {
    return new Promise(function (resolve, reject) {
        try {
            if (!id || typeof id !== 'string' || !id.trim()) {
                reject({
                    code: 400,
                    message: 'Invalid ID: ID must be a non-empty string'
                });
                return;
            }

            const idPattern = /^track_\d+$/;
            if (!idPattern.test(id)) {
                reject({
                    code: 400,
                    message: 'Invalid ID format: ID must be in the format "track_NUMBER"'
                });
                return;
            }

            const track = data.tracks.find(track => track.id === id);
            if (!track) {
                reject({
                    code: 404,
                    message: `Track with ID ${id} not found`
                });
                return;
            }

            if (!track.stats) {
                reject({
                    code: 404,
                    message: `Stats not found for track ${id}`
                });
                return;
            }

            resolve(track.stats);
        } catch (error) {
            reject({
                code: 500,
                message: 'Internal server error',
                error: error.message
            });
        }
    });
}

exports.tracksIdMusical_infoGET = function (id) {
    return new Promise(function (resolve, reject) {
        try {
            if (!id || typeof id !== 'string' || !id.trim()) {
                reject({
                    code: 400,
                    message: 'Invalid ID: ID must be a non-empty string'
                });
                return;
            }

            const idPattern = /^track_\d+$/;
            if (!idPattern.test(id)) {
                reject({
                    code: 400,
                    message: 'Invalid ID format: ID must be in the format "track_NUMBER"'
                });
                return;
            }

            const track = data.tracks.find(track => track.id === id);
            if (!track) {
                reject({
                    code: 404,
                    message: `Track with ID ${id} not found`
                });
                return;
            }

            if (!track.musicalInfo) {
                reject({
                    code: 404,
                    message: `Musical info not found for track ${id}`
                });
                return;
            }

            resolve(track.musicalInfo);
        } catch (error) {
            reject({
                code: 500,
                message: 'Internal server error',
                error: error.message
            });
        }
    });
}

exports.tracksPOST = function (body) {
    return new Promise(function (resolve, reject) {
        try {
            if (!body || typeof body !== 'object') {
                reject({
                    code: 400,
                    message: 'Invalid body: body must be a non-empty object'
                });
                return;
            }
            const newTrack = {
                id: `track_${data.tracks.length + 1}`,
                ...body
            };

            data.tracks.push(newTrack);
            resolve(newTrack);
        } catch (error) {
            reject({
                code: 500,
                message: 'Internal server error',
                error: error.message
            });
        }
    });
}

exports.tracksIdPUT = function (body, id) {
    return new Promise(function (resolve, reject) {
        try {
            if (!id || typeof id !== 'string' || !id.trim()) {
                reject({
                    code: 400,
                    message: 'Invalid ID: ID must be a non-empty string'
                });
                return;
            }

            const idPattern = /^track_\d+$/;
            if (!idPattern.test(id)) {
                reject({
                    code: 400,
                    message: 'Invalid ID format: ID must be in the format "track_NUMBER"'
                });
                return;
            }

            if (!body || typeof body !== 'object') {
                reject({
                    code: 400,
                    message: 'Invalid body: body must be a non-empty object'
                });
                return;
            }

            const index = data.tracks.findIndex(track => track.id === id);
            if (index === -1) {
                reject({
                    code: 404,
                    message: `Track with ID ${id} not found`
                });
                return;
            }

            data.tracks[index] = {
                ...data.tracks[index],
                ...body
            };
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

exports.tracksIdDELETE = function (id) {
    return new Promise(function (resolve, reject) {
        try {
            if (!id || typeof id !== 'string' || !id.trim()) {
                reject({
                    code: 400,
                    message: 'Invalid ID: ID must be a non-empty string'
                });
                return;
            }

            const idPattern = /^track_\d+$/;
            if (!idPattern.test(id)) {
                reject({
                    code: 400,
                    message: 'Invalid ID format: ID must be in the format "track_NUMBER"'
                });
                return;
            }

            const index = data.tracks.findIndex(track => track.id === id);
            if (index === -1) {
                reject({
                    code: 404,
                    message: `Track with ID ${id} not found`
                });
                return;
            }

            data.tracks.splice(index, 1);
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
