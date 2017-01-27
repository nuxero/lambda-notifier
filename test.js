var index = require('./index.js');

var event = {
  "CodePipeline.job": {
      "id": "myId",
      "data": {
          "actionConfiguration": {
              "configuration": {
                  "UserParameters": "{\"message\": \"test message\",\"subject\": \"test subject\"}"
              }
          }
      }
  },
  "key2": "value2",
  "key1": "value1"
}

index.handler(event, null);
