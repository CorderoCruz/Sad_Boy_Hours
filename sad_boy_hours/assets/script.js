var client_id = '7a20929f48a445a98c047b5c304cd887';
var redirect_uri = 'https://corderocruz.github.io/Sad_Boy_Hours/sad_boy_hours/redirected';

var app = express();

app.get('/login', function(req, res) {

  var state = generateRandomString(16);
  var scope = 'user-read-private user-read-email';

  res.redirect('https://accounts.spotify.com/authorize?' +
    querystring.stringify({
      response_type: 'code',
      client_id: client_id,
      scope: scope,
      redirect_uri: redirect_uri,
      state: state
    }));
});
