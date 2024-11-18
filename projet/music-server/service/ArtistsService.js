'use strict';


/**
 * Get all artists
 *
 * limit Integer  (optional)
 * offset Integer  (optional)
 * returns List
 **/
exports.artistsGET = function(limit,offset) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "country" : "country",
  "albums" : [ {
    "id" : "id",
    "title" : "title"
  }, {
    "id" : "id",
    "title" : "title"
  } ],
  "name" : "name",
  "spotifyId" : "spotifyId",
  "id" : "id",
  "type" : "solo",
  "tracks" : [ null, null ]
}, {
  "country" : "country",
  "albums" : [ {
    "id" : "id",
    "title" : "title"
  }, {
    "id" : "id",
    "title" : "title"
  } ],
  "name" : "name",
  "spotifyId" : "spotifyId",
  "id" : "id",
  "type" : "solo",
  "tracks" : [ null, null ]
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Delete an artist
 *
 * id String 
 * no response value expected for this operation
 **/
exports.artistsIdDELETE = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get artist by ID
 *
 * id String 
 * returns Artist
 **/
exports.artistsIdGET = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "country" : "country",
  "albums" : [ {
    "id" : "id",
    "title" : "title"
  }, {
    "id" : "id",
    "title" : "title"
  } ],
  "name" : "name",
  "spotifyId" : "spotifyId",
  "id" : "id",
  "type" : "solo",
  "tracks" : [ null, null ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update an artist
 *
 * body Artist 
 * id String 
 * no response value expected for this operation
 **/
exports.artistsIdPUT = function(body,id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get tracks by artist
 *
 * id String 
 * limit Integer  (optional)
 * offset Integer  (optional)
 * returns List
 **/
exports.artistsIdTracksGET = function(id,limit,offset) {
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
 * Create a new artist
 *
 * body Artist 
 * no response value expected for this operation
 **/
exports.artistsPOST = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

