resource "aws_lambda_function" "trainwith-backend-notifier" {
  function_name = "trainwith-backend-notifier"
  handler       = "index.handler"
  role          = "arn:aws:iam::635996402552:role/trainwith-backend-notifier"
  runtime       = "nodejs6.10"
  #filename      = "lambda-notifier.zip"
}

resource "aws_iam_role" "trainwith-backend-notifier" {
  name                = "trainwith-backend-notifier"
  path                = "/"
  assume_role_policy  =<<POLICY
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "Service": "lambda.amazonaws.com"
      },
      "Action": "sts:AssumeRole"
    }
  ]
}
POLICY
}

resource "aws_sns_topic" "trainwith-backend-lambda-notifier" {
  name = "sns-topic-lambda-notifier"
}
