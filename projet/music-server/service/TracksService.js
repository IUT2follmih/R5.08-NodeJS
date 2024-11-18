'use strict';


/**
 * Get all tracks
 *
 * limit Integer  (optional)
 * offset Integer  (optional)
 * returns List
 **/
exports.tracksGET = function(limit,offset) {
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
 * Get tracks by genre
 *
 * genre String 
 * limit Integer  (optional)
 * offset Integer  (optional)
 * returns List
 **/
exports.tracksGenreGenreGET = function(genre,limit,offset) {
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
 * Delete a track
 *
 * id String 
 * no response value expected for this operation
 **/
exports.tracksIdDELETE = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get track by ID
 *
 * id String 
 * returns Track
 **/
exports.tracksIdGET = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
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
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get musical info of a track
 *
 * id String 
 * returns MusicalInfo
 **/
exports.tracksIdMusical_infoGET = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "instruments" : [ "instruments", "instruments" ],
  "mood" : "mood",
  "energyLevel" : "energyLevel",
  "style" : "style",
  "key" : "key"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update a track
 *
 * body Track 
 * id String 
 * no response value expected for this operation
 **/
exports.tracksIdPUT = function(body,id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get stats of a track
 *
 * id String 
 * returns Stats
 **/
exports.tracksIdStatsGET = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "shares" : 5,
  "downloads" : 2,
  "peakPosition" : 7,
  "streams" : 1,
  "weeklyTrend" : "weeklyTrend",
  "likes" : 5
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Create a new track
 *
 * body Track 
 * no response value expected for this operation
 **/
exports.tracksPOST = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

