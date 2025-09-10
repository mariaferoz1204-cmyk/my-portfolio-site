const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Create a transporter object using your email service
const transporter = nodemailer.createTransport({
    service: 'gmail',  // Replace with your email service (e.g., Gmail)
    auth: {
        user: 'your-email@gmail.com',  // Your email address
        pass: 'your-email-password'    // Your email password (use App Passwords if using Gmail 2FA)
    }
});

// Handle POST request at '/checkout'
app.post('/checkout', (req, res) => {
    const { orderDetails } = req.body;

    // Set up the email data
    const mailOptions = {
        from: 'your-email@gmail.com', // Sender address
        to: 'mariaferoz1204@gmail.com', // Receiver address
        subject: 'Order Confirmation', // Subject line
        text: `You have received an order. Details: ${orderDetails}` // Email content
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            return res.status(500).json({ message: 'Failed to place the order. Please try again.' });
        }
        console.log('Email sent:', info.response);
        return res.status(200).json({ message: 'Order placed successfully! You will receive a call shortly.' });
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
