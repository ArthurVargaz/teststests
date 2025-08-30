import {
  S3Client,
  ListObjectsV2Command,
  PutObjectCommand,
} from "@aws-sdk/client-s3";

const s3Client = new S3Client({ region: "us-east-1" });
const bucketName = process.env.MESSAGES_BUCKET;

// simple aws lambda handler
async function handler(event, context) {
  try {
    const method = event.requestContext?.http?.method || event.httpMethod;
    switch (method) {
      case "GET":
        // get all the files in the bucket
        const listObjectsCommand = new ListObjectsV2Command({
          Bucket: bucketName,
        });
        const response = await s3Client.send(listObjectsCommand);
        const objectsKeys = response.Contents
          ? response.Contents.map((obj) => obj.Key)
          : [];

        return {
          statusCode: 200,
          body: JSON.stringify(objectsKeys),
        };
      case "POST":
        if (event.body) {
          const command = new PutObjectCommand({
            Bucket: bucketName,
            Key: `${Date.now()}.json`,
            Body: event.body,
          });
          const response = await s3Client.send(command);
          return {
            statusCode: 200,
            body: JSON.stringify({ message: "File uploaded successfully" }),
          };
        }
        break;

      default:
        return {
          statusCode: 405,
          body: JSON.stringify({ message: "Method Not Allowed" }),
        };
    }
  } catch (error) {
    console.error(error);
  }

  return {
    statusCode: 500,
    body: JSON.stringify({ message: "internal server error" }),
  };
}

export { handler };
