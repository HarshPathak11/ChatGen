// pages/api/generate.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { generateCode } from '@/lib/aiClient';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method Not Allowed' });
  }
  const { prompt } = req.body;
  if (!prompt) {
    return res.status(400).json({ error: 'Prompt is required' });
  }
  try {
    const result = await generateCode(prompt);
    const combinedCode = `<style>${result.css}</style>\n${result.html}`;
    console.log(combinedCode)
    return res.status(200).json({ code: combinedCode });
  } catch (error) {
    console.error('Error generating code:', error);
    return res.status(500).json({ error: 'Error generating code' });
  }
}
