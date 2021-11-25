const nodemailer = require("nodemailer");
const mailer = require("@sendgrid/mail");
const cron = require("node-cron");
mailer.setApiKey(
  "SG.sLthKgF6RLmNrhitFy1umg.bPFRFCLsK7lHU3Q0L_T97bzN1DfZjdxh4SNaBK0pme6FSao"
);
var transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "aspbrothers2001@gmail.com",
    pass: "Aspbrothers@20012004",
  },
  tls: { rejectUnauthorized: false },
});
function createMail(toUser) {
  var mailOptions = {
    from: "aspbrothers2001@gmail.com",
    to: toUser,
    subject: "Mail from Personality Development Association",
    html: `<p>A request to reset the password for your account has been made at CodeChef from 223.178.108.238</p><p>This is a one-time login, so it can be used only once. It expires after one day and nothing will happen if it's not used.</p>`,
  };

  transporter.sendMail(mailOptions, function (err, info) {
    if (err) {
      console.log(err);
    } else {
      console.log("email sent:" + info.response);
    }
  });
}
module.exports = createMail;
