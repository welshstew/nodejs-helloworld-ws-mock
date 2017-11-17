const express = require('express');
const soap = require('soap');
const bodyParser = require('body-parser');

const mockService = {
    helloWorld: {
        helloWorldSOAP: {
            NewOperation: function(args) {
                return {
                    NewOperationResponse: "hello"
                };
            }
        }
    }
};

const wsdlSpec = require('fs').readFileSync(__dirname + '/wsdl/helloworld.wsdl', 'utf8');

const app = express();

//return a simple 200 when called at the base url/route
app.get('/', function (req, res, next) {
    res.status(200).send({OK: true, time: Date.now()});
});

app.use(bodyParser.raw({
    type: function() {
        return true;
    },
    limit: '5mb'
}));

//serve up the wsdl response on the /helloworld path
app.listen(50003, function() {
    //Note: /wsdl route will be handled by soap module
    //and all other routes & middleware will continue to work
    soap.listen(app, '/helloworld', mockService, wsdlSpec);
    console.log('Hello world mock listening on port 50003!  Invoke me at: http://localhost:50003/helloworld');
});
