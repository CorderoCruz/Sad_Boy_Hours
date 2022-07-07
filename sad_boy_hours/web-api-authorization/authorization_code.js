<<<<<<< HEAD
$( document ).ready(function() {
  // Helper Function to Extract Access Token for URL
 const getUrlParameter = (sParam) => {
   let sPageURL = window.location.search.substring(1),////substring will take everything after the https link and split the #/&
       sURLVariables = sPageURL != undefined && sPageURL.length > 0 ? sPageURL.split('#') : [],
       sParameterName,
       i;
   let split_str = window.location.href.length > 0 ? window.location.href.split('#') : [];
   sURLVariables = split_str != undefined && split_str.length > 1 && split_str[1].length > 0 ? split_str[1].split('&') : [];
   for (i = 0; i < sURLVariables.length; i++) {
       sParameterName = sURLVariables[i].split('=');
       if (sParameterName[0] === sParam) {
           return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
       }
   }
=======
var express = require('express'); // Express web server framework
var request = require('request'); // "Request" library
var cors = require('cors');
var querystring = require('querystring');
var cookieParser = require('cookie-parser');

var client_id = '7a20929f48a445a98c047b5c304cd887'; // Your client id
var client_secret = '0fd274b0e2d14fe48d097bb19adc7d10'; // Your secret
<<<<<<< HEAD
var redirect_uri = 'https://corderocruz.github.io/Sad_Boy_Hours/sad_boy_hours/; // Your redirect uri
=======
var redirect_uri = "https://corderocruz.github.io/Sad_Boy_Hours/sad_boy_hours/redirected"; // Your redirect uri
>>>>>>> 16bf0eef200f088fdc0e3e4e5b03025906df09a6

/**
 * Generates a random string containing numbers and letters
 * @param  {number} length The length of the string
 * @return {string} The generated string
 */
var generateRandomString = function(length) {
  var text = '';
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
>>>>>>> 40bf78fc51a777098ff577180df060c87b0e860a
};

 // Get Access Token
 const accessToken = getUrlParameter('access_token');

 // AUTHORIZE with Spotify (if needed)
 // *************** REPLACE THESE VALUES! *************************
 let client_id = '7a20929f48a445a98c047b5c304cd887';
 // Use the following site to convert your regular url to the encoded version:
 // https://www.url-encode-decode.com/
 let redirect_uri = 'https%3A%2F%2Fcorderocruz.github.io%2FSad_Boy_Hours%2Fsad_boy_hours%2Fredirected'; // GitHub Pages URL or whatever your public url to this app is
 // *************** END *************************

 const redirect = `https://accounts.spotify.com/authorize?client_id=7a20929f48a445a98c047b5c304cd887&response_type=token&redirect_uri=https%3A%2F%2Fcorderocruz.github.io%2FSad_Boy_Hours%2Fsad_boy_hours%2Fredirected`;
 // Don't authorize if we have an access token already
 if(accessToken == null || accessToken == "" || accessToken == undefined){
   window.location.replace(redirect);
 }

 // Search button has been clicked
 $( "#search_button" ).click(function() {
   //Get the value of the search box
   let raw_search_query = $('#search-text').val();
   let search_query = encodeURI(raw_search_query);
   // Make Spotify API call
   // Note: We are using the track API endpoint.
   $.ajax({
     url: `https://api.spotify.com/v1/search?q=${search_query}&type=track`,
     type: 'GET',
     headers: {
         'Authorization' : 'Bearer ' + accessToken
     },
     success: function(data) {
       // Load our songs from Spotify into our page
       let num_of_tracks = data.tracks.items.length;
       let count = 0;
       // Max number of songs is 12
       const max_songs = 12;
       while(count < max_songs && count < num_of_tracks){
         // Extract the id of the FIRST song from the data object
         let id = data.tracks.items[count].id;
         // Constructing two different iframes to embed the song
         let src_str = `https://open.spotify.com/embed/track/${id}`;
         let iframe = `<div class='song'><iframe src=${src_str} frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe></div>`;
         let parent_div = $('#song_'+ count);
         parent_div.html(iframe);
         count++;
       }
     }
   }); // End of Spotify ajax call
 }); // End of search button
}); // End of document.ready