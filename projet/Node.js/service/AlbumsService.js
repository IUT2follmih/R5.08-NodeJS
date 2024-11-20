'use strict';

const data = require('../data/donnees.json');

exports.albumsGET = function (limit = 20, offset = 0) {
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

exports.albumsIdDELETE = function (id) {
    return new Promise(function (resolve, reject) {
        try {
            const index = data.albums.findIndex(album => album.id === id);
            if (index === -1) {
                reject({
                    code: 404,
                    message: 'Album not found'
                });
            } else {
                data.albums.splice(index, 1);
                resolve();
            }
        } catch (error) {
            reject(error);
        }
    });
}

exports.albumsIdGET = function (id) {
    return new Promise(function (resolve, reject) {
        try {
            const album = data.albums.find(album => album.id === id);
            if (!album) {
                reject({
                    code: 404,
                    message: 'Album not found'
                });
            } else {
                resolve(album);
            }
        } catch (error) {
            reject(error);
        }
    });
}

exports.albumsIdPUT = function (body, id) {
    return new Promise(function (resolve, reject) {
        try {
            const index = data.albums.findIndex(album => album.id === id);
            if (index === -1) {
                reject({
                    code: 404,
                    message: 'Album not found'
                });
            } else {
                data.albums[index] = body;
                resolve();
            }
        } catch (error) {
            reject(error);
        }
    });
}


exports.albumsIdTracksGET = function (id, limit = 20, offset = 0) {
    return new Promise(function (resolve, reject) {
        try {
            const album = data.albums.find(album => album.id === id);
            if (!album) {
                reject({
                    code: 404,
                    message: 'Album not found'
                });
            } else {
                const tracks = album.tracks
                    .slice(offset, Math.min(offset + limit, album.tracks.length));
                resolve(tracks);
            }
        } catch (error) {
            reject(error);
        }
    });
}


exports.albumsPOST = function (body) {
    return new Promise(function (resolve, reject) {
        try {
            const newAlbum = {
                id: data.albums.length + 1,
                ...body
            };
            data.albums.push(newAlbum);
            resolve(newAlbum);
        } catch (error) {
            reject(error);
        }
    })
}

