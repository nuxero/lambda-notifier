var AWS = require("aws-sdk");

var topic = 'arn:aws:sns:region:accountID:sns-name';
const codepipeline = new AWS.CodePipeline();
const sns = new AWS.SNS();

exports.handler = (event, context, callback) => {

    const jobData = event['CodePipeline.job'].data;
    const jobId = event['CodePipeline.job'].id;

    const inputJson = JSON.parse(jobData.actionConfiguration.configuration.UserParameters);
    const message = inputJson.message;
    const subject = inputJson.events;

    var params = {
        Message: message,
        Subject: subject,
        TopicArn: topic
    };
    sns.publish(params, (err) => {
        if(err){
            codepipeline.putJobFailureResult({ jobId }).promise().then(() => callback(err)).catch((error)=>callback(error));
        } else {
            codepipeline.putJobSuccessResult({ jobId }).promise().then(() => callback(null,"Done")).catch((error)=>callback(error));
        }
    });
};
