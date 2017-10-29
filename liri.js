// var fs = require('fs');
// switch (switcher) {
//     case "my-tweets":
//         _twitter();
//         break;
// switch (switcher) {
//     case "spotify-this-song":
//         tweet();
//         break;
// 
// switch (switcher) {
//     case "my-tweets":
//         tweet();
//         break;
// 
// switch (switcher) {
//     case "my-tweets":
//         tweet();
//         break;
// 
// }
var request = require('request');
var switcher = process.argv[2];
// var Spotify = require('node-spotify-app');
var Twit = require('twit');
var Spotify = require('node-spotify-api');
var twitterKeys = require("./keys.js");
var

//******************TWITTER *****************/
if (switcher === "my-tweets") {
    _twitter();
}

function _twitter() {
    var params = {
        screen_name: '@kevin62350236',
        count: 20
    };
    var T = new Twit(twitterKeys);

    T.get('statuses/user_timeline', params, function(err, tweets) {
        for (var i = 0; i < tweets.length; i++) {
            console.log("TWEET: " + data[i].text + data[i].created_at);
        };
    });
};
return;
//******************//TWITTER *****************/


//******************Spotify*****************/

if (switcher === "spotify-this-song") {
    _twitter();
}

function _spotify() {
    dfu
    var spotifyKeys = require("./keys.js");
    var spotify = new Spotify({
        id: spotifyKeys.id,
        secret: spotifyKeys.password
    });
    spotify.search({
            type: 'track',
            query: title,
            limit: 1
        },
        function(err, data) {
            for (var i = 0; i < data.tracks.items.length; i++) {
                console.log('Artist:', data.tracks.items[i].artists[0].name);
                console.log('Song Name: ', data.tracks.items[i].name)
                console.log('Album Name: ', data.tracks.items[i].album.name);
            }
        });
}
return;


//I have to go back and see if I can finish the OMDB. 
//I keep running into bugs and having difficulty with Node and initializing the terminal.


//******************//Spotify*****************/
if (switcher === "movie-this") {
    _omdb();
};

function _omdb() {
    console.log('Title: ' + JSON.parse(body).Title);
}