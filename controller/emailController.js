const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
require("dotenv").config();

const sendEmail = async (req, res) => {
  try {

    const productTotalImages=req.body.productImages
    let obj={};
    obj["img1Display"]="none"
    obj["img2Display"]="none"
    obj["img3Display"]="none"
    obj["img4Display"]="none"
    obj["img5Display"]="none"
    if(productTotalImages.length===1){
      obj["img1Display"]="block"
      obj["productImage1"]=req.body.productImages[0]
    }
    if(productTotalImages.length===2){
      obj["img1Display"]="block"
      obj["img2Display"]="block"
      obj["productImage1"]=req.body.productImages[0]
      obj["productImage2"]=req.body.productImages[1]
    }
    if(productTotalImages.length===3){
      obj["img1Display"]="block"
      obj["img2Display"]="block"
      obj["img3Display"]="block"
      obj["productImage1"]=req.body.productImages[0]
      obj["productImage2"]=req.body.productImages[1]
      obj["productImage3"]=req.body.productImages[2]
    }
    if(productTotalImages.length===4){
      obj["img1Display"]="block"
      obj["img2Display"]="block"
      obj["img3Display"]="block"
      obj["img4Display"]="block"
      obj["productImage1"]=req.body.productImages[0]
      obj["productImage2"]=req.body.productImages[1]
      obj["productImage3"]=req.body.productImages[2]
      obj["productImage4"]=req.body.productImages[3]
    }
    if(productTotalImages.length===5){
      obj["img1Display"]="block"
      obj["img2Display"]="block"
      obj["img3Display"]="block"
      obj["img4Display"]="block"
      obj["img5Display"]="block"
      obj["productImage1"]=req.body.productImages[0]
      obj["productImage2"]=req.body.productImages[1]
      obj["productImage3"]=req.body.productImages[2]
      obj["productImage4"]=req.body.productImages[3]
      obj["productImage5"]=req.body.productImages[4]
    }
    const msg = {
      to: req.body.receiverEmail,
      from: {
        name: "EBOTZZ",
        email: process.env.SENDGRID_SENDER_EMAIL,
      },
      replyTo: {
        email: req.body.senderEmail,
      },
      subject: "Sent Product Details",
      templateId: process.env.SENDGRID_PRODUCT_DETAIL_TEMPLATE_ID,
      dynamicTemplateData: {
        senderEmail:req.body.senderEmail,
        userName: req.body.userName,
        productId: req.body.productId,
        productName: req.body.productName,
        productQuantity: req.body.productQuantity,
        productDescription: req.body.productDescription,
        ...obj
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
