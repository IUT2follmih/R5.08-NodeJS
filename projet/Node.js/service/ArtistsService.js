'use strict';

const data = require('../data/donnees.json');

exports.artistsGET = function (limit = 10, offset = 0) {
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
            const artist = data.artists.find(artist => artist.id === id);
            if (!artist) {
                reject({
                    code: 404,
                    message: 'Artist not found'
                });
            } else {
                resolve(artist);
            }
        } catch (error) {
            reject(error);
        }
    });
}

exports.artistsIdTracksGET = function (id, limit = 20, offset = 0) {
    return new Promise(function (resolve, reject) {
        try {
            const artistTracks = data.tracks
                .filter(track => track.mainArtistId === id)
                .slice(offset, Math.min(offset + limit, data.tracks.length));

            if (!artistTracks.length) {
                reject({
                    code: 404,
                    message: 'No tracks found for this artist'
                });
            } else {
                resolve(artistTracks);
            }
        } catch (error) {
            reject(error);
        }
    });
}

exports.artistsIdAlbumsGET = function (id, limit = 20, offset = 0) {
    return new Promise(function (resolve, reject) {
        try {
            const artistAlbums = data.albums
                .filter(album => album.artistId === id)
                .slice(offset, Math.min(offset + limit, data.albums.length));

            if (!artistAlbums.length) {
                reject({
                    code: 404,
                    message: 'No albums found for this artist'
                });
            } else {
                resolve(artistAlbums);
            }
        } catch (error) {
            reject(error);
        }
    });
}

exports.artistsPOST = function (body) {
    return new Promise(function (resolve, reject) {
        try {
            const newArtist = {
                id: `artist_${data.artists.length + 1}`,
                ...body
            };
            data.artists.push(newArtist);
            resolve(newArtist);
        } catch (error) {
            reject(error);
        }
    });
}

exports.artistsIdPUT = function (body, id) {
    return new Promise(function (resolve, reject) {
        try {
            const index = data.artists.findIndex(artist => artist.id === id);
            if (index === -1) {
                reject({
                    code: 404,
                    message: 'Artist not found'
                });
            } else {
                data.artists[index] = {...data.artists[index], ...body};
                resolve();
            }
        } catch (error) {
            reject(error);
        }
    });
}

exports.artistsIdDELETE = function (id) {
    return new Promise(function (resolve, reject) {
        try {
            const index = data.artists.findIndex(artist => artist.id === id);
            if (index === -1) {
                reject({
                    code: 404,
                    message: 'Artist not found'
                });
            } else {
                data.artists.splice(index, 1);
                resolve();
            }
        } catch (error) {
            reject(error);
        }
    });
}