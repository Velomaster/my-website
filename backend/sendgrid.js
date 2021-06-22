const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendEmail = (email, content, name) => {
    const msg = {
        to: 'gudkov.alex11@gmail.com',
        from: {
            email: 'hello@iconbespoke.com',
            name
            }, // Use the email address or domain you verified above
        subject: '-- Form Submission --',
        text: `My Website Form Submission

From: ${email}
Name: ${name}
Job Description: ${content}`
    };

    return sgMail.send(msg);
};

module.exports = sendEmail;

