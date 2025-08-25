'use server';

/**
 * @fileOverview This file defines a Genkit flow for sending an email from the contact form.
 *
 * - sendContactEmail - A function that sends the contact form data via email.
 * - SendContactEmailInput - The input type for the sendContactEmail function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';

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
    console.log(`Received contact form submission:`, input);
    
    // In a real application, you would integrate with an email service like
    // SendGrid, Mailgun, or AWS SES here. This example will just log the
    // data to the console and simulate a successful response.
    
    const mailOptions = {
        from: input.email,
        to: 'nuoto.ai@gmail.com',
        subject: `New Contact Form Submission from ${input.name}`,
        text: input.message,
    };
    
    console.log('Simulating sending email with options:', mailOptions);

    // Replace the following lines with your actual email sending logic.
    // For example, using a library like 'nodemailer':
    //
    // import nodemailer from 'nodemailer';
    // const transporter = nodemailer.createTransport({ ... });
    // await transporter.sendMail(mailOptions);

    return { success: true };
  }
);
