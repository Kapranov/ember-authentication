'use strict';

const bodyParser = require('body-parser');

module.exports = function(app) {
  app.use(bodyParser.urlencoded({ extended: true }));

  app.get('/api/codes', function (req, res) {
    // Protecting the State secrets from Evil
    if (req.headers['authorization'] !== "Bearer some bs") {
      return res.status(401).send('Unauthorized');
    }
    // For JSONAPIAdapter
    return res.status(200).send({
      "data": [{
        "type": "codes",
        "id": "1",
        "attributes": {
          "description": "Obama Nuclear Missile Launching Code is: lovedronesandthensa"
        },
      },{
        "type": "codes",
        "id": "2",
        "attributes": {
          "description": "Putin Nuclear Missile Launching Code is: invasioncoolashuntingshirtless"
        }
      }]
    });
    // app/adapter/application.js
    // export default DS.JSONAPIAdapter.extend({
    // });

    // For RESTAdapter
    //
    // return res.status(200).send({
    //   codes: [
    //     { id: 1, description: 'Obama Nuclear Missile Launching Code is: lovedronesandthensa' },
    //     { id: 2, description: 'Putin Nuclear Missile Launching Code is: invasioncoolashuntingshirtless' }
    //   ]
    // });
    // app/adapter/application.js
    // export default DS.RESTAdapter.extend({
    //   namespace: 'api'
    // });
  });
  app.post('/token', function(req, res) {
    if (req.body.username == 'login' && req.body.password == 'password') {
      res.send({ access_token: "some bs" });
    } else {
      res.status(400).send({ error: "invalid_grant" });
    }
  });
};
