var http = require('http');

var apiKey = '';

var request = function(method, data, callback) {
  var reqData = '{"alfred":"0.1","key":"' + apiKey + '","method":"' + method + '","params":{';

  if(data !== null) {
    console.log('manipulating');
    for(var key in data) {
      reqData += '"' + key + '":"' + data[key] + '",';
    }

    reqData = reqData.substring(0, reqData.length - 1);
  }

  reqData += '}}';

  console.log('REQUEST http://alf.re/d/ ' + reqData);

  var options = {
    host: 'alf.re',
    port: 80,
    path: '/d/',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': reqData.length
    }
  };

  var alfredReq = http.request(options, function(alfredRes) {
    alfredRes.setEncoding('utf-8');

    var responseString = '';

    alfredRes.on('data', function(resData) {
      responseString += resData;
    });

    alfredRes.on('end', function() {
      var resultObject = JSON.parse(responseString);
      callback(resultObject);
    });
  });

  alfredReq.write(reqData);
  alfredReq.end();
};

request('Alfred.Login', {
  'username' : 'guest',
  'password' : 'hunter2'
}, function(data) {
  apiKey = data.data.key;
});

module.exports = {
  request: request
};
