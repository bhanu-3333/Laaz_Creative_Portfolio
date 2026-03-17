const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Nodemailer Transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Root Route for health check
app.get('/', (req, res) => {
  res.send('Laaz Creative API is running...');
});

// Routes
app.post('/api/enquire', async (req, res) => {
  const { firstName, lastName, email, phone, subject, message } = req.body;

  const mailOptions = {
    from: email,
    to: 'laazcreative@gmail.com',
    subject: `New Enquiry - ${subject}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee;">
        <h2 style="color: #000; border-bottom: 2px solid #000; padding-bottom: 10px;">New Enquiry Received</h2>
        <p><b>Name:</b> ${firstName} ${lastName}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Subject:</b> ${subject}</p>
        <div style="margin-top: 20px; padding: 15px; background: #fafafa; border-left: 4px solid #000;">
          <p><b>Message:</b></p>
          <p>${message}</p>
        </div>
      </div>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: 'Message Sent Successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, message: 'Failed to send message' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
