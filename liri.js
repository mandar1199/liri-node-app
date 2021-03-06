require("dotenv").config();
//storing recieved info from api keys into variables
var keys = require("./keys.js");
var Twitter = require("twitter");
var Spotify = require("node-spotify-api");
var request = require("request");

// read and write files
var fs = require("fs");

//setting parameters
var command = process.argv[2];
var query = process.argv[3];

//functions for app commands
function myTweets() {
    //new variable for twitter exports of keys.js file
	var client = new Twitter({
		consumer_key: twitterCredentials.consumer_key,
		consumer_secret: twitterCredentials.consumer_secret,
		access_token_key: twitterCredentials.access_token_key,
		access_token_secret: twitterCredentials.access_token_secret
	});

	//twitter api parameters
	var params = {
		screen_name: 'amanda',
		count: 20
	};

	//get method for last 20 tweets from twitter account
	client.get('statuses/user_timeline', params, function(error, tweets, response){
        if(!error) {
            console.log("Error" + error);
        }else{
            console.log("Tweets" + tweets);
        }
    });
    
}