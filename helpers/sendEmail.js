const sgMail = require("@sendgrid/mail");
require("dotenv").config();

const { SENDGRID_API_KEY, SENDGRID_EMAIL, BASE_URL } = process.env;

sgMail.setApiKey(SENDGRID_API_KEY);

const sendEmail = async (email, verificationToken) => {
  const msg = {
    from: SENDGRID_EMAIL,
    to: email,
    subject: "Verify email",
    text: "To starting use our site please verify your email and sign in",
    html: `<a target="_blank" href="${BASE_URL}/api/users/verify/${verificationToken}">Click to verify email</a>`,
  };

  await sgMail.send(msg);

  return true;
};

module.exports = sendEmail;
