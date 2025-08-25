'use server';

/**
 * @fileOverview This file defines a Genkit flow for sending an email from the contact form.
 *
 * - sendContactEmail - A function that sends the contact form data via email.
 * - SendContactEmailInput - The input type for the sendContactEmail function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';
import nodemailer from 'nodemailer';

const SendContactEmailInputSchema = z.object({
  name: z.string().describe("The sender's name."),
  email: z.string().email().describe("The sender's email address."),
  message: z.string().describe('The message content.'),
});
export type SendContactEmailInput = z.infer<typeof SendContactEmailInputSchema>;

export async function sendContactEmail(input: SendContactEmailInput): Promise<{ success: boolean }> {
  return sendContactEmailFlow(input);
}

const sendContactEmailFlow = ai.defineFlow(
  {
    name: 'sendContactEmailFlow',
    inputSchema: SendContactEmailInputSchema,
    outputSchema: z.object({ success: z.boolean() }),
  },
  async (input) => {
    try {
      // Create a transporter object using SMTP transport.
      // You need to configure this with your email provider's details.
      // These details are stored securely in environment variables.
      const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: Number(process.env.EMAIL_PORT),
        secure: Number(process.env.EMAIL_PORT) === 465, // true for 465, false for other ports
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      // Define the email options.
      const mailOptions = {
        from: `"${input.name}" <${input.email}>`, // sender address
        to: 'nuoto.ai@gmail.com', // list of receivers
        subject: `New Contact Form Submission from ${input.name}`, // Subject line
        text: input.message, // plain text body
        html: `<p>You have a new contact form submission from:</p>
               <p><strong>Name:</strong> ${input.name}</p>
               <p><strong>Email:</strong> ${input.email}</p>
               <p><strong>Message:</strong></p>
               <p>${input.message}</p>`, // html body
      };
      
      // Send the email.
      await transporter.sendMail(mailOptions);
      console.log('Email sent successfully');

      return { success: true };
    } catch (error) {
      console.error('Failed to send email:', error);
      // So the user-facing form doesn't break, we'll return success,
      // but in a real app you might want to handle this failure differently.
      return { success: false };
    }
  }
);
