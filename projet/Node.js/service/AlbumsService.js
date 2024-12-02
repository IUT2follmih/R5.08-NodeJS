'use strict';

const data = require('../data/music_data.json');

exports.albumsGET = function (limit, offset) {
    return new Promise(function (resolve, reject) {
        try {
            const albums = data.albums
                .slice(offset, Math.min(offset + limit, data.albums.length));
            resolve(albums);
        } catch (error) {
            reject(error);
        }
    });
}

exports.albumsIdGET = function (id) {
    return new Promise(function (resolve, reject) {
        try {
            if (!id || typeof id !== 'string' || !id.trim()) {
                reject({
                    code: 400,
                    message: 'Invalid ID: ID must be a non-empty string'
                });
                return;
            }

            const idPattern = /^alb_\d+$/;
            if (!idPattern.test(id)) {
                reject({
                    code: 400,
                    message: 'Invalid ID format: ID must be in the format "alb_NUMBER"'
                });
                return;
            }

            const album = data.albums.find(album => album.id === id);

            if (!album) {
                reject({
                    code: 404,
                    message: `Album with ID ${id} not found`
                });
            }

            resolve(album);
        } catch (error) {
            reject({
                code: 500,
                message: 'Internal server error',
                error: error.message
            });
        }
    });
}

exports.albumsIdTracksGET = function (id, limit, offset) {
    return new Promise(function (resolve, reject) {
        try {
            if (!id || typeof id !== 'string' || !id.trim()) {
                reject({
                    code: 400,
                    message: 'Invalid ID: ID must be a non-empty string'
                });
                return;
            }

            const idPattern = /^alb_\d+$/;
            if (!idPattern.test(id)) {
                reject({
                    code: 400,
                    message: 'Invalid ID format: ID must be in the format "alb_NUMBER"'
                });
                return;
            }

            const album = data.albums.find(album => album.id === id);

            if (!album) {
                reject({
                    code: 404,
                    message: `Album with ID ${id} not found`
                });
            }

            const AlbumsTracks = data.tracks
                .filter(track => track.albumId === id)
                .slice(offset, Math.min(offset + limit, data.tracks.length));

            if (AlbumsTracks.length === 0) {
                reject({
                    code: 404,
                    message: `No tracks found for album ${id}`
                });
                return;
            }

            resolve(AlbumsTracks);
        } catch (error) {
            reject(error);
        }
    });
}


exports.albumsPOST = function (body) {
    return new Promise(function (resolve, reject) {
        try {
            if (!body || typeof body !== 'object') {
                reject({
                    code: 400,
                    message: 'Invalid body format: body must be an object'
                });
                return;
            }

            const newAlbum = {
                id: `alb_${data.albums.length + 1}`,
                ...body
            };

            data.albums.push(newAlbum);
            resolve(newAlbum);
        } catch (error) {
            reject({
                code: 500,
                message: 'Internal server error',
                error: error.message
            });
        }
    });
}


exports.albumsIdPUT = function (body, id) {
    return new Promise(function (resolve, reject) {
        try {
            if (!id || typeof id !== 'string' || !id.trim()) {
                reject({
                    code: 400,
                    message: 'Invalid ID: ID must be a non-empty string'
                });
                return;
            }

            const idPattern = /^alb_\d+$/;
            if (!idPattern.test(id)) {
                reject({
                    code: 400,
                    message: 'Invalid ID format: ID must be in the format "alb_NUMBER"'
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

            const index = data.albums.findIndex(album => album.id === id);
            if (index === -1) {
                reject({
                    code: 404,
                    message: `Album with ID ${id} not found`
                });
            }

            data.albums[index] = {
                ...data.albums[index],
                ...body
            };
            resolve();
        } catch (error) {
            reject({
                code: 500,
                message: 'Internal server error',
                error: error.message
            })
        }
    });
}

exports.albumsIdDELETE = function (id) {
    return new Promise(function (resolve, reject) {
        try {
            if (!id || typeof id !== 'string' || !id.trim()) {
                reject({
                    code: 400,
                    message: 'Invalid ID: ID must be a non-empty string'
                });
                return;
            }

            const idPattern = /^alb_\d+$/;
            if (!idPattern.test(id)) {
                reject({
                    code: 400,
                    message: 'Invalid ID format: ID must be in the format "alb_NUMBER"'
                });
                return;
            }

            const index = data.albums.findIndex(album => album.id === id);
            if (index === -1) {
                reject({
                    code: 404,
                    message: `Album with ID ${id} not found`
                });
            }

            data.albums.splice(index, 1);
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