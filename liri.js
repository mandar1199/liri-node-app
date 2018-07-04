//storing recieved info from api keys into variables
var keys = require("./keys.js");
var twitter = require("twitter");
var spotify = require("spotify");

// read and write files
var fs = require('fs');

//setting parameters
var command = process.argv[2];
var query = process.argv[3];

//functions for app commands
var myTweets = function() {
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
	client.get('statuses/user_timeline', params, function(error, tweets, response) {
		if(error) {
			console.log('Error occurred: ' + error);
		} else { 
	  	console.log("My 20 Most Recent Tweets");
	  	console.log("");

	  	for(var i = 0; i < tweets.length; i++) {
	  		console.log("( #" + (i + 1) + " )  " + tweets[i].text);
	  		console.log("Created:  " + tweets[i].created_at);
	  		console.log("");
	  	}
	  }
	});
}