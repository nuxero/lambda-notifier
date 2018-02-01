# lambda-notifier
A small lambda function to send notifications using SNS as part of a CodePipeline job
## Usage
Create the function on lambda and then create the stage in CodePipeline with the User Parameter value as follows:

    {"message":"A message yo would like to send","subject":"Deployment Notification Title"}
