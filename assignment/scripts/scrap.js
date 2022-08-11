console.log('***** Music Collection *****')

// - Create a variable `collection` that starts as an empty array.

collection = [];
let track1, track2, track3;

function addToCollection (title, artist, year, tracks) { // function DOES NOT WORK if any of the track arguments are missing! had to add blank track to input of one record with 2 tracks.
    album = {
        title: title,
        artist: artist,
        year: year,
        tracks: [tracks]
    }
    collection.push(album);
    return album;
}

addToCollection('Solo for Wounded CD', 'Yasunao Tone', 1997, [track1 = {
        name: 'Part I',
        time: '4:33'
    }, track2 = {
        name: 'Part II',
        time: '4:33'
}]);

addToCollection('Secret Treaties', 'Blue Oyster Cult', 1972, [track1 = {
        name: `Career of Evil`,
        time: `4:33`
    }, track2 = {
        name: `Subhuman`,
        time: `4:33`
    }, track3 = {
        name: `Dominance and Submission`,
        time: `4:33`}]);

console.log(collection);