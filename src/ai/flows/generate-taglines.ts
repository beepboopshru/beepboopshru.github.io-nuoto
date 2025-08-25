'use server';

/**
 * @fileOverview This file defines a Genkit flow for generating taglines for the hero banner of the Nuoto digital agency website.
 *
 * - generateTaglines - A function that generates taglines for the hero banner.
 * - GenerateTaglinesInput - The input type for the generateTaglines function.
 * - GenerateTaglinesOutput - The return type for the generateTaglines function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateTaglinesInputSchema = z.object({
  agencyName: z.string().describe('The name of the agency.'),
  keywords: z.string().describe('Keywords related to the agency and its services, separated by commas.'),
  numberOfTaglines: z.number().default(3).describe('The number of taglines to generate.'),
});
export type GenerateTaglinesInput = z.infer<typeof GenerateTaglinesInputSchema>;

const GenerateTaglinesOutputSchema = z.object({
  taglines: z.array(z.string()).describe('An array of generated taglines.'),
});
export type GenerateTaglinesOutput = z.infer<typeof GenerateTaglinesOutputSchema>;

export async function generateTaglines(input: GenerateTaglinesInput): Promise<GenerateTaglinesOutput> {
  return generateTaglinesFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateTaglinesPrompt',
  input: {schema: GenerateTaglinesInputSchema},
  output: {schema: GenerateTaglinesOutputSchema},
  prompt: `You are a marketing expert specializing in creating catchy and effective taglines.

  Generate {{numberOfTaglines}} taglines for the digital agency {{agencyName}}.
  The taglines should be concise, memorable, and relevant to the agency's services.
  Do not include the agency name in the taglines themselves.
  The agency specializes in AI Solutions, Web Development, and Creative Services.
  In addition, the taglines should be related to the following keywords: {{keywords}}.
  
  Return the taglines as a JSON object with a key "taglines" containing an array of strings. For example:
  {
    "taglines": [
      "Tagline 1",
      "Tagline 2",
      "Tagline 3"
    ]
  }

  Make the taglines cutting-edge, futuristic, and trustworthy. Use modern sans-serif, geometric, and clean typography.
  The primary color is vibrant aqua (#7FFFD4), the background color is deep navy (#191970), and the accent color is neon blue (#19FFFF).
  The layout is spacious and grid-based with smooth transitions and subtle animations.
  `,
});

const generateTaglinesFlow = ai.defineFlow(
  {
    name: 'generateTaglinesFlow',
    inputSchema: GenerateTaglinesInputSchema,
    outputSchema: GenerateTaglinesOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    if (!output || !output.taglines || output.taglines.length === 0) {
      // Fallback taglines
      return {
        taglines: [
          "Engineering Tomorrow's Web.",
          "Where Ideas Meet Intelligence.",
          "Creative Code, Intelligent Design.",
        ],
      };
    }
    return {taglines: output.taglines};
  }
);
