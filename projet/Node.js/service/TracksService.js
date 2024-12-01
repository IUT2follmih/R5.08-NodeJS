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
                    message: 'ID invalide : l\'ID doit être une chaîne de caractères non vide'
                });
                return;
            }

            const idPattern = /^track_\d+$/;
            if (!idPattern.test(id)) {
                reject({
                    code: 400,
                    message: 'Format d\'ID invalide : l\'ID doit être au format "track_NUMBER"'
                });
                return;
            }

            const track = data.tracks.find(track => track.id === id);

            if (!track) {
                reject({
                    code: 404,
                    message: `Track avec l'ID ${id} non trouvée`
                });
                return;
            }

            resolve(track);
        } catch (error) {
            reject({
                code: 500,
                message: 'Erreur interne du serveur',
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
                    message: 'Style invalide : le style doit être une chaîne de caractères non vide'
                });
                return;
            }

            const normalizedStyle = style.toLowerCase().trim();
            if (!VALID_STYLES.includes(normalizedStyle)) {
                reject({
                    code: 400,
                    message: `Style invalide : "${style}". Les styles disponibles sont : ${VALID_STYLES.join(', ')}`
                });
                return;
            }

            const filteredTracks = data.tracks
                .filter(track => track.musicalInfo.style.toLowerCase() === normalizedStyle);

            if (filteredTracks.length === 0) {
                reject({
                    code: 404,
                    message: `Aucune track trouvée pour le style "${style}"`
                });
                return;
            }

            const paginatedTracks = filteredTracks
                .slice(offset, Math.min(offset + limit, filteredTracks.length));

            resolve(paginatedTracks);
        } catch (error) {
            reject({
                code: 500,
                message: 'Erreur interne du serveur',
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
                    message: 'ID invalide : l\'ID doit être une chaîne de caractères non vide'
                });
                return;
            }

            const idPattern = /^track_\d+$/;
            if (!idPattern.test(id)) {
                reject({
                    code: 400,
                    message: 'Format d\'ID invalide : l\'ID doit être au format "track_NUMBER"'
                });
                return;
            }

            const track = data.tracks.find(track => track.id === id);
            if (!track) {
                reject({
                    code: 404,
                    message: `Track avec l'ID ${id} non trouvée`
                });
                return;
            }

            if (!track.stats) {
                reject({
                    code: 404,
                    message: `Statistiques non trouvées pour la track ${id}`
                });
                return;
            }

            resolve(track.stats);
        } catch (error) {
            reject({
                code: 500,
                message: 'Erreur interne du serveur',
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
                    message: 'ID invalide : l\'ID doit être une chaîne de caractères non vide'
                });
                return;
            }

            const idPattern = /^track_\d+$/;
            if (!idPattern.test(id)) {
                reject({
                    code: 400,
                    message: 'Format d\'ID invalide : l\'ID doit être au format "track_NUMBER"'
                });
                return;
            }

            const track = data.tracks.find(track => track.id === id);
            if (!track) {
                reject({
                    code: 404,
                    message: `Track avec l'ID ${id} non trouvée`
                });
                return;
            }

            if (!track.musicalInfo) {
                reject({
                    code: 404,
                    message: `Informations musicales non trouvées pour la track ${id}`
                });
                return;
            }

            resolve(track.musicalInfo);
        } catch (error) {
            reject({
                code: 500,
                message: 'Erreur interne du serveur',
                error: error.message
            });
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

exports.tracksIdPUT = function (body, id) {
    return new Promise(function (resolve, reject) {
        try {
            if (!id || typeof id !== 'string' || !id.trim()) {
                reject({
                    code: 400,
                    message: 'ID invalide : l\'ID doit être une chaîne de caractères non vide'
                });
                return;
            }

            const idPattern = /^track_\d+$/;
            if (!idPattern.test(id)) {
                reject({
                    code: 400,
                    message: 'Format d\'ID invalide : l\'ID doit être au format "track_NUMBER"'
                });
                return;
            }

            if (!body || typeof body !== 'object') {
                reject({
                    code: 400,
                    message: 'Body invalide : le body doit être un objet'
                });
                return;
            }

            const index = data.tracks.findIndex(track => track.id === id);
            if (index === -1) {
                reject({
                    code: 404,
                    message: `Track avec l'ID ${id} non trouvée`
                });
                return;
            }

            data.tracks[index] = {...data.tracks[index], ...body};
            resolve();
        } catch (error) {
            reject({
                code: 500,
                message: 'Erreur interne du serveur',
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
                    message: 'ID invalide : l\'ID doit être une chaîne de caractères non vide'
                });
                return;
            }

            const idPattern = /^track_\d+$/;
            if (!idPattern.test(id)) {
                reject({
                    code: 400,
                    message: 'Format d\'ID invalide : l\'ID doit être au format "track_NUMBER"'
                });
                return;
            }

            const index = data.tracks.findIndex(track => track.id === id);
            if (index === -1) {
                reject({
                    code: 404,
                    message: `Track avec l'ID ${id} non trouvée`
                });
                return;
            }

            data.tracks.splice(index, 1);
            resolve();
        } catch (error) {
            reject({
                code: 500,
                message: 'Erreur interne du serveur',
                error: error.message
            });
        }
    });
}
