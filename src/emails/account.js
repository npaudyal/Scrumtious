
const sgMail = require('@sendgrid/mail')


sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'npaudyal01@gmail.com',
        subject: 'Welcome to Scrumptious!',
        text: `Welcome to the app, ${name}. This email is to notify you that your account has been created automatically! You might get emails regrading your account deletion or creation manytimes throughout the course of backend debugging!`
        
    })

}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'npaudyal01@gmail.com',
        subject: 'Sorry to see you go!',
        text: `Bye Bye ${name},  we hope to see you again!`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}

