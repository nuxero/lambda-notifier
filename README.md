# lambda-notifier
A small lambda function to send notifications using SNS as part of a CodePipeline job

## Provisioning
The repo also contains a terraform file for provisioning the lambda function, its associated role and a sns topic for sending notifications.

Set your aws credentials and the corresponding region in `provider.tf` and make sure you update the sns topic in the `index.js` function.

## Usage
Create the function on lambda and then create the stage in CodePipeline with the User Parameter value as follows:

    {"message":"A message yo would like to send","subject":"Deployment Notification Title"}

