/* eslint-disable no-console */
import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { email, name, phone, message } =
      typeof req.body === 'string' ? JSON.parse(req.body) : req.body;

    if (!email || !name || !phone) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Configure transporter
    // Note: User will need to set these environment variables
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.EMAIL_PORT || '587', 10),
      secure: process.env.EMAIL_SECURE === 'true',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"Libralytics Funnel" <${
        process.env.EMAIL_USER || 'no-reply@libralytics.app'
      }>`,
      to: 'Libralytics.ext@gmail.com',
      subject: `New Lead: ${name}`,
      text: `
New Lead Received:
Name: ${name}
Email: ${email}
Phone: ${phone}
Message: ${message}
      `,
      html: `
<h3>New Lead Received</h3>
<p><strong>Name:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Phone:</strong> ${phone}</p>
<p><strong>Message:</strong></p>
<p>${message.replace(/\n/g, '<br>')}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

export default handler;
