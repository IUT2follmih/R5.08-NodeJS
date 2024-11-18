'use strict';


/**
 * Get all albums
 *
 * limit Integer  (optional)
 * offset Integer  (optional)
 * returns List
 **/
exports.albumsGET = function(limit,offset) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "releaseDate" : "2000-01-23",
  "totalTracks" : 0,
  "artistId" : "artistId",
  "artistName" : "artistName",
  "id" : "id",
  "label" : "label",
  "title" : "title",
  "distribution" : "distribution",
  "tracks" : [ {
    "id" : "id",
    "title" : "title"
  }, {
    "id" : "id",
    "title" : "title"
  } ]
}, {
  "releaseDate" : "2000-01-23",
  "totalTracks" : 0,
  "artistId" : "artistId",
  "artistName" : "artistName",
  "id" : "id",
  "label" : "label",
  "title" : "title",
  "distribution" : "distribution",
  "tracks" : [ {
    "id" : "id",
    "title" : "title"
  }, {
    "id" : "id",
    "title" : "title"
  } ]
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Delete an album
 *
 * id String 
 * no response value expected for this operation
 **/
exports.albumsIdDELETE = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get album by ID
 *
 * id String 
 * returns Album
 **/
exports.albumsIdGET = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "releaseDate" : "2000-01-23",
  "totalTracks" : 0,
  "artistId" : "artistId",
  "artistName" : "artistName",
  "id" : "id",
  "label" : "label",
  "title" : "title",
  "distribution" : "distribution",
  "tracks" : [ {
    "id" : "id",
    "title" : "title"
  }, {
    "id" : "id",
    "title" : "title"
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update an album
 *
 * body Album 
 * id String 
 * no response value expected for this operation
 **/
exports.albumsIdPUT = function(body,id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get tracks from album
 *
 * id String 
 * limit Integer  (optional)
 * offset Integer  (optional)
 * returns List
 **/
exports.albumsIdTracksGET = function(id,limit,offset) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "mood" : "mood",
  "producerName" : "producerName",
  "albumId" : "albumId",
  "isrc" : "isrc",
  "language" : "language",
  "title" : "title",
  "featuredArtists" : [ {
    "name" : "name",
    "id" : "id"
  }, {
    "name" : "name",
    "id" : "id"
  } ],
  "mainArtistId" : "mainArtistId",
  "duration" : "duration",
  "musicalInfo" : {
    "instruments" : [ "instruments", "instruments" ],
    "mood" : "mood",
    "energyLevel" : "energyLevel",
    "style" : "style",
    "key" : "key"
  },
  "energyLevel" : "energyLevel",
  "stats" : {
    "shares" : 5,
    "downloads" : 2,
    "peakPosition" : 7,
    "streams" : 1,
    "weeklyTrend" : "weeklyTrend",
    "likes" : 5
  },
  "albumTitle" : "albumTitle",
  "id" : "id",
  "mainArtistName" : "mainArtistName",
  "producerId" : "producerId",
  "releaseYear" : 6,
  "bpm" : 0,
  "key" : "key"
}, {
  "mood" : "mood",
  "producerName" : "producerName",
  "albumId" : "albumId",
  "isrc" : "isrc",
  "language" : "language",
  "title" : "title",
  "featuredArtists" : [ {
    "name" : "name",
    "id" : "id"
  }, {
    "name" : "name",
    "id" : "id"
  } ],
  "mainArtistId" : "mainArtistId",
  "duration" : "duration",
  "musicalInfo" : {
    "instruments" : [ "instruments", "instruments" ],
    "mood" : "mood",
    "energyLevel" : "energyLevel",
    "style" : "style",
    "key" : "key"
  },
  "energyLevel" : "energyLevel",
  "stats" : {
    "shares" : 5,
    "downloads" : 2,
    "peakPosition" : 7,
    "streams" : 1,
    "weeklyTrend" : "weeklyTrend",
    "likes" : 5
  },
  "albumTitle" : "albumTitle",
  "id" : "id",
  "mainArtistName" : "mainArtistName",
  "producerId" : "producerId",
  "releaseYear" : 6,
  "bpm" : 0,
  "key" : "key"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Create a new album
 *
 * body Album 
 * no response value expected for this operation
 **/
exports.albumsPOST = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

