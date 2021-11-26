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
    user: "",
    pass: "",
  },
  tls: { rejectUnauthorized: false },
});
function createMail(toUser) {
  var mailOptions = {
    from: "",
    to: toUser,
    subject: "Mail from Personality Development Association",
    /*Render an ejs for the email body */
    html: ``,
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
