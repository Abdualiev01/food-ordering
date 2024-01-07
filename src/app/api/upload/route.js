import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import uniqid from "uniqid";

export async function POST(req) {
  const data = await req.formData();
  if (data.get("file")) {
    const file = data.get("file");
    console.log(file);
    const s3Client = new S3Client({
      region: "eu-north-1",
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY,
        secretAccessKey: process.env.AWS_SECRET_KEY,
      },
    });
    const ext = file.name.split(".").slice(-1)[0];

    const newFileName = uniqid() + "." + ext;

    const chunks = [];
    for await (const chunk of file.stream()) {
      chunks.push(chunk);
    }
    const buffer = Buffer.concat(chunks);
    console.log("s3Client", buffer);

    const bucket = "abror-food-ordering";
    try {
      const res = await s3Client.send(
        new PutObjectCommand({
          Bucket: bucket,
          Key: newFileName,
          ACL: "public-read",
          ContentType: file.type,
          Body: buffer,
        })
      );
      console.log("File uploaded successfully:", res);
    } catch (error) {
      console.error("Error uploading file to S3:", error);
    }

    const link = "https://" + bucket + ".s3.amazonaws.com/" + newFileName;
    console.log("link ", link);
    return Response.json(link);
  }
  return Response.json(true);
}
