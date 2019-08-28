const express = require('express')
const sgMail = require("@sendgrid/mail");

const app = express()

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.use(express.json());

app.post('/test', (req,res) => {
    res.send({re : req.body})
})

app.post('/mail', async (req, res) => {
    try {
        await sgMail.send({
            to: "paratantoine@gmail.com",
            from: "paratantoine@gmail.com",
            subject: `ALERT IO MAIL FROM io`,
            html: `
            user : ${req.body.user} <br>
            email : ${req.body.email} <br>
            message : ${req.body.message} <br>
            `
          });
        res.send({success : "Email has been sent"})
        // sgMail.send({
        //     to: req.body.email,
        //     from: "paratantoine@gmail.com",
        //     subject: `Hello ${req.body.user}`,
        //     html: ` <p>Hello ${req.body.user},</p>
        //             <p>Thank you for your email !  I will respond to you as soon as possible.</p>
        //             <p>See you;</p>
        //             <p>Antoine</p>
        //             `
        //   });
    } catch (err) {
        console.log(err)
        res.send({error : "An error occured, please try again later"})
    }
})

module.exports = {
   path: '/api',
   handler: app
}