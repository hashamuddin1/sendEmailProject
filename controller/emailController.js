const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
require("dotenv").config();

const sendEmail = async (req, res) => {
  try {
    const msg = {
      to: req.body.receiverEmail,
      from: {
        name: "EBOTZZ",
        email: process.env.SENDGRID_SENDER_EMAIL,
      },
      subject: "Sent Product Details",
      templateId: process.env.SENDGRID_PRODUCT_DETAIL_TEMPLATE_ID,
      dynamicTemplateData: {
        userName: req.body.userName,
        productList: req.body.productList,
      },
    };
    sgMail.send(msg).then(() => {
      return res.send({
        status: 200,
        message: "Email Sent Successfully",
      });
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }
};

module.exports = {
  sendEmail,
};
