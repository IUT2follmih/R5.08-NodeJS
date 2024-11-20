'use strict';


/**
 * Get all producers
 *
 * limit Integer  (optional)
 * offset Integer  (optional)
 * returns List
 **/
exports.producersGET = function(limit,offset) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "name" : "name",
  "id" : "id",
  "tracks" : [ {
    "id" : "id",
    "title" : "title"
  }, {
    "id" : "id",
    "title" : "title"
  } ]
}, {
  "name" : "name",
  "id" : "id",
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
 * Delete a producer
 *
 * id String 
 * no response value expected for this operation
 **/
exports.producersIdDELETE = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get producer by ID
 *
 * id String 
 * returns Producer
 **/
exports.producersIdGET = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "name" : "name",
  "id" : "id",
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
 * Update a producer
 *
 * body Producer 
 * id String 
 * no response value expected for this operation
 **/
exports.producersIdPUT = function(body,id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get tracks by producer
 *
 * id String 
 * limit Integer  (optional)
 * offset Integer  (optional)
 * returns List
 **/
exports.producersIdTracksGET = function(id,limit,offset) {
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
 * Create a new producer
 *
 * body Producer 
 * no response value expected for this operation
 **/
exports.producersPOST = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

