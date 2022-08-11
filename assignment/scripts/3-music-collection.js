console.log('***** Music Collection *****')

// - Create a variable `collection` that starts as an empty array.

collection = [];
let track1, track2, track3;

// - Add a function named `addToCollection`. This function should:
//   - Take in the album's `title`, `artist`, `yearPublished` as input parameters
//   - Create a new object having the above properties
//   - Add the new object to the end of the `collection` array
//   - Return the newly created object

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

// - Test the `addToCollection` function:
//   - Add 6 albums to your collection. Aim to have a mix of both same and different artists and published years. (Feel free to share your musical interests, or make stuff up. Totally fine either way.)
//   - Console.log each album as added using the returned value.
//   - After all are added, console.log the `collection` array.

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
        time: `4:33`
}]);
addToCollection('Western Culture', 'Henry Cow', 1978, [track1 = {
        name: `Industry`,
        time: `4:33`
    }, track2 = {
        name: `The Decay of Cities`,
        time: `4:33`
    }, track3 = {
        name: `On the Raft`,
        time: `4:33`
}]);
addToCollection('Nightclubbing', 'Grace Jones', 1980,  [track1 = {
        name: `Walking In the Rain`,
        time: `4:33`
    }, track2 = {
        name: `Pull Up to the Bumper`,
        time: `4:33`
    }, track3 = {
        name: `Use Me`,
        time: `4:33`
}]);
addToCollection('Warm Leatherette', 'Grace Jones', 1981, [track1 = {
        name: `She's Lost Control`,
        time: `4:33`
    }, track2 = {
        name: `Pars`,
        time: `4:33`
    }, track3 = {
        name: `Breakdown`,
        time: `4:33`
}]);    
addToCollection('Arthur, or the Decline and Fall', 'The Kinks', 1969, [track1 = {
        name: `Victoria`,
        time: `4:33`
    }, track2 = {
        name: `Yes Sir, No Sir`,
        time: `4:33`
    }, track3 = {
        name: `Some Mother's Son`,
        time: `4:33`
}]);    

console.log('Hey check out my Discogs!!', collection);

// - Add a function named `showCollection`. This function should:
//   - Take in an array parameter. (This allows it to be reused to show any collection, like the results from the find or search.)
//   - Console.log the number of items in the array.
//   - Loop over the array and console.log each album's information formatted like: `TITLE by ARTIST, published in YEAR`.

function showCollection (array){
    console.log(`While tasteful in your selection of records from the golden age of vanguard artistic expression within the 'rock' form, broadly concieved, the size of your collection is pathetic! only`, collection.length, `??? You should be able to *smell* our derisive sneers, you worm! `);
    for (x in array) {
        console.log(`${array[x].title} by ${array[x].artist}, published in ${array[x].year}`);
    }
}

// - Test the `showCollection` function.

showCollection(collection);

// - Add a function named `findByArtist`. This function should:
//   - Take in `artist` (a string) parameter
//   - Create an array to hold any results, empty to start
//   - Loop through the `collection` and add any objects with a matching artist to the array.
//   - Return the array with the matching results. If no results are found, return an empty array.

function findByArtist (artistSearch) {
    let results = [];
    for (let i=0; i < collection.length; i++) {
        if (collection[i].artist.toLowerCase() === artistSearch.toLowerCase()) {
            results.push(collection[i]);  
        }
    }
    return results;
}

// - Test the `findByArtist` function. Make sure to test with an artist you know is in the collection, as well as an artist you know is not in your collection. Check that for artists with multiple matches, all are found.
console.log(`Glad to see the work of Grace Jones over-represented in this small collection. Her artistic profile is in no way commensurate to her actual musical and artistic legacy, clearly a result of blatant racism within the music industry, not to mention the scourge of homophobic, anti-disco sentiment of the times!`, findByArtist('Grace Jones'));
console.log(`Who is this 'yasunao tone?' i won't even bother to capitalize the name!: `, findByArtist('yasunao tone'), `Gaaaa, this isn't even music! Fluxus artist, you say? unimpressed!`);
console.log(`Do you even have any Can?`, findByArtist('Can'), 'No? Embarassing!');
// > When testing your functions, write all tests in the JavaScript file!


// ### Stretch goals

// - Create a function called `search`. This function should:
//   - Take an input parameter for a search criteria object. Create your solution based on a search object that has these properties:
//   ```
//   { artist: 'Ray Charles', year: 1957 }
//   ```
//   - The returned output from `search` should meet these requirements:
//     - Return a new array of all items in the `collection` matching *all* of the search criteria.
//     - If no results are found, return an empty array.
//     - If there is no search object or an empty search object provided as input, then return all albums in the `collection`.


function createSearch (title, artist, year) {
    album = {
        title: title,
        artist: artist,
        year: year
    }
    collection.push(album);
    return album;
}

let searchTerm

function searchArtist (search) {
    let results = [];
    for (let i=0; i < collection.length; i++) {
        if (search === undefined || (search.artist === undefined && search.year === undefined)) {
            return collection;
        } else if (search.artist === undefined && search.year === collection[i].year) {
                results.push(collection[i]);
                console.log('** in searchArtist. match year, push to results', results); //testing script
        } else if (search.artist === collection[i].artist && search.year === undefined) {
                results.push(collection[i]);
                console.log('** in searchArtist. match artist, push to results', results); //testing script
        } else if (search.artist === collection[i].artist && search.year === collection[i].year) {
                results.push(collection[i]);
                console.log('** in searchArtist. match artist+year, push to results', results); //testing script
        
        }
    }
    return results; 
}

addToCollection('The Heliocentric Worlds of Sun Ra, Volume 1', 'Sun Ra', 1965,[track1 = {
        name: `Heliocentric`,
        time: `4:33`
    }, track2 = {
        name: `Outer Nothingess`,
        time: `4:33`
    }, track3 = {
        name: `Other Worlds`,
        time: `4:33`
}]);    
addToCollection('The Heliocentric Worlds of Sun Ra, Volume 2', 'Sun Ra', 1965,[track1 = {
        name: `The Sun Myth`,
        time: `4:33`
    }, track2 = {
        name: `A House of Beauty`,
         time: `4:33`
    }, track3 = {
        name: `Cosmic Chaos`,
        time: `4:33`
}]);
addToCollection('Space Is the Place', 'Sun Ra', 1973, [track1 = {
        name: `Space Is the Place`,
        time: `4:33`
    }, track2 = {
        name: `Images`,
        time: `4:33`
    }, track3 = {
        name: `Discipline`,
        time: `4:33`
}]);    


searchTerm = {
    artist: 'Sun Ra',
    year: 1966
}

console.log(`Testing artist match x3 + year no match`, searchTerm); //testing script
console.log(`Expecting empty array:`, searchArtist(searchTerm)); //testing script

searchTerm = {
    artist: 'Sun Ra',
    year: 1973
}

console.log(`Testing artist match x3 + year match x1`, searchTerm); //testing script
console.log(`Expecting 1 result`, searchArtist(searchTerm)); //testing script


searchTerm = {
    artist: 'Sun Ra',
    year: 1965
}

console.log(`Testing artist match x3 + year match x2`, searchTerm); //testing script
console.log(`Expecting 2 results`, searchArtist(searchTerm)); //testing script

searchTerm = {
}

console.log(`Testing empty search object`, searchTerm); //testing script
console.log(`Expecting full collection`, searchArtist(searchTerm)); //testing script

searchTerm = {
    artist: 'Sun Ra'
}

console.log(`Testing artist + empty year input`, searchTerm); //testing script
console.log(`Expecting 3 results`, searchArtist(searchTerm)); //testing script

searchTerm = {
    year: 1973
}

console.log(`Testing empty artist input + year`, searchTerm); //testing script
console.log(`Expecting 1 results`, searchArtist(searchTerm)); //testing script

console.log(`Testing NO search term: searchArtist()`); //testing script
console.log(`Expecting full collection`, searchArtist()); //testing script


// - Add an array of `tracks` to your album objects. Each track should have a `name` and `duration`. You will need to update the functions to support this new property:
//   - Update the `addToCollection` function to also take an input parameter for the array of tracks.
//   - Update `search` to allow a `trackName` search criteria.
//   - Update the `showCollection` function to display the list of tracks for each album with its name and duration.
// ```
//     TITLE by ARTIST, published in YEAR:
//     1. NAME: DURATION
//     2. NAME: DURATION
//     3. NAME: DURATION
//     TITLE by ARTIST, published in YEAR:
//     1. NAME: DURATION
//     2. NAME: DURATION
// ```

// > Make sure to test all your code!