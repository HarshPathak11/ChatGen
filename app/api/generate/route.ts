import { NextResponse } from "next/server";
import { generateCode } from "@/lib/aiClient";

export async function POST(request: Request) {
  try {
    const { prompt } = await request.json();
    if (!prompt) {
      return NextResponse.json({ error: "Prompt is required" }, { status: 400 });
    }

    const result = await generateCode(prompt);
    const combinedCode = `<style>${result.css}</style>\n${result.html}`;
    return NextResponse.json({ code: combinedCode });
  } catch (error) {
    console.error("Error generating code:", error);
    return NextResponse.json({ error: "Error generating code" }, { status: 500 });
  }
}
