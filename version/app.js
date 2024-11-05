const express = require('express');
app = express();

var response;

app.get('/', function (req, res) {

    response = 'Testing webhooks!' + '\n';

    //send the response to the client
    res.send(response);

});

app.listen(9000, function () {
  console.log('Server listening on port 8080...');
});
