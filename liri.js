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
            if (var i = 0; i < data.tracks.items.lenth; i++) {

            }
        }
    });
}




//******************//Spotify*****************/











console.log(process.argv);