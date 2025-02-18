import { HfInference } from "@huggingface/inference";

const client = new HfInference(process.env.HUGGINGFACE_API_TOKEN);


export async function generateCode(prompt: string): Promise<{ html: string; css: string }> {
  try {
    console.log(client)
    const chatCompletion = await client.chatCompletion({
      model: "mistralai/Mistral-7B-Instruct-v0.3",
      messages: [
        {
          role: "system",
          content: `
You are a world-class web development expert renowned for crafting visually stunning, accessible, and responsive landing pages. 
Your task is to generate a complete, self-contained HTML document with inline CSS that is elegant, modern, and highly polished. 
Ensure that the HTML is semantic and well-structured, and that the inline CSS is beautifully written with attention to detail (e.g. color palettes, typography, spacing) and responsive design principles.
Do not include any external resources or JavaScript—only return HTML with inline CSS.
          `.trim(),
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      provider: "together",
      max_tokens: 1200,
    });

    const responseText = chatCompletion.choices[0]?.message?.content || "";

    // Attempt to extract the <html> code and inline CSS (if provided)
    const htmlMatch = responseText.match(/<html[\s\S]*<\/html>/i);
    const cssMatch = responseText.match(/<style[\s\S]*<\/style>/i);

    return {
      html: htmlMatch ? htmlMatch[0] : responseText,
      css: cssMatch ? cssMatch[0] : "",
    };
  } catch (error) {
    console.error("Error generating code:", error);
    return { html: "<!-- Error occurred -->", css: "/* Error occurred */" };
  }
}
