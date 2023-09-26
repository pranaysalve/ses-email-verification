const AWS = require("aws-sdk");

// AWS.config.update({
//   accessKeyId: "AKIAT3RNUGEM6TRZ3657",
//   secretAccessKey: "KxQ867oH7WMmTcToWmXvTkQyyWjB16sQbTsroo04",
//   region: "us-east-1", // Replace with your AWS region (e.g., 'us-east-1')
// });

const ses = new AWS.SES({
  accessKeyId: process.env.accessKeyId,
  secretAccessKey: process.env.secretAccessKey,
  region: process.env.region,
});

const functionHandler = async (req, res, next) => {
  const email = req.body.email; // Get the email address from the event
  console.log({ email });
  const params = {
    EmailAddress: email,
  };

  try {
    const data = await ses.verifyEmailIdentity(params).promise();
    res.status(200).json({
      body: "Email verification initiated.",
      data: data,
    });
  } catch (error) {
    console.error("Error verifying email address:", error);
    res.status(400).json({
      body: "Email verification initiated.",
      error: error,
    });
  }
};

module.exports = functionHandler;
