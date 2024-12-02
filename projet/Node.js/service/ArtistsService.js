'use strict';

const data = require('../data/music_data.json');

exports.artistsGET = function (limit, offset) {
    return new Promise(function (resolve, reject) {
        try {
            const artists = data.artists
                .slice(offset, Math.min(offset + limit, data.artists.length));
            resolve(artists);
        } catch (error) {
            reject(error);
        }
    });
}

exports.artistsIdGET = function (id) {
    return new Promise(function (resolve, reject) {
        try {
            if (!id || typeof id !== 'string' || !id.trim()) {
                reject({
                    code: 400,
                    message: 'Invalid ID: ID must be a non-empty string'
                });
            }

            const idPattern = /^art_\d+$/;
            if (!idPattern.test(id)) {
                reject({
                    code: 400,
                    message: 'Invalid ID format: ID must be in the format "art_NUMBER"'
                });
            }

            const artist = data.artists.find(artist => artist.id === id);

            if (!artist) {
                reject({
                    code: 404,
                    message: `Artist with ID ${id} not found`
                });
            }

            resolve(artist);
        } catch (error) {
            reject({
                code: 500,
                message: 'Internal server error',
                error: error.message
            });
        }
    });
}

exports.artistsIdTracksGET = function (id, limit, offset) {
    return new Promise(function (resolve, reject) {
        try {
            if (!id || typeof id !== 'string' || !id.trim()) {
                reject({
                    code: 400,
                    message: 'Invalid ID: ID must be a non-empty string'
                });
            }

            const idPattern = /^art_\d+$/;
            if (!idPattern.test(id)) {
                reject({
                    code: 400,
                    message: 'Invalid ID format: ID must be in the format "art_NUMBER"'
                });
            }

            const artist = data.artists.find(artist => artist.id === id);

            if (!artist) {
                reject({
                    code: 404,
                    message: `Artist with ID ${id} not found`
                });
            }

            const artistTracks = data.tracks
                .filter(track => track.mainArtistId === id)
                .slice(offset, Math.min(offset + limit, data.tracks.length));

            if (artistTracks.length === 0) {
                reject({
                    code: 404,
                    message: `No tracks found for artist ${id}`
                });
                return;
            }
            resolve(artistTracks);
        } catch (error) {
            reject({
                code: 500,
                message: 'Internal server error',
                error: error.message
            });
        }
    });
}

exports.artistsIdAlbumsGET = function (id, limit = 20, offset = 0) {
    return new Promise(function (resolve, reject) {
        try {
            if (!id || typeof id !== 'string' || !id.trim()) {
                reject({
                    code: 400,
                    message: 'Invalid ID: ID must be a non-empty string'
                });
            }

            const idPattern = /^art_\d+$/;
            if (!idPattern.test(id)) {
                reject({
                    code: 400,
                    message: 'Invalid ID format: ID must be in the format "art_NUMBER"'
                });
            }

            const artist = data.artists.find(artist => artist.id === id);

            if (!artist) {
                reject({
                    code: 404,
                    message: `Artist with ID ${id} not found`
                });
            }
            const artistAlbums = data.albums
                .filter(album => album.artistId === id)
                .slice(offset, Math.min(offset + limit, data.albums.length));

            if (artistAlbums.length === 0) {
                reject({
                    code: 404,
                    message: 'No albums found for this artist'
                });
            }
            resolve(artistAlbums);
        } catch (error) {
            reject({
                code: 500,
                message: 'Internal server error',
                error: error.message
            });
        }
    });
}

exports.artistsPOST = function (body) {
    return new Promise(function (resolve, reject) {
        try {
            if (!body || typeof body !== 'object') {
                reject({
                    code: 400,
                    message: 'Invalid body: Body must be a non-empty object'
                });
            }

            const newArtist = {
                id: `artist_${data.artists.length + 1}`,
                ...body
            };
            data.artists.push(newArtist);
            resolve(newArtist);
        } catch (error) {
            reject({
                code: 500,
                message: 'Internal server error',
                error: error.message
            });
        }
    });
}

exports.artistsIdPUT = function (body, id) {
    return new Promise(function (resolve, reject) {
        try {
            if (!id || typeof id !== 'string' || !id.trim()) {
                reject({
                    code: 400,
                    message: 'Invalid ID: ID must be a non-empty string'
                });
            }

            const idPattern = /^art_\d+$/;
            if (!idPattern.test(id)) {
                reject({
                    code: 400,
                    message: 'Invalid ID format: ID must be in the format "art_NUMBER"'
                });
            }

            if (!body || typeof body !== 'object') {
                reject({
                    code: 400,
                    message: 'Invalid body: Body must be a non-empty object'
                });
            }
            const index = data.artists.findIndex(artist => artist.id === id);
            if (index === -1) {
                reject({
                    code: 404,
                    message: `Artist with ID ${id} not found`
                });
            }

            data.artists[index] = {
                ...data.artists[index],
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

exports.artistsIdDELETE = function (id) {
    return new Promise(function (resolve, reject) {
        try {
            if (!id || typeof id !== 'string' || !id.trim()) {
                reject({
                    code: 400,
                    message: 'Invalid ID: ID must be a non-empty string'
                });
            }

            const idPattern = /^art_\d+$/;
            if (!idPattern.test(id)) {
                reject({
                    code: 400,
                    message: 'Invalid ID format: ID must be in the format "art_NUMBER"'
                });
            }

            const index = data.artists.findIndex(artist => artist.id === id);
            if (index === -1) {
                reject({
                    code: 404,
                    message: `Artist with ID ${id} not found`
                });
            }

            data.artists.splice(index, 1);
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