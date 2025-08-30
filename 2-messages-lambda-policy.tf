resource "aws_iam_policy" "messages_bucket_access_lambda_policy" {
  name = "messages-bucket-access-lambda-policy"
  policy = jsonencode({ 
    "Version": "2012-10-17",
    "Statement": [
      {
        "Effect": "Allow",
        "Action": ["s3:GetObject", "s3:ListBucket", "s3:PutObject"],
        "Resource": [
            "${aws_s3_bucket.messages_bucket.arn}",
            "${aws_s3_bucket.messages_bucket.arn}/*"
        ]
      }
    ]
 
  })
}